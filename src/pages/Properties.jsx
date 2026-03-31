import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PropertyCard from '../components/PropertyCard.jsx'

const ALL_PROPERTIES = [
  { image: '/images/1.jpg', tag: 'Palm Jumeirah', title: 'The Sovereign Villa', subtitle: '7 BR · Private Beach · Helipad', descriptor: 'Bespoke Italian architecture meets the Arabian Gulf.', category: 'Villa' },
  { image: '/images/3.jpg', tag: 'DIFC · Index Tower', title: 'Penthouse Skies', subtitle: '4 BR · 360° Panorama · Sky Terrace', descriptor: 'A full-floor sky residence above the financial capital.', category: 'Penthouse' },
  { image: '/images/4.jpg', tag: 'Bulgari Island', title: 'Beachfront Residence', subtitle: '5 BR · Private Beach · Boat Dock', descriptor: 'An island retreat of rare distinction.', category: 'Villa' },
  { image: '/images/8.jpg', tag: 'Dubai Marina', title: 'Marina Living', subtitle: '2–4 BR · Marina Walk · Sea Views', descriptor: 'The world\'s finest waterfront address.', category: 'Apartment' },
  { image: '/images/5.jpg', tag: 'Emirates Hills', title: 'Desert Estate', subtitle: '9 BR · 48,000 Sq Ft · Motor Court', descriptor: 'Arabian grandeur at unmatched scale.', category: 'Villa' },
  { image: '/images/9.jpg', tag: 'Jumeirah Golf Estates', title: 'Golf Estate', subtitle: '5–6 BR · Championship View · Pool', descriptor: 'Bordering the championship fairway.', category: 'Villa' },
  { image: '/images/11.jpg', tag: "One Za'abeel", title: 'Sky Collection', subtitle: '1–4 BR · Skywalk · Level 68 Pool', descriptor: 'The sky\'s most anticipated address.', category: 'Penthouse' },
  { image: '/images/10.jpg', tag: 'Downtown Dubai', title: 'Urban Pulse', subtitle: 'Studio–3 BR · Metro Access · DIFC', descriptor: 'Investment-grade metropolitan living.', category: 'Apartment' },
  { image: '/images/7.jpg', tag: 'Palm Jumeirah', title: 'Palm Crown Residence', subtitle: '6 BR · Frond · Private Garden', descriptor: 'Commanding views of the Palm and sea.', category: 'Villa' },
]

const CATEGORIES = ['All', 'Villa', 'Penthouse', 'Apartment']

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Properties() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? ALL_PROPERTIES
    : ALL_PROPERTIES.filter(p => p.category === active)

  return (
    <PageTransition>
      {/* Hero banner */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/properties-hero.jpg" alt="" className="w-full h-full object-cover opacity-100" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible" viewport={{ once: true }}>
            Dubai's Finest
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight"
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
          >
            All Properties
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* Filter bar */}
      <section className="bg-surface sticky top-20 z-30 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[11px] tracking-[0.28em] uppercase px-5 py-2.5 border transition-all duration-400 whitespace-nowrap ${active === cat
                ? 'border-gold bg-gold text-black'
                : 'border-white/10 text-white/100 hover:border-gold/50 hover:text-gold'
                }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-white/20 text-[9px] tracking-[0.2em] whitespace-nowrap">
            {filtered.length} Properties
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((p, i) => (
                <PropertyCard key={p.title + i} {...p} index={i} variant="default" />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  )
}
