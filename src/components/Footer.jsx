import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LINKS = {
  Properties:  ['/properties',  '/collections'],
  Labels:      ['All Properties','Collections'],
  Company:     ['/about', '/contact'],
  CompLabels:  ['About Us', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      {/* Top bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold/50 flex items-center justify-center">
                <span className="font-display text-gold font-semibold">SR</span>
              </div>
              <div>
                <p className="font-mono text-white/80 text-xs tracking-[0.3em]">REALITY</p>
                <p className="font-mono text-gold/50 text-[9px] tracking-[0.22em]">DUBAI</p>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Crafting legendary addresses across Dubai's most coveted destinations. Where architecture meets legacy.
            </p>
            <p className="font-mono text-gold/60 text-[10px] tracking-[0.28em]">
              PALM JUMEIRAH · DIFC · MARINA · EMIRATES HILLS
            </p>
          </div>

          {/* Properties */}
          <div>
            <p className="section-label mb-6" style={{ letterSpacing:'0.3em', fontSize:'10px' }}>Properties</p>
            <div className="flex flex-col gap-3">
              {['/properties', '/collections'].map((path, i) => (
                <Link key={path} to={path} className="font-body text-white/40 text-sm hover:text-gold transition-colors duration-300">
                  {['All Properties', 'Collections'][i]}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="section-label mb-6" style={{ letterSpacing:'0.3em', fontSize:'10px' }}>Company</p>
            <div className="flex flex-col gap-3">
              {['/about', '/contact'].map((path, i) => (
                <Link key={path} to={path} className="font-body text-white/40 text-sm hover:text-gold transition-colors duration-300">
                  {['About Us', 'Contact'][i]}
                </Link>
              ))}
              <a href="mailto:hello@srreality.ae" className="font-body text-white/40 text-sm hover:text-gold transition-colors duration-300">
                hello@srreality.ae
              </a>
              <a href="tel:+97144000000" className="font-body text-white/40 text-sm hover:text-gold transition-colors duration-300">
                +971 4 400 0000
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-white/20 text-[10px] tracking-[0.2em]">
            © {new Date().getFullYear()} SR REALITY GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms'].map(t => (
              <span key={t} className="font-mono text-white/20 text-[10px] tracking-[0.2em] hover:text-gold/60 cursor-pointer transition-colors duration-300">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
