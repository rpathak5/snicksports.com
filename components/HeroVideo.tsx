'use client'

import { useRef, useState } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  function togglePlay() {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  function toggleMute() {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        border: '0.5px solid rgba(255,255,255,0.1)',
        aspectRatio: '16/9',
        background: '#0d0b18',
        cursor: 'pointer',
      }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src="/videos/snick-hero.mp4"
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Play overlay — shown when paused */}
      {!playing && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.35)',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(197,79,255,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.15s ease',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M6 4l12 6-12 6V4z" fill="white" />
            </svg>
          </div>
        </div>
      )}

      {/* Mute/unmute — visible only while playing */}
      {playing && (
        <button
          onClick={e => { e.stopPropagation(); toggleMute() }}
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(0,0,0,0.5)',
            border: '0.5px solid rgba(255,255,255,0.2)',
            borderRadius: 8,
            padding: '5px 8px',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.8)',
            fontSize: 11,
          }}
        >
          {muted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      )}
    </div>
  )
}
