import shootGala from "@/assets/shoot-gala.jpg";
import shootConference from "@/assets/shoot-conference.jpg";
import shootRunway from "@/assets/shoot-runway.jpg";
import shootFestival from "@/assets/shoot-festival.jpg";
import { ArrowUpRight } from "lucide-react";

const shoots = [
  {
    n: "01",
    title: "A Room Full of Candlelight",
    client: "The Metropolitan Trust — Annual Gala",
    tag: "Gala",
    img: shootGala,
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    n: "02",
    title: "One Silhouette, One Spotlight",
    client: "House of Marceau — SS26 Runway",
    tag: "Fashion",
    img: shootRunway,
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    n: "03",
    title: "Ten Thousand Hands, One Sunset",
    client: "Lumen Fest — Main Stage",
    tag: "Festival",
    img: shootFestival,
    span: "md:col-span-5",
    ratio: "aspect-[16/10]",
  },
];

const FeaturedShoots = () => {
  return (
    <section id="featured" className="relative py-28 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">Featured shoots</span>
            </div>
            <h2 className="heading-display text-5xl md:text-7xl max-w-3xl">
              A quiet look at the loudest rooms of the season.
            </h2>
          </div>
          <a href="#albums" className="text-gold uppercase tracking-[0.22em] text-[11px] link-underline inline-flex items-center gap-2">
            Full index <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Big feature */}
          <article className="md:col-span-7 group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={shoots[0].img}
                alt={shoots[0].title}
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold">
                {shoots[0].tag}
              </span>
            </div>
            <div className="pt-5 flex items-start justify-between gap-4">
              <div>
                <div className="eyebrow mb-2">N° {shoots[0].n}</div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">{shoots[0].title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{shoots[0].client}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gold shrink-0 mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>

          {/* Right column with two stacked */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {[shoots[1], shoots[2]].map((s) => (
              <article key={s.n} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={1000}
                    className={`w-full ${s.ratio} object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]`}
                  />
                  <span className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold">
                    {s.tag}
                  </span>
                </div>
                <div className="pt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="eyebrow mb-1">N° {s.n}</div>
                    <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{s.client}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gold shrink-0 mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShoots;
