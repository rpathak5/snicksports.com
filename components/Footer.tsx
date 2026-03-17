const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

const SnickLogo = () => (
  <svg width="28" height="28" viewBox="0 0 140 140" fill="none" aria-hidden="true">
    <path
      d="M129.846 26.7078C104.836 30.1791 78.1413 54.4285 65.4961 66.4565H126.474C112.091 84.797 103.066 94.6147 87.0691 104.729C76.5262 111.394 64.0411 114.099 51.5678 114.099H10.1387C33.7337 106.674 47.1201 101.582 74.2072 73.5042H13.5107C30.4914 55.0506 41.7861 43.4211 57.3901 34.2027C66.8632 28.6063 77.8776 26.402 88.879 26.2304C111.063 25.8844 130.522 26.6139 129.846 26.7078Z"
      fill="url(#ftLogoGrad)"
      stroke="white"
      strokeOpacity="0.16"
      strokeWidth="0.469843"
    />
    <defs>
      <linearGradient id="ftLogoGrad" x1="50.3248" y1="26.1379" x2="89.9913" y2="114.003" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C1008B" />
        <stop offset="1" stopColor="#2A00A2" />
      </linearGradient>
    </defs>
  </svg>
)

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
          <div className="flex items-center gap-2 mb-3">
            <SnickLogo />
            <span style={{ fontFamily: CD, fontWeight: 800, fontSize: '18px', letterSpacing: '0.08em', color: '#fff' }}>
              SNICK
            </span>
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

        {/* Right: Contact + social */}
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
            href="https://instagram.com/snick.sports"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: INT, fontWeight: 400, fontSize: '13px', color: '#7a6fa0', textDecoration: 'none' }}
            className="hover:text-white transition-colors duration-150"
          >
            Instagram
          </a>
          <a
            href="/privacy"
            style={{ fontFamily: INT, fontWeight: 400, fontSize: '13px', color: '#7a6fa0', textDecoration: 'none' }}
            className="hover:text-white transition-colors duration-150"
          >
            Privacy Policy
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
