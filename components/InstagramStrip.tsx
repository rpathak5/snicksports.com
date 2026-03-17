const INT = "var(--font-inter), 'Inter', sans-serif"

export default function InstagramStrip() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 32px',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      {/* Left: QR code */}
      <a href="https://www.instagram.com/snicksports" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/snick-qr.png"
          alt="Scan to follow Snick Sports on Instagram"
          style={{ width: 100, height: 100, borderRadius: 10 }}
        />
      </a>

      {/* Centre: message */}
      <div>
        <p style={{ fontFamily: INT, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 6 }}>
          Follow us on Instagram
        </p>
        <p style={{ fontFamily: INT, fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>
          Behind-the-scenes, early access news, and updates<br />
          as we build — straight to your feed.
        </p>
      </div>

      {/* Right: handle */}
      <a
        href="https://www.instagram.com/snicksports"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: INT, fontSize: 15, fontWeight: 600, color: '#c54fff', textDecoration: 'none', letterSpacing: '0.02em' }}
      >
        @snicksports
      </a>
    </div>
  )
}
