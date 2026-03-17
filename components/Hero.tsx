'use client'

import WaitlistForm from './WaitlistForm'
import HeroVideo from './HeroVideo'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '92vh', padding: '56px 32px 48px', display: 'flex', alignItems: 'center' }}
    >
      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-[120px]"
          style={{ width: '340px', height: '340px', top: '10%', left: '-80px', background: 'rgba(193,0,139,0.07)' }}
        />
        <div
          className="absolute hidden lg:block animate-pulse-glow rounded-full blur-[110px]"
          style={{
            width: '540px', height: '540px',
            top: '50%', right: '-60px',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(ellipse at center, rgba(193,0,139,0.32) 0%, rgba(42,0,162,0.18) 50%, transparent 72%)',
          }}
        />
        <div
          className="absolute hidden lg:block animate-pulse-glow rounded-full blur-[70px]"
          style={{
            width: '320px', height: '320px',
            top: '50%', right: '80px',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(ellipse at center, rgba(123,79,212,0.28) 0%, transparent 65%)',
            animationDelay: '2s',
          }}
        />
        {[
          { top: '20%', left: '8%',  size: 4, color: 'rgba(193,0,139,0.55)', delay: '0s',   dur: '5s'   },
          { top: '70%', left: '12%', size: 3, color: 'rgba(123,79,212,0.45)', delay: '1.5s', dur: '6s'   },
          { top: '40%', left: '55%', size: 5, color: 'rgba(193,0,139,0.4)',   delay: '0.8s', dur: '4.5s' },
          { top: '80%', left: '70%', size: 3, color: 'rgba(42,0,162,0.5)',    delay: '2s',   dur: '5.5s' },
          { top: '15%', left: '80%', size: 4, color: 'rgba(123,79,212,0.5)',  delay: '0.3s', dur: '7s'   },
          { top: '55%', left: '90%', size: 3, color: 'rgba(193,0,139,0.45)', delay: '1.2s', dur: '4s'   },
        ].map((dot, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-pulse-glow"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size, background: dot.color, animationDelay: dot.delay, animationDuration: dot.dur }}
          />
        ))}
      </div>

      {/* ── Two-column grid ── */}
      <div className="relative z-10 w-full mx-auto hero-grid" style={{ maxWidth: '1100px' }}>

        {/* ── Left: text column ── */}
        <div>
          {/* Eyebrow */}
          <p
            style={{ fontFamily: INT, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: '#C1008B', textTransform: 'uppercase', marginBottom: '18px', animation: 'fadeIn 0.5s ease 0s both' }}
          >
            Built for players
          </p>

          {/* Headline — each line animates independently */}
          <h1
            style={{ fontFamily: CD, fontWeight: 800, fontSize: 'clamp(38px, 5.5vw, 52px)', lineHeight: 1.08, color: '#fff', marginBottom: '20px' }}
          >
            <span style={{ display: 'block', animation: 'fadeUp 0.55s ease 0.15s both' }}>Know your game.</span>
            <span style={{ display: 'block', animation: 'fadeUp 0.55s ease 0.35s both' }}><span style={{ color: '#C1008B' }}>Grow</span> your game.</span>
            <span style={{ display: 'block', animation: 'fadeUp 0.55s ease 0.55s both' }}><span style={{ color: '#7B4FD4' }}>Own</span> your story.</span>
          </h1>

          {/* Subtext */}
          <p
            style={{ fontFamily: INT, fontWeight: 400, fontSize: '15px', lineHeight: 1.7, color: '#b0a8c8', maxWidth: '420px', marginBottom: '32px', animation: 'fadeIn 0.6s ease 0.75s both' }}
          >
            AI-powered breakdown of your technique and movement — plus ready-to-share
            content that puts your best moments in front of the right audience.
          </p>

          {/* Waitlist form */}
          <div style={{ animation: 'fadeIn 0.6s ease 0.95s both' }}>
            <WaitlistForm />
            <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '12px', color: '#7a6fa0', marginTop: '10px' }}>
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>

        {/* ── Right: video column ── */}
        <div style={{ animation: 'fadeIn 0.8s ease 0.4s both' }}>
          <HeroVideo />
        </div>

      </div>
    </section>
  )
}
