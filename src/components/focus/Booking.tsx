import { useState } from "react";
import { toast } from "sonner";
import conv from "@/assets/campus-convocation.jpg";

const eventTypes = ["Cultural Fest", "Sports Meet", "Convocation", "TEDx / Talks", "Hackathon", "Theatre", "Other"];

const Booking = () => {
  const [type, setType] = useState("Cultural Fest");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Enquiry received — we'll be in touch within 24 hours.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-highlight border-b-2 border-ink overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-ink" />
              <span className="eyebrow">Chapter 06 · Booking</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl mb-6 text-ink">
              Tell us about <em className="italic">the fest.</em>
            </h2>
            <p className="text-ink/80 leading-relaxed mb-8 max-w-md">
              A one-paragraph brief is enough. We reply personally within 24 hours
              with availability, references and a proposal your council can sign off on.
            </p>

            <div className="relative w-72 rotate--2">
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-3 bg-stamp/70" />
              <img
                src={conv}
                alt="A recent campus shoot"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover border-2 border-ink shadow-[8px_8px_0_0_hsl(var(--ink))]"
              />
              <p className="hand text-xl text-ink text-center mt-3">
                Ashoka U · May '26 · Roll 03
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-7 border-2 border-ink bg-paper p-8 md:p-10 space-y-6 shadow-[8px_8px_0_0_hsl(var(--ink))]"
          >
            <div className="flex items-center justify-between border-b border-ink pb-3">
              <span className="hand text-2xl text-stamp">Booking slip</span>
              <span className="eyebrow">Form N° 042</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Your name" name="name" required />
              <Field label="Campus email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="University / club" name="org" required />
              <Field label="Event date" name="date" type="date" />
            </div>

            <div>
              <label className="eyebrow block mb-3">Event type</label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-[0.18em] border-2 border-ink font-semibold ${
                      type === t
                        ? "bg-ink text-paper"
                        : "bg-paper text-ink hover:bg-highlight"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="eyebrow block mb-2" htmlFor="brief">A short brief</label>
              <textarea
                id="brief"
                name="brief"
                rows={4}
                className="w-full bg-paper border-2 border-ink px-4 py-3 text-ink placeholder:text-ink/40 focus:border-stamp focus:outline-none"
                placeholder="How many days, expected footfall, venues, vibe references…"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-ink text-paper py-4 text-[11px] uppercase tracking-[0.28em] font-semibold hover:bg-stamp"
            >
              Send enquiry →
            </button>

            <p className="hand text-lg text-ink/70 text-center">
              or, honestly, just DM <span className="text-stamp">@focus.campus</span> on Instagram.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="eyebrow block mb-2" htmlFor={name}>
      {label}
      {required && <span className="text-stamp"> *</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="w-full bg-paper border-2 border-ink px-4 py-3 text-ink focus:border-stamp focus:outline-none"
    />
  </div>
);

export default Booking;
