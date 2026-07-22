import fest from "@/assets/campus-fest.jpg";
import conv from "@/assets/campus-convocation.jpg";
import hack from "@/assets/campus-hackathon.jpg";
import sports from "@/assets/campus-sports.jpg";
import tedx from "@/assets/campus-tedx.jpg";
import theatre from "@/assets/campus-theatre.jpg";
import { ArrowUpRight } from "lucide-react";

const feature = {
  n: "01",
  tag: "Cultural Fest",
  title: "Three nights under a thousand lights.",
  campus: "St. Xavier's University — Utsav '26",
  img: fest,
  quote: "Every single band, every single fit, every single first-year on the lawn.",
};

const grid = [
  { n: "02", tag: "Convocation", title: "Cap in the air, four years on the ground.", campus: "Ashoka U — Class of '26", img: conv, tint: "bg-highlight" },
  { n: "03", tag: "Hackathon", title: "48 hours, one keyboard, two coffees.", campus: "IIT — HackNight", img: hack, tint: "bg-navy text-paper" },
  { n: "04", tag: "Sports", title: "The student section became the game.", campus: "Inter-Uni Finals '26", img: sports, tint: "bg-stamp text-paper" },
  { n: "05", tag: "TEDx", title: "A red circle, one small idea, a full house.", campus: "TEDxCampus", img: tedx, tint: "bg-paper border-2 border-ink" },
  { n: "06", tag: "Theatre", title: "Backstage is where the play actually starts.", campus: "Dramsoc — Winter Prod.", img: theatre, tint: "bg-highlight" },
];

const FeaturedShoots = () => {
  return (
    <section id="featured" className="relative py-24 md:py-32 bg-paper border-b-2 border-ink">
      <div className="container mx-auto px-6">
        {/* Chapter header */}
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-ink" />
              <span className="eyebrow">Chapter 01 · Featured shoots</span>
            </div>
            <h2 className="heading-display text-5xl md:text-7xl max-w-3xl">
              The rooms your campus{" "}
              <span className="hand text-stamp text-6xl md:text-8xl italic">won't stop talking about.</span>
            </h2>
          </div>
          <a href="#albums" className="text-ink uppercase tracking-[0.22em] text-[11px] font-semibold link-underline inline-flex items-center gap-2">
            Full index <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Big feature spread */}
        <article className="grid md:grid-cols-12 gap-6 mb-8 border-y-2 border-ink py-8">
          <div className="md:col-span-7 relative">
            <span className="tape -top-3 left-8 rotate-3 z-10" />
            <img
              src={feature.img}
              alt={feature.title}
              loading="lazy"
              width={1920}
              height={1280}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-4xl text-stamp">{feature.n}</span>
                <span className="eyebrow bg-ink text-paper px-2 py-1">{feature.tag}</span>
              </div>
              <h3 className="heading-display text-4xl md:text-5xl mb-4">{feature.title}</h3>
              <p className="text-ink/70 mb-6">{feature.campus}</p>
              <blockquote className="hand text-2xl text-navy leading-snug border-l-4 border-highlight pl-4">
                "{feature.quote}"
              </blockquote>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-ink group">
              Open the spread <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </article>

        {/* Zine grid */}
        <div className="grid md:grid-cols-6 gap-4">
          {grid.map((s, i) => (
            <article
              key={s.n}
              className={`group cursor-pointer ${
                i === 0 ? "md:col-span-3 md:row-span-2" : i === 1 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div className="relative overflow-hidden border-2 border-ink">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={i === 0 ? 1500 : 900}
                  className={`w-full ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]`}
                />
                <span className={`absolute top-3 left-3 px-2 py-1 text-[10px] uppercase tracking-[0.22em] font-bold ${s.tint}`}>
                  {s.tag}
                </span>
              </div>
              <div className="pt-4 flex items-start gap-3">
                <span className="font-serif text-2xl text-stamp shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl leading-tight">{s.title}</h3>
                  <p className="text-xs text-ink/60 mt-1">{s.campus}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShoots;
