import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home        from '../pages/Home.jsx'
import Properties  from '../pages/Properties.jsx'
import Collections from '../pages/Collections.jsx'
import About       from '../pages/About.jsx'
import Contact     from '../pages/Contact.jsx'

export default function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<Home />} />
        <Route path="/properties"  element={<Properties />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about"       element={<About />} />
        <Route path="/contact"     element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}
