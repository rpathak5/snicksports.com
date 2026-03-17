import Image from 'next/image'

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

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#0d0818', borderTop: '0.5px solid #1e1030' }}>

      {/* QR + Domain row */}
      <div
        className="flex items-center justify-between flex-wrap gap-6 mx-auto"
        style={{ maxWidth: '1100px', padding: '24px 28px' }}
      >
        {/* Left: QR */}
        <div className="flex flex-col items-center gap-1.5">
          <div
            style={{
              width: '72px', height: '72px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#fff',
              flexShrink: 0,
            }}
          >
            <Image
              src="/snick-qr.png"
              alt="Snick Instagram QR code"
              width={72}
              height={72}
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Footer caption: Inter 400, #7a6fa0 */}
          <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '10px', color: '#7a6fa0', letterSpacing: '0.05em', textAlign: 'center' }}>
            Scan to follow on Instagram
          </p>
        </div>

        {/* Right: domain — Clash Display 800, gradient */}
        <a
          href="https://snicksports.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: CD,
            fontWeight: 800,
            fontSize: '15px',
            letterSpacing: '0.1em',
            background: 'linear-gradient(90deg, #C1008B, #7B4FD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
          }}
        >
          SNICKSPORTS.COM
        </a>
      </div>

      {/* Divider */}
      <div style={{ height: '0.5px', background: '#1e1030', margin: '0 28px' }} />

      {/* Branding + copyright */}
      <div
        className="flex flex-col items-center gap-3 mx-auto"
        style={{ maxWidth: '1100px', padding: '20px 28px 28px' }}
      >
        <div className="flex items-center gap-2">
          <SnickLogo />
          {/* Logo wordmark: Clash Display 800 */}
          <span style={{ fontFamily: CD, fontWeight: 800, fontSize: '16px', letterSpacing: '0.08em', color: '#fff' }}>
            SNICK
          </span>
        </div>
        {/* Copyright: Inter 400, #7a6fa0 */}
        <p style={{ fontFamily: INT, fontWeight: 400, fontSize: '10px', color: '#7a6fa0', textAlign: 'center' }}>
          © {new Date().getFullYear()} Snick Sports. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
