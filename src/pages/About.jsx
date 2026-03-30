import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const VALUES = [
  {
    number: '01',
    title: 'Vision',
    text: 'We see beyond property — we see the shape of a life. SR Reality was founded on the belief that a true home is a declaration of identity, not merely a transaction. We source and present only those properties that merit this distinction.',
  },
  {
    number: '02',
    title: 'Philosophy',
    text: 'Our approach is unhurried. We take time to understand what each client truly seeks — not the rooms, but the rhythm. Not the address, but the life that address enables. This philosophy has earned the loyalty of Dubai\'s most discerning buyers.',
  },
  {
    number: '03',
    title: 'Trust',
    text: 'In nearly two decades, we have facilitated over AED 2 billion in transactions. Our reputation is built on discretion, accuracy, and a genuine alignment with client interests. We do not list everything — only what is exceptional.',
  },
]

const TEAM = [
  { name: 'Sohail Rahman',   role: 'Founder & Managing Director',    image: '/images/team-1.jpg' },
  { name: 'Layla Al Mansoori', role: 'Head of Ultra-Prime Residences', image: '/images/team-2.jpg' },
  { name: 'Marcus Elhardt',   role: 'Senior Portfolio Advisor',       image: '/images/team-3.jpg' },
]

const fadeUp = {
  hidden:  { opacity:0, y:44 },
  visible: (i=0) => ({ opacity:1, y:0, transition:{ duration:1.1, delay:i*0.12, ease:[0.16,1,0.3,1] } }),
}

export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target:heroRef, offset:['start start','end start'] })
  const yHero = useTransform(scrollYProgress, [0,1], ['0%','22%'])

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[520px] overflow-hidden flex items-end">
        <motion.div className="absolute inset-0 scale-110" style={{ y: yHero }}>
          <img src="/images/about-hero.jpg" alt="SR Reality About" className="w-full h-full object-cover" loading="lazy"/>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"/>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 w-full">
          <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible">
            Our Story
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight max-w-3xl"
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
          >
            Crafting Legendary
            <br/><em className="text-gold">Addresses</em>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-snug mb-6">
                Founded in 2006 in Dubai — at the height of a city's most ambitious chapter.
              </h2>
              <div className="w-10 h-px bg-gold mb-8"/>
              <p className="font-body text-white/45 text-sm leading-relaxed">
                SR Reality was born from a simple conviction: that Dubai's most extraordinary properties deserved counsel equal to their calibre. Not agents — advisors. Not listings — curated selections.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once:true }}
            >
              <p className="font-body text-white/45 text-sm leading-relaxed mb-6">
                Over nearly two decades, that conviction has shaped everything we do. We have grown not by broadening our portfolio indiscriminately, but by deepening our knowledge of what makes a property truly singular.
              </p>
              <p className="font-body text-white/45 text-sm leading-relaxed">
                Our clients include heads of state, global entrepreneurs, and families who have built legacies they now wish to house in a manner that reflects those achievements. We consider it a privilege — and a responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.span className="section-label" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            What We Stand For
          </motion.span>
          <motion.h2
            className="section-heading text-white mb-16"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once:true }}
          >
            Our <em className="text-gold">Principles</em>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.number}
                className="md:px-10 first:pl-0 last:pr-0 py-10 md:py-0 border-b md:border-b-0 border-white/5 last:border-b-0"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true }}
              >
                <p className="font-mono text-gold/30 text-5xl font-light mb-6">{v.number}</p>
                <h3 className="font-display text-2xl text-white mb-4">{v.title}</h3>
                <div className="w-8 h-px bg-gold/50 mb-6"/>
                <p className="font-body text-white/40 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src="/images/experience.jpg" alt="" className="w-full h-full object-cover opacity-40" loading="lazy"/>
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-black"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-white/10 text-[80px] md:text-[140px] lg:text-[200px] font-normal leading-none select-none">
              Since 2006
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.span className="section-label" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            The People Behind the Portfolio
          </motion.span>
          <motion.h2
            className="section-heading text-white mb-16"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once:true }}
          >
            Our <em className="text-gold">Team</em>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                    onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='#1C1C1C' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-500"/>
                </div>
                <p className="font-display text-white text-xl mb-1">{t.name}</p>
                <p className="font-mono text-gold/60 text-[9px] tracking-[0.25em] uppercase">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-surface text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            className="font-display text-4xl md:text-5xl text-white font-normal mb-8"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}
          >
            Ready to Work <em className="text-gold">Together?</em>
          </motion.h2>
          <motion.p
            className="font-body text-white/40 text-sm leading-relaxed mb-10"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once:true }}
          >
            Our advisors are available to guide you from first enquiry to final handover.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            <Link to="/contact" className="btn-gold"><span>Get in Touch</span></Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
