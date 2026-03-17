'use client'
import { useState } from 'react'

const INT = "var(--font-inter), 'Inter', sans-serif"
const CD = "'Clash Display', sans-serif"

export default function WaitlistForm({ buttonLabel = 'Join waitlist' }: { buttonLabel?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    let city = 'Unknown'
    let country = 'Unknown'
    try {
      const geo = await fetch('https://ipapi.co/json/')
      const data = await geo.json()
      city = data.city || 'Unknown'
      country = data.country_name || 'Unknown'
    } catch (_) {}
    try {
      const res = await fetch('https://formspree.io/f/maqplebl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          location: `${city}, ${country}`,
          submitted_at: new Date().toISOString(),
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch (_) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{ fontFamily: INT, color: '#c54fff', fontSize: 13 }}>
        You&apos;re on the list! We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={status === 'loading'}
          style={{
            fontFamily: INT,
            fontSize: '14px',
            padding: '10px 16px',
            borderRadius: '8px',
            border: '0.5px solid #3a2060',
            background: '#0d0818',
            color: '#fff',
            outline: 'none',
            flex: '1 1 200px',
            minWidth: '200px',
            transition: 'border-color 0.2s ease, background 0.2s ease',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-shimmer"
          onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          onMouseDown={e => { if (status !== 'loading') e.currentTarget.style.transform = 'scale(0.97)' }}
          onMouseUp={e => { if (status !== 'loading') e.currentTarget.style.transform = 'scale(1.04)' }}
          style={{
            fontFamily: CD,
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.04em',
            padding: '10px 22px',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(90deg, #C1008B, #7B4FD4)',
            color: '#fff',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            opacity: status === 'loading' ? 0.7 : 1,
            whiteSpace: 'nowrap',
            animation: 'pulseGlow 2.5s ease-in-out infinite',
            transition: 'transform 0.15s ease',
          }}
        >
          {status === 'loading' ? 'Joining...' : buttonLabel}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ fontFamily: INT, color: 'red', fontSize: 12, marginTop: 6 }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}
