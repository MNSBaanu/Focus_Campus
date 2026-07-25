import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroFest from "@/assets/campus-fest.jpg";
import polaroidA from "@/assets/campus-convocation.jpg";
import polaroidB from "@/assets/campus-sports.jpg";

const stats = [
  { k: "Campuses", v: "84" },
  { k: "Fests covered", v: "312" },
  { k: "Frames archived", v: "94K" },
  { k: "Student clubs", v: "170+" },
];

const Hero = () => {
  return (
    <section className="relative bg-paper border-b-2 border-ink">
      <div className="container mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: title */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6"
            >
              Est. 2019 · Campus event photography
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display text-5xl md:text-7xl text-ink"
            >
              The four years{" "}
              <span className="marker-hl italic">worth keeping.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-md text-ink/70 text-lg leading-relaxed"
            >
              Focus is a student-run studio documenting university life — fests,
              convocations, hackathons and everything in between.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#featured"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-stamp"
              >
                See our work <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 border-2 border-ink text-ink px-6 py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-highlight"
              >
                Packages
              </a>
            </motion.div>
          </div>

          {/* Right: clean image grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <figure className="col-span-2">
              <img
                src={heroFest}
                alt="Cultural night under string lights"
                width={1920}
                height={1280}
                className="w-full aspect-[16/10] object-cover border-2 border-ink"
              />
            </figure>
            <figure>
              <img
                src={polaroidA}
                alt="Convocation caps in the air on a sunlit quad"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover border-2 border-ink"
              />
            </figure>
            <figure>
              <img
                src={polaroidB}
                alt="A student section erupts at the tournament final"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover border-2 border-ink"
              />
            </figure>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t-2 border-ink pt-6">
          {stats.map((s) => (
            <div key={s.k} className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-bold text-ink">{s.v}</span>
              <span className="eyebrow">{s.k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
