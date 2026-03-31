import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PropertyCard from '../components/PropertyCard.jsx'

/* ─── Data ───────────────────────────────────────────────── */
const FEATURED = [
  {
    image: '/images/1.jpg',
    tag: 'Palm Jumeirah · Frond M',
    title: 'The Sovereign Villa',
    subtitle: '7 BR · Private Beach · Helipad',
    descriptor: 'Bespoke Italian architecture meets the Arabian Gulf on Dubai\'s most exclusive island.',
    link: '/properties',
  },
  {
    image: '/images/3.jpg',
    tag: 'DIFC · Index Tower',
    title: 'Penthouse Skies',
    subtitle: '4 BR · 360° Panorama · Sky Terrace',
    descriptor: 'A full-floor sky residence above the financial capital, with uninterrupted city views.',
    link: '/properties',
  },
  {
    image: '/images/4.jpg',
    tag: 'Bulgari Island · Jumeirah Bay',
    title: 'Beachfront Residence',
    subtitle: '5 BR · Private Beach · Marina Berth',
    descriptor: 'Where the Arabian Sea becomes your garden — an island retreat of rare distinction.',
    link: '/properties',
  },
]

const COLLECTIONS = [
  { image: '/images/1.jpg', tag: 'Palm Jumeirah', title: 'Sovereign Villa', subtitle: '7 Bedroom Private Compound' },
  { image: '/images/3.jpg', tag: 'DIFC', title: 'Penthouse Skies', subtitle: 'Full Floor · L58–60' },
  { image: '/images/4.jpg', tag: 'Bulgari Island', title: 'Beachfront Residence', subtitle: '5 Bedroom Oceanfront' },
  { image: '/images/8.jpg', tag: 'Dubai Marina', title: 'Marina Living', subtitle: '2–4 BR Waterfront' },
]

const STATS = [
  { value: '280+', label: 'Exclusive Properties' },
  { value: '18', label: 'Years in Dubai Market' },
  { value: 'AED 2B+', label: 'Properties Transacted' },
  { value: '96%', label: 'Client Satisfaction' },
]

/* ─── Section variants ───────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opac = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: yImg }}>
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: yText, opacity: opac }}
      >
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Exclusive Properties · Dubai, Singapore
        </motion.span>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[0.95] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          SR Reality
          <br />
          <em className="text-gold font-normal">Dubai,Singapore</em>
        </motion.h1>

        <motion.div
          className="w-12 h-px bg-gold mx-auto my-8"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          className="font-body text-white/100 text-base sm:text-lg tracking-widest mb-12 font-light"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          Redefining Luxury Living
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/properties" className="btn-gold"><span>Explore Properties</span></Link>
          <Link to="/collections" className="btn-ghost">Our Collections</Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
      >
        <p className="font-mono text-white/30 text-[9px] tracking-[0.4em] uppercase">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-gold/80 to-transparent animate-scroll-cue" />
      </motion.div>

      {/* Corner marks */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t border-l border-gold/20" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t border-r border-gold/20" />
      <div className="absolute bottom-24 left-8 w-12 h-12 border-b border-l border-gold/20" />
      <div className="absolute bottom-24 right-8 w-12 h-12 border-b border-r border-gold/20" />
    </section>
  )
}

/* ─── Stats banner ───────────────────────────────────────── */
function StatsBanner() {
  return (
    <section className="bg-surface border-y border-white/5 py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:px-8"
          >
            <p className="font-display text-3xl md:text-4xl text-gold font-normal mb-2">{s.value}</p>
            <p className="font-mono text-white/30 text-[9px] tracking-[0.25em] uppercase">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── Featured Properties ────────────────────────────────── */
function FeaturedProperties() {
  return (
    <section className="py-28 lg:py-36 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              className="section-label"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Handpicked for You
            </motion.span>
            <motion.h2
              className="section-heading text-white"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Featured
              <br />
              <em className="text-gold">Properties</em>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <Link to="/properties" className="btn-ghost">View All</Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {FEATURED.map((p, i) => (
            <PropertyCard key={p.title} {...p} index={i} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Signature Collections ──────────────────────────────── */
function SignatureCollections() {
  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span
            className="section-label"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Curated for the Discerning
          </motion.span>
          <motion.h2
            className="section-heading text-white"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Signature
            <br />
            <em className="text-gold">Collections</em>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((c, i) => (
            <PropertyCard key={c.title} {...c} index={i} variant="large" link="/collections" />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Experience Section ─────────────────────────────────── */
function ExperienceSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative overflow-hidden aspect-[4/5]"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.img
              src="/public/images/experience.jpg"
              alt="SR Reality Experience"
              className="w-full h-full object-cover"
              style={{ y }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            {/* Floating accent */}
            <div className="absolute bottom-8 left-8 border border-gold/40 p-5 backdrop-blur-sm bg-black/30">
              <p className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase mb-1">Established</p>
              <p className="font-display text-white text-2xl">2006</p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.span
              className="section-label"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              The SR Reality Experience
            </motion.span>
            <motion.h2
              className="section-heading text-white mb-8"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Beyond Property.<br />
              <em className="text-gold">A Legacy.</em>
            </motion.h2>
            <div className="divider-gold" />
            <motion.p
              className="font-body text-white/50 leading-relaxed mb-6 text-sm md:text-base"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              For nearly two decades, SR Reality has curated Dubai's most exceptional residential addresses. We don't simply match clients to properties — we architect a life.
            </motion.p>
            <motion.p
              className="font-body text-white/50 leading-relaxed mb-10 text-sm md:text-base"
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Each property in our portfolio is selected for rarity, craftsmanship, and the singular story it tells. Our advisors are not agents — they are custodians of your ambition.
            </motion.p>
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Link to="/about" className="btn-gold"><span>Our Story</span></Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Final CTA ──────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/public/images/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.span
          className="section-label"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          Begin Your Journey
        </motion.span>
        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight mb-8"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          Your Legendary Address
          <br />
          <em className="text-gold">Awaits.</em>
        </motion.h2>
        <motion.div
          className="w-12 h-px bg-gold mx-auto mb-10"
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
        />
        <motion.p
          className="font-body text-white/40 mb-12 text-sm leading-relaxed"
          variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          Speak with a SR Reality advisor to discover properties not listed elsewhere.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <Link to="/contact" className="btn-gold"><span>Schedule a Consultation</span></Link>
          <Link to="/properties" className="btn-ghost">Browse Properties</Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <StatsBanner />
      <FeaturedProperties />
      <SignatureCollections />
      <ExperienceSection />
      <FinalCTA />
    </PageTransition>
  )
}
