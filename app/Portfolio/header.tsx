'use client'

export default function Header() {
  return (
    <div className="backdrop-blur sticky top-0 z-40 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            Ditt Namn
          </a>
          <span className="hidden md:inline text-sm text-muted">
            Frontend • UX • Next.js
          </span>
        </div>
        <div>
          <ul className="flex gap-4 items-center text-sm">
            <li>
              <a className="nav-link" href="https://www.google.com/">
                Projekt
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://www.google.com/">
                Om
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://www.google.com/">
                Kontakt
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
