import { Check } from "lucide-react";

const services = [
  {
    n: "I",
    title: "Gala & Ceremony",
    price: "from $3,800",
    duration: "Up to 6 hours",
    includes: ["Two photographers", "Editorial edit, 200+ frames", "48-hour turnaround", "Private client gallery"],
  },
  {
    n: "II",
    title: "Conference & Keynote",
    price: "from $4,600",
    duration: "Full-day coverage",
    includes: ["Stage, breakout, candid", "Same-day social selects", "Press-ready delivery", "Speaker portrait set"],
    highlight: true,
  },
  {
    n: "III",
    title: "Festival & Concert",
    price: "from $5,200",
    duration: "Per day, per stage",
    includes: ["Multi-stage roaming crew", "Crowd + artist coverage", "Cinematic color grade", "Rights for tour marketing"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-background border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">Services</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl">
              Three formats. <em className="text-gold italic">One standard.</em>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-muted-foreground self-end leading-relaxed">
            Every engagement is bespoke, but most events fit inside one of the
            three formats below. Custom multi-day and international coverage is
            quoted on request.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.n}
              className={`p-8 md:p-10 border ${s.highlight ? "border-gold bg-secondary/50" : "border-border bg-secondary/20"} flex flex-col`}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-serif text-2xl text-gold">{s.n}</span>
                <span className="eyebrow">{s.duration}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-3 leading-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-8">{s.price}</p>

              <ul className="space-y-3 mb-10 flex-1">
                {s.includes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`text-center py-3 text-[11px] uppercase tracking-[0.22em] border ${
                  s.highlight
                    ? "bg-gold text-primary-foreground border-gold hover:opacity-90"
                    : "border-border text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                Enquire →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
