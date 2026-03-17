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
    <section style={{ padding: 'clamp(48px,7vh,80px) 28px' }}>
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
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              lineHeight: 1.3,
              color: '#fff',
              marginBottom: '24px',
            }}
          >
            Every elite player had a moment where they finally{' '}
            <span style={{ color: '#C1008B' }}>saw themselves clearly</span>.
            Snick makes that moment available to{' '}
            <span style={{ color: '#7B4FD4' }}>every player</span>, at every level.
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
              — The Snick Team
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
