import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

export default function FortMorganAlabamaGuideContent() {
  return (
    <>
      <p className="text-xl text-navy/80 leading-relaxed font-medium">
        Fort Morgan is the far west end of the Gulf Shores peninsula — twenty-odd miles of two-lane
        road past the condos, ending at a masonry fort on the point where Mobile Bay meets the Gulf.
        It is the quietest stretch of developed Alabama coast, the most interesting piece of history
        on it, and the landing for the ferry across to Dauphin Island.
      </p>
      <p>
        It is also a genuine commitment. That drive is 40 minutes from the middle of{' '}
        <Link href="/destinations/gulf-shores">Gulf Shores</Link>, and there is very little out there
        once you arrive. That is either exactly what you want or exactly what you do not.
      </p>

      <h2>Who Fort Morgan Is For</h2>
      <ul>
        <li><strong>Families who want space</strong> — the beaches out here are emptier than anything in town</li>
        <li><strong>History travelers</strong> — the fort is the real thing, not a reconstruction</li>
        <li><strong>Anyone taking the ferry</strong> to Dauphin Island</li>
        <li><strong>Renters looking for quiet</strong> — the houses out here are lower density and cheaper</li>
      </ul>
      <p>
        Who it is not for: anyone who wants to walk to dinner, or whose trip depends on things being
        open. Restaurants and groceries are scarce and seasonal. Come stocked.
      </p>

      <h2>The Historic Fort</h2>
      <p>
        Fort Morgan is a star-shaped masonry fort completed in 1834, and it guarded the mouth of
        Mobile Bay through the Civil War — this is where the Battle of Mobile Bay was fought in 1864,
        and where Farragut is supposed to have said the thing about the torpedoes.
      </p>
      <ul>
        <li><strong>Admission:</strong> $8 adults, $5 children, seniors, and college students, $20 family (2 adults + 2 children)</li>
        <li><strong>Site hours:</strong> 8 a.m. to 5 p.m.; museum 8 a.m. to 4:30 p.m.; gift shop 9 a.m. to 4 p.m.</li>
        <li><strong>Closed</strong> Thanksgiving, Christmas, and New Year&apos;s Day</li>
      </ul>
      <p>
        Budget an hour and a half to two hours. It is largely self-guided and you can walk the
        ramparts, the casemates, and the tunnels at your own pace.
      </p>

      <TipCallout title="Go Early in Summer" variant="tip">
        The fort is brick, open, and almost entirely unshaded. In July and August the middle of the
        day out there is punishing — go at opening, take water, and save the beach for the afternoon
        when you can get in the Gulf to cool off.
      </TipCallout>

      <h2>The Beaches</h2>
      <p>
        The beach along the Fort Morgan peninsula is the same white quartz sand as Gulf Shores with a
        fraction of the people. Development is low-rise houses rather than condo towers, so the
        shoreline feels open.
      </p>
      <p>
        The trade-off is amenities: limited public parking, few facilities, and no lifeguards along
        most of it. If you want restrooms, rinse showers, and a staffed beach, you want{' '}
        <Link href="/blog/gulf-state-park-guide">Gulf State Park</Link> back east instead. If you want
        to walk for twenty minutes and see six people, you want this.
      </p>
      <p>
        Bon Secour National Wildlife Refuge occupies a good stretch of the peninsula, protecting dune
        and maritime forest habitat — there are hiking trails, and it is a serious birding spot during
        migration.
      </p>

      <h2>The Mobile Bay Ferry</h2>
      <p>
        The ferry landing sits right by the fort, and it is the reason a lot of people come out here
        at all. It runs across to <Link href="/destinations/dauphin-island">Dauphin Island</Link> in
        about 40 minutes, carrying vehicles, bikes, and foot passengers.
      </p>
      <p>
        The short version: $15 for a standard vehicle plus $6 per person, tickets sold in person at
        the landing only, and you want to be in line at least 30 minutes early — more on summer
        weekends, when you may end up waiting for the ferry after the next one. Our full{' '}
        <Link href="/blog/mobile-bay-ferry-guide">Mobile Bay Ferry guide</Link> covers the schedule,
        fares, and when the crossing genuinely beats driving around the bay.
      </p>
      <p>
        Worth knowing: if you are already out at Fort Morgan and want to reach Dauphin Island, the
        ferry is clearly the best route. From anywhere else, driving around usually wins.
      </p>

      <h2>Where to Stay</h2>
      <p>
        Fort Morgan is rental-house territory rather than condo-tower territory, and prices reflect
        both the quiet and the drive. It suits a week where the beach is the whole plan and you have
        stocked the kitchen.
      </p>
      <p>
        If you want restaurants and activity within reach, base in Gulf Shores or{' '}
        <Link href="/destinations/orange-beach">Orange Beach</Link> instead and day-trip out here —
        our <Link href="/blog/where-to-stay-gulf-shores">Gulf Shores lodging guide</Link> covers
        those areas.
      </p>

      <h2>A Day That Works</h2>
      <ul>
        <li><strong>Morning:</strong> the fort at opening, before the heat</li>
        <li><strong>Midday:</strong> beach on the peninsula, or the refuge trails if it is cooler</li>
        <li><strong>Afternoon:</strong> the ferry across to Dauphin Island, or back east for dinner</li>
      </ul>
      <p>
        Pairing Fort Morgan with Fort Gaines on Dauphin Island — the two forts that guarded the bay —
        makes the best full day out here, and the ferry is what makes it practical.
      </p>

      <h2>Practical Notes</h2>
      <ul>
        <li><strong>Stock up before you drive out.</strong> Groceries and restaurants are limited and seasonal.</li>
        <li><strong>Fuel up too</strong> — stations are sparse past the turn.</li>
        <li><strong>No lifeguards</strong> on most of the peninsula beach; check flags.</li>
        <li><strong>Leave Only Footprints rules apply</strong> — gear off the beach overnight.</li>
        <li><strong>Cell service</strong> gets patchy toward the point.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Fort Morgan is worth the drive if you want quiet sand, real history, or the ferry. Go to the
        fort early, bring your own everything, and do not expect the peninsula to entertain you —
        that is the point of it. For a week-long base it suits people who genuinely want to be left
        alone; for everyone else it is one of the best day trips on the Alabama coast.
      </p>

      <h2>Where to Stay Nearby</h2>
      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <AffiliateLink href="vrbo-gulf-shores" label="Browse Gulf Shores & Fort Morgan Rentals" provider="vrbo" />
        <AffiliateLink href="booking-gulf-shores" label="Find Gulf Shores Hotels" provider="booking" />
      </div>
    </>
  )
}
