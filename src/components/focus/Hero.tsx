import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroEvent from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src={heroEvent}
          alt="Concert stage lights over a live crowd, photographed by Focus"
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-40 pb-24 min-h-screen flex flex-col justify-between">
        {/* Masthead */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-foreground/70">
          <span>Issue N°024 · Summer '26</span>
          <span className="hidden md:inline">Event Photography Magazine</span>
          <span>New York · Berlin · Tokyo</span>
        </div>

        {/* Title block */}
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow text-gold mb-6"
          >
            — Featured this issue
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="heading-display text-[15vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.9] text-foreground"
          >
            The rooms
            <br />
            <em className="text-gold not-italic-inherit italic font-normal">that held the night.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 max-w-xl text-foreground/75 text-lg leading-relaxed"
          >
            Focus is a boutique event photography studio documenting the moments
            in-between — from gala floors and festival stages to boardroom keynotes.
          </motion.p>
        </div>

        {/* Footer bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/60 pt-8 text-sm"
        >
          <div>
            <div className="eyebrow mb-2">Shoots delivered</div>
            <div className="font-serif text-3xl">412</div>
          </div>
          <div>
            <div className="eyebrow mb-2">Cities covered</div>
            <div className="font-serif text-3xl">37</div>
          </div>
          <div>
            <div className="eyebrow mb-2">Editorial partners</div>
            <div className="font-serif text-3xl">28</div>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <a href="#featured" className="inline-flex items-center gap-2 text-gold uppercase tracking-[0.22em] text-[11px] link-underline">
              Turn the page <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
