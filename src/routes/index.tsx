import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

import { Particles } from "@/components/Particles";
import sky from "@/assets/sky.jpg";
import plush from "@/assets/plush.png";
import lily from "@/assets/lily.png";
import butterfly from "@/assets/butterfly.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy 2nd Anniversary, My Butterfly" },
      {
        name: "description",
        content:
          "A little love letter in motion for Labubu — two years of us, our memories, our songs, and everything I still want to say.",
      },
      { property: "og:title", content: "Happy 2nd Anniversary, My Butterfly" },
      {
        property: "og:description",
        content: "Two years of us — memories, wishes, and a letter that never ends.",
      },
    ],
  }),
  component: Anniversary,
});

const START = new Date("2025-04-05T00:00:00Z");

const memories = [
  {
    tag: "April 5, 2025",
    title: "The first message",
    body: "The day the whole story started. One conversation, and somehow my days had a new favourite part.",
    joke: "Who knew a simple hello would turn into two years?",
  },
  {
    tag: "Our inside joke",
    title: "Ne içersiniz?",
    body: "I will never be able to hear that question again without hearing your voice answer it.",
    joke: "AYRAAANNNN 🥛",
  },
  {
    tag: "Your flower",
    title: "The lily",
    body: "Every time I see a lily somewhere in the world, my brain goes quiet and just says: her.",
    joke: "Soft, elegant, a little dramatic — exactly like you.",
  },
  {
    tag: "Your name in my head",
    title: "Labubu",
    body: "No matter how much you grow up, you'll always be my little LABUUBUBBUB.",
    joke: "This one is non-negotiable. Sorry, my angel. 🧸",
  },
];

const wishes = [
  "I hope you achieve every single dream you carry.",
  "I hope life is gentle with you, always.",
  "I hope you never lose that smile — it lights up my whole day.",
  "I hope you always feel as loved as you are.",
  "I hope every year with you feels like the first one.",
];

function useDaysTogether() {
  const [days, setDays] = useState(0);
  useEffect(() => {
    setDays(Math.floor((Date.now() - START.getTime()) / 86_400_000));
  }, []);
  return days;
}

