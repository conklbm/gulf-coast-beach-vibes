import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

export default function ShellIslandPanamaCityBeachGuideContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        Shell Island is the seven-mile undeveloped barrier island across the pass from{' '}
        <Link href="/destinations/panama-city-beach">Panama City Beach</Link> — no roads, no
        buildings, no vendors, no lifeguards. Just sand, dunes, and clear water, reachable only by
        boat. It is the best half-day in PCB and the one that takes the most planning.
      </p>
      <p>
        The planning is mostly about two things: which boat you take, and what you carry onto an
        island that sells nothing.
      </p>

      <h2>What Shell Island Is</h2>
      <p>
        A protected barrier island between St. Andrew Bay and the Gulf, largely within St. Andrews
        State Park. The name is earned — shelling here is better than anywhere on the developed
        beaches, because nobody has picked it over. Dolphins are common in the pass, and the water on
        the bay side is calm and shallow enough for small children.
      </p>
      <p>
        What it does not have is any infrastructure at all. No restrooms beyond limited facilities
        near the drop points, no shade, no food, no water, no cell reliability in places. That is the
        appeal and the constraint in the same sentence.
      </p>

      <h2>How to Get There</h2>
      <p>
        Two main options, and they are not the same trip.
      </p>

      <h3>The Shell Island Shuttle</h3>
      <p>
        Runs from Adventure at Sea on N Lagoon Drive. Roughly <strong>$24.95 adult, $17.95
        child</strong>. Departs every 30 minutes from 9 to 5 daily in summer, hourly in winter.
      </p>
      <p>
        It drops at the <strong>far western edge</strong> of the island, which is the closest point to
        PCB and therefore the busiest. Fine if you want the shortest crossing and do not mind company.
      </p>

      <h3>The St. Andrews State Park Ferry</h3>
      <p>
        Leaves from inside St. Andrews State Park, priced from around <strong>$25.63 per
        person</strong>. In summer it runs 9 a.m. to 3 p.m., hourly — leaving the park on the hour and
        the island on the half hour, weather permitting.
      </p>
      <p>
        It drops roughly <strong>2.2 miles further along the island</strong> at the state park docks,
        which puts more distance between you and the crowd. Note you also pay the state park entry fee
        on top.
      </p>

      <TipCallout title="The Ferry Drop Point Is the Better One" variant="tip">
        Same island, same price bracket, very different day. The shuttle lands you at the busy western
        tip; the park ferry lands you over two miles in. If solitude is why you are going to an
        undeveloped island, take the ferry — and then walk further still, because almost nobody does.
      </TipCallout>

      <h3>Your own boat</h3>
      <p>
        A pontoon rental gets you anywhere along the island and lets you leave when you want. More
        expensive and more work, but it is the version with real freedom — and the same boater-card
        rules apply as elsewhere in Florida for anyone born after January 1, 1988.
      </p>

      <div className="not-prose my-6">
        <AffiliateLink href="viator-gulf-coast" label="Book Shell Island Trips & PCB Tours" provider="generic" />
      </div>

      <h2>What to Bring</h2>
      <p>
        Assume you are carrying everything you will need for the whole stay, because you are.
      </p>
      <ul>
        <li><strong>Water.</strong> More than feels reasonable. There is none on the island.</li>
        <li><strong>Shade.</strong> An umbrella or pop-up — there are no trees where you will be.</li>
        <li><strong>Reef-safe sunscreen</strong>, reapplied. Reflective sand and water.</li>
        <li><strong>Water shoes.</strong> Shells are the attraction and they are sharp.</li>
        <li><strong>Food</strong>, in a cooler you are willing to carry from the boat.</li>
        <li><strong>A dry bag</strong> for phones and keys.</li>
        <li><strong>A bag for shells</strong> — and check current rules on live shells, which you leave.</li>
        <li><strong>Trash bag.</strong> Everything you bring comes back with you.</li>
      </ul>
      <p>
        Our <Link href="/blog/gulf-coast-beach-packing-list">Gulf Coast packing list</Link> covers the
        rest of the kit.
      </p>

      <h2>Timing and Weather</h2>
      <p>
        The boats are weather-dependent and they will cancel. Choppy conditions in the pass stop
        service, and summer thunderstorms build fast in the afternoon.
      </p>
      <ul>
        <li><strong>Go on the first departure.</strong> Cooler, calmer water, better shelling before anyone else has walked it.</li>
        <li><strong>Watch the last return time.</strong> This is the one that matters — missing the final boat off an island with no facilities is a real problem, not an inconvenience.</li>
        <li><strong>Shoulder season is better.</strong> May and October give you warm water, fewer people, and lower cancellation risk than midsummer afternoons.</li>
      </ul>
      <p>
        Our <Link href="/blog/best-time-to-visit-panama-city-beach">PCB month-by-month guide</Link>{' '}
        covers the seasonal picture.
      </p>

      <h2>With Kids</h2>
      <p>
        The bay side is shallow, calm, and excellent for young children, and the boat ride is half the
        fun. The constraints are heat and shade — with small kids, take the first boat, bring a
        pop-up, and plan on a half day rather than a full one. There is nowhere to retreat to when
        someone has had enough.
      </p>

      <h2>Back on Land</h2>
      <p>
        St. Andrews State Park itself is worth the rest of the day — it has the facilities Shell
        Island does not, plus its own good beaches and jetties. Our{' '}
        <Link href="/blog/best-things-to-do-panama-city-beach">things to do in Panama City
        Beach</Link> guide covers what else is nearby, and{' '}
        <Link href="/blog/where-to-stay-panama-city-beach">where to stay in PCB</Link> covers the
        bases closest to the boats.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Shell Island is the best thing to do in Panama City Beach and the least forgiving of poor
        planning. Take the state park ferry rather than the shuttle, go on the first boat, walk
        further than everyone else, and carry water, shade, and shoes. Know your last return time
        before you get off the boat. Do that and you get an empty seven-mile island in the middle of
        one of the busiest beach towns on the Gulf.
      </p>

      <h2>Where to Stay in Panama City Beach</h2>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="vrbo-panama-city-beach" label="Browse PCB Rentals" provider="vrbo" />
        <AffiliateLink href="booking-panama-city-beach" label="Find PCB Hotels" provider="booking" />
      </div>
    </>
  )
}
