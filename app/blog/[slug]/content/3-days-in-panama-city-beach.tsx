import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

export default function ThreeDaysInPanamaCityBeachContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        Panama City Beach is big enough to overwhelm you if you show up without a plan. The beach
        itself is easy: white sand, clear Gulf water, and miles of shoreline. The harder part is
        deciding where to spend your time when you only have three days.
      </p>
      <p>
        For a long weekend, the trick is to group your days by area. Do the central beach and Pier Park
        side together, give St. Andrews State Park and Shell Island their own day, and save your third
        day for the trip you actually want. This itinerary keeps{' '}
        <Link href="/destinations/panama-city-beach">Panama City Beach</Link> realistic: the beach, the
        park, the boat-day option, and the practical stuff (parking, flags, ferry timing). You&apos;ll
        want a car.
      </p>

      <h2>Day 1: Arrive, Hit the Beach, and Keep Dinner Easy</h2>
      <p>
        Your first day should be simple. Check in, get beach supplies, and spend the afternoon close to
        where you&apos;re staying. PCB has dozens of public access points, so you rarely need to drive
        far. Good first-day options include Russell-Fields Pier near Pier Park, M.B. Miller County Pier
        in the middle of PCB, or Rick Seltzer Park. City paid parking is by the hour, day, and week,
        with overnight only in specific lots.
      </p>

      <TipCallout title="Pick the Closest Beach First" variant="tip">
        For your first beach day, pick the closest good access point instead of chasing the
        &ldquo;best&rdquo; beach. The best first-day beach is the one that lets you get on the sand and
        stop dealing with arrival-day logistics.
      </TipCallout>

      <p>
        For your first night, go classic PCB and stay near the beach: Schooners (right on the sand,
        fires a sunset cannon nightly) if you&apos;re on the east/St. Andrews side, Pineapple Willy&apos;s
        (beachfront, no reservations) centrally, or Runaway Island near the Pier Park side.
      </p>

      <h2>Day 2: St. Andrews State Park and Shell Island</h2>
      <p>
        Day two is your St. Andrews and Shell Island day, the part of PCB that feels least like the
        strip. St. Andrews State Park sits between the Gulf and St. Andrews Bay, giving you surf on one
        side and calmer lagoon water on the other. It&apos;s open 8 a.m. until sundown with a small
        per-car fee. Spend the morning swimming, walking, or snorkeling near the jetties when conditions
        are safe, and bring more than you think you need.
      </p>
      <p>
        Shell Island is a seven-mile undeveloped barrier island and one of the best reasons to build a
        day around St. Andrews. The key word is undeveloped: no concessions, restrooms, or shade. The
        official Shell Island Ferry runs Tuesday through Sunday with daytime departures from the park.
        Treat it as a half-day plan, bring your own food, water, and sun protection, and pack out all
        trash. If you want something easier, book a dolphin cruise or eco-snorkel tour from the same
        area.
      </p>
      <div className="not-prose my-6">
        <AffiliateLink href="viator-gulf-coast" label="Book a Shell Island or Dolphin Tour" provider="generic" />
      </div>

      <TipCallout title="Do the Water Day Early" variant="tip">
        Do St. Andrews and Shell Island early in the trip, not on your final morning. Weather can change
        ferry schedules and water conditions, so give yourself room to adjust.
      </TipCallout>

      <p>
        For dinner, stay in the Grand Lagoon area to avoid crossing town at rush hour. Capt.
        Anderson&apos;s is the classic Grand Lagoon seafood dinner (closed Sunday), or Schooners if you
        skipped it on night one.
      </p>

      <h2>Day 3: Pick Your PCB Lane</h2>
      <p>
        Your third day should match your group; trying to do all of it makes the day worse. Choose one:
      </p>
      <ul>
        <li><strong>Conservation Park</strong> — 2,900+ acres of trails and boardwalks for a quieter morning</li>
        <li><strong>Camp Helen State Park</strong> — a west-end coastal dune lake stop near the 30A side</li>
        <li><strong>Shipwreck Island Waterpark</strong> — the family option when kids need a break from sand (seasonal)</li>
        <li><strong>WonderWorks</strong> — the indoor backup for rain or too much sun on Front Beach Road</li>
        <li><strong>One last beach morning and Pier Park</strong> — the easiest low-effort final day</li>
      </ul>

      <h2>Where to Eat During 3 Days in Panama City Beach</h2>
      <p>
        For three days you only need a few reliable choices: one beachfront meal, one Grand Lagoon
        seafood dinner, and one flexible meal near where you&apos;re staying. Schooners for the sunset
        cannon and classic beach-bar feel, Capt. Anderson&apos;s for a Grand Lagoon seafood dinner
        (closed Sundays), Pineapple Willy&apos;s for a central beachfront meal (no reservations),
        Runaway Island near Pier Park, or Pier Park restaurants for convenience. Eat earlier than you
        think you need to in summer.
      </p>

      <h2>Beach Safety and Local Rules to Know</h2>
      <p>
        The Gulf is not a swimming pool, so check the flags every day. Double red means the water is
        closed, red is high hazard, yellow is medium, and purple means dangerous marine life. Text
        PCBFLAGS to 888777 for alerts. PCB has Leave No Trace rules (gear left overnight can be
        removed), pets are only allowed at Dog Beach west of Russell-Fields Pier, and spring break
        brings special March rules including no alcohol on the sand.
      </p>

      <h2>Best 3-Day Panama City Beach Itinerary at a Glance</h2>
      <ul>
        <li><strong>Day 1:</strong> Arrive, beach near your condo or a pier, dinner at Schooners or Pineapple Willy&apos;s</li>
        <li><strong>Day 2:</strong> St. Andrews State Park, Shell Island ferry or a dolphin tour, Grand Lagoon dinner</li>
        <li><strong>Day 3:</strong> Conservation Park, Shipwreck Island, WonderWorks, or Pier Park and one last beach session</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Three days in Panama City Beach is enough for a strong first trip if you keep the itinerary
        focused. Build the trip around St. Andrews, one Shell Island or dolphin outing, one Pier Park
        evening, and as much white-sand time as the weather allows. Pick your zones, check the flags,
        and book the water activities that matter.
      </p>

      <h2>Where to Stay in Panama City Beach</h2>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="vrbo-panama-city-beach" label="Browse Panama City Beach Rentals" provider="vrbo" />
        <AffiliateLink href="booking-panama-city-beach" label="Find Panama City Beach Hotels" provider="booking" />
      </div>
    </>
  )
}
