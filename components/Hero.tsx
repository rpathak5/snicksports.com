'use client'

import WaitlistForm from './WaitlistForm'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center overflow-hidden"
      style={{ minHeight: '92vh', padding: '56px 32px 48px' }}
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

      {/* ── Content ── */}
      <div className="relative z-10 w-full mx-auto" style={{ maxWidth: '1100px' }}>
        <div style={{ maxWidth: '580px' }}>

          {/* Eyebrow */}
          <p
            className="animate-fade-in-up delay-0"
            style={{ fontFamily: INT, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: '#C1008B', textTransform: 'uppercase', marginBottom: '18px', opacity: 0 }}
          >
            Built for players
          </p>

          {/* Headline */}
          <h1
            className="animate-fade-in-up delay-100"
            style={{ fontFamily: CD, fontWeight: 800, fontSize: 'clamp(38px, 5.5vw, 52px)', lineHeight: 1.08, color: '#fff', marginBottom: '20px', opacity: 0 }}
          >
            Know your game.<br />
            <span style={{ color: '#C1008B' }}>Grow</span> your game.<br />
            <span style={{ color: '#7B4FD4' }}>Own</span> your story.
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-in-up delay-200"
            style={{ fontFamily: INT, fontWeight: 400, fontSize: '15px', lineHeight: 1.7, color: '#b0a8c8', maxWidth: '420px', marginBottom: '32px', opacity: 0 }}
          >
            AI-powered breakdown of your technique and movement — plus ready-to-share
            content that puts your best moments in front of the right audience.
          </p>

          {/* Waitlist form */}
          <div className="animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <WaitlistForm />
            <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '12px', color: '#7a6fa0', marginTop: '10px' }}>
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
