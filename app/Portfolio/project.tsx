'use client'

export default function project() {
  const projects = [
    {
      id: 1,
      title: 'Modern Web App',
      description:
        'A performant, accessible web app built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'Tailwind', 'Vercel'],
      href: '#',
    },
    {
      id: 2,
      title: 'Design System',
      description:
        'Component-driven design system with tokens and accessible components.',
      tech: ['React', 'Storybook', 'TypeScript'],
      href: '#',
    },
    {
      id: 3,
      title: 'E‑commerce UI',
      description: 'Fast checkout flows and delightful micro-interactions.',
      tech: ['Stripe', 'React Query'],
      href: '#',
    },
  ]
  return (
    <>
      {' '}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Utvalda c</h2>
        <p className="text-muted mt-2 max-w-2xl">
          Några projekt jag är stolt över — med fokus på resultat och teknisk
          kvalitet.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="project-card group">
              <div className="card-media" aria-hidden>
                {/* Replace with <Image src="/path" ... /> for optimized images */}
                <div className="h-40 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-md flex items-center justify-center">
                  <span className="text-sm text-muted">Preview</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">
                  <a href={p.href} className="link-focus">
                    {p.title}
                  </a>
                </h3>
                <p className="text-sm text-muted mt-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
