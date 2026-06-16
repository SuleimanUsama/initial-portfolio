export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="font-body text-teal text-sm tracking-[0.2em] uppercase mb-4">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6 leading-tight">
              Let's build something that matters.
            </h2>
            <p className="font-body text-muted leading-relaxed mb-8 text-base">
              I'm open to research collaborations, PhD opportunities, and conversations
              about AI for health and infrastructure in African contexts. If you're working
              on something in this space — reach out.
            </p>

            {/* Links */}
            <div className="space-y-4">
              {[
                {
                  label: 'Email',
                  value: 'suleimanusamaadhan@gmail.com',
                  href:  'mailto:suleimanusamaadhan@gmail.com',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  value: 'github.com/SuleimanUsama',
                  href:  'https://github.com/SuleimanUsama',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/suleiman-usama-51a598272',
                  href:  'https://www.linkedin.com/in/suleiman-usama-51a598272/',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 border border-border flex items-center justify-center text-muted group-hover:border-teal group-hover:text-teal transition-colors">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-xs font-body text-muted tracking-widest uppercase">{link.label}</p>
                    <p className="text-sm font-body text-offwhite group-hover:text-teal transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — simple form */}
          <div className="border border-border p-8">
            <p className="font-display font-semibold text-offwhite mb-6 text-lg">Send a message</p>
            <form
              action="https://formspree.io/f/meewdqjk"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-body text-muted tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-surface border border-border px-4 py-3 text-sm font-body text-offwhite placeholder-muted/50 focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-body text-muted tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border px-4 py-3 text-sm font-body text-offwhite placeholder-muted/50 focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-body text-muted tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you working on?"
                  className="w-full bg-surface border border-border px-4 py-3 text-sm font-body text-offwhite placeholder-muted/50 focus:outline-none focus:border-teal transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-bg font-display font-semibold py-3 text-sm hover:bg-teal/90 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
