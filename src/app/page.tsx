import { Marquee } from "@/components/ui/marquee";

const W = "https://chill-out.co.uk/wp-content/uploads/";
const S = "https://chill-out.co.uk/our-services/";
const C = "https://chill-out.co.uk/our-work/";

const heroSlides = [
  `${W}2026/04/gala-dinner-outside-e1787759777666.jpeg`,
  `${W}2024/02/homepage-banner-01.jpg`,
  `${W}2026/01/AN5.jpg`,
  `${W}2025/12/LM1.jpg`,
];

const words = ["Executive Dinners", "Conferences", "Incentive Trips", "Roadshows", "Gala Dinners", "Team Building"];

const logos = [
  ["Cisco", "2024/02/client-logo-cisco.png"],
  ["Salesforce", "2024/02/client-logo-salesforce.png"],
  ["VMware", "2024/02/client-logo-vmware.png"],
  ["Broadcom", "2025/07/Broadcom-Inc._idX3LTclva_1-2.png"],
  ["Dell EMC", "2024/02/client-logo-dellemc.png"],
  ["Snowflake", "2026/05/Snowflake_Logo.svg_.png"],
  ["Fortinet", "2025/07/Fortinet_id7jgH6Zmd_1.png"],
  ["ADP", "2025/07/ADP-logo-2.png"],
  ["Sitecore", "2024/02/client-logo-sitecore.png"],
  ["Computacenter", "2024/02/client-logo-computacenter.png"],
  ["PagerDuty", "2025/07/PagerDuty_idADVNXoP2_1.png"],
  ["Riverbed", "2024/02/client-logo-riverbed.png"],
  ["Coveo", "2024/02/client-logo-coveo.png"],
  ["LogicMonitor", "2024/02/client-logo-logic-monitor.png"],
  ["Omnissa", "2025/07/Omnissa-White-3-1.png"],
  ["Westcoast", "2025/07/Westcoast-Logo-White-1-2.png"],
];

const services = [
  { name: "Conferences", href: `${S}conferences/`, img: `${W}2025/05/Speaker-at-Event.jpg` },
  { name: "Executive Dinners", href: `${S}executive-dinners-and-roundtable-events/`, img: `${W}2024/02/case-study-dell-01.jpg` },
  { name: "Incentive Trips", href: `${S}incentive-programmes/`, img: `${W}2024/02/case-study-softcat-01a.jpg` },
  { name: "Roadshows", href: `${S}roadshow-event-management/`, img: `${W}2026/07/set-up-ready-for-delegates-e1784633815462.jpeg` },
  { name: "Gala & Awards Dinners", href: `${S}gala-dinners/`, img: `${W}2024/02/case-study-vmware-partner-rec-01.jpg` },
  { name: "Team Building", href: `${S}events-and-teambuilding/`, img: `${W}2024/02/case-study-cookforgood-01.jpg` },
];

const moreServices = [
  ["Product Launches", "product-launch-events/"],
  ["Exhibitions", "exhibition-event-management/"],
  ["Hybrid & Virtual", "hybrid-and-virtual-events/"],
  ["Town Halls", "town-hall-events/"],
  ["Corporate Hospitality", "corporate-events-and-hospitality/"],
  ["Christmas Events", "christmas-events/"],
  ["Experiential Marketing", "experiential-marketing/"],
  ["Charity Balls", "charity-balls-parties/"],
];

const cases = [
  {
    client: "atNorth",
    title: "Company retreat and data centre launch, Helsinki",
    tag: "Retreat · Launch",
    img: `${W}2026/01/AN5.jpg`,
    href: `${C}atnorth-casestudy-companyretreat/`,
  },
  {
    client: "LogicMonitor",
    title: "Elevate, taking a virtual conference fully in person",
    tag: "Conference",
    img: `${W}2025/12/LM1.jpg`,
    href: `${C}logicmonitor-elevate-community-conference/`,
  },
  {
    client: "VMware",
    title: "Partner Recognition Dinner, moved to Liverpool",
    tag: "Gala Dinner",
    img: `${W}2024/02/case-study-vmware-partner-rec-01.jpg`,
    href: `${C}gala-dinners-celebrations-vmware-partner-recognition-case-study/`,
  },
  {
    client: "Klarna",
    title: "Nine hosted groups at the Rugby World Cup 2023",
    tag: "Hospitality",
    img: `${W}2024/02/case-study-klarna-01.jpg`,
    href: `${C}corporate-hospitality-klarna-rugby-world-cup/`,
  },
  {
    client: "Broadcom",
    title: "Partner Enablement Series, Amsterdam and Lisbon",
    tag: "Training Series",
    img: `${W}2026/04/WhatsApp-Image-2026-03-09-at-9.22.59-PM-e1784630455106.jpeg`,
    href: `${C}partner-enablement-series-broadcom-amsterdam-lisbon/`,
  },
  {
    client: "Dell",
    title: "PAC executive dinner for senior leaders, Thailand",
    tag: "Executive Dinner",
    img: `${W}2024/02/case-study-dell-01.jpg`,
    href: `${C}exec-dinner-dell-pac-dinner-thailand/`,
  },
];

