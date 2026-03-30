import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * PropertyCard — Reusable luxury property card component
 *
 * Props:
 *  image       string  — path like "/images/villa.jpg"
 *  tag         string  — "PALM JUMEIRAH"
 *  title       string  — "The Sovereign Villa"
 *  subtitle    string  — "7 BR · Private Beach"
 *  descriptor  string  — short sentence
 *  link        string  — route path (default "/properties")
 *  index       number  — for staggered animations
 *  variant     string  — "default" | "large" | "horizontal"
 */
export default function PropertyCard({
  image       = '/images/villa.jpg',
  tag         = '',
  title       = '',
  subtitle    = '',
  descriptor  = '',
  link        = '/properties',
  index       = 0,
  variant     = 'default',
}) {
  if (variant === 'horizontal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        className="group"
      >
        <Link to={link} className="flex flex-col md:flex-row gap-0 overflow-hidden bg-surface-2 hover:bg-surface transition-colors duration-500">
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"/>
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
            <span className="font-mono text-gold text-[9px] tracking-[0.35em] uppercase mb-4 block">{tag}</span>
            <h3 className="font-display text-2xl md:text-3xl font-normal text-white mb-3 leading-tight">{title}</h3>
            <p className="font-mono text-white/40 text-[10px] tracking-[0.2em] mb-5">{subtitle}</p>
            <div className="w-8 h-px bg-gold mb-5"/>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-8">{descriptor}</p>
            <span className="font-mono text-gold text-[10px] tracking-[0.28em] uppercase group-hover:tracking-[0.4em] transition-all duration-500">
              View Details →
            </span>
          </div>
        </Link>
      </motion.div>
    )
  }

  if (variant === 'large') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: '-60px' }}
        className="group"
      >
        <Link to={link} className="block relative overflow-hidden aspect-[3/4]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="font-mono text-gold text-[9px] tracking-[0.35em] uppercase mb-3 block">{tag}</span>
            <h3 className="font-display text-2xl font-normal text-white mb-2 leading-tight">{title}</h3>
            <p className="font-mono text-white/50 text-[10px] tracking-[0.2em] mb-5">{subtitle}</p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-gold"/>
              <span className="font-mono text-gold/70 text-[9px] tracking-[0.28em] uppercase transition-all duration-500 group-hover:text-gold group-hover:tracking-[0.38em]">
                Discover
              </span>
            </div>
          </div>
          {/* Corner mark */}
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gold/30 group-hover:border-gold/70 transition-colors duration-500"/>
        </Link>
      </motion.div>
    )
  }

  // Default card
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className="group"
    >
      <Link to={link} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[4/3] mb-5">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"/>
          <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-gold/30 group-hover:border-gold/70 transition-colors duration-500"/>
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-mono text-gold text-[10px] tracking-[0.3em] uppercase border border-gold/50 px-5 py-2.5 backdrop-blur-sm bg-black/30">
              View Details
            </span>
          </div>
        </div>
        {/* Text */}
        <div>
          <span className="font-mono text-gold text-[9px] tracking-[0.35em] uppercase block mb-2">{tag}</span>
          <h3 className="font-display text-xl font-normal text-white mb-1.5 leading-tight group-hover:text-gold/90 transition-colors duration-500">{title}</h3>
          <p className="font-mono text-white/35 text-[9px] tracking-[0.2em]">{subtitle}</p>
        </div>
      </Link>
    </motion.div>
  )
}
