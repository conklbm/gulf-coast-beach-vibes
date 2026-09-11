import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

export default function PerdidoKeyGuideContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        Perdido Key is the barrier island between <Link href="/destinations/pensacola-beach">Pensacola
        Beach</Link> and <Link href="/destinations/orange-beach">Orange Beach</Link>, straddling the
        Florida–Alabama line. Most of it is protected — Gulf Islands National Seashore on one end, a
        Florida state park on the other — which means it has the emptiest good beaches within easy
        reach of two busy resort towns.
      </p>
      <p>
        It works better as a day trip than as a base for most people, and the reason is simple: the
        parts worth going for are the parts with nothing on them.
      </p>

      <h2>Where It Sits</h2>
      <p>
        Roughly 30 minutes west of Pensacola Beach and 20 minutes east of the heart of Orange Beach,
        depending on bridge traffic. The Flora-Bama sits at the state line on the western end, which
        is how a lot of people know the area without realizing they were on Perdido Key.
      </p>
      <p>
        The developed middle is condos and a handful of restaurants. The two ends are protected land.
        Plan around the ends.
      </p>

      <h2>Johnson Beach (Gulf Islands National Seashore)</h2>
      <p>
        The main event. A National Park Service beach on the eastern end, with a road that runs out
        along the key and then simply stops — past that it is walk-in only, and the further you walk
        the more it is just you.
      </p>
      <ul>
        <li><strong>$25 per vehicle</strong>, valid <strong>7 days</strong></li>
        <li><strong>$45 annual pass</strong> for the seashore</li>
        <li>Open <strong>5 a.m. to sunset</strong></li>
      </ul>
      <p>
        The 7-day validity is the thing to notice — the same pass gets you into{' '}
        <Link href="/blog/fort-pickens-day-guide">Fort Pickens</Link> on the other side of Pensacola,
        so if you are doing both, you pay once. America the Beautiful passes are accepted.
      </p>
      <p>
        Facilities are limited: restrooms and parking near the entrance, and essentially nothing once
        you walk. Gulf on one side, sound on the other, both swimmable, with the sound side calmer for
        small children.
      </p>

      <TipCallout title="Walk Past the First Lot" variant="tip">
        Almost everyone stops at the first parking area and sets up within sight of it. Drive to the
        end of the road, then walk ten minutes east. The sand is identical and the crowd disappears.
        This is the single best move on Perdido Key and it costs you nothing but the walk.
      </TipCallout>

      <h2>Perdido Key State Park</h2>
      <p>
        Smaller and simpler than Johnson Beach — a Florida state park on the key with boardwalks over
        the dunes, restrooms, and picnic areas. Open <strong>8 a.m. to sunset, 365 days a year</strong>,
        with a paid entry fee.
      </p>
      <p>
        It is the more convenient option if you want a shorter walk to the sand and basic facilities.
        Johnson Beach is the better option if you want to get properly away from people. Both charge,
        so pick on what you want rather than on price.
      </p>

      <h2>Day Trip From Pensacola Beach or Orange Beach</h2>
      <p>
        <strong>From Pensacola Beach:</strong> back over the Bob Sikes Bridge, west through Gulf
        Breeze and around, roughly 30 to 40 minutes. Bring everything — you will pass the last useful
        shop well before you arrive.
      </p>
      <p>
        <strong>From Orange Beach:</strong> east over Perdido Pass and across the state line, around
        20 minutes. This is the easier of the two, and Orange Beach visitors underuse it badly.
      </p>
      <p>
        A good shape for the day: arrive early at Johnson Beach, walk east, spend the morning there,
        then lunch back in the developed middle or at the Flora-Bama on the way home.
      </p>

      <h2>Should You Stay Here?</h2>
      <p>
        Perdido Key works as a base if you want condo living with genuinely quiet beaches and you do
        not mind driving for dinner and groceries. It is noticeably calmer than either neighbor.
      </p>
      <p>
        It does not work if you want walkable restaurants, nightlife beyond the Flora-Bama, or a lot
        of rainy-day options. For most first trips, base in{' '}
        <Link href="/blog/where-to-stay-orange-beach">Orange Beach</Link> or{' '}
        <Link href="/blog/where-to-stay-pensacola-beach">Pensacola Beach</Link> and come here for the
        day.
      </p>

      <h2>Practical Notes</h2>
      <ul>
        <li><strong>Bring shade.</strong> There is essentially none on the protected stretches.</li>
        <li><strong>Bring water and food.</strong> Nothing is sold at Johnson Beach.</li>
        <li><strong>No lifeguards</strong> on most of the key — check flags and respect them.</li>
        <li><strong>Sea turtle nesting</strong> runs through the summer; keep the beach dark and flat at night.</li>
        <li><strong>Dog rules differ</strong> between the national seashore, the state park, and the county beaches — check before you bring one. Our <Link href="/blog/pet-friendly-gulf-coast-beaches">pet-friendly guide</Link> has the wider picture.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Perdido Key is the best easy escape from either Orange Beach or Pensacola Beach — the same
        water, a fraction of the people, for $25 that also covers a week and Fort Pickens too. Go to
        Johnson Beach, drive to the end of the road, and walk. If you are staying in Orange Beach and
        have not been, that is the gap in your trip.
      </p>

      <h2>Where to Stay Nearby</h2>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="vrbo-orange-beach" label="Browse Orange Beach Rentals" provider="vrbo" />
        <AffiliateLink href="vrbo-pensacola-beach" label="Browse Pensacola Beach Rentals" provider="vrbo" />
      </div>
    </>
  )
}
