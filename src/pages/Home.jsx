import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


/* ================================================================
   1. HERO — Full-bleed black/white minimalist with furniture imagery
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages.map(img => img.url);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-navy-950">
      {/* Background carousel with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt={hero.backgroundImages[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        {/* Black cinematic overlay — strong */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 z-[1]" />
      </motion.div>

      {/* Slide indicators — right edge */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-[2px] transition-all duration-700 ${
              i === currentSlide ? 'h-10 bg-white' : 'h-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Thin white line accent — top left */}
      <div className="absolute top-[22%] left-0 w-16 sm:w-24 h-[1px] bg-white/60 z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ y: textY, opacity }}
      >
        {/* Thin accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-12 h-[1px] bg-white mb-8 origin-left"
        />

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/40 text-[11px] sm:text-xs font-light uppercase tracking-[0.35em] mb-8"
        >
          {hero.badge}
        </motion.p>

        {/* Giant stacked text — editorial style */}
        <div className="overflow-hidden">
          {['FURNITURE', '/', 'REDEFINED.'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.85] tracking-tight ${
                  word === '/' ? 'text-white/15 font-light' : 'text-white font-bold'
                }`}
                style={{ fontSize: word === '/' ? 'clamp(2rem, 7vw, 4.5rem)' : 'clamp(3rem, 7vw, 4.5rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-white/35 text-sm sm:text-base max-w-md mt-10 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-heading text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-500 hover:bg-white/90"
          >
            {hero.ctaPrimary}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border border-white/20 text-white/70 px-8 py-4 font-heading text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-500 hover:border-white/50 hover:text-white"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-light">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* Side text */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <span className="text-white/8 text-[9px] uppercase tracking-[0.5em] font-light" style={{ writingMode: 'vertical-rl' }}>
          Koopfurn &mdash; Johannesburg, South Africa
        </span>
      </div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE TICKER — Minimal black/white
   ================================================================ */
function MarqueeTicker() {
  const items = ['LIVING', 'DINING', 'BEDROOM', 'OFFICE', 'OUTDOOR', 'BESPOKE', 'LEATHER', 'HARDWOOD', 'CRAFTSMANSHIP'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-white border-y border-black/5 py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-5 mx-5">
            <span className="text-black font-heading text-lg sm:text-2xl font-bold uppercase tracking-[0.15em]">
              {item}
            </span>
            <span className="text-black/10 text-xs">&mdash;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT — Editorial story section
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="w-10 h-[1px] bg-black mb-8" />
            <p className="text-black/30 text-[11px] uppercase tracking-[0.35em] mb-6 font-light">About Koopfurn</p>
            <h2
              className="font-heading font-bold text-black leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              CRAFTED WITH<br />
              <span className="text-black/20">INTENT.</span> BUILT TO<br />
              INSPIRE.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Koopfurn was born from frustration. Too many furniture stores offered either style without substance
              or durability without design. We set out to prove that premium quality and contemporary aesthetics
              could coexist.
            </p>
            <p className="text-black/35 text-sm leading-relaxed max-w-lg">
              Starting from a single showroom in Johannesburg, we built our reputation on material integrity.
              Solid hardwoods. Full-grain leathers. Precision-milled metals. Today, over 3,000 spaces across
              South Africa carry the Koopfurn name.
            </p>

            <div className="w-full h-px bg-black/5 my-10" />

            <div className="flex gap-10 sm:gap-14">
              <div>
                <div className="text-black font-heading text-3xl sm:text-4xl font-bold">2015</div>
                <div className="text-black/30 text-[10px] uppercase tracking-[0.2em] mt-1">Founded</div>
              </div>
              <div>
                <div className="text-black font-heading text-3xl sm:text-4xl font-bold">3K+</div>
                <div className="text-black/30 text-[10px] uppercase tracking-[0.2em] mt-1">Deliveries</div>
              </div>
              <div>
                <div className="text-black font-heading text-3xl sm:text-4xl font-bold">62</div>
                <div className="text-black/30 text-[10px] uppercase tracking-[0.2em] mt-1">Reviews</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                  alt="Premium furniture showroom"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
                  alt="Interior design detail"
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Black badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-black text-white p-5 sm:p-7 shadow-2xl">
                <div className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-bold leading-none">9+</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-light mt-2 text-white/60">
                    Years of<br />Craft
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. COLLECTIONS GRID — 6 service cards with image backgrounds
   ================================================================ */
function CollectionsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  const collectionImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  ];

  return (
    <section ref={ref} className="bg-navy-950 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-18"
        >
          <div className="w-10 h-[1px] bg-white/40 mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-white/25 text-[11px] uppercase tracking-[0.35em] mb-4 font-light">Collections</p>
              <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                EVERY ROOM.<br /><span className="text-white/20">ELEVATED.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group text-white/25 text-[11px] uppercase tracking-[0.25em] font-light flex items-center gap-2 hover:text-white transition-colors duration-500"
            >
              All Collections
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesPreview.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              <Link
                to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                className="group relative block overflow-hidden aspect-[3/4]"
              >
                <img
                  src={collectionImages[i]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Number */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="text-white/10 font-heading text-5xl font-bold leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/50 text-sm leading-relaxed transition-all duration-700 max-h-0 group-hover:max-h-24 overflow-hidden font-light">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-white opacity-0 group-hover:opacity-60 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-light">Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>

                {/* Bottom border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. HORIZONTAL GALLERY — Curated spaces
   ================================================================ */
function HorizontalGallery() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', caption: 'The Sandton Suite' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80', caption: 'Executive Collection' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', caption: 'Waterfall Residence' },
    { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', caption: 'Contemporary Living' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80', caption: 'Design Studio' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', caption: 'Bedroom Suite' },
  ];

  return (
    <section ref={containerRef} className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="w-10 h-[1px] bg-black mb-8" />
            <p className="text-black/25 text-[11px] uppercase tracking-[0.35em] mb-4 font-light">Portfolio</p>
            <h2 className="font-heading font-bold text-black leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
              CURATED <span className="text-black/15">SPACES</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group text-black/25 text-[11px] uppercase tracking-[0.25em] font-light flex items-center gap-2 hover:text-black transition-colors duration-500"
          >
            View All
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className="flex gap-3 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center transition-transform duration-[1s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-white/40 font-heading text-[10px] uppercase tracking-[0.3em] font-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="text-white font-heading text-sm uppercase tracking-wide font-bold mt-1">
                  {img.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   6. STATS BAND — Minimal black on white
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { number: '3000', suffix: '+', label: 'Pieces Delivered' },
    { number: '9', suffix: '+', label: 'Years of Craft' },
    { number: '62', suffix: '', label: 'Five-Star Reviews' },
    { number: '35', suffix: '+', label: 'Design Specialists' },
  ];

  return (
    <section ref={ref} className="relative bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <AnimatedCounter target={stat.number} duration={2} />
                {stat.suffix && <span className="text-white/30">{stat.suffix}</span>}
              </div>
              <div className="text-white/20 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-light mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. TESTIMONIALS — Clean centered carousel
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Quotes size={36} weight="fill" className="text-black/5 mx-auto mb-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-black/70 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-10 font-heading">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[1px] bg-black/20 mb-3" />
                <div className="text-black font-heading text-sm uppercase tracking-[0.2em] font-bold">
                  {t.name}
                </div>
                <div className="text-black/30 text-[11px] uppercase tracking-[0.2em] font-light">
                  {t.role}
                </div>
                <div className="flex items-center gap-0.5 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={11} weight="fill" className="text-black/70" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/25 hover:text-black hover:border-black/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={14} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[1px] transition-all duration-500 ${
                    i === active ? 'w-8 bg-black' : 'w-3 bg-black/10 hover:bg-black/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/25 hover:text-black hover:border-black/30 transition-colors"
              aria-label="Next testimonial"
            >
              <CaretRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   8. CTA — Full-Bleed Photo with Editorial Text
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={homeCta.backgroundImage}
          alt={homeCta.backgroundAlt}
          className="w-full h-[130%] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-10" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            YOUR SPACE<br />
            <span className="text-white/20">DESERVES</span> BETTER.
          </h2>

          <p className="text-white/35 text-sm sm:text-base max-w-lg mx-auto mb-12 leading-relaxed font-light">
            {homeCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-heading text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-500 hover:bg-white/90"
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/30 text-green-400 px-8 py-4 font-heading text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-500 hover:bg-green-500/10 hover:border-green-500/50"
            >
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME — Assembled
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <CollectionsGrid />
      <HorizontalGallery />
      <StatsBand />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
