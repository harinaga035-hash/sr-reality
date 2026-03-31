import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const INTERESTS = [
  'Ultra-Prime Villa',
  'Penthouse',
  'Beachfront Residence',
  'Marina Residence',
  'Investment Property',
  'Off-Plan',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  const inputCls = [
    'w-full bg-transparent border-b border-white/10 py-4 px-0',
    'font-body text-white text-sm placeholder:text-white/25',
    'focus:outline-none focus:border-gold transition-colors duration-400',
  ].join(' ')

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src="../public/images/contact-bg.jpg" alt="" className="w-full h-full object-cover opacity-100" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible">
            Speak With Us
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight"
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
          >
            Get in <em className="text-gold">Touch</em>
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Main layout */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

            {/* Left col — info */}
            <div>
              <motion.h2
                className="font-display text-3xl md:text-4xl text-white font-normal mb-8 leading-snug"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Every great address
                <br />begins with a conversation.
              </motion.h2>
              <div className="w-10 h-px bg-gold mb-10" />

              <div className="flex flex-col gap-10">
                {[
                  { label: 'General Enquiries', value: 'hello@srreality.ae', href: 'mailto:hello@srreality.ae' },
                  { label: 'Direct Line', value: '+971 4 400 0000', href: 'tel:+97144000000' },
                  { label: 'WhatsApp', value: '+971 50 000 0000', href: 'https://wa.me/971500000000' },
                  { label: 'Office', value: 'DIFC, Dubai, UAE', href: null },
                ].map((c, i) => (
                  <motion.div key={c.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="font-mono text-gold/50 text-[9px] tracking-[0.3em] uppercase mb-2">{c.label}</p>
                    {c.href
                      ? <a href={c.href} className="font-body text-white/70 text-base hover:text-gold transition-colors duration-300">{c.value}</a>
                      : <p className="font-body text-white/70 text-base">{c.value}</p>
                    }
                  </motion.div>
                ))}
              </div>

              {/* Hours */}
              <motion.div
                className="mt-14 border border-white/5 p-8"
                custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <p className="font-mono text-gold/50 text-[9px] tracking-[0.3em] uppercase mb-5">Office Hours</p>
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                  { day: 'Sunday', hours: 'By Appointment' },
                ].map(h => (
                  <div key={h.day} className="flex justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="font-body text-white/40 text-sm">{h.day}</span>
                    <span className="font-body text-white/60 text-sm">{h.hours}</span>
                  </div>
                ))}
              </motion.div>

              {/* Badges */}
              <motion.div
                className="mt-10 flex flex-wrap gap-3"
                custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {['RERA Certified', 'DLD Registered', 'DIFC Member'].map(badge => (
                  <span key={badge} className="font-mono text-[9px] tracking-[0.2em] text-white/25 border border-white/8 px-3 py-1.5">
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right col — form */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-24">
                  <motion.div
                    className="w-16 h-16 border border-gold flex items-center justify-center mb-8"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-gold text-xl">✓</span>
                  </motion.div>
                  <motion.h3
                    className="font-display text-3xl text-white mb-4"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Thank You
                  </motion.h3>
                  <motion.p
                    className="font-body text-white/40 text-sm leading-relaxed max-w-xs"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                  >
                    Your enquiry has been received. A SR Reality advisor will be in touch within 24 hours.
                  </motion.p>
                  <motion.button
                    onClick={() => setSent(false)}
                    className="mt-8 font-mono text-gold/50 text-[9px] tracking-[0.28em] uppercase hover:text-gold transition-colors duration-300"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                  >
                    Send Another Enquiry
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-8" noValidate>
                  <p className="font-mono text-gold/40 text-[9px] tracking-[0.3em] uppercase">Enquiry Form</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input name="name" type="text" placeholder="Full Name" required
                      value={form.name} onChange={handle} className={inputCls} autoComplete="name" />
                    <input name="email" type="email" placeholder="Email Address" required
                      value={form.email} onChange={handle} className={inputCls} autoComplete="email" />
                  </div>

                  <input name="phone" type="tel" placeholder="Phone / WhatsApp (with country code)"
                    value={form.phone} onChange={handle} className={inputCls} autoComplete="tel" />

                  <div className="relative">
                    <select name="interest" value={form.interest} onChange={handle}
                      className={`${inputCls} appearance-none cursor-pointer pr-6`}
                    >
                      <option value="" disabled className="bg-[#0B0B0B] text-white/30">Area of Interest</option>
                      {INTERESTS.map(opt => (
                        <option key={opt} value={opt} className="bg-[#0B0B0B] text-white">{opt}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 bottom-4 pointer-events-none text-gold/40 text-xs">▾</span>
                  </div>

                  <textarea name="message" rows={5}
                    placeholder="Tell us about your requirements, preferred locations, or any questions…"
                    value={form.message} onChange={handle} className={`${inputCls} resize-none`}
                  />

                  <p className="font-mono text-white/20 text-[9px] tracking-[0.15em] leading-relaxed">
                    Your information is handled with strict confidentiality and never shared with third parties.
                  </p>

                  <div>
                    <button type="submit" className="btn-gold">
                      <span>Submit Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="h-72 bg-surface border-t border-white/5 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <div className="relative z-10 text-center">
          <p className="font-mono text-white/20 text-[9px] tracking-[0.35em] uppercase mb-3">Our Office</p>
          <p className="font-display text-white/40 text-2xl">DIFC, Dubai, UAE</p>
          <p className="font-mono text-gold/30 text-[9px] tracking-[0.2em] mt-3">Gate Village · Building 4 · Level 3</p>
        </div>
      </section>
    </PageTransition>
  )
}
