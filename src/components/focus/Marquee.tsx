const words = [
  "Galas", "Keynotes", "Runways", "Festivals", "Launches", "Award Nights",
  "Brand Activations", "Private Concerts", "Fashion Week", "Conferences",
];

const Marquee = () => {
  return (
    <div className="border-y border-border/60 bg-background py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-slow">
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            className="mx-8 font-serif text-3xl md:text-5xl text-foreground/90 flex items-center gap-8"
          >
            {w}
            <span className="text-gold text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
