import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Properties', path: '/properties' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled || menuOpen
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
          }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          {/* ✅ NEW LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="SR Reality Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`font-mono text-sm tracking-[0.28em] uppercase transition-colors duration-300 relative group ${location.pathname === l.path
                  ? 'text-gold'
                  : 'text-white hover:text-white'
                  }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${location.pathname === l.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hidden lg:block btn-gold">
              <span>Enquire Now</span>
            </Link>

            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-white/70 transition-all duration-400 ${menuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
              <span className={`block w-6 h-px bg-white/70 transition-all duration-400 ${menuOpen ? 'opacity-0' : ''
                }`} />
              <span className={`block w-6 h-px bg-white/70 transition-all duration-400 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08 + 0.15,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Link
                    to={l.path}
                    className={`font-display text-3xl font-normal transition-colors duration-300 ${location.pathname === l.path
                      ? 'text-gold'
                      : 'text-white hover:text-white'
                      }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <Link to="/contact" className="btn-gold mt-4">
                  <span>Enquire Now</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}