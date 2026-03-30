import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const COLLECTIONS = [
  {
    id: 'sovereign',
    tag: 'Palm Jumeirah · Frond M',
    title: 'The Sovereign Villa',
    subtitle: 'Privacy, Legacy & Bespoke Architecture',
    image: '/images/1.jpg',
    offer: ['7 Bedroom Private Compound', '16,000 Sq Ft Built-Up Area', 'Subterranean 8-Car Garage', 'Rooftop Helipad', 'Bespoke Infinity Pool', 'AI Smart-Home Ecosystem'],
    service: "An estate conceived for generational legacy. The Sovereign Villa commands the Palm's most private frond, where every detail — from the double-height marble entrance to the underground garage — is a declaration of permanence.",
    flip: false,
  },
  {
    id: 'penthouse',
    tag: 'DIFC · Index Tower L58–60',
    title: 'Penthouse Skies',
    subtitle: "Above the City's Heartbeat",
    image: '/images/3.jpg',
    offer: ['4 Bedroom Full-Floor Penthouse', '8,500 Sq Ft Indoor Area', '3,200 Sq Ft Sky Terrace', '360° City Panorama', 'Private Plunge Pool', 'Personal Butler & Concierge'],
    service: "Three levels of sky-bound living in Dubai's financial heart. Floor-to-ceiling glass wraps every room in the city's silhouette, while a private sky terrace dissolves the boundary between interior and the open sky.",
    flip: true,
  },
  {
    id: 'beachfront',
    tag: 'Bulgari Island · Jumeirah Bay',
    title: 'Beachfront Residence',
    subtitle: 'Where the Arabian Sea Becomes Your Garden',
    image: '/images/4.jpg',
    offer: ["5 Bedroom + Maid's Quarters", '12,200 Sq Ft Living Area', 'Direct Private Beach', 'Lagoon-Style Infinity Pool', 'Private 40 ft Boat Dock', 'Bulgari Spa & Marina Access'],
    service: "A residence where the tide determines the rhythm of each day. Set on Bulgari's private island, the Beachfront Residence delivers direct sea access, a private marina berth, and a scale of living few places on earth can match.",
    flip: false,
  },
  {
    id: 'marina',
    tag: 'Dubai Marina · Princess Tower',
    title: 'Marina Living',
    subtitle: "The World's Finest Waterfront Address",
    image: '/images/8.jpg',
    offer: ['2–4 Bedroom Residences', '1,200–4,800 Sq Ft', 'Marina Walk Access', '24-Hr Yacht Berths', 'Rooftop Infinity Pool', '72 Restaurants on Doorstep'],
    service: 'From the 5th to the 101st floor, Marina Living is a study in connected luxury. With the Dubai Marina promenade as your front garden and the Arabian Sea as backdrop, every day opens to water and light.',
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