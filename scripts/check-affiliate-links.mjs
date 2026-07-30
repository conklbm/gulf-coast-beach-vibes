#!/usr/bin/env node
/**
 * Checks that every URL in lib/affiliateLinks.ts still resolves.
 *
 *   node scripts/check-affiliate-links.mjs
 *
 * Why this exists: a dead TravelPayouts short link (fishingbooker.tp.st) silently
 * broke the "Book a Fishing Charter" button across 42 published articles. The /go/
 * redirect kept working, so nothing looked wrong from our side — the failure was at
 * the partner's end. Run this after touching the registry and every month or so.
 *
 * Note on false positives: affiliate networks aggressively bot-block. 403 and 429 are
 * reported as WARN, not FAIL, because they usually mean "blocked our request", not
 * "link is dead". Only genuine 404/410/5xx are treated as failures. Verify a WARN by
 * opening it in a real browser before changing anything.
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = readFileSync(join(root, 'lib', 'affiliateLinks.ts'), 'utf8')

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const entries = [...src.matchAll(/^\s*'([a-z0-9-]+)':\s*'(https?:\/\/[^']+)'/gm)].map(
  ([, slug, url]) => ({ slug, url }),
)

if (entries.length === 0) {
  console.error('No affiliate entries found — did the registry format change?')
  process.exit(1)
}

console.log(`Checking ${entries.length} affiliate links...\n`)

const failures = []
const warnings = []

for (const { slug, url } of entries) {
  let status = 0
  let note = ''
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(30_000),
    })
    status = res.status
  } catch (err) {
    note = err.name === 'TimeoutError' ? 'timeout' : err.message
  }

  const dead = status === 404 || status === 410 || status >= 500
  const blocked = status === 403 || status === 429
  const label = dead ? 'FAIL' : blocked ? 'WARN' : note ? 'WARN' : 'ok  '

  if (dead) failures.push({ slug, url, status })
  else if (blocked || note) warnings.push({ slug, url, status, note })

  console.log(`${label} ${String(status || '---').padEnd(4)} ${slug.padEnd(32)} ${url.slice(0, 60)}${note ? '  (' + note + ')' : ''}`)
  // Space requests out — hammering these hosts is what triggers the 429s.
  await new Promise((r) => setTimeout(r, 1200))
}

console.log(`\n${entries.length} checked · ${failures.length} dead · ${warnings.length} inconclusive`)

if (warnings.length) {
  console.log('\nInconclusive (bot-blocked or slow — verify in a browser before changing):')
  for (const w of warnings) console.log(`  ${w.slug} → ${w.url}`)
}

if (failures.length) {
  console.log('\nDead links — these need fixing:')
  for (const f of failures) console.log(`  [${f.status}] ${f.slug} → ${f.url}`)
  process.exit(1)
}

console.log('\nNo dead links.')
