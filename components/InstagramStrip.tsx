'use client'

import { useEffect, useRef, useState } from 'react'

const INT = "var(--font-inter), 'Inter', sans-serif"

function useScrollReveal(delay: number) {
  const ref = useRef<HTMLDivElement & HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  }

  return { ref, style }
}

export default function InstagramStrip() {
  const qr   = useScrollReveal(0)
  const msg  = useScrollReveal(100)
  const handle = useScrollReveal(200)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 32px',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      {/* Left: QR code */}
      <div ref={qr.ref} style={qr.style}>
        <a href="https://www.instagram.com/snicksports" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/snick-qr.png"
            alt="Scan to follow Snick Sports on Instagram"
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </a>
      </div>

      {/* Centre: message */}
      <div ref={msg.ref} style={msg.style}>
        <p style={{ fontFamily: INT, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 6 }}>
          Follow us on Instagram
        </p>
        <p style={{ fontFamily: INT, fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>
          Behind-the-scenes, early access news, and updates<br />
          as we build — straight to your feed.
        </p>
      </div>

      {/* Right: handle */}
      <div ref={handle.ref} style={handle.style}>
        <a
          href="https://www.instagram.com/snicksports"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: INT, fontSize: 15, fontWeight: 600, color: '#c54fff', textDecoration: 'none', letterSpacing: '0.02em' }}
        >
          @snicksports
        </a>
      </div>
    </div>
  )
}
