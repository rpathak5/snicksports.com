'use client'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#features' },
  { label: 'About', href: '#about' },
]

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#0d0818', borderTop: '0.5px solid #1e1030' }}>

      {/* Main footer content */}
      <div
        className="flex flex-wrap justify-between gap-8 mx-auto"
        style={{ maxWidth: '1100px', padding: 'clamp(32px,5vh,48px) 28px' }}
      >

        {/* Left: Logo + tagline */}
        <div style={{ maxWidth: '260px' }}>
          <div className="mb-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <img
                src="/images/snick-logo.svg"
                alt="Snick Sports"
                style={{ height: 22, width: 'auto' }}
              />
              <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>
                SNICK
              </span>
            </div>
          </div>
          <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '13px', color: '#7a6fa0', lineHeight: 1.6 }}>
            AI-powered sports performance and showcase platform. Launching soon.
          </p>
        </div>

        {/* Centre: Nav links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontFamily: INT, fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c4bedd', marginBottom: '4px' }}>
            Product
          </p>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: INT,
                fontWeight: 400,
                fontSize: '13px',
                color: '#7a6fa0',
                textDecoration: 'none',
              }}
              className="hover:text-white transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: Contact + QR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontFamily: INT, fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c4bedd', marginBottom: '4px' }}>
            Connect
          </p>
          <a
            href="mailto:contact@snicksports.com"
            style={{ fontFamily: INT, fontWeight: 400, fontSize: '13px', color: '#7a6fa0', textDecoration: 'none' }}
            className="hover:text-white transition-colors duration-150"
          >
            contact@snicksports.com
          </a>
          <a
            href="/privacy"
            style={{ fontFamily: INT, fontWeight: 400, fontSize: '13px', color: '#7a6fa0', textDecoration: 'none' }}
            className="hover:text-white transition-colors duration-150"
          >
            Privacy Policy
          </a>

          {/* Instagram QR */}
          <a
            href="https://www.instagram.com/snicksports"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              opacity: 0.7,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              marginTop: '6px',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            <img
              src="/images/snick-qr.png"
              alt="Scan to follow Snick Sports on Instagram"
              style={{ width: 80, height: 80, borderRadius: 8 }}
            />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: INT }}>
              Follow on Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '0.5px', background: '#1e1030', margin: '0 28px' }} />

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between flex-wrap gap-3 mx-auto"
        style={{ maxWidth: '1100px', padding: '16px 28px' }}
      >
        <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '11px', color: '#7a6fa0' }}>
          © {new Date().getFullYear()} Snick Sports. All rights reserved.
        </p>
        <span
          style={{
            fontFamily: INT,
            fontWeight: 500,
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#c084fc',
            background: 'rgba(123,79,212,0.12)',
            border: '0.5px solid rgba(123,79,212,0.3)',
            borderRadius: '20px',
            padding: '3px 10px',
          }}
        >
          Coming soon
        </span>
      </div>
    </footer>
  )
}