const quotes = [
  "Amazing dinner last night, we clinched some big new deals on the back of this, THANK YOU!!",
  "Our CEO loved the event and has praised the seamless execution throughout the day. You have been fantastic every step of the way with an amazing approach and attention to detail.",
  "Chill Out! are now our go-to for all our main events in the region and the team are also seen as an extension to our own team.",
  "You guys have been nothing less than phenomenal. Thank you so much for your truly exceptional service.",
  "Just wanted to say thank you for another great job. Everything felt smooth and under control - everybody just seemed to do everything right as usual.",
  "We've continued to get great feedback from all attendees and calls of 'when's the next one' so I've got some planning to do!",
  "Chill Out! are amazing - I love them. You should hire them!",
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-[var(--co-blue)] px-4 py-2 text-center text-xs font-semibold text-white">
        Website concept prepared for Chill Out! Event Management by Leadsify
      </div>

      {/* Hero */}
      <section id="top" className="relative min-h-[94vh] overflow-hidden bg-[var(--co-ink)] text-white">
        <div className="absolute inset-0">
          {heroSlides.map((src, i) => (
            <img key={src} src={src} alt="" className="co-slide absolute inset-0 h-full w-full object-cover" style={{ animationDelay: `${i * 5}s` }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--co-ink)] via-[var(--co-ink)]/75 to-[var(--co-ink)]/20" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--co-ink)] to-transparent" aria-hidden="true" />

        <header className="relative z-20">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6">
            <a href="#top" className="text-2xl font-extrabold tracking-tight">
              Chill Out<span className="text-[var(--co-blue)]">!</span>
            </a>
            <div className="hidden items-center gap-7 text-sm font-medium text-white/85 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#work" className="hover:text-white">Our Work</a>
              <a href="#clients" className="hover:text-white">Clients</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <a href="#contact" className="rounded-full bg-[var(--co-blue)] px-5 py-2.5 text-sm font-bold text-[var(--co-ink)] transition hover:bg-white">
              Plan an event
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-16 md:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--co-blue)]">Corporate event management · UK · Europe · USA</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            We bring your
            <span className="block h-[1.1em] overflow-hidden text-[var(--co-blue)]">
              <span className="co-words block">
                {[...words, words[0]].map((w, i) => (
                  <span key={i} className="block h-[1.1em] leading-[1.1em]">{w}</span>
                ))}
              </span>
            </span>
            to life.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-white/80">
            For over 20 years we&apos;ve planned and delivered events that put your brand front and centre, from intimate
            executive dinners for 10 to international conferences for 2000+. You enjoy the event. We handle every detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-[var(--co-blue)] px-7 py-4 font-bold text-[var(--co-ink)] transition hover:-translate-y-0.5 hover:bg-white">
              Plan your event
            </a>
            <a href="#work" className="rounded-full border-2 border-white/80 px-7 py-4 font-semibold transition hover:bg-white hover:text-[var(--co-ink)]">
              See our work
            </a>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
            {[
              ["20+", "years delivering events"],
              ["10–2000+", "guests per event"],
              ["3", "regions, UK · EU · USA"],
              ["24", "published case studies"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="text-3xl font-extrabold text-white">{n}</dt>
                <dd className="mt-1 text-sm text-white/65">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" aria-label="Clients" className="bg-[var(--co-ink)] py-12">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-white/50">Trusted by leading tech brands, many for years</p>
        <Marquee pauseOnHover speed="slow" className="[--gap:4rem]">
          {logos.map(([n, f]) => (
            <img key={n} src={`${W}${f}`} alt={n} className="h-8 w-auto max-w-[140px] object-contain opacity-70 brightness-0 invert transition hover:opacity-100 md:h-10" />
          ))}
        </Marquee>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--co-blue-deep)]">What we do</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">Every kind of corporate event, handled end to end.</h2>
          </div>
          <p className="max-w-md text-neutral-600">
            From concept to on-site delivery, one calm and experienced team looks after venues, logistics, production and guests.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a key={s.name} href={s.href} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-200">
              <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--co-ink)]/90 via-[var(--co-ink)]/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <h3 className="text-2xl font-extrabold">{s.name}</h3>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--co-blue)] text-[var(--co-ink)] transition group-hover:translate-x-1" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {moreServices.map(([n, h]) => (
            <li key={n}>
              <a href={`${S}${h}`} className="inline-block rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold transition hover:border-[var(--co-blue)] hover:bg-[var(--co-blue)]/10">
                {n}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Case studies */}
      <section id="work" className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--co-blue-deep)]">Our work</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">How major brands meet, launch and celebrate with us.</h2>
            </div>
            <a href={C} className="shrink-0 rounded-full bg-[var(--co-ink)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--co-blue-deep)]">
              All 24 case studies
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <a key={c.href} href={c.href} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img src={c.img} alt={`${c.client} event`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-extrabold">{c.client}</span>
                    <span className="rounded-full bg-[var(--co-blue)]/12 px-3 py-1 text-xs font-bold text-[var(--co-blue-deep)]">{c.tag}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug">{c.title}</h3>
                  <span className="mt-auto pt-5 text-sm font-bold text-[var(--co-blue-deep)] group-hover:underline">Read the case study</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--co-ink)] py-24 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--co-blue)]">In our clients&apos; words</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">We still blush when they say nice things.</h2>
        </div>
        <div className="mt-12">
          <Marquee pauseOnHover speed="slow" className="[--gap:1.25rem]">
            {quotes.map((q) => (
              <figure key={q} className="flex w-[380px] shrink-0 flex-col justify-between rounded-3xl bg-white/[0.06] p-8 ring-1 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--co-blue)]" fill="currentColor" aria-hidden="true"><path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" /></svg>
                <blockquote className="mt-5 text-lg leading-relaxed text-white/90">{q}</blockquote>
              </figure>
            ))}
          </Marquee>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--co-blue-deep)]">How we work</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">You chill out. We take care of the rest.</h2>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Understand", "We get to know your organisation, your objectives and your audience before anything else."],
            ["02", "Create", "We shape a bespoke event around those goals, from venue and format to every guest touchpoint."],
            ["03", "Deliver", "Our team runs it on site, calm and experienced, so you can focus on your guests and enjoy the day."],
          ].map(([n, t, d]) => (
            <li key={n} className="rounded-3xl border border-neutral-200 p-8">
              <span className="text-5xl font-extrabold text-[var(--co-blue)]">{n}</span>
              <h3 className="mt-4 text-2xl font-extrabold">{t}</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden px-5 py-28 text-white">
        <img src={`${W}2026/08/TEAM-1.jpeg`} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--co-ink)]/80" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Planning an event<span className="text-[var(--co-blue)]">?</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/80">Tell us what you&apos;re planning and what you want it to achieve. Our team will come back with ideas.</p>
            <div className="mt-8 grid gap-4 text-sm text-white/75">
              <p><span className="font-bold text-white">Berkshire</span> · The Old Byre, Billingbear Farm, Binfield, RG42 5PS</p>
              <p><span className="font-bold text-white">London</span> · 40 Bowling Green Lane, EC1R 0NE</p>
              <p><span className="font-bold text-white">USA</span> · <a href="https://www.chill-out.events/" className="underline hover:text-white">chill-out.events</a></p>
            </div>
          </div>
          <form className="grid gap-4 rounded-3xl bg-white p-8 text-[var(--co-ink)]" action="https://chill-out.co.uk/contact-us/">
            <label className="grid gap-1.5 text-sm font-semibold">Name<input name="name" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" /></label>
            <label className="grid gap-1.5 text-sm font-semibold">Work email<input name="email" type="email" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" /></label>
            <label className="grid gap-1.5 text-sm font-semibold">Tell us about your event<textarea name="message" rows={4} className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" /></label>
            <button type="submit" className="rounded-full bg-[var(--co-blue)] px-7 py-4 font-bold text-[var(--co-ink)] transition hover:bg-[var(--co-ink)] hover:text-white">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[var(--co-ink)] px-5 py-10 text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row">
          <p>© Chill Out! Event Management Ltd</p>
          <div className="flex gap-5">
            <a href="https://uk.linkedin.com/company/chill-out-event-management-ltd" className="hover:text-white">LinkedIn</a>
            <a href="https://www.instagram.com/chilloutteam/" className="hover:text-white">Instagram</a>
            <a href="https://www.facebook.com/ChillOutEventMgmt" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
