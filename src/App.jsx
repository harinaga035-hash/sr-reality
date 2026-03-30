import { useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function CustomCursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = e => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px' }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px' }
    }
    const over = e => { if (e.target.closest('a,button,[data-hover]')) setHovering(true) }
    const out  = () => setHovering(false)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout',  out)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout',  out)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot"  style={{ position:'fixed', zIndex:99999, pointerEvents:'none' }}/>
      <div ref={ring} className={`cursor-ring ${hovering ? 'hovering' : ''}`} style={{ position:'fixed', zIndex:99998, pointerEvents:'none' }}/>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain">
        <CustomCursor />
        <Navbar />
        <main className="page-wrap">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
