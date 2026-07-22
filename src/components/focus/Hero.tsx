import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import heroFest from "@/assets/campus-fest.jpg";
import polaroidA from "@/assets/campus-convocation.jpg";
import polaroidB from "@/assets/campus-sports.jpg";

const Hero = () => {
  return (
    <section className="relative bg-paper border-b-2 border-ink overflow-hidden">
      <div className="container mx-auto px-6 pt-14 pb-24">
        {/* Newspaper-style masthead */}
        <div className="grid grid-cols-3 items-center border-y border-ink py-2 mb-10 text-[11px] uppercase tracking-[0.22em] text-ink/75">
          <span>Issue N° 024</span>
          <span className="text-center hidden md:block font-semibold text-ink">The Campus Events Yearbook</span>
          <span className="text-right">42 pages · Free at every fest</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: title */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="stamp">Est. 2019 · 84 Campuses</span>
              <span className="hand text-2xl text-stamp -rotate-6">this one's for us →</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="heading-display text-[13vw] lg:text-[9.5vw] text-ink"
            >
              The four
              <br />
              years,{" "}
              <span className="marker-hl italic">
                <em className="font-normal">actually</em>
              </span>
              <br />
              worth keeping.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 max-w-lg text-ink/75 text-lg leading-relaxed"
            >
              Focus is a student-run photography studio that documents
              university life — from freshers' night and convocation to
              hackathons, cultural fests and the last game of the season.
              We shoot your campus like a magazine, not a memo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#featured"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-stamp"
              >
                See this issue <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 border-2 border-ink text-ink px-6 py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-highlight"
              >
                Packages for clubs
              </a>
              <div className="hand text-xl text-ink/70 leading-tight ml-1">
                or DM us
                <br />
                <span className="text-stamp">— seriously.</span>
              </div>
            </motion.div>
          </div>

          {/* Right: polaroid collage */}
          <div className="lg:col-span-5 relative min-h-[520px]">
            {/* Rotating sticker */}
            <div className="absolute -top-4 -left-4 w-28 h-28 rounded-full bg-highlight text-ink grid place-items-center animate-spin-slow z-20 border-2 border-ink">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                <defs>
                  <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-current text-[10px] uppercase font-bold tracking-[0.2em]">
                  <textPath href="#circle">Campus Yearbook · Vol 07 · 2026 · </textPath>
                </text>
              </svg>
              <Star className="w-6 h-6 fill-ink" />
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 20, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute top-8 left-6 w-64 md:w-72 bg-card p-3 pb-10 shadow-[6px_6px_0_0_hsl(var(--ink))] z-10"
            >
              <span className="tape left-1/2 -top-3 -translate-x-1/2" />
              <img
                src={polaroidA}
                alt="Convocation caps in the air on a sunlit quad"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption className="hand text-xl text-ink mt-2 text-center">
                Convocation, May '26
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="absolute top-40 right-0 w-60 md:w-72 bg-card p-3 pb-10 shadow-[6px_6px_0_0_hsl(var(--stamp))] z-0"
            >
              <span className="tape left-1/2 -top-3 -translate-x-1/2 rotate-6" />
              <img
                src={polaroidB}
                alt="A student section erupts at the tournament final"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
              <figcaption className="hand text-xl text-stamp mt-2 text-center">
                Inter-Uni Finals!!
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="absolute bottom-0 left-12 w-56 md:w-64 bg-card p-3 pb-10 shadow-[6px_6px_0_0_hsl(var(--navy))]"
            >
              <span className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-3" />
              <img
                src={heroFest}
                alt="Cultural night under string lights"
                width={1920}
                height={1280}
                className="w-full aspect-[5/4] object-cover"
              />
              <figcaption className="hand text-xl text-navy mt-2 text-center">
                Spring Fest, night 3
              </figcaption>
            </motion.figure>
          </div>
        </div>

        {/* Stats footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 border-t-2 border-ink pt-6"
        >
          {[
            { k: "Campuses shot", v: "84" },
            { k: "Fests covered", v: "312" },
            { k: "Frames archived", v: "94K" },
            { k: "Student clubs", v: "170+" },
          ].map((s) => (
            <div key={s.k} className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-bold text-ink">{s.v}</span>
              <span className="eyebrow">{s.k}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
