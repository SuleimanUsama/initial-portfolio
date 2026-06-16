import { useEffect, useState } from 'react'

export default function Hero() {
  const [scanned, setScanned] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small delay then start fade-in
    const t1 = setTimeout(() => setVisible(true), 100)
    const t2 = setTimeout(() => setScanned(true), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">

      {/* Scanline animation — microscope calibration metaphor */}
      {!scanned && (
        <div
          className="pointer-events-none absolute left-0 right-0 h-px bg-teal/60 z-20"
          style={{
            top: 0,
            animation: 'scan 2s ease-out forwards',
            boxShadow: '0 0 12px 2px rgba(0,212,170,0.4)',
          }}
        />
      )}

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,170,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,170,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner brackets — lab/scope framing */}
      <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-teal/30 z-10" />
      <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-teal/30 z-10" />
      <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-teal/30 z-10" />
      <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-teal/30 z-10" />

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto w-full"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease-out' }}
      >
        {/* Eyebrow */}
        <p className="font-body text-teal text-sm tracking-[0.2em] uppercase mb-6">
          AI Researcher · Kyungdon Global University, South Korea
        </p>

        {/* The claim — leads with work, not name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-offwhite mb-6 max-w-4xl">
          Building AI that works
          <br />
          <span className="text-teal">where it matters.</span>
        </h1>

        {/* Name — second, quieter */}
        <p className="font-body text-muted text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
          I'm <span className="text-offwhite font-medium">Suleiman Usama </span> — a computer science researcher
          focused on deep learning for healthcare and infrastructure in African contexts.
          Currently working on sickle cell disease detection that could reach rural clinics
          with no specialist on site.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-teal text-bg font-display font-semibold px-6 py-3 text-sm hover:bg-teal/90 transition-colors"
          >
            See the work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-offwhite font-display font-medium px-6 py-3 text-sm hover:border-offwhite transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border">
          {[
            { value: '98.46%',  label: 'SCD Detection Accuracy' },
            { value: 'AUC 1.0', label: 'Sickle Cell Separability' },
            { value: '3',       label: 'Datasets · 3 Countries'  },
            { value: '10',      label: 'Experiments Run'         },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-teal">{stat.value}</p>
              <p className="font-body text-xs text-muted mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
