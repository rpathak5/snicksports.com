'use client'

export default function HeroVideo() {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 16,
      overflow: 'hidden',
      border: '0.5px solid rgba(255,255,255,0.1)',
      aspectRatio: '16/9',
      background: '#0d0b18',
    }}>
      <video
        src="/videos/snick-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  )
}
