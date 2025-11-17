'use client'

export default function footer() {
  return (
    <div className="border-t border-slate-200/50 dark:border-slate-800/50 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted">
        <p>© {new Date().getFullYear()} Ditt Namn — Byggd med Next.js</p>
        <div className="mt-3 sm:mt-0">
          <ul className="flex gap-3">
            <li>
              <a className="nav-link" href="#privacy">
                Integritet
              </a>
            </li>
            <li>
              <a className="nav-link" href="#terms">
                Villkor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
