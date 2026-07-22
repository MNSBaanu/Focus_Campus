import { Check, Scissors } from "lucide-react";

const packages = [
  {
    n: "I",
    title: "Club Night",
    price: "₹ 12,000",
    unit: "up to 4 hours",
    tagline: "Perfect for a single event, one venue.",
    includes: [
      "One photographer",
      "150+ edited frames",
      "48-hour delivery",
      "Private Google Drive gallery",
    ],
    stamp: null,
  },
  {
    n: "II",
    title: "Fest Weekend",
    price: "₹ 42,000",
    unit: "3 days · multi-venue",
    tagline: "Cultural fests, sports weeks, orientation.",
    includes: [
      "Two-photographer crew",
      "600+ edited frames",
      "Same-day social selects",
      "Daily reel-ready dumps",
      "Poster & press-kit exports",
    ],
    stamp: "Most booked",
  },
  {
    n: "III",
    title: "The Yearbook",
    price: "₹ 1,20,000",
    unit: "full academic year",
    tagline: "Coverage across every major event, term-long.",
    includes: [
      "6–8 events / year",
      "Dedicated campus lead",
      "Curated year-end zine (printed)",
      "Archive on custom subdomain",
      "Media training for your club",
    ],
    stamp: null,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="relative py-24 md:py-32 bg-paper border-b-2 border-ink">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-ink" />
              <span className="eyebrow">Chapter 04 · Packages</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl">
              Three tickets. <span className="marker-hl">Pick a row.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-ink/70 self-end leading-relaxed">
            Built for student councils and campus clubs. Every package is
            invoiced through your university and priced with a student discount
            already baked in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.n}
              className="relative bg-card border-2 border-ink shadow-[6px_6px_0_0_hsl(var(--ink))] flex flex-col"
            >
              {/* Stub header */}
              <div className="bg-ink text-paper px-6 py-4 flex items-center justify-between">
                <span className="font-serif text-2xl">{p.n}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">
                  Admit · Focus × Campus
                </span>
              </div>

              {/* Perforation */}
              <div className="relative flex items-center justify-center border-b-2 border-dashed border-ink/40 py-1 bg-card">
                <Scissors className="w-3 h-3 text-ink/40" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                {p.stamp && <div className="stamp absolute -top-4 right-4 bg-paper">{p.stamp}</div>}

                <h3 className="font-serif text-3xl mb-2">{p.title}</h3>
                <p className="text-sm text-ink/60 mb-6">{p.tagline}</p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-4xl font-bold text-ink">{p.price}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-ink/60">/ {p.unit}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/85">
                      <Check className="w-4 h-4 text-stamp mt-0.5 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="text-center py-3 text-[11px] uppercase tracking-[0.22em] font-semibold border-2 border-ink bg-highlight text-ink hover:bg-ink hover:text-paper"
                >
                  Reserve this row →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom quote strip */}
        <div className="mt-10 border-2 border-dashed border-ink p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="hand text-2xl text-stamp mb-1">Something bigger?</div>
            <p className="text-sm text-ink/70">Multi-campus tours, alumni meets and inter-university leagues — quoted on request.</p>
          </div>
          <a href="#booking" className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-stamp self-start md:self-auto">
            Ask for a custom quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
