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
    let city = 'Unknown', country = 'Unknown'
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
        body: JSON.stringify({ email, location: `${city}, ${country}`, submitted_at: new Date().toISOString() }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch (_) { setStatus('error') }
  }

  if (status === 'success') return (
    <p style={{ fontFamily: INT, color: '#c54fff', fontSize: '13px' }}>
      You&apos;re on the list! We&apos;ll be in touch.
    </p>
  )

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
      >
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
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
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
          }}
        >
          {status === 'loading' ? 'Joining...' : buttonLabel}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ fontFamily: INT, color: '#ff4d6d', fontSize: '12px', marginTop: '6px' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}
