'use client'

import { useEffect, useRef, useState } from 'react'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

/* ─── Feature data ─────────────────────────────────────────────── */
const features = [
  {
    color: 'pink' as const,
    tag: 'improve',
    title: 'Your personal technique breakdown',
    desc: 'Frame-by-frame AI analysis of your positioning, movement, and decision-making. Pinpoints the exact moments to work on — not generic tips.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="3.5" stroke="#C1008B" strokeWidth="1.3" />
        <path d="M3 15c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#C1008B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: 'pink' as const,
    tag: 'improve',
    title: 'Game breakdown with technical statistics',
    desc: "See how your game breaks down across key technical areas — understand where you're strong and where to sharpen your edge.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 13 L6 8 L10 10 L15 4" stroke="#C1008B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="8" r="1.2" fill="#C1008B" />
        <circle cx="10" cy="10" r="1.2" fill="#C1008B" />
        <circle cx="15" cy="4" r="1.2" fill="#C1008B" />
      </svg>
    ),
  },
  {
    color: 'purple' as const,
    tag: 'showcase',
    title: 'Auto-edited highlight reels',
    desc: 'Your best moments clipped, cut, and branded automatically. Instagram, TikTok, and scout-ready formats — no editor needed.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="12" height="12" rx="3" stroke="#9B6FE8" strokeWidth="1.3" />
        <path d="M7 9l2 2 4-4" stroke="#9B6FE8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: 'purple' as const,
    tag: 'showcase',
    title: 'Your player profile, always updated',
    desc: 'A live, shareable profile with stats and clips scouts and clubs actually want to see. One link. Always current.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 3 L11 7 L15 7.5 L12 10.5 L12.5 15 L9 13 L5.5 15 L6 10.5 L3 7.5 L7 7 Z"
          stroke="#9B6FE8" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
]


/* ─── Single card with scroll-reveal ───────────────────────────── */
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isPink = feature.color === 'pink'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex items-start gap-3.5"
      style={{
        padding: '18px',
        background: '#0d0818',
        border: '0.5px solid #231540',
        borderRadius: '12px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms`,
      }}
    >
      {/* Icon container */}
      <div
        style={{
          width: '36px', height: '36px',
          borderRadius: '8px',
          background: isPink ? '#2a0520' : '#120826',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <div>
        <div style={{ marginBottom: '5px' }}>
          {/* Title: Inter 600, white */}
          <span style={{ fontFamily: INT, fontWeight: 600, fontSize: '13px', color: '#ffffff' }}>
            {feature.title}
          </span>
          {/* Tag pill */}
          <span
            style={{
              display: 'inline-block',
              fontFamily: INT,
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 400,
              padding: '3px 8px',
              borderRadius: '4px',
              marginLeft: '8px',
              verticalAlign: 'middle',
              background: isPink ? '#2a0520' : '#120826',
              color: isPink ? '#C1008B' : '#9B6FE8',
            }}
          >
            {feature.tag}
          </span>
        </div>
        {/* Description: Inter 400, #8a7fa8 */}
        <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '12px', color: '#8a7fa8', lineHeight: 1.5, margin: 0 }}>
          {feature.desc}
        </p>
      </div>
    </div>
  )
}

/* ─── Section ───────────────────────────────────────────────────── */
export default function Features() {
  return (
    <section id="features" style={{ padding: 'clamp(60px,8vh,96px) 28px' }}>

      {/* Top divider */}
      <div style={{ height: '0.5px', background: '#1e1030', marginBottom: '52px' }} />

      <div className="mx-auto" style={{ maxWidth: '1100px' }}>

        {/* Section header */}
        <p style={{ fontFamily: INT, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: '#C1008B', textTransform: 'uppercase', marginBottom: '12px' }}>
          What we offer
        </p>
        <h2 style={{ fontFamily: CD, fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', marginBottom: '36px', lineHeight: 1.1 }}>
          Everything you need to{' '}
          <span className="gradient-text">level up</span>
        </h2>

        {/* Cards — 1 col mobile, 2 col desktop */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))' }}
        >
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>

    </section>
  )
}
