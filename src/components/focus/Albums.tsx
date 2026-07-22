import { ArrowUpRight } from "lucide-react";
import shootGala from "@/assets/shoot-gala.jpg";
import shootRunway from "@/assets/shoot-runway.jpg";
import shootConference from "@/assets/shoot-conference.jpg";
import shootFestival from "@/assets/shoot-festival.jpg";

const albums = [
  { n: "A-041", title: "Metropolitan Trust Gala", city: "New York", year: "2026", frames: 214, img: shootGala },
  { n: "A-040", title: "House of Marceau SS26", city: "Paris", year: "2026", frames: 168, img: shootRunway },
  { n: "A-039", title: "Northwind Keynote", city: "Berlin", year: "2026", frames: 92, img: shootConference },
  { n: "A-038", title: "Lumen Festival, Day Two", city: "Lisbon", year: "2025", frames: 431, img: shootFestival },
  { n: "A-037", title: "Kōgei Product Launch", city: "Tokyo", year: "2025", frames: 137, img: shootGala },
  { n: "A-036", title: "Amber Awards Night", city: "London", year: "2025", frames: 289, img: shootRunway },
];

const Albums = () => {
  return (
    <section id="albums" className="relative py-28 md:py-36 bg-background border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">The Albums</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl">
              An archive, kept in <em className="text-gold italic">chapters.</em>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed self-end">
            Every shoot becomes a numbered album — hand-edited, sequenced,
            and delivered as a private gallery. Below, the six most recent entries
            from the studio's index.
          </p>
        </div>

        <div className="border-t border-border/60">
          {albums.map((a) => (
            <a
              key={a.n}
              href="#"
              className="group grid grid-cols-12 items-center gap-4 py-6 md:py-8 border-b border-border/60 hover:bg-secondary/40 px-2 -mx-2"
            >
              <div className="col-span-2 md:col-span-1 text-gold font-serif text-lg">{a.n}</div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                  {a.title}
                </h3>
              </div>
              <div className="hidden md:block md:col-span-2 text-sm text-muted-foreground">{a.city}</div>
              <div className="hidden md:block md:col-span-1 text-sm text-muted-foreground">{a.year}</div>
              <div className="hidden md:block md:col-span-2 text-sm text-muted-foreground">{a.frames} frames</div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-border group-hover:border-gold group-hover:text-gold text-foreground/70 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
