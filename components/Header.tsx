'use client'

import { useState, useEffect } from 'react'

const CD = "'Clash Display', sans-serif"
const INT = "var(--font-inter), 'Inter', sans-serif"

const SnickLogo = () => (
  <svg width="36" height="36" viewBox="0 0 140 140" fill="none" aria-hidden="true">
    <path
      d="M129.846 26.7078C104.836 30.1791 78.1413 54.4285 65.4961 66.4565H126.474C112.091 84.797 103.066 94.6147 87.0691 104.729C76.5262 111.394 64.0411 114.099 51.5678 114.099H10.1387C33.7337 106.674 47.1201 101.582 74.2072 73.5042H13.5107C30.4914 55.0506 41.7861 43.4211 57.3901 34.2027C66.8632 28.6063 77.8776 26.402 88.879 26.2304C111.063 25.8844 130.522 26.6139 129.846 26.7078Z"
      fill="url(#navLogoGrad)"
      stroke="white"
      strokeOpacity="0.16"
      strokeWidth="0.469843"
    />
    <defs>
      <linearGradient id="navLogoGrad" x1="50.3248" y1="26.1379" x2="89.9913" y2="114.003" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C1008B" />
        <stop offset="1" stopColor="#2A00A2" />
      </linearGradient>
    </defs>
  </svg>
)

const navLinks = [{ label: 'Features', href: '#features' }]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          borderBottom: scrolled ? '0.5px solid #1e1030' : 'none',
          background: scrolled ? 'rgba(8,4,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div
          className="flex items-center justify-between h-16 mx-auto"
          style={{ maxWidth: '1100px', padding: '0 28px' }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <SnickLogo />
            <span
              style={{
                fontFamily: CD,
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '0.08em',
                color: '#fff',
              }}
            >
              SNICK
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors duration-200 hover:text-white no-underline"
                style={{
                  fontFamily: INT,
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#c4bedd',
                  letterSpacing: '0.02em',
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[1.5px]" style={{ background: '#c4bedd' }} />
            <span className="block w-6 h-[1.5px]" style={{ background: '#c4bedd' }} />
            <span className="block w-4 h-[1.5px]" style={{ background: '#c4bedd' }} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-300"
        style={{
          background: '#08040F',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-7 transition-colors hover:text-white"
          style={{ fontSize: '28px', color: '#c4bedd', fontFamily: INT }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Logo in overlay */}
        <div className="flex items-center gap-2.5 mb-12">
          <SnickLogo />
          <span style={{ fontFamily: CD, fontWeight: 800, fontSize: '20px', letterSpacing: '0.08em', color: '#fff' }}>
            SNICK
          </span>
        </div>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="transition-colors duration-200 hover:text-[#C1008B] no-underline"
              style={{
                fontFamily: CD,
                fontWeight: 700,
                fontSize: '26px',
                color: '#fff',
                letterSpacing: '0.02em',
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
