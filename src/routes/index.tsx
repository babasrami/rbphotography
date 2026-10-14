import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const S = "https://static.showit.co/";
const img = (p: string) => (p.startsWith("http") || p.startsWith("/") || p.startsWith("images/") ? p : S + p);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RB Photography · Patras, Greece | Rami Babas" },
      {
        name: "description",
        content:
          "RB Photography: wedding, portrait, nature and architecture photography by Rami Babas, based in Patras, Greece and available to travel worldwide.",
      },
      { property: "og:title", content: "RB Photography · Patras, Greece" },
      {
        property: "og:description",
        content:
          "Light, patience, and the frame in between. Weddings, portraits, wild places and architecture, photographed by Rami Babas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "images/og.jpg" },
      { name: "twitter:image", content: "images/og.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito+Sans:300,500|Libre+Franklin:300&display=swap",
      },
      { rel: "icon", href: "favicon.svg" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["WORK", "#work"],
  ["ABOUT", "#about"],
  ["EXPERIENCE", "#experience"],
  ["QUESTIONS", "#faq"],
  ["CONTACT", "#contact"],
] as const;

const CONTACT_EMAIL = "mailto:babas.rami@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/r_0005_r";

// Central media list - easily replace any URL with your own photos or "images/your-photo.jpg"
const HERO = [
  "https://res.cloudinary.com/rar7lstj/image/upload/IMG_20261006_161214.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/1.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/hero2.jpg",
];

const COLLAGE = [
  "https://res.cloudinary.com/rar7lstj/image/upload/RAM_2429.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/RAM_2704.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/RAM_1279.jpg",
  "400/GGFmQcrYOP1vQLyAQx7NVA/245374/miller-wedding-featured-0168.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/rwetwt.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/23523532.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/qeqweqw.jpg",
  "400/ctnKdS21TVCwDLKFuFlASA/245374/contact-sheet-square.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/RAM_5434.jpg",
];

const GRID = [
  "800/ljSTew8vTdyjX51XTsrCAQ/245374/pentax67-p400-california-0054.jpg",
  "800/AFkkDcSVQx4hbILdgF1GfQ/245374/degitz-wedding-film-0074.jpg",
  "800/-qBolNMuSyiZIE6yLxN7SQ/245374/3004302-r1-e011.jpg",
  "800/YT8ktoJFyZ7uNBqI8zNheg/245374/rushton-wedding-6486.jpg",
  "800/hZKXaKoVTlaSff8N0beZ0A/245374/fay-wedding-0775.jpg",
  "800/Cqw_XJWy1KOR14dtW_B9GA/245374/roll-wedding-0261.jpg",
  "800/vUrajhVZNHLTTSWA6p3lTg/245374/trotter-slideshow-0105.jpg",
  "800/ZqYq2xqpqxovmfpP-ag9Pw/245374/miller-wedding-featured-0161.jpg",
  "800/Trsc5jKFTUW8GKKqfQzabQ/245374/miller-wedding-featured-0080.jpg",
  "800/F8vZBrMvwsrjruKpg78uvQ/245374/kostas-wedding-film-1141-small.jpg",
];

const PORTFOLIO_TRIO = [
  "https://res.cloudinary.com/rar7lstj/image/upload/RAM_5624bw.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/pl.jpg",
  "https://res.cloudinary.com/rar7lstj/image/upload/RAM_3644.jpg",
];

const HEIRLOOMS = [
  "400/ZwC2TgBDRe2Fs51o16HCPg/shared/3004295-r1-e004.jpg",
  "400/u9jt5-VWQyKIdHM130VaHw/shared/hickswedding-delta-p67-0493.jpg",
  "800/5Pfn_PUMzHLkI5RgS7ty1Q/245374/dscf8461.jpg",
  "800/1DC3iQJLSF-GB82D3z3xLA/shared/386112427_1386859642183418_4639392566103905489_nfull.jpg",
];

const TESTIMONIALS = [
  {
    name: "BEAUTIFUL MOMENTS",
    text: "“We do not remember days; we remember moments.”",
    img: "https://res.cloudinary.com/rar7lstj/image/upload/plbw.jpg",
  },
  {
    name: "TRAVEL & ESCAPES",
    text: "“Collect moments, not things.”",
    img: "https://res.cloudinary.com/rar7lstj/image/upload/plbw.jpg",
  },
  {
    name: "STORIES & TIMELINES",
    text: "“Memories are keyholes to the past, holding the stories that shaped us.”",
    img: "https://res.cloudinary.com/rar7lstj/image/upload/plbw.jpg",
  },
  {
    name: "SPACES & ATMOSPHERE",
    text: "“Places are not just locations; they are vessels for the memories we leave behind.”",
    img: "https://res.cloudinary.com/rar7lstj/image/upload/plbw.jpg",
  },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Pic({ src, className = "", alt = "" }: { src: string; className?: string; alt?: string }) {
  return <img src={img(src)} alt={alt} loading="lazy" className={`reveal object-cover ${className}`} />;
}

function Header({ show }: { show: boolean }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-[50px] bg-background/95 backdrop-blur-sm border-b border-border/50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-[30px]">
        <a href="#hero" className="font-display text-[15px] md:text-[17px] tracking-[0.18em] text-foreground uppercase font-medium hover:opacity-80 transition-opacity">
          <span className="font-bold">RB</span> Photography
        </a>
        <nav className="hidden gap-8 md:flex">
          {NAV.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="eyebrow text-[10px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-ink !h-[28px] px-5 !text-[10px]">
          GET IN TOUCH
        </a>
      </div>
    </header>
  );
}

function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex bg-ink text-ink-foreground transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-8 top-6 font-display text-3xl cursor-pointer hover:opacity-70 transition-opacity"
      >
        ×
      </button>
      <div className="m-auto flex flex-col items-center gap-6">
        <span className="eyebrow mb-2 opacity-60 text-[10px] tracking-[0.3em]">RB PHOTOGRAPHY · PATRAS, GREECE</span>
        {NAV.map(([l, h]) => (
          <a
            key={l}
            href={h}
            onClick={onClose}
            className="h-caps text-3xl transition-opacity hover:opacity-60 md:text-5xl"
          >
            {l}
          </a>
        ))}
        <a
          href={CONTACT_EMAIL}
          onClick={onClose}
          className="mt-4 font-display text-2xl italic font-light opacity-80 hover:opacity-100 transition-opacity"
        >
          get in touch
        </a>
      </div>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [t, setT] = useState(0);

  useReveal();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <main className="overflow-x-hidden bg-cream">
      <Header show={scrolled} />
      <Menu open={menu} onClose={() => setMenu(false)} />

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[620px] overflow-hidden bg-ink">
        {HERO.map((h, i) => (
          <img
            key={h}
            src={img(h)}
            alt=""
            className="hero-slide absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/25" />

        <button
          onClick={() => setMenu(true)}
          aria-label="Open menu"
          className="absolute right-[34px] top-[44px] z-10 flex flex-col items-center gap-[4px] text-ink-foreground cursor-pointer hover:opacity-80 transition-opacity"
        >
          {[0, 1, 2].map((k) => (
            <span key={k} className="block h-px w-[34px] bg-ink-foreground" />
          ))}
          <span className="eyebrow mt-8 text-[11px] [writing-mode:vertical-rl] tracking-[0.25em]">navigate</span>
        </button>

        <div className="absolute bottom-[6vh] left-[24px] md:left-[50px] max-w-[880px] text-ink-foreground z-10 pr-6">
          <p className="eyebrow mb-3 text-[11px] tracking-[0.25em] text-ink-foreground/80">RB Photography · Patras, Greece</p>
          <h1 className="font-display text-[clamp(36px,5.8vw,80px)] uppercase leading-[0.98] tracking-[0.06em] text-ink-foreground">
            Light, patience,<br />and the frame<br />in between.
          </h1>
          <p className="mt-4 max-w-[540px] text-[13px] md:text-[14px] leading-relaxed text-ink-foreground/85 font-light tracking-[0.03em]">
            Weddings, portraits, wild places and architecture, photographed by Rami Babas. Available to travel.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#work" className="btn-ink !h-[36px] px-6 !text-[10px] tracking-[0.18em]">
              Open the work
            </a>
            <a href="#contact" className="btn-ink !h-[36px] px-6 !bg-transparent border border-ink-foreground/40 !text-ink-foreground hover:!bg-ink-foreground/15 !text-[10px] tracking-[0.18em]">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* WHAT I PHOTOGRAPH / COLLAGE */}
      <section id="work" className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 py-16 md:py-24">
        {/* TOP ROW: Pair of editorial photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-6 lg:col-span-5 md:pl-4">
            <Pic src={COLLAGE[0]} className="w-full aspect-[4/5] object-cover object-center shadow-sm" alt="Weddings &amp; couples" />
          </div>
          <div className="md:col-span-6 lg:col-span-7 md:pb-10">
            <Pic src={COLLAGE[1]} className="w-full aspect-[3/4] md:aspect-[4/5] max-w-[580px] object-cover object-center shadow-sm" alt="Portrait photography" />
          </div>
        </div>

        {/* MIDDLE ROW: Photo + Editorial Card + Detail */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-5">
            <Pic src={COLLAGE[2]} className="w-full aspect-[4/5] object-cover object-center shadow-sm" alt="Authentic moments" />
          </div>
          
          {/* EDITORIAL CARD */}
          <div className="reveal lg:col-span-7 flex flex-col justify-center bg-sand/60 p-6 sm:p-10 border border-border/70">
            <h2 className="eyebrow text-[13px] text-foreground tracking-[0.2em]">What I photograph</h2>
            <p className="h-caps mt-2 text-[26px] md:text-[32px] leading-snug">Full days, told in order. Wild places and unhurried people.</p>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12px]">
              <div className="border-t border-border/80 pt-3">
                <span className="eyebrow text-[10px] text-muted-foreground block mb-1">01</span>
                <h3 className="font-display font-medium text-[15px] uppercase">Weddings &amp; couples</h3>
                <p className="text-muted-foreground text-[11px] mt-1 leading-snug">Full days, told in order. 7 photographs.</p>
              </div>
              <div className="border-t border-border/80 pt-3">
                <span className="eyebrow text-[10px] text-muted-foreground block mb-1">02</span>
                <h3 className="font-display font-medium text-[15px] uppercase">Portraits</h3>
                <p className="text-muted-foreground text-[11px] mt-1 leading-snug">People, close and unhurried. 4 photographs.</p>
              </div>
              <div className="border-t border-border/80 pt-3">
                <span className="eyebrow text-[10px] text-muted-foreground block mb-1">03</span>
                <h3 className="font-display font-medium text-[15px] uppercase">Nature</h3>
                <p className="text-muted-foreground text-[11px] mt-1 leading-snug">Wild places, unstaged. 28 photographs.</p>
              </div>
              <div className="border-t border-border/80 pt-3">
                <span className="eyebrow text-[10px] text-muted-foreground block mb-1">04</span>
                <h3 className="font-display font-medium text-[15px] uppercase">Architecture</h3>
                <p className="text-muted-foreground text-[11px] mt-1 leading-snug">Lines, light, and structure. 24 photographs.</p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <a href="#about" className="btn-ink !h-[40px] px-6 !text-[11px]">
                Behind the camera
              </a>
              <div className="w-32 sm:w-40">
                <Pic src={COLLAGE[3]} className="w-full aspect-[4/3] object-cover object-center shadow-sm" alt="Wedding detail" />
              </div>
            </div>
          </div>
        </div>

        {/* LOWER ROW: Editorial Trio */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-5">
            <Pic src={COLLAGE[4]} className="w-full aspect-[4/5] object-cover object-center shadow-sm" alt="Portraits in nature" />
          </div>
          <div className="lg:col-span-4 sm:translate-y-4 lg:translate-y-6">
            <Pic src={COLLAGE[5]} className="w-full aspect-[4/5] object-cover object-center shadow-sm" alt="Editorial portrait" />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <Pic src={COLLAGE[6]} className="w-full aspect-[4/5] object-cover object-center shadow-sm" alt="Story moment" />
          </div>
        </div>

        {/* BOTTOM PAIR: Film strip + Celebration */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 lg:col-span-4 flex justify-center">
            <Pic src={COLLAGE[7]} className="w-full max-w-[280px] aspect-[1/3] md:aspect-[1/2.6] object-cover object-center shadow-md" alt="Film contact strip" />
          </div>
          <div className="md:col-span-8 lg:col-span-8">
            <Pic src={COLLAGE[8]} className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover object-center shadow-sm" alt="Natural celebration" />
          </div>
        </div>
      </section>

      {/* 10-IMAGE PHOTO GRID */}
      <section className="relative z-0 my-16 md:my-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
        {GRID.map((g) => (
          <img key={g} src={img(g)} alt="" loading="lazy" className="aspect-square w-full object-cover object-center" />
        ))}
      </section>

      {/* APERTURE / STRIP */}
      <section className="bg-sand py-7 border-y border-border">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 px-8">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-[12px] font-semibold tracking-[0.2em] text-foreground">RB PHOTOGRAPHY</span>
            <span className="text-muted-foreground/60 hidden sm:inline">·</span>
            <span className="eyebrow text-[11px] text-muted-foreground hidden sm:inline">PATRAS, GREECE</span>
          </div>
          <div className="flex items-center gap-6 text-[12px] text-muted-foreground font-mono tracking-widest">
            <span>f/1.4</span><span>f/2</span><span>f/2.8</span><span>f/4</span><span>f/5.6</span><span>f/8</span>
          </div>
          <div className="eyebrow text-[10px] tracking-[0.2em] text-foreground/80">
            WEDDINGS · PORTRAITS · NATURE · ARCHITECTURE
          </div>
        </div>
      </section>

      {/* ABOUT (BEHIND THE CAMERA) */}
      <section id="about" className="mx-auto grid max-w-[1280px] items-center gap-10 md:gap-14 px-6 sm:px-8 py-16 md:py-28 md:grid-cols-[minmax(0,457px)_1fr] md:pl-12 lg:pl-24">
        <Pic src="https://res.cloudinary.com/rar7lstj/image/upload/me.png" className="w-full max-w-[457px] mx-auto aspect-[4/5] object-cover object-center shadow-md" alt="Rami Babas" />
        <div className="reveal max-w-[560px]">
          <h2 className="eyebrow text-[14px] text-muted-foreground">Behind the camera</h2>
          <p className="h-caps mt-3 text-[28px] sm:text-[32px] leading-tight">Every scene holds a feeling before it is ever captured</p>
          
          <div className="mt-5 space-y-4 text-[13px] leading-[1.95] tracking-[0.04em] text-foreground/90">
            <p>
              As a kid, I was always captivated by photos—looking at them for hours, examining every detail, and asking myself: what if we changed the pose, the color, or the position of something in the frame? How would it look? I always wondered how the whole scene truly looked in reality before it was captured and put on a frame, physically or digitally.
            </p>
            <p>
              That deep admiration grew into a commitment to save every moment and scene I encountered, turning fleeting life into a physical memory not just held in mind. I started photography as a childhood hobby and learned brick by brick how to observe light, how to capture natural authenticity, and how to make it look better in real life before any edit.
            </p>
            <p>
              That's how my journey started, and I found my comfort and purpose in it—a craft I love and plan to continue doing forever. Today, I shoot as <b>RB Photography</b>, working across wedding days, landscape and nature work, architecture, and portraits. Every set starts the same way: I show up early and stay until the light is gone. Based in Patras, Greece, and available to travel worldwide.
            </p>
          </div>

          <a href="#contact" className="btn-ink mt-7 !h-[40px] px-8 !text-[11px]">
            Get in touch
          </a>
        </div>
      </section>

      {/* QUOTE + SELECTED WORK */}
      <section className="relative">
        <div className="relative z-10 mx-auto w-[680px] max-w-[92%] bg-quote px-6 sm:px-10 py-7 text-center text-ink-foreground shadow-lg">
          <p className="font-display text-[22px] sm:text-[28px] font-light italic leading-tight">"Light, patience, and the frame in between."</p>
          <h2 className="eyebrow mt-3 text-[10px] tracking-[0.25em]">RAMI BABAS · RB PHOTOGRAPHY</h2>
        </div>
        <div className="-mt-[50px] sm:-mt-[74px] bg-sand pt-[130px] sm:pt-[180px] pb-8">
          <h2 className="text-center font-display text-[clamp(42px,9vw,130px)] uppercase leading-none tracking-[0.08em]">selected work</h2>
        </div>
        
        <div className="bg-cream pt-4 pb-20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10">
            {/* 3-IMAGE TRIPTYCH */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-8 items-center">
              <div className="order-2 md:order-1 md:col-span-3">
                <Pic src={PORTFOLIO_TRIO[0]} className="w-full aspect-[3/4] object-cover object-center shadow-md mx-auto max-w-[360px]" alt="Series 1" />
              </div>
              <div className="order-1 md:order-2 md:col-span-6">
                <Pic src={PORTFOLIO_TRIO[1]} className="w-full aspect-[4/5] object-cover object-center shadow-xl mx-auto max-w-[540px]" alt="Series 2" />
              </div>
              <div className="order-3 md:order-3 md:col-span-3">
                <Pic src={PORTFOLIO_TRIO[2]} className="w-full aspect-[3/4] object-cover object-center shadow-md mx-auto max-w-[360px]" alt="Series 3" />
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#work" className="btn-ink !h-[52px] md:!h-[58px] px-10 md:px-16 !text-[13px] md:!text-[15px] font-semibold tracking-[0.18em]">
                VIEW THE SERIES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative mx-auto grid max-w-[1280px] gap-10 md:gap-14 px-6 sm:px-8 py-16 md:py-24 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 flex flex-col md:flex-row items-center gap-6">
          <h2 className="hidden md:block font-display text-[44px] lg:text-[54px] uppercase leading-none tracking-[0.12em] text-blush [writing-mode:vertical-rl] rotate-180 select-none">From Our Clients</h2>
          <h2 className="block md:hidden eyebrow text-[12px] tracking-[0.25em] text-muted-foreground self-start">From Our Clients</h2>
          <Pic src={TESTIMONIALS[t]!.img} className="w-full max-w-[480px] aspect-[4/5] object-cover object-center shadow-sm mx-auto" alt="Client memories" />
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <p key={t} className="reveal in font-display text-[22px] sm:text-[26px] leading-[1.35] text-foreground">
            {TESTIMONIALS[t]!.text}
          </p>
          <div className="mt-10 sm:mt-14 flex flex-col gap-4">
            {TESTIMONIALS.map((x, i) => (
              <button
                key={x.name}
                onClick={() => setT(i)}
                className={`text-left text-[16px] sm:text-[18px] md:text-[20px] font-medium uppercase tracking-wide transition-colors ${
                  i === t ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground"
                }`}
              >
                {x.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NOSTALGIA / HONEST LIGHT */}
      <section className="bg-ink py-16 md:py-20 text-ink-foreground">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:gap-12 px-6 sm:px-8 md:grid-cols-12">
          <div className="reveal md:col-span-5 md:pl-6 lg:pl-12">
            <h2 className="h-caps text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15]">
              Unrushed moments,<br />framed with <em className="font-light italic">soul &amp; light</em>
            </h2>
            <h2 className="eyebrow mt-4 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-ink-foreground/80">
              saving every scene into physical memory<br />before editing, true to life
            </h2>
            <a href="#work" className="btn-ink mt-7 !h-[40px] px-8 !bg-blush/40 !text-[11px]">
              Selected work
            </a>
          </div>
          <div className="md:col-span-7">
            <Pic src="800/wh2tXif8TwiT5ND0V7TTGw/245374/contact-sheet-tri-x-annie.jpg" className="w-full max-h-[640px] aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[620px] object-cover object-center shadow-lg" alt="Film contact sheet" />
          </div>
        </div>
      </section>

      {/* PHYSICAL MEMORIES / HEIRLOOMS */}
      <section className="bg-sand py-16 md:py-24 border-y border-border">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Large Vertical Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <Pic src={HEIRLOOMS[2]} className="w-full max-w-[380px] aspect-[4/5] object-cover object-center shadow-md" alt="Heirloom photo 3" />
            </div>

            {/* Center Editorial Text Card */}
            <div className="reveal lg:col-span-4 text-center px-4">
              <h2 className="eyebrow text-[13px] text-muted-foreground tracking-[0.2em]">Physical memories</h2>
              <p className="h-caps mt-3 text-[26px] md:text-[30px] leading-snug">A physical memory, not only in the mind</p>
              <p className="mt-5 text-[13px] leading-[2] tracking-[0.05em] text-foreground/85">
                Photographs belong off screens and into real life. Preserving your story through fine-art archival prints and bespoke albums that can be held in hands, passed down, and kept forever ♾️.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Pic src={HEIRLOOMS[0]} className="w-28 sm:w-32 aspect-square object-cover object-center shadow-sm" alt="Heirloom photo 1" />
                <Pic src={HEIRLOOMS[1]} className="w-28 sm:w-32 aspect-square object-cover object-center shadow-sm" alt="Heirloom photo 2" />
              </div>
            </div>

            {/* Right Wide Feature Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <Pic src={HEIRLOOMS[3]} className="w-full max-w-[440px] aspect-[4/3] object-cover object-center shadow-md" alt="Heirloom photo 4" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative bg-cream">
        {/* Wide Top Banner */}
        <div className="w-full h-[260px] sm:h-[360px] md:h-[460px] overflow-hidden">
          <img
            src={img("1600/lgL5CFq-Ry27s3gtf8pmTQ/shared/mamiya7-p800-ny-0275.jpg")}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Portrait Image (overlapping banner on lg:) */}
            <div className="lg:col-span-5 lg:-mt-28 relative z-10 flex justify-center">
              <Pic src="https://res.cloudinary.com/rar7lstj/image/upload/old.jpg" className="w-full max-w-[440px] aspect-[4/5] object-cover object-center shadow-xl border-4 border-cream" alt="Wedding ceremony prep" />
            </div>

            {/* Right Content: Title + Center Photo + Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="reveal">
                <h2 className="eyebrow text-[13px] text-muted-foreground tracking-[0.2em]">The RB Photography Experience</h2>
                <p className="h-caps mt-3 text-[26px] sm:text-[30px] md:text-[34px] leading-tight">Show up early. Stay until the light is gone.</p>
              </div>

              {/* Framed Center Photo */}
              <div className="reveal">
                <Pic src="https://res.cloudinary.com/rar7lstj/image/upload/88888.jpg" className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover object-center border-[5px] md:border-[6px] border-ink shadow-lg" alt="Couple by the sea" />
              </div>

              {/* Career Timeline List */}
              <div className="reveal pt-4">
                <div className="space-y-4 text-[12px] leading-[1.85] tracking-[0.04em] text-foreground/90">
                  <div className="border-b border-border/80 pb-3">
                    <span className="eyebrow text-[10px] font-bold text-primary block">2026 · PHOTOGRAPHER</span>
                    <p className="font-medium mt-0.5">Pixel Holidays at Mitsis Hotels, Greece</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Guest and resort photography through the summer season.</p>
                  </div>
                  <div className="border-b border-border/80 pb-3">
                    <span className="eyebrow text-[10px] font-bold text-primary block">2022–2023 · WEDDING PHOTOGRAPHER</span>
                    <p className="font-medium mt-0.5">Ochen Salle des Fêtes, Sétif</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Full wedding-day coverage, from preparations through to the reception.</p>
                  </div>
                  <div className="pb-1">
                    <span className="eyebrow text-[10px] font-bold text-primary block">2017–2019 · EVENT PHOTOGRAPHY</span>
                    <p className="font-medium mt-0.5">Volunteer Celebrations</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Where I learned to work a room and stay out of the way at the same time.</p>
                  </div>
                </div>
                <a href="#contact" className="btn-ink mt-6 !h-[42px] px-8 !text-[11px]">
                  Book a shoot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS / FAQ */}
      <section id="faq" className="bg-sand py-24 border-t border-border">
        <div className="mx-auto max-w-[960px] px-8">
          <div className="text-center mb-14">
            <span className="eyebrow text-[12px] text-muted-foreground tracking-[0.25em]">Good to know</span>
            <h2 className="h-caps text-[36px] md:text-[42px] mt-2">Questions &amp; Details</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-background border border-border p-6 transition-all duration-300 open:shadow-sm" open>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="font-display text-[19px] md:text-[21px] text-foreground group-open:text-primary">Where are you based?</h3>
                <span className="text-xl text-muted-foreground transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[13px] leading-relaxed text-foreground/85 border-t border-border/60 pt-4">
                Patras, Greece. I am based in Greece and available to travel for weddings, portraits, and commissions worldwide.
              </p>
            </details>

            <details className="group bg-background border border-border p-6 transition-all duration-300 open:shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="font-display text-[19px] md:text-[21px] text-foreground group-open:text-primary">What do you photograph?</h3>
                <span className="text-xl text-muted-foreground transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[13px] leading-relaxed text-foreground/85 border-t border-border/60 pt-4">
                Weddings and couples, unhurried portraits, wild nature &amp; landscapes, and architecture.
              </p>
            </details>

            <details className="group bg-background border border-border p-6 transition-all duration-300 open:shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="font-display text-[19px] md:text-[21px] text-foreground group-open:text-primary">Have you photographed full wedding days?</h3>
                <span className="text-xl text-muted-foreground transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[13px] leading-relaxed text-foreground/85 border-t border-border/60 pt-4">
                Yes. I covered full wedding days from preparations to the reception at Ochen Salle des Fêtes in Sétif, Algeria, in 2022 and 2023, along with event photography since 2017.
              </p>
            </details>

            <details className="group bg-background border border-border p-6 transition-all duration-300 open:shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="font-display text-[19px] md:text-[21px] text-foreground group-open:text-primary">How do I book a shoot?</h3>
                <span className="text-xl text-muted-foreground transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[13px] leading-relaxed text-foreground/85 border-t border-border/60 pt-4">
                Email me at <a href={CONTACT_EMAIL} className="underline font-medium text-foreground">babas.rami@gmail.com</a> or message me on Instagram <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline font-medium text-foreground">@r_0005_r</a>. Tell me what you're planning and when!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* INQUIRE / CONTACT */}
      <section id="contact" className="relative flex min-h-[720px] md:h-[900px] items-center justify-center overflow-hidden text-ink-foreground py-20">
        <video
          poster="https://res.cloudinary.com/rar7lstj/image/upload/sasas.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-[620px] px-6 text-center">
          <span className="eyebrow text-[11px] tracking-[0.3em] text-ink-foreground/80 block mb-3">GET IN TOUCH</span>
          <h2 className="h-caps text-[36px] md:text-[42px] font-normal leading-tight">Let's talk about your day</h2>
          <p className="mt-4 text-[13px] md:text-[14px] leading-[1.9] tracking-[0.05em] text-ink-foreground/90">
            Weddings, portrait sessions, or a building worth photographing properly. Based in Patras, Greece — available to travel worldwide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={CONTACT_EMAIL} className="btn-ink !h-[42px] px-7 !bg-blush !text-[11px] !text-foreground font-semibold hover:opacity-90">
              EMAIL ME
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink !h-[42px] px-7 !bg-transparent border border-ink-foreground/60 !text-ink-foreground hover:!bg-ink-foreground/15 !text-[11px] font-semibold"
            >
              INSTAGRAM @R_0005_R
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink px-[30px] pb-8 pt-24 text-ink-foreground border-t border-ink-foreground/10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-3">
          <div>
            <a href="#hero" className="font-display text-[22px] tracking-[0.18em] text-ink-foreground uppercase font-medium">
              <span className="font-bold">RB</span> Photography
            </a>
            <p className="h-caps mt-4 text-[15px] font-normal leading-snug opacity-90">
              Wedding, portrait, nature and architecture photography.<br />Patras, Greece. Available to travel.
            </p>
            <a href={CONTACT_EMAIL} className="eyebrow mt-6 block text-[10px] text-ink-foreground/80 hover:text-ink-foreground transition-colors">
              babas.rami@gmail.com
            </a>
            <div className="mt-4 flex gap-4 text-[12px]">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="eyebrow text-[10px] underline text-ink-foreground/80 hover:text-ink-foreground">
                Instagram @r_0005_r
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="font-display text-[26px] font-light italic leading-[1]">let's capture a</p>
            <h2 className="h-caps mt-1 text-[26px] md:text-[28px] font-normal tracking-[0.2em]">physical memory</h2>
            <div className="mt-4 flex justify-center gap-[10px]">
              {[
                "200/to2yMKjsRLea8z7-Fzh-LA/shared/1012968-r1-033-15.jpg",
                "400/RqM2xJN0Tm62TkYJ8J9lgQ/shared/basha-slideshow-0120.jpg",
                "400/SPMUpo75TzabfzncZtmLUw/shared/leica-p800-mckinley-0181.jpg",
              ].map((s) => (
                <img key={s} src={img(s)} alt="" className="h-[143px] w-[114px] object-cover object-center" loading="lazy" />
              ))}
            </div>
            <a href={CONTACT_EMAIL} className="btn-ink mt-8 !h-[42px] px-8 !bg-blush !text-[11px] !text-foreground font-semibold hover:opacity-90">
              GET IN TOUCH
            </a>
          </div>

          <div className="text-right">
            <h2 className="h-caps mr-1 text-[18px] font-normal tracking-[0.2em]">explore</h2>
            <div className="mt-4 ml-auto grid w-fit grid-cols-2 gap-x-6 gap-y-3 text-[10px] eyebrow">
              <a href="#hero" className="hover:text-ink-foreground/70 transition-colors">home</a>
              <a href="#work" className="hover:text-ink-foreground/70 transition-colors">work</a>
              <a href="#about" className="hover:text-ink-foreground/70 transition-colors">about</a>
              <a href="#experience" className="hover:text-ink-foreground/70 transition-colors">experience</a>
              <a href="#faq" className="hover:text-ink-foreground/70 transition-colors">questions</a>
              <a href="#contact" className="hover:text-ink-foreground/70 transition-colors">contact</a>
            </div>
          </div>
        </div>
        <p className="eyebrow mt-16 text-center md:text-left text-[9px] opacity-70">
          © 2026 RB Photography · Rami Babas · All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
