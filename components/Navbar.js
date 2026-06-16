import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About',    href: '#about'    },
    { label: 'Projects', href: '#projects'  },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Contact',  href: '#contact'  },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-display font-semibold text-offwhite tracking-tight hover:text-teal transition-colors">
          [YN]
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted hover:text-offwhite transition-colors font-body tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 border border-teal text-teal hover:bg-teal hover:text-bg transition-all duration-200 font-body"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-offwhite"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-transform" style={{
            transform: menuOpen ? 'rotate(45deg) translate(2px, 8px)' : 'none'
          }}/>
          <span className="block w-5 h-0.5 bg-current mb-1.5" style={{
            opacity: menuOpen ? 0 : 1
          }}/>
          <span className="block w-5 h-0.5 bg-current" style={{
            transform: menuOpen ? 'rotate(-45deg) translate(2px, -8px)' : 'none'
          }}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-offwhite font-body text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-4 py-2 border border-teal text-teal text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  )
}
