import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

export default function GulfCoastRoadTripItineraryContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        The stretch of Gulf Coast from Dauphin Island, Alabama to Panama City Beach, Florida
        covers about 200 miles of some of the best beach driving in the country. White quartz
        sand, emerald water, barrier islands, Civil War forts, the most developed resort towns
        and the most isolated beaches — it&apos;s all here within a single road trip. Here&apos;s how
        to do it right.
      </p>

      <h2>The Route at a Glance</h2>
      <p>
        The full corridor runs roughly west to east: Dauphin Island → Fort Morgan (ferry) →
        Gulf Shores → Orange Beach → Pensacola Beach → Navarre Beach → Fort Walton Beach →
        Destin → 30A → Panama City Beach. Driving the whole thing non-stop is about 3.5
        hours — but the point is to stop, not to drive.
      </p>
      <ul>
        <li><strong>Dauphin Island to Fort Morgan Ferry:</strong> ~40 min crossing (saves 2 hours of driving around Mobile Bay)</li>
        <li><strong>Fort Morgan to Gulf Shores:</strong> 45 minutes on Highway 180</li>
        <li><strong>Gulf Shores to Pensacola Beach:</strong> 1 hour on Highway 98</li>
        <li><strong>Pensacola Beach to Fort Walton Beach:</strong> 50 minutes via Highway 98</li>
        <li><strong>Fort Walton Beach to Destin to 30A:</strong> 20–40 minutes</li>
        <li><strong>30A to Panama City Beach:</strong> 30–45 minutes</li>
      </ul>

      <TipCallout title="The Ferry Is the Move" variant="tip">
        If you&apos;re including Dauphin Island, take the Mobile Bay Ferry from Fort Gaines
        (Dauphin Island) to Fort Morgan rather than driving back through Mobile. The 40-minute
        crossing cuts 2 hours of driving out of the itinerary and gives you a spectacular
        bay crossing view of both forts. Check ferry schedules and make reservations in advance
        in peak season.
      </TipCallout>

      <h2>Suggested Itineraries</h2>

      <h3>5-Day Full Corridor Trip</h3>
      <p>
        This covers the whole route with enough time to actually experience each stop.
      </p>
      <ul>
        <li>
          <strong>Day 1: Dauphin Island</strong> — arrive, Fort Gaines tour, Audubon Bird Sanctuary
          walk or shelling on the west end beaches. Overnight on the island.
        </li>
        <li>
          <strong>Day 2: Ferry to Fort Morgan → Gulf Shores / Orange Beach</strong> — morning
          ferry crossing, brief Fort Morgan stop, arrive Gulf Shores by noon. Afternoon at the
          beach or Gulf State Park. Seafood dinner in Gulf Shores. Overnight Gulf Shores or
          Orange Beach.
        </li>
        <li>
          <strong>Day 3: Pensacola Beach / Navarre Beach</strong> — drive east on Highway 98
          through Perdido Key into Pensacola Beach. Morning at Fort Pickens (Gulf Islands
          National Seashore) or the Naval Aviation Museum (free, exceptional). Afternoon on
          Pensacola Beach. Optional: continue to Navarre Beach for sunset at the pier.
          Overnight Pensacola Beach or Navarre.
        </li>
        <li>
          <strong>Day 4: Fort Walton Beach → Destin</strong> — morning on Okaloosa Island
          (Fort Walton Beach). Afternoon at Henderson Beach State Park in Destin — the best
          single beach on the Panhandle. Evening at Harborwalk Village (dinner, sunset,
          live music). Overnight Destin or Fort Walton Beach.
        </li>
        <li>
          <strong>Day 5: 30A → Panama City Beach</strong> — morning at Grayton Beach State
          Park. Drive the 30A corridor stopping at Seaside for lunch (Airstream Row). Continue
          east to Rosemary Beach for a walk. Arrive Panama City Beach by late afternoon.
          Shell Island boat trip if timing allows. Overnight PCB or head home.
        </li>
      </ul>

      <h3>3-Day Focused Trip (Eastern Corridor)</h3>
      <p>
        If you only have a long weekend and want the best of the Florida Panhandle:
      </p>
      <ul>
        <li>
          <strong>Day 1: Pensacola Beach</strong> — arrive, Fort Pickens (if interested in
          history/nature), beach afternoon, dinner on the island. Overnight Pensacola Beach.
        </li>
        <li>
          <strong>Day 2: Destin</strong> — morning at Henderson Beach State Park. Afternoon
          water activity (dolphin cruise, snorkeling at Jetty East, parasailing). Evening at
          Harborwalk Village. Overnight Destin or Fort Walton Beach.
        </li>
        <li>
          <strong>Day 3: 30A</strong> — full day on 30A: Grayton Beach State Park in the
          morning, Seaside for lunch, dune lake kayaking in the afternoon. Head home or
          continue to PCB.
        </li>
      </ul>

      <h3>3-Day Western Corridor Trip</h3>
      <p>
        The Alabama side for travelers coming from the west or who want the most affordable option:
      </p>
      <ul>
        <li>
          <strong>Day 1: Dauphin Island</strong> — arrive via bridge from Mobile, Fort Gaines,
          Bird Sanctuary, west end beach. Overnight on island.
        </li>
        <li>
          <strong>Day 2: Gulf Shores / Orange Beach</strong> — ferry to Fort Morgan, Gulf
          Shores beach day, Gulf State Park trails or pier. Seafood dinner. Overnight Gulf
          Shores or Orange Beach.
        </li>
        <li>
          <strong>Day 3: Perdido Key / Pensacola Beach</strong> — cross into Florida, Gulf
          Islands National Seashore, Fort Pickens or the Naval Aviation Museum. Head home
          from Pensacola.
        </li>
      </ul>

      <h2>The Highlights by Stop</h2>

      <h3>Dauphin Island</h3>
      <p>
        The quiet western anchor. Fort Gaines (Civil War history), the Audubon Bird Sanctuary
        (spring migration is spectacular), shelling on the west end, and some of the most
        uncrowded beaches in the corridor. Read our full{' '}
        <Link href="/blog/dauphin-island-guide">Dauphin Island guide</Link>.
      </p>

      <h3>Gulf Shores &amp; Orange Beach</h3>
      <p>
        The Alabama beach hub — white sand, warm water, Gulf State Park (28 miles of trails,
        the Lodge, a remarkable pier), and the best concentration of seafood restaurants in
        Alabama. More affordable than the Florida Panhandle for comparable beach quality.
        Read our <Link href="/blog/best-things-to-do-gulf-shores">Gulf Shores guide</Link> and{' '}
        <Link href="/blog/gulf-shores-vs-orange-beach">Gulf Shores vs. Orange Beach</Link>.
      </p>

      <h3>Pensacola Beach</h3>
      <p>
        Gateway to Gulf Islands National Seashore — the largest protected Gulf Coast beach
        system in the US. Fort Pickens is worth 2–3 hours. The National Naval Aviation Museum
        in Pensacola (free, genuinely one of the best aviation museums in the world) is worth
        a half day. The beach itself is classic Panhandle — white sand, emerald water, well
        developed with a solid dining scene. Read our comparison:{' '}
        <Link href="/blog/destin-vs-pensacola-beach">Destin vs. Pensacola Beach</Link>.
      </p>

      <h3>Navarre Beach</h3>
      <p>
        Florida&apos;s best kept secret. One of the longest fishing piers in Florida, a marine
        sanctuary under the pier for snorkeling, and Gulf Islands National Seashore continuing
        east from Pensacola Beach. The least crowded beach in the corridor.
        Read our full <Link href="/blog/navarre-beach-guide">Navarre Beach guide</Link>.
      </p>

      <h3>Fort Walton Beach &amp; Destin</h3>
      <p>
        Same barrier island, different price point. Fort Walton Beach is the value play;
        Destin is the full resort experience. Henderson Beach State Park in Destin is the
        best single-beach day on the Panhandle. Harborwalk Village is the best evening
        destination. Read: <Link href="/blog/fort-walton-beach-vs-destin">Fort Walton Beach vs. Destin</Link>,{' '}
        <Link href="/blog/3-days-in-destin">3 Days in Destin</Link>,{' '}
        <Link href="/blog/is-destin-worth-it">Is Destin Worth It?</Link>
      </p>

      <h3>30A</h3>
      <p>
        The most architecturally distinctive stretch of coast in the corridor. Seaside,
        Rosemary Beach, Alys Beach, Grayton Beach State Park, and the dune lake system
        that doesn&apos;t exist anywhere else on the Gulf. More upscale and slower-paced than
        Destin or PCB. Read our full <Link href="/blog/30a-florida-guide">30A guide</Link>.
      </p>

      <h3>Panama City Beach</h3>
      <p>
        The eastern anchor — a major resort destination with its own character. Shell Island
        (accessible by boat, undeveloped barrier island beach) is the PCB highlight. The
        beach is excellent; the Pier Park area has the most commercial development of any
        stop on the route. Read: <Link href="/blog/panama-city-beach-vs-destin">PCB vs. Destin</Link>.
      </p>

      <h2>Practical Planning</h2>

      <h3>Where to Base</h3>
      <p>
        For a full corridor road trip, you generally need 2–3 overnight stops:
      </p>
      <ul>
        <li><strong>Western corridor base:</strong> Gulf Shores or Orange Beach (most affordable, central to Alabama stops)</li>
        <li><strong>Central base:</strong> Pensacola Beach or Fort Walton Beach (gives you easy access to both Navarre and Destin)</li>
        <li><strong>Eastern base:</strong> 30A or Panama City Beach (for the Destin/30A/PCB stretch)</li>
      </ul>

      <h3>Getting Between Stops</h3>
      <p>
        Highway 98 / 30 connects the entire corridor and is the main route between all stops.
        US-98 runs east-west across the Panhandle and is the route you&apos;ll use for most of the
        drive. Keep in mind: in peak summer (especially July 4th week), Highway 98 through
        Destin can be heavily congested on weekend afternoons. Morning beach days and early
        departures help avoid the worst of it.
      </p>

      <h3>Best Season for the Road Trip</h3>
      <ul>
        <li><strong>May (early–mid):</strong> The best window — warm enough to swim, minimal crowds, all beaches and attractions open, prices well below peak</li>
        <li><strong>October:</strong> Second-best window — water still 74–78°F, Destin Fishing Rodeo running, prices down 25–35%. See our <Link href="/blog/gulf-coast-in-october">October guide</Link>.</li>
        <li><strong>Summer:</strong> Peak crowds and prices, but the full beach experience. Book well ahead.</li>
        <li><strong>November–March:</strong> Best prices, but swimming weather is gone for most of the corridor</li>
      </ul>

      <TipCallout title="Budget the Road Trip" variant="info">
        The full corridor spans a wide price range. Gulf Shores and Fort Walton Beach run
        significantly cheaper than Destin and 30A. If budget matters, base in Alabama or
        Fort Walton Beach and day-trip east rather than paying Destin or 30A rental rates
        for your home base. Our <Link href="/blog/gulf-coast-on-a-budget">Gulf Coast budget guide</Link>{' '}
        has the full breakdown.
      </TipCallout>

      <h2>Book Your Stops</h2>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="vrbo-gulf-shores" label="Browse Gulf Shores / Alabama Rentals" provider="vrbo" />
        <AffiliateLink href="vrbo-pensacola-beach" label="Browse Pensacola Beach Rentals" provider="vrbo" />
      </div>
      <div className="not-prose flex flex-col sm:flex-row gap-3 mb-6">
        <AffiliateLink href="vrbo-destin" label="Browse Destin Rentals" provider="vrbo" />
        <AffiliateLink href="vrbo-30a" label="Browse 30A Rentals" provider="vrbo" />
      </div>
      <div className="not-prose flex flex-col sm:flex-row gap-3 mb-6">
        <AffiliateLink href="tripshock-gulf-shores-all" label="Book Activities: Alabama Side" provider="generic" />
        <AffiliateLink href="tripshock-pensacola-navarre" label="Book Activities: Pensacola / Navarre" provider="generic" />
      </div>
    </>
  )
}
