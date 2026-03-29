import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'

export default function PackingListContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        The Gulf Coast has its own packing requirements. Forget what you know from Caribbean or
        California beach trips — the Gulf is different, and getting prepared right makes a huge
        difference in how much you enjoy your time there.
      </p>

      <TipCallout title="Affiliate Disclosure" variant="info">
        Some product links on this page go to Amazon. We may earn a small commission if you
        purchase through them.
      </TipCallout>

      <h2>The Essentials (Seriously, Don&apos;t Skip These)</h2>

      <h3>Sun Protection</h3>
      <p>
        The Gulf Coast sun is no joke. The white quartz sand reflects UV rays back up at you, and
        the water creates additional reflection. You&apos;re getting hit from above <em>and</em>{' '}
        below. Standard SPF 30 isn&apos;t enough for all-day beach days — bring SPF 50+ and
        reapply every 90 minutes without fail.
      </p>
      <ul>
        <li>Reef-safe SPF 50+ sunscreen (minimum 2 bottles for a week)</li>
        <li>SPF lip balm — your lips will burn before you notice</li>
        <li>A wide-brim sun hat (the floppy beach kind, not a baseball cap)</li>
        <li>UV-protective rash guard or swim shirt for all-day beach days</li>
        <li>Polarized sunglasses — the glare off the water is brutal</li>
      </ul>

      <h3>Footwear</h3>
      <p>
        The sand at Pensacola Beach, Destin, and Gulf Shores gets <em>extremely</em> hot in summer.
        We&apos;re talking 130°F sand temperature at 2 PM in July. Flip flops for walking from the
        car to the water are mandatory — you can&apos;t walk barefoot on the beach at midday.
      </p>
      <ul>
        <li>Comfortable flip flops for beach walks</li>
        <li>Water shoes if you plan to wade through rocky areas or jetties</li>
        <li>Regular sneakers for evening activities — it gets nicer at night</li>
      </ul>

      <h2>Beach Day Gear</h2>

      <h3>Shade Setup</h3>
      <p>
        Most Gulf Coast public beaches don&apos;t have natural shade. You need to bring your own or
        rent it. A quality beach umbrella plus a beach tent or shade canopy is the gold standard for
        families.
      </p>
      <ul>
        <li>Heavy-duty beach umbrella (wind will destroy flimsy ones)</li>
        <li>Sand anchor to keep it in place</li>
        <li>Folding beach chairs (the low-rider kind is easier to carry)</li>
        <li>A small pop-up beach tent if you have kids under 2</li>
      </ul>

      <div className="not-prose my-6">
        {/* TODO: Replace with tracked Amazon affiliate link */}
        <AffiliateLink
          href="https://www.amazon.com/s?k=beach+umbrella+sand+anchor"
          label="Shop Beach Umbrellas on Amazon"
          provider="amazon"
        />
      </div>

      <h3>Hydration &amp; Food</h3>
      <p>
        Gulf Coast heat + saltwater + sun = you will get dehydrated faster than you expect. A
        well-insulated cooler full of water is non-negotiable for any beach day over 3 hours.
      </p>
      <ul>
        <li>Large insulated cooler (the kind that keeps ice 2+ days)</li>
        <li>Reusable water bottles for every person in your group</li>
        <li>A small soft cooler for day beach use</li>
        <li>Electrolyte packets or drinks — water alone isn&apos;t always enough</li>
      </ul>

      <h2>For the Water</h2>
      <ul>
        <li>Snorkel mask and fins (the jetties in Destin and Pensacola have great snorkeling)</li>
        <li>Dry bag for your phone and wallet</li>
        <li>Floaties, noodles, or a raft for lounging in the waves</li>
        <li>Mesh bag to carry everything to the water&apos;s edge</li>
        <li>
          Life jacket for children who aren&apos;t strong swimmers (Gulf rip currents are real)
        </li>
      </ul>

      <TipCallout title="About Rip Currents" variant="warning">
        Rip currents are common on Gulf Coast beaches, especially around inlets and piers. Always
        swim near a lifeguard when possible. If caught in a rip current, swim parallel to the shore
        — never fight it straight back. Children should always wear a life jacket in the Gulf.
      </TipCallout>

      <h2>What NOT to Bring</h2>
      <ul>
        <li>
          <strong>Glass bottles</strong> — prohibited on most Gulf Coast beaches
        </li>
        <li>
          <strong>Pets</strong> — most public beaches are no-pet zones from Memorial Day through
          Labor Day
        </li>
        <li>
          <strong>Drones</strong> — prohibited at Gulf Islands National Seashore and most public
          beaches
        </li>
        <li>
          <strong>Disposable everything</strong> — the sea turtles thank you
        </li>
      </ul>

      <h2>The &quot;Nice to Have&quot; List</h2>
      <ul>
        <li>Sand-free beach mat (they&apos;re real, they work)</li>
        <li>Portable Bluetooth speaker</li>
        <li>Outdoor games — bocce, spikeball, cornhole for the beach</li>
        <li>After-sun aloe vera gel — for the inevitable first-day burn</li>
        <li>Baby powder — seriously dries sand right off your skin</li>
        <li>Insect repellent — especially important around sunset near marshy areas</li>
      </ul>

      <h2>Practical Logistics</h2>
      <p>
        Parking at Gulf Coast beaches can be a nightmare in peak summer. Most major beaches have
        paid parking lots that fill up by 10 AM on weekends. Arrive early (before 9 AM for a good
        spot), or use apps like ParkMobile where available. Many vacation rental properties are
        walking distance to beach accesses — factor this into your lodging choice.
      </p>
    </>
  )
}
