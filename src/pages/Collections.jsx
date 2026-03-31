import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const COLLECTIONS = [
  {
    id: 'sovereign',
    tag: 'Palm Jumeirah · Frond M',
    title: "The Sovereign Collection",
    subtitle: 'Privacy, Legacy & Bespoke Architecture',
    image: '/public/images/1.jpg',
    offer: ['Ultra-Luxury Villas & Penthouses', 'Prime Locations (Palm Jumeirah, Downtown, Marina)', 'Private & Off-Market Listings', 'High ROI Investment Opportunities', 'Bespoke Property Consulting', 'End-to-End Acquisition Support'],
    service: "The Sovereign Collection showcases high-value properties across Dubai’s most prestigious locations, carefully selected to offer both refined living and strong investment potentia",
    flip: false,
  },
  {
    id: 'penthouse',
    tag: 'calm luxury · iconic views',
    title: 'Penthouse Skies',
    subtitle: "Above the City’s Finest Views",
    image: '/public/images/3.jpg',
    offer: ['Full-Floor Luxury Penthouses',
      'Panoramic Skyline & Marina Views',
      'Private Terraces & Outdoor Living',
      'Prime Locations (DIFC, Marina, Downtown)',
      'High-End Interiors & Smart Living',
      'Exclusive Access & Concierge Services'],
    service: "Penthouse Skies offers an elevated living experience in the heart of Dubai, where expansive interiors and panoramic views redefine modern luxury. Designed for those who seek privacy, prestige, and uninterrupted cityscapes.",
    flip: true,
  },
  {
    id: 'beachfront',
    tag: 'Bulgari Island · Jumeirah Bay',
    title: 'Beachfront Residence',
    subtitle: 'Where the Arabian Sea Becomes Your Garden',
    image: '/public/images/4.jpg',
    offer: ['Ultra-Luxury Beachfront Villas',
      'Direct Private Beach Access',
      'Panoramic Arabian Sea Views',
      'Private Infinity Pool & Outdoor Deck',
      'Exclusive Island & Gated Communities',
      'Resort-Style Living & Marina Access'],
    service: 'Beachfront Residence offers an exclusive collection of coastal homes where luxury meets absolute privacy. With uninterrupted Arabian Sea views and direct beach access, each residence is designed to deliver serenity, prestige, and refined living.',
    flip: false,
  },
  {
    id: 'marina',
    tag: 'Dubai Marina · Princess Tower',
    title: 'The Marina Living Collection',
    subtitle: "The World's Finest Waterfront Address",
    image: '/public/images/8.jpg',
    offer: ['Luxury Waterfront Apartments',
      'Panoramic Marina & Sea Views',
      'Direct Marina Walk Access',
      'Prime Location (Dubai Marina)',
      'High Rental Yield Potential',
      'Dining, Retail & Lifestyle at Your Doorstep'],
    service: 'The Marina Living Collection offers a dynamic waterfront lifestyle in the heart of Dubai, where modern residences overlook vibrant promenades and the open sea. Designed for those who seek energy, convenience, and refined urban living.',
    flip: true,
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
}

function CollectionItem({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-black' : 'bg-surface'} overflow-hidden`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${item.flip ? 'lg:grid-flow-dense' : ''}`}>

          <motion.div
            className={`relative overflow-hidden aspect-[4/5] ${item.flip ? 'lg:col-start-2' : ''}`}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              style={{ y: yImg }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-gold/40" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-gold/40" />
          </motion.div>

          <div className={item.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
            <motion.span className="section-label" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {item.tag}
            </motion.span>

            <motion.h2 className="font-display text-4xl md:text-5xl lg:text-[56px] text-white font-normal leading-[1.05] mb-4"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {item.title}
            </motion.h2>

            <motion.p className="font-body text-white/40 text-sm mb-8"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {item.subtitle}
            </motion.p>

            <div className="w-10 h-px bg-gold mb-8" />

            <motion.p className="font-body text-white/45 text-sm leading-relaxed mb-10"
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {item.service}
            </motion.p>

            <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-mono text-gold/60 text-[9px] tracking-[0.32em] uppercase mb-5">What We Offer</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {item.offer.map(o => (
                  <div key={o} className="flex items-start gap-3">
                    <span className="text-gold text-[9px] mt-1 shrink-0">◆</span>
                    <span className="font-body text-white/50 text-sm">{o}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-10"
              variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to="/contact" className="btn-gold"><span>Enquire About This Collection</span></Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Collections() {
  return (
    <PageTransition>
      <section className="relative pt-40 pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/collections-hero.jpg" alt="" className="w-full h-full object-cover opacity-80" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible">
            Curated for the Discerning Few
          </motion.span>

          <motion.h1 className="font-display text-5xl md:text-7xl text-white font-normal leading-tight"
            variants={fadeUp} custom={1} initial="hidden" animate="visible">
            Signature
            <br /><em className="text-gold">Collections</em>
          </motion.h1>

          <div className="w-12 h-px bg-gold mx-auto mt-10" />
        </div>
      </section>

      {COLLECTIONS.map((item, i) => (
        <CollectionItem key={item.id} item={item} index={i} />
      ))}

      <section className="py-32 bg-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2 className="font-display text-4xl md:text-5xl text-white font-normal mb-6"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            A Collection <em className="text-gold">Built for You</em>
          </motion.h2>

          <motion.p className="font-body text-white/40 text-sm mb-10 leading-relaxed"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Many of our most exclusive properties are never publicly listed. Speak with a SR Reality advisor to access our private portfolio.
          </motion.p>

          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link to="/contact" className="btn-gold"><span>Access Private Portfolio</span></Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}