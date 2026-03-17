'use client'

import { useEffect, useRef, useState } from 'react'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

export default function VisionQuote() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ padding: '32px 32px' }}>
      <div style={{ height: '0.5px', background: '#1e1030', marginBottom: 'clamp(48px,7vh,80px)' }} />

      <div
        ref={ref}
        className="mx-auto"
        style={{
          maxWidth: '800px',
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Decorative quote mark */}
        <div
          style={{
            fontFamily: CD,
            fontSize: '72px',
            lineHeight: 0.6,
            marginBottom: '28px',
            background: 'linear-gradient(90deg, #C1008B, #7B4FD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote style={{ margin: 0 }}>
          <p
            style={{
              fontFamily: CD,
              fontWeight: 700,
              fontSize: 'clamp(20px, 3vw, 28px)',
              lineHeight: 1.4,
              color: '#fff',
              marginBottom: '24px',
            }}
          >
            Every serious player deserves the same analytical tools that professional clubs
            use — not just the ones who can afford a coach with a tablet.
          </p>
          <footer>
            <p
              style={{
                fontFamily: INT,
                fontWeight: 400,
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#7a6fa0',
              }}
            >
              — The Snick team
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
