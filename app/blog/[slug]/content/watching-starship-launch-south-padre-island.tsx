import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

export default function WatchingStarshipLaunchSouthPadreIslandContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        South Padre Island sits about five miles across the water from Starbase, the SpaceX site at
        Boca Chica where Starship launches. That makes the island the most popular public place to
        watch one. Here is how to plan the trip: where people watch, how closures and alerts work,
        and how to find out when the next launch actually is.
      </p>
      <p>
        A note on who wrote this: we are Alabama locals, and this site normally covers the Gulf from{' '}
        <Link href="/destinations/dauphin-island">Dauphin Island</Link> to{' '}
        <Link href="/destinations/panama-city-beach">Panama City Beach</Link>. We have not watched a
        launch from South Padre ourselves. This guide pulls together the official information from
        the City of Starbase, Cameron County, the South Padre Island visitors bureau, and SpaceX, and
        links to each so you can check the current details before you go.
      </p>

      <TipCallout title="Launch Dates Move" variant="info">
        Starship launch dates often slip, sometimes by days. At the time of writing there is no
        officially announced date for the next flight. Check the official sources below the week you
        travel, and plan a few flexible days rather than a single night.
      </TipCallout>

      <h2>Where to Watch on South Padre Island</h2>

      <h3>Isla Blanca Park</h3>
      <p>
        <a href="https://www.cameroncountytx.gov/parks-coastal-parks/parks-isla-blanca/" {...ext}>
          Isla Blanca Park
        </a>{' '}
        is a Cameron County park at the southern tip of the island, at 33174 State Park Rd. 100. It
        looks south across Brazos Santiago Pass toward Boca Chica, and{' '}
        <a href="https://visitsouthpadreisland.com/spacex/" {...ext}>
          Visit South Padre Island
        </a>
        , the island&apos;s official visitor site, names it as a popular viewing spot. The park has
        a beach, pavilions, boardwalks, and jetties. It charges an entry fee, so check the county
        page for current rates. Cameron County has posted modified park hours for SpaceX flight
        activity before (most recently a notice dated Sept. 25, 2026), so check the{' '}
        <a href="https://www.cameroncountytx.gov/parks-home/" {...ext}>
          Cameron County Parks page
        </a>{' '}
        for notices close to launch day.
      </p>

      <h3>The Beachfront and Balconies</h3>
      <p>
        The visitors bureau also points out that many island hotels and vacation rentals have views
        from their balconies or beachfront. If you want to watch without fighting for a spot at the
        park, a south-facing room toward the south end of the island is the thing to ask about when
        you book. Confirm the view with the property; not every room faces the right way.
      </p>

      <h3>Other Spots People Use</h3>
      <p>
        Launch-tracking sites also list spots off the island, such as along Highway 48 near Port
        Isabel. These are not official viewing areas, so check current access and parking rules
        before you go, and never stop on a roadway.
      </p>

      <h2>Beach and Road Closures</h2>
      <p>
        Boca Chica Beach and State Highway 4 out to the launch site close for launches and tests.
        Closures are now handled by the{' '}
        <a href="https://starbase.texas.gov/beach-road-access" {...ext}>
          City of Starbase
        </a>
        , which posts the current beach status, road delays, and each executed Mayor&apos;s order
        on its Beach and Road Access page. During closures, the city points visitors to other South
        Padre Island beaches at Cameron County Beach Access No. 3, No. 4, No. 4 (West), and No. 5
        (West).
      </p>

      <TipCallout title="Get Closure Alerts by Text" variant="tip">
        The City of Starbase sends beach access updates by text: text BEACH to 1-866-513-3475.
      </TipCallout>

      <h2>Timing, Crowds, and What to Bring</h2>
      <ul>
        <li>
          <strong>Plan several days.</strong> The visitors bureau suggests a 3–4 day visit, since
          weather and technical holds often delay launches.
        </li>
        <li>
          <strong>Arrive early.</strong> Launch days bring heavy traffic onto the island and into
          the park, and leaving afterward can take a while.
        </li>
        <li>
          <strong>Bring the basics:</strong> chairs, water, sun protection, snacks, a charged phone
          for live updates, and binoculars or a camera with a zoom lens. The pad is miles away.
        </li>
        <li>
          <strong>Protect young ears.</strong> Starship is loud even at a distance, so ear
          protection is a good idea for kids.
        </li>
        <li>
          <strong>Watch the official stream too.</strong> SpaceX streams launches on its website, so
          you can follow the countdown while you wait.
        </li>
      </ul>

      <h2>How to Find the Next Launch</h2>
      <p>
        Start with{' '}
        <a href="https://www.spacex.com/vehicles/starship/" {...ext}>
          SpaceX&apos;s Starship page
        </a>{' '}
        and its{' '}
        <a href="https://www.spacex.com/launches/" {...ext}>
          launches page
        </a>
        , which carry official mission updates. Then check the City of Starbase closure page: posted
        Mayor&apos;s orders are a good sign a launch or test is coming. Trackers such as{' '}
        <a href="https://nextspaceflight.com/" {...ext}>
          Next Spaceflight
        </a>{' '}
        pull in schedule data, including estimated dates, but treat any date there as tentative
        until SpaceX confirms it.
      </p>

      <h2>Launch Resources</h2>
      <p>A one-stop list. Every link opens in a new tab.</p>
      <ul>
        <li>
          <a href="https://www.spacex.com/vehicles/starship/" {...ext}>SpaceX Starship</a> — the
          official source for Starship missions, updates, and webcasts.
        </li>
        <li>
          <a href="https://starbase.texas.gov/beach-road-access" {...ext}>
            City of Starbase Beach and Road Access
          </a>{' '}
          — official beach status, road delays, and Mayor&apos;s orders. Text BEACH to
          1-866-513-3475 for alerts.
        </li>
        <li>
          <a href="https://nextspaceflight.com/" {...ext}>Next Spaceflight</a> — a launch tracker
          with upcoming dates, windows, and status for every provider.
        </li>
        <li>
          <a href="https://www.spacelaunchschedule.com/" {...ext}>Space Launch Schedule</a> — a
          launch calendar with live feeds and viewing guides, including Boca Chica.
        </li>
        <li>
          <a href="https://www.rocketlaunch.live/" {...ext}>RocketLaunch.live</a> — a simple
          upcoming-launch list with countdowns.
        </li>
        <li>
          <a href="https://www.starbaseevents.com/" {...ext}>Starbase Events</a> — an independent
          site tracking the next Starship launch, closures, and South Padre events.
        </li>
        <li>
          <a href="https://visit-starbase.com/" {...ext}>Visit Starbase</a> — the &ldquo;Starship
          Launch Companion&rdquo; app with closures, a viewing map, and places to stay.
        </li>
        <li>
          <a href="https://visitsouthpadreisland.com/spacex/" {...ext}>
            Visit South Padre Island: SpaceX
          </a>{' '}
          — the island&apos;s official visitor page for launch viewing, text updates, and webcams.
        </li>
        <li>
          <a href="https://www.cameroncountytx.gov/parks-home/" {...ext}>Cameron County Parks</a>{' '}
          — notices for Isla Blanca Park, including hours changes for SpaceX activity.
        </li>
      </ul>

      <h2>Where to Stay on South Padre Island</h2>
      <p>
        Book flexible or refundable dates if you can, since a slip of a few days is common. Ask about
        south-facing rooms if you want to watch from your balcony.
      </p>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="booking-south-padre-island" label="Find South Padre Island Hotels" provider="booking" />
        <AffiliateLink href="vrbo-south-padre-island" label="Browse South Padre Island Rentals" provider="vrbo" />
      </div>

      <h2>FAQ</h2>
      <h3>Can you see a Starship launch from South Padre Island?</h3>
      <p>
        Yes. The island is about five miles from the launch site across the water, and Isla Blanca
        Park at the south end is the best-known public spot.
      </p>
      <h3>Can you watch from Boca Chica Beach?</h3>
      <p>
        No. Boca Chica Beach and Highway 4 close for launches. Check the City of Starbase page for
        the current status.
      </p>
      <h3>When is the next Starship launch?</h3>
      <p>
        There is no officially announced date at the time of writing. Watch SpaceX&apos;s Starship
        page and the Starbase closure orders, and treat tracker dates as estimates.
      </p>
      <h3>How do I get closure alerts?</h3>
      <p>Text BEACH to 1-866-513-3475 for City of Starbase beach access updates.</p>
      <h3>How many days should I plan?</h3>
      <p>
        The visitors bureau suggests 3–4 days to allow for delays.
      </p>

      <p>
        Planning a Gulf trip closer to home? Our{' '}
        <Link href="/blog/gulf-coast-road-trip-itinerary">Gulf Coast road trip itinerary</Link>{' '}
        covers Alabama and the Florida Panhandle.
      </p>
    </>
  )
}