function burst(x = 0.5, y = 0.6) {
  confetti({
    particleCount: 70,
    spread: 75,
    startVelocity: 38,
    scalar: 0.9,
    origin: { x, y },
    colors: ["#e8c27a", "#f5e6c8", "#7a1f36", "#2b2a5e", "#ffffff"],
  });
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Anniversary() {
  const days = useDaysTogether();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const heroFade = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* backdrop */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${sky})` }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-0"
        style={{ backgroundImage: "var(--gradient-aurora)" }}
        aria-hidden="true"
      />
      <Particles />

      {/* scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-secondary via-primary to-secondary"
      />

      <div className="relative z-20">
        <Hero days={days} y={heroY} fade={heroFade} />
        <Memories />
        <Song />
        <Wishes />
        <Candle />
        <Letter />
        <Footer />
      </div>
    </main>
  );
}

function Hero({
  days,
  y,
  fade,
}: {
  days: number;
  y: ReturnType<typeof useTransform>;
  fade: ReturnType<typeof useTransform>;
}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div style={{ y, opacity: fade }} className="flex flex-col items-center">
        <motion.img
          src={butterfly}
          alt=""
          aria-hidden="true"
          width={640}
          height={640}
          className="float-slow h-20 w-20 drop-shadow-[0_0_30px_rgba(232,194,122,0.5)] sm:h-28 sm:w-28"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.p
          className="mt-6 font-sans text-xs uppercase tracking-[0.45em] text-primary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Two years of us
        </motion.p>
        <motion.h1
          className="gold-text mt-4 font-display text-6xl font-light leading-none sm:text-8xl md:text-9xl"
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Labubu
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl font-display text-lg italic text-foreground/80 sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
        >
          Happy 2nd Anniversary, my angel — my butterfly, my little LABUUBUBBUB.
        </motion.p>

        <motion.div
          className="glass mt-10 flex items-center gap-6 rounded-full px-7 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Stat value={days ? days.toLocaleString() : "—"} label="days" />
          <span className="h-8 w-px bg-border" />
          <Stat value="2" label="years" />
          <span className="h-8 w-px bg-border" />
          <Stat value="∞" label="more" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-primary/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.35em]">scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-primary/70 to-transparent" />
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl text-primary sm:text-3xl">{value}</p>
      <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="text-center text-[0.65rem] uppercase tracking-[0.4em] text-primary/80">
        {kicker}
      </p>
      <h2 className="gold-text mt-3 text-center font-display text-4xl font-light sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

function Memories() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <SectionTitle kicker="the little things" title="How lovely our memories are" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {memories.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.08}>
            <article
              className="glass lift group relative h-full rounded-3xl p-7"
              onMouseEnter={() => {
                if (i === 1) burst(Math.random() * 0.6 + 0.2, 0.5);
              }}
            >
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-primary/80">{m.tag}</p>
              <h3 className="mt-3 font-display text-3xl font-light text-foreground">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{m.body}</p>
              <p className="mt-5 border-t border-border pt-4 font-script text-xl text-primary">
                {m.joke}
              </p>
              {i === 2 && (
                <img
                  src={lily}
                  alt="A lily, her favourite flower"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="float-slow pointer-events-none absolute -right-3 -top-8 h-20 w-20 opacity-90"
                />
              )}
              {i === 3 && (
                <img
                  src={plush}
                  alt="A little plush, my Labubu"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="float-slow pointer-events-none absolute -right-4 -top-10 h-24 w-24"
                />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Song() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionTitle kicker="press play" title="Our song" />
      <Reveal delay={0.1}>
        <div className="glass mt-10 overflow-hidden rounded-3xl p-3">
          <iframe
            title="Our song on Spotify"
            src="https://open.spotify.com/embed/track/5TTGoX70AFrTvuEtqHK37S?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-2xl"
          />
        </div>
      </Reveal>
    </section>
  );
}

function Wishes() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <SectionTitle kicker="for the years ahead" title="Everything I wish for you" />
      <div className="mt-14 flex flex-wrap justify-center gap-5">
        {wishes.map((w, i) => (
          <Reveal key={w} delay={i * 0.07}>
            <motion.p
              whileHover={{ rotate: 0, y: -8 }}
              style={{ rotate: i % 2 ? 1.6 : -1.8 }}
              className="glass max-w-xs cursor-default rounded-2xl px-6 py-7 font-display text-xl font-light leading-snug text-foreground/90"
              onClick={() => burst(Math.random(), 0.7)}
            >
              {w}
            </motion.p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Candle() {
  const [blown, setBlown] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const blow = () => {
    if (blown) return;
    setBlown(true);
    const rect = ref.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;
    burst(x, y);
    setTimeout(() => burst(x - 0.2, y), 220);
    setTimeout(() => burst(x + 0.2, y), 420);
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <SectionTitle kicker="make a wish" title="Blow the candle" />
      <Reveal delay={0.1}>
        <button
          ref={ref}
          onClick={blow}
          className="glass lift mx-auto mt-12 flex w-full max-w-sm flex-col items-center rounded-3xl px-8 py-10"
          aria-label="Blow out the candle"
        >
          <div className="relative flex h-28 w-14 items-end justify-center">
            {!blown && (
              <span
                className="absolute -top-2 h-9 w-5 rounded-full bg-gradient-to-t from-secondary via-primary to-primary-foreground blur-[2px]"
                style={{ animation: "flicker 0.8s ease-in-out infinite" }}
              />
            )}
            <span className="absolute -top-3 h-1 w-1 rounded-full bg-primary/70" />
            <span className="h-20 w-6 rounded-t-md bg-gradient-to-b from-primary-foreground/90 to-secondary/70" />
          </div>
          <p className="mt-6 text-sm tracking-wide text-foreground/80">
            {blown ? "Wish made. I hope it's a big one. 🤍" : "Tap the candle, my love"}
          </p>
        </button>
      </Reveal>

      {blown && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 font-display text-2xl italic text-primary"
        >
          Two years ago we started writing our story… keep scrolling for the next page.
        </motion.p>
      )}
    </section>
  );
}

function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <SectionTitle kicker="the last page" title="A letter for you" />
      <Reveal delay={0.1}>
        {!open ? (
          <button
            onClick={() => {
              setOpen(true);
              burst(0.5, 0.55);
            }}
            className="glass lift mx-auto mt-12 block rounded-full px-10 py-4 font-display text-xl text-primary"
          >
            Open my letter
          </button>
        ) : (
          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="glass mt-12 space-y-5 rounded-3xl p-8 text-[0.98rem] leading-relaxed text-foreground/85 sm:p-12"
          >
            <h3 className="gold-text font-display text-3xl font-light">
              Happy 2nd Anniversary, My Angel
            </h3>
            <p>
              Two years with you… and somehow, I still don't have enough words to explain how lucky
              I feel to have you in my life.
            </p>
            <p>You are one of the most beautiful things that ever happened to me.</p>
            <p>
              I hope you achieve every dream you have, and I hope life gives you all the happiness
              you deserve.
            </p>
            <p>
              I hope you always keep that beautiful smile, because you don't even know how much it
              means to me and how much brighter my days become when I see it.
            </p>
            <p>
              I'll love you now, tomorrow, and forever. And every single day, I'll be more and more
              proud of you — proud of the person you are and the person you're becoming.
            </p>
            <p>
              Thank you for every moment, every laugh, every memory, and for simply being you.
            </p>
            <p>
              Two years ago, we started writing our story… and I still want every next page to be
              with you.
            </p>
            <p className="font-display text-2xl italic text-primary">
              And NEVER forget!! No matter how much you grow up, you'll always be my little
              LABUUBUBBUB.
            </p>
            <p className="font-script text-3xl text-primary">
              I love you sooo much, my butterfly.
            </p>
          </motion.article>
        )}
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 px-6 pb-20 pt-10 text-center">
      <img
        src={butterfly}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={640}
        height={640}
        className="float-slow h-14 w-14 opacity-80"
      />
      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
        05.04.2025 — forever
      </p>
    </footer>
  );
}
