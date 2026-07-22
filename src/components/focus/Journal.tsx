import theatre from "@/assets/campus-theatre.jpg";
import hack from "@/assets/campus-hackathon.jpg";
import tedx from "@/assets/campus-tedx.jpg";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Field notes",
    date: "12 Sep 2026",
    title: "How to shoot a fest with two shooters and one venue map.",
    excerpt: "Our crew's actual playbook for covering three stages, a food court and an after-party.",
    img: hack,
    read: "7 min",
  },
  {
    tag: "For clubs",
    date: "28 Aug 2026",
    title: "The five shots every convocation deck actually needs.",
    excerpt: "Skip the group photo. Here are the frames faculty, parents and alumni all want to see.",
    img: tedx,
    read: "5 min",
  },
  {
    tag: "Craft",
    date: "04 Aug 2026",
    title: "Lighting a black-box theatre without ruining the mood.",
    excerpt: "Notes from three student productions, one broken bulb and a very generous stage manager.",
    img: theatre,
    read: "6 min",
  },
];

const Journal = () => {
  return (
    <section id="journal" className="relative py-24 md:py-32 bg-paper border-b-2 border-ink">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-ink" />
              <span className="eyebrow">Chapter 05 · The Journal</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl">
              Notes from the <span className="hand text-stamp text-6xl italic">back row.</span>
            </h2>
          </div>
          <a href="#" className="text-ink uppercase tracking-[0.22em] text-[11px] font-semibold link-underline inline-flex items-center gap-2">
            All entries <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((p, i) => (
            <article key={p.title} className="group cursor-pointer border-t-2 border-ink pt-6">
              <div className="flex items-center gap-4 mb-4 text-[11px] uppercase tracking-[0.22em] font-semibold">
                <span className={`px-2 py-1 ${i === 1 ? "bg-stamp text-paper" : i === 2 ? "bg-navy text-paper" : "bg-highlight text-ink"}`}>
                  {p.tag}
                </span>
                <span className="text-ink/60">{p.date}</span>
                <span className="text-ink/60 ml-auto">{p.read}</span>
              </div>
              <div className="overflow-hidden border-2 border-ink mb-5">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-2 group-hover:text-stamp transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
