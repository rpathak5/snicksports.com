'use client'

import WaitlistForm from './WaitlistForm'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

export default function CtaSection() {
  return (
    <section style={{ padding: '44px 32px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <div
          style={{
            background: '#0d0818',
            border: '0.5px solid #231540',
            borderRadius: '16px',
            padding: 'clamp(32px,5vw,56px) clamp(24px,5vw,48px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner glows */}
          <div className="absolute top-0 left-0 rounded-full pointer-events-none" style={{ width: '180px', height: '180px', background: 'rgba(193,0,139,0.07)', filter: 'blur(60px)', transform: 'translate(-40%, -40%)' }} />
          <div className="absolute bottom-0 right-0 rounded-full pointer-events-none" style={{ width: '200px', height: '200px', background: 'rgba(42,0,162,0.1)', filter: 'blur(70px)', transform: 'translate(40%, 40%)' }} />

          {/* Eyebrow */}
          <p style={{ fontFamily: INT, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: '#C1008B', textTransform: 'uppercase', marginBottom: '14px' }}>
            Join the waitlist
          </p>

          {/* Headline */}
          <h2 style={{ fontFamily: CD, fontWeight: 800, fontSize: 'clamp(26px,4vw,40px)', color: '#fff', lineHeight: 1.1, marginBottom: '14px' }}>
            Your game, your data, your story.
          </h2>

          {/* Sub */}
          <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '15px', color: '#b0a8c8', maxWidth: '480px', lineHeight: 1.7, margin: '0 auto 36px' }}>
            We&apos;re building Snick for players like you. Join the waitlist and help shape what we build.
          </p>

          {/* Waitlist form — centred */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <WaitlistForm buttonLabel="Get early access" />
            <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '12px', color: '#7a6fa0' }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
