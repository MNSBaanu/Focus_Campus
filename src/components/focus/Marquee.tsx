const words = [
  "Freshers' Night", "Convocation", "TEDx", "Hackathons", "Cultural Fest",
  "Sports Meet", "Farewell", "Model UN", "Orientation Week", "Alumni Meet",
  "Concerts", "Theatre Nights",
];

const Marquee = () => {
  return (
    <div className="bg-ink text-paper py-5 overflow-hidden border-b-2 border-ink">
      <div className="flex whitespace-nowrap animate-marquee-slow">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="mx-6 font-serif text-2xl md:text-4xl flex items-center gap-6">
            {w}
            <span className="text-highlight text-3xl">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
