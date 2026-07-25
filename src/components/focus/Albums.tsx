import { ArrowUpRight } from "lucide-react";
import fest from "@/assets/campus-fest.jpg";
import conv from "@/assets/campus-convocation.jpg";
import hack from "@/assets/campus-hackathon.jpg";
import sports from "@/assets/campus-sports.jpg";
import tedx from "@/assets/campus-tedx.jpg";
import theatre from "@/assets/campus-theatre.jpg";

const albums = [
  { n: "A-041", title: "Utsav '26 — Cultural Fest",     campus: "St. Xavier's University", term: "Spring", frames: 431, img: fest,    kind: "Fest" },
  { n: "A-040", title: "Class of '26 Convocation",       campus: "Ashoka University",       term: "Spring", frames: 214, img: conv,    kind: "Ceremony" },
  { n: "A-039", title: "HackNight 48",                   campus: "IIT Delhi",               term: "Winter", frames: 168, img: hack,    kind: "Hackathon" },
  { n: "A-038", title: "Inter-Uni Basketball Finals",    campus: "NCR Sports League",       term: "Fall",   frames: 289, img: sports,  kind: "Sports" },
  { n: "A-037", title: "TEDxCampus '26 — Small Ideas",   campus: "Christ University",       term: "Fall",   frames: 92,  img: tedx,    kind: "Talks" },
  { n: "A-036", title: "Dramsoc Winter Production",      campus: "Delhi University",        term: "Winter", frames: 137, img: theatre, kind: "Theatre" },
];

const filters = ["All", "Fest", "Ceremony", "Hackathon", "Sports", "Talks", "Theatre"];

const Albums = () => {
  return (
    <section id="albums" className="relative py-24 md:py-32 bg-paper border-b-2 border-ink">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-ink" />
              <span className="eyebrow">Chapter 02 · The Albums</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl">
              An archive, kept by <span className="marker-hl">semester.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-ink/70 leading-relaxed self-end">
            Every event becomes a numbered album — hand-edited, sequenced,
            and delivered to the organising club as a private gallery on Monday morning.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 border-y border-ink py-4">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold border-2 border-ink ${
                i === 0 ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-highlight"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Album grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {albums.map((a, i) => (
            <a
              key={a.n}
              href="#"
              aria-label={`View album: ${a.title} — ${a.campus}`}
              className={`group block ${i % 2 === 0 ? "md:mt-0" : "md:mt-10"}`}
            >
              <div className="relative bg-card p-3 pb-4 border-2 border-ink shadow-[6px_6px_0_0_hsl(var(--ink))] group-hover:shadow-[10px_10px_0_0_hsl(var(--stamp))] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                <div className="overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="pt-4 px-1">
                  <div className="flex items-center justify-between mb-2 text-[10px] uppercase tracking-[0.22em] font-semibold">
                    <span className="text-stamp">{a.n}</span>
                    <span className="text-ink/60">{a.term} · {a.frames} frames</span>
                  </div>
                  <h3 className="font-serif text-2xl leading-tight text-ink mb-1">{a.title}</h3>
                  <p className="text-sm text-ink/60">{a.campus}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-block bg-highlight text-ink px-2 py-1 text-[10px] uppercase tracking-[0.22em] font-bold">
                      {a.kind}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-ink" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
