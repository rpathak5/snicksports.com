'use client'

import { useEffect, useRef, useState } from 'react'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

const stats = [
  {
    value: '300M+',
    label: 'Amateur players worldwide',
    desc: 'Most never get structured feedback on their technique or game.',
    color: '#C1008B',
  },
  {
    value: 'AI-ready',
    label: 'Video analysis is now possible at scale',
    desc: 'What used to cost thousands in coaching hours can now happen automatically.',
    color: '#7B4FD4',
  },
  {
    value: 'Zero',
    label: 'Tools built for the player, not the club',
    desc: 'Existing software is designed for coaches and analysts. We\'re building for you.',
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
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      <p
        style={{
          fontFamily: CD,
          fontWeight: 800,
          fontSize: 'clamp(28px, 4vw, 42px)',
          lineHeight: 1,
          color: stat.color,
          marginBottom: '10px',
        }}
      >
        {stat.value}
      </p>
      <p
        style={{
          fontFamily: INT,
          fontWeight: 600,
          fontSize: '13px',
          color: '#fff',
          marginBottom: '8px',
          lineHeight: 1.4,
        }}
      >
        {stat.label}
      </p>
      <p
        style={{
          fontFamily: INT,
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: 1.6,
          color: '#8a7fa8',
          margin: 0,
        }}
      >
        {stat.desc}
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
