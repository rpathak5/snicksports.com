'use client'

import { useState, useEffect } from 'react'

const INT = "var(--font-inter), 'Inter', sans-serif"
const CD = "'Clash Display', sans-serif"

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
]

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
          <a href="#" className="flex items-center no-underline">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/images/snick-logo.svg"
                alt="Snick Sports"
                style={{ height: 28, width: 'auto' }}
              />
              <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.05em', color: '#ffffff' }}>
                SNICK
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link-anim transition-colors duration-200 hover:text-white no-underline"
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

          {/* Coming soon pill */}
          <div className="hidden md:flex items-center">
            <span
              style={{
                fontFamily: INT,
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#c084fc',
                background: 'rgba(123,79,212,0.15)',
                border: '0.5px solid rgba(123,79,212,0.35)',
                borderRadius: '20px',
                padding: '5px 14px',
                animation: 'pulseGlow 3s ease-in-out infinite',
              }}
            >
              Coming soon
            </span>
          </div>

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
        <div className="mb-12">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img
              src="/images/snick-logo.svg"
              alt="Snick Sports"
              style={{ height: 28, width: 'auto' }}
            />
            <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.05em', color: '#ffffff' }}>
              SNICK
            </span>
          </div>
        </div>

        <nav className="flex flex-col items-center gap-8 mb-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="nav-link-anim transition-colors duration-200 hover:text-[#C1008B] no-underline"
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

        {/* Coming soon pill in mobile overlay */}
        <span
          style={{
            fontFamily: INT,
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#c084fc',
            background: 'rgba(123,79,212,0.15)',
            border: '0.5px solid rgba(123,79,212,0.35)',
            borderRadius: '20px',
            padding: '6px 18px',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        >
          Coming soon
        </span>
      </div>
    </>
  )
}
