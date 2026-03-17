'use client'

import { useEffect, useRef, useState } from 'react'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

const stats = [
  {
    value: '85%',
    label: 'of youth players never get structured feedback on their technique',
    color: '#C1008B',
  },
  {
    value: '3×',
    label: 'faster improvement when athletes can visually review their own performance',
    color: '#7B4FD4',
  },
  {
    value: '1 link',
    label: 'is all scouts need — yet most players have no shareable profile at all',
    color: '#C1008B',
  },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
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
    <div
      ref={ref}
      style={{
        padding: 'clamp(24px,4vw,32px) 24px',
        background: '#0d0818',
        border: '0.5px solid #231540',
        borderRadius: '14px',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      <p
        style={{
          fontFamily: CD,
          fontWeight: 800,
          fontSize: 'clamp(36px, 5vw, 52px)',
          lineHeight: 1,
          color: stat.color,
          marginBottom: '12px',
        }}
      >
        {stat.value}
      </p>
      <p
        style={{
          fontFamily: INT,
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: 1.6,
          color: '#8a7fa8',
          maxWidth: '220px',
          margin: '0 auto',
        }}
      >
        {stat.label}
      </p>
    </div>
  )
}

export default function WhyNow() {
  return (
    <section id="about" style={{ padding: 'clamp(48px,7vh,80px) 28px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>

        {/* Header */}
        <p style={{ fontFamily: INT, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: '#C1008B', textTransform: 'uppercase', marginBottom: '12px' }}>
          Why now
        </p>
        <h2 style={{ fontFamily: CD, fontWeight: 800, fontSize: 'clamp(26px,3.5vw,36px)', color: '#fff', marginBottom: '40px', lineHeight: 1.1, maxWidth: '480px' }}>
          The gap between talent and{' '}
          <span className="gradient-text">opportunity</span> is closing.
        </h2>

        {/* 3-col stat strip */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))' }}
        >
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
