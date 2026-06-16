export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted">
          © {new Date().getFullYear()} Suleiman Usama · Kyungdong Global University
        </p>
        <p className="font-body text-xs text-muted">
          Built with Next.js · Deployed on Vercel
        </p>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="font-body text-xs text-muted">Open to collaborate</span>
        </div>
      </div>
    </footer>
  )
}
