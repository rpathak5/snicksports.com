'use client'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

export default function CtaSection() {
  return (
    <section style={{ padding: 'clamp(40px,6vh,72px) 28px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <div
          style={{
            background: '#0d0818',
            border: '0.5px solid #231540',
            borderRadius: '16px',
            padding: 'clamp(32px,5vw,48px) clamp(24px,5vw,40px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner glows */}
          <div className="absolute top-0 left-0 rounded-full pointer-events-none" style={{ width: '180px', height: '180px', background: 'rgba(193,0,139,0.07)', filter: 'blur(60px)', transform: 'translate(-40%, -40%)' }} />
          <div className="absolute bottom-0 right-0 rounded-full pointer-events-none" style={{ width: '200px', height: '200px', background: 'rgba(42,0,162,0.1)', filter: 'blur(70px)', transform: 'translate(40%, 40%)' }} />

          {/* Eyebrow: Inter 500 */}
          <p style={{ fontFamily: INT, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: '#C1008B', textTransform: 'uppercase', marginBottom: '14px' }}>
            Ready to level up?
          </p>

          {/* Headline: Clash Display 800 */}
          <h2 style={{ fontFamily: CD, fontWeight: 800, fontSize: 'clamp(26px,4vw,36px)', color: '#fff', lineHeight: 1.1, marginBottom: '14px' }}>
            Your game, your data, your story.
          </h2>

          {/* Sub: Inter 400, #b0a8c8 */}
          <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '14px', color: '#b0a8c8', maxWidth: '400px', lineHeight: 1.7, margin: '0 auto 32px' }}>
            Join thousands of players who use Snick to train smarter and get noticed.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:contact@snicksports.com"
            className="inline-block transition-all duration-150 hover:opacity-80"
            style={{
              fontFamily: CD,
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '0.02em',
              background: 'linear-gradient(90deg, #C1008B, #7B4FD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.letterSpacing = '0.04em' }}
            onMouseLeave={(e) => { e.currentTarget.style.letterSpacing = '0.02em' }}
          >
            contact@snicksports.com
          </a>
        </div>
      </div>
    </section>
  )
}
