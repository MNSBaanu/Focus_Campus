import fest from "@/assets/campus-fest.jpg";
import conv from "@/assets/campus-convocation.jpg";
import tedx from "@/assets/campus-tedx.jpg";

const stories = [
  {
    quote: "The gallery landed Monday 9am. Our club's Instagram had never grown that fast.",
    name: "Ananya Iyer",
    role: "President, Cultural Council",
    campus: "St. Xavier's University",
    img: fest,
  },
  {
    quote: "They photographed our convocation like it was a documentary. My mum cried twice.",
    name: "Rohan Mehta",
    role: "Class of 2026",
    campus: "Ashoka University",
    img: conv,
  },
  {
    quote: "Focus makes student events look like the real deal — not another WhatsApp forward.",
    name: "Dr. Priya Raman",
    role: "Faculty Advisor, TEDxCampus",
    campus: "Christ University",
    img: tedx,
  },
];

const Yearbook = () => {
  return (
    <section id="yearbook" className="relative py-24 md:py-32 bg-ink text-paper border-b-2 border-ink overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-highlight" />
              <span className="eyebrow text-highlight">Chapter 03 · Yearbook wall</span>
            </div>
            <h2 className="heading-display text-5xl md:text-7xl">
              What campuses{" "}
              <em className="italic text-highlight">said about us.</em>
            </h2>
          </div>
          <p className="md:col-span-4 text-paper/70 leading-relaxed">
            Real quotes from student councils, faculty advisors and the people
            who trusted us with their event archive.
          </p>
        </div>

        {/* Postcard wall */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stories.map((s, i) => (
            <figure
              key={s.name}
              className={`relative bg-paper text-ink p-6 shadow-[8px_8px_0_0_hsl(var(--highlight))] ${
                i === 0 ? "rotate--1" : i === 1 ? "rotate-1 md:mt-8" : "rotate--2"
              }`}
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-3" />
              <img
                src={s.img}
                alt={s.campus}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full aspect-[4/3] object-cover mb-5 grayscale"
              />
              <blockquote className="font-serif text-xl leading-snug mb-5">
                "{s.quote}"
              </blockquote>
              <figcaption className="border-t border-ink/20 pt-4 text-sm">
                <div className="font-semibold">{s.name}</div>
                <div className="text-ink/60">{s.role}</div>
                <div className="hand text-xl text-stamp mt-1">{s.campus}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Ribbon of logos */}
        <div className="mt-20 border-y border-paper/20 py-6">
          <div className="flex items-center justify-between flex-wrap gap-6 text-paper/70 text-sm uppercase tracking-[0.22em] font-semibold">
            <span className="text-highlight">Trusted at</span>
            {["IIT Delhi", "Ashoka", "Christ", "St. Xavier's", "DU", "BITS Pilani", "NLS Bangalore"].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yearbook;
