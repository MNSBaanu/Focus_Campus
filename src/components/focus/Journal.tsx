import shootRunway from "@/assets/shoot-runway.jpg";
import shootFestival from "@/assets/shoot-festival.jpg";
import shootConference from "@/assets/shoot-conference.jpg";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Craft",
    date: "12 Jul 2026",
    title: "On lighting a room you can't control",
    excerpt: "Five gala lessons in shaping available light — from chandeliers to LED walls.",
    img: shootConference,
    read: "6 min",
  },
  {
    tag: "Field notes",
    date: "28 Jun 2026",
    title: "Backstage at Lumen: 72 hours in the pit",
    excerpt: "How we cover three stages with two shooters and one clear editorial brief.",
    img: shootFestival,
    read: "9 min",
  },
  {
    tag: "Editorial",
    date: "04 Jun 2026",
    title: "The runway is a room, not a stage",
    excerpt: "Photographing fashion week without falling into the wire photograph.",
    img: shootRunway,
    read: "5 min",
  },
];

const Journal = () => {
  return (
    <section id="journal" className="relative py-28 md:py-36 bg-secondary/30 border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">The Journal</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl">
              Notes from the studio.
            </h2>
          </div>
          <a href="#" className="text-gold uppercase tracking-[0.22em] text-[11px] link-underline inline-flex items-center gap-2">
            All entries <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-5">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center gap-4 mb-3 text-[11px] uppercase tracking-[0.22em]">
                <span className="text-gold">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
                <span className="text-muted-foreground ml-auto">{p.read}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-2 group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
