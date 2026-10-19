import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const BW = 'https://www.baytownewharf.com/where_to_go.php?type=39'

export default function BaytowneWharfGuideContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        The{' '}
        <a href="https://www.baytownewharf.com/" {...ext}>Village of Baytowne Wharf</a> is the small,
        walkable village inside Sandestin on Choctawhatchee Bay: restaurants, shops, a lagoon,
        nightlife and a steady calendar of free events. It&apos;s free to enter and open to the public
        whether or not you&apos;re staying at the resort. Here&apos;s what&apos;s there, where to eat
        and how to fit it into an evening.
      </p>
      <p>
        This is a researched guide built from Baytowne Wharf&apos;s own directory, FAQ and calendar as
        of October 2026. Merchant hours change by season, so check the official listings before you go.
      </p>

      <h2>Quick Take: Who Baytowne Wharf Is For</h2>
      <p>
        It&apos;s a good fit for families who want an easy evening out (a playground, carousel, arcade
        and ice cream within a few steps), couples looking for bayfront dinner and live music, and
        anyone staying in Sandestin or <Link href="/destinations/miramar-beach">Miramar Beach</Link>.
        It&apos;s not a beach. Baytowne faces the bay, so plan your Gulf time separately.
      </p>

      <h2>Where It Is: Sandestin, Miramar Beach and Destin</h2>
      <p>
        Baytowne Wharf sits inside{' '}
        <a href="https://www.sandestin.com/" {...ext}>Sandestin Golf and Beach Resort</a> (9300 Emerald
        Coast Parkway West, Miramar Beach), which the village describes as about eight miles east of
        Destin. So it isn&apos;t technically in Destin, but it&apos;s part of the same stretch of coast. Our{' '}
        <Link href="/blog/miramar-beach-vs-destin">Miramar Beach vs. Destin</Link> guide explains the
        geography.
      </p>

      <h2>Getting There and Parking</h2>
      <p>
        You don&apos;t need to be a resort guest. According to Baytowne&apos;s FAQ, there&apos;s a public
        parking garage plus several overflow lots, and parking is free to the public. A shuttle runs from
        the overflow lots in summer and during special events, and valet is available first come, first
        served. The village is pet-friendly as long as dogs stay leashed.
      </p>

      <TipCallout title="Go for the Evening" variant="tip">
        Baytowne is at its best from late afternoon into the evening, when the restaurants fill up,
        live music starts and the village lights come on. Pair it with a beach morning rather than
        spending a whole day here.
      </TipCallout>

      <h2>Things to Do at Baytowne Wharf</h2>
      <ul>
        <li>
          <strong>Baytowne Adventure Zone:</strong> a zipline over the lagoon, ropes courses and a bungy
          trampoline, each priced separately.
        </li>
        <li>
          <strong>Baytowne Carousel</strong> and the fenced <strong>Adventure Land Playground</strong>{' '}
          for younger kids.
        </li>
        <li>
          <strong>Blast Arcade &amp; Laser Maze</strong> and <strong>Cloak and Dagger Escape Room</strong>.
        </li>
        <li>
          <strong>Fishing in the lagoon</strong> (catch and release only; bait at the Baytowne Marina).
        </li>
        <li>
          <strong>Shops and galleries</strong>, from jewelry and gifts to photography and art.
        </li>
        <li>
          <strong>Free concerts:</strong> the Wednesday Night Concert Series runs March through October,
          with holiday concerts in December. Bring a blanket or lawn chair, and leave the cooler at home
          (coolers aren&apos;t allowed).
        </li>
      </ul>
      <p>
        Hours and prices for each attraction are on the{' '}
        <a href="https://www.baytownewharf.com/village_activities.php" {...ext}>Village Activities page</a>,
        and events are on the{' '}
        <a href="https://www.baytownewharf.com/what_to_do.php" {...ext}>village calendar</a>.
      </p>

      <h2>Where to Eat at Baytowne Wharf</h2>
      <p>
        Baytowne lists more than a dozen places to eat in its{' '}
        <a href={BW} {...ext}>dining directory</a>. Here&apos;s how they break down, using each
        restaurant&apos;s own description.
      </p>

      <h3>Bayfront Seafood and Dinner</h3>
      <ul>
        <li>
          <strong>Poppy&apos;s Crazy Lobster:</strong> local seafood with Creole and Cajun favorites,
          plus steaks, and a second-floor balcony over the bay for sunset.
        </li>
        <li>
          <a href="https://hammerheadsbarandgrille.com/" {...ext}>Hammerhead&apos;s Bar &amp; Grille</a>:
          dockside fried baskets, steamed seafood and burgers with live music, in a family- and
          pet-friendly setting overlooking the bay.
        </li>
        <li>
          <strong>Slick Lips Seafood &amp; Oyster House:</strong> a family-friendly seafood restaurant and
          oyster bar focused on locally caught fish.
        </li>
        <li>
          <a href="https://thevillagedoor.com/" {...ext}>The Village Door</a>: slow-smoked BBQ and
          seafood with a gluten-friendly menu, live music and views of the marina.
        </li>
      </ul>

      <h3>Casual and Family Meals</h3>
      <ul>
        <li>
          <a href="https://robertositalianpizzeria.com/" {...ext}>Roberto&apos;s Italian Pizzeria</a>:
          pizza, pasta and calzones with indoor and outdoor seating and big-screen TVs.
        </li>
        <li>
          <strong>Dude &amp; Meatballs:</strong> scratch-made Italian with a two-story patio overlooking the
          pond.
        </li>
        <li>
          <strong>Bunkley&apos;s Burgers and Grill:</strong> burgers, chicken, seafood, shakes and boba
          tea, and yes, robot servers.
        </li>
        <li>
          <strong>Cannery Lane Cantina:</strong> Mexican- and Caribbean-inspired tacos, burritos and
          bowls.
        </li>
        <li><strong>Yaki:</strong> hibachi plates and sushi.</li>
      </ul>

      <h3>Breakfast, Coffee and Lighter Bites</h3>
      <ul>
        <li>
          <a href="https://rubybrunch.com/" {...ext}>Ruby Slipper</a>: New Orleans-style brunch, served
          mornings to early afternoon.
        </li>
        <li>
          <strong>Charlie&apos;s Café:</strong> local Charlie&apos;s Donuts, sandwiches and an espresso
          bar.
        </li>
        <li>
          <a href="https://green-panini.com/" {...ext}>Green Panini</a>: paninis, salads, smoothies and
          acai bowls.
        </li>
      </ul>

      <h3>Dessert and Nightlife</h3>
      <p>
        For something sweet, there&apos;s Moo La-La Ice Cream &amp; Desserts, La Cremeria (gelato) and
        Tony Larue&apos;s New Orleans Snoballs. After dark, Rum Runners has dueling pianos, and Fat Tuesday
        serves frozen daiquiris. For more restaurants in the area, see our{' '}
        <Link href="/blog/best-restaurants-destin">best restaurants in Destin</Link> guide.
      </p>

      <h2>Best Time to Go</h2>
      <p>
        Evenings are the main event year-round. In the warm months, the Wednesday concerts (March to
        October) are a good night to plan around. In the fall and holiday season, the village decorates.
        In 2026 its Sparkling Wine &amp; Holiday Lights evening is Saturday, Nov. 21, ending with the
        Nights of Lights show. Baytowne says the village stays open to the public during events unless
        it says otherwise.
      </p>

      <h2>Baytowne Wharf vs. HarborWalk vs. The Wharf</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Baytowne Wharf</th>
              <th>HarborWalk Village</th>
              <th>The Wharf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Where</td>
              <td>Sandestin, Miramar Beach</td>
              <td>Destin Harbor</td>
              <td>Orange Beach, AL</td>
            </tr>
            <tr>
              <td>Water</td>
              <td>Choctawhatchee Bay and a lagoon</td>
              <td>Working harbor and charter docks</td>
              <td>Intracoastal Waterway and marina</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Family evenings, free events</td>
              <td>Boats, sunset, harbor views</td>
              <td>Concerts, Ferris wheel, shopping</td>
            </tr>
            <tr>
              <td>Our guide</td>
              <td>You&apos;re reading it</td>
              <td><Link href="/blog/destin-harborwalk-guide">HarborWalk guide</Link></td>
              <td><Link href="/blog/the-wharf-orange-beach-guide">The Wharf guide</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Where to Stay Near Baytowne Wharf</h2>
      <p>
        Staying in Sandestin puts you within walking or shuttle distance. Miramar Beach rentals are a
        short drive away.
      </p>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="booking-sandestin" label="Find Sandestin Hotels" provider="booking" />
        <AffiliateLink href="vrbo-miramar-beach" label="Browse Miramar Beach Rentals" provider="vrbo" />
      </div>

      <h2>FAQ</h2>
      <h3>Is Baytowne Wharf free?</h3>
      <p>Yes. Baytowne says visiting the village is free and open to the public.</p>
      <h3>Do you have to stay at Sandestin to visit?</h3>
      <p>No. The village is open to the public, and the parking garage is free.</p>
      <h3>Is Baytowne Wharf in Destin?</h3>
      <p>
        Not technically. It&apos;s inside Sandestin in Miramar Beach, about eight miles east of Destin.
      </p>
      <h3>Is Baytowne Wharf dog-friendly?</h3>
      <p>Yes, on a leash, and owners must clean up after their dogs. Waste stations are provided.</p>
      <h3>Are the concerts free?</h3>
      <p>
        Yes. The Wednesday Night Concert Series runs March through October, with holiday concerts in
        December. Coolers aren&apos;t allowed.
      </p>

      <p className="text-sm text-navy/60">
        Hero photo: Baytowne Wharf, by Binion (2007), Wikimedia Commons, CC BY-SA 3.0.
      </p>
    </>
  )
}
