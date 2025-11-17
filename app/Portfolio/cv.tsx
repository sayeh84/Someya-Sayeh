'use client'

export default function cv() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-12 sm:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-accent">
            Hej, jag är
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
            Ditt Namn —{' '}
            <span className="text-gradient">byggare av snabba upplevelser</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            Jag designar och utvecklar moderna webbapplikationer med fokus på
            prestanda, tillgänglighet och skalbarhet. Jag använder senaste
            Next.js och moderna verktyg för att leverera produktionklar kod.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="btn-outline px-4 py-2 rounded-md">
              Se projekt
            </a>
            <a href="/cv.pdf" className="btn-primary px-4 py-2 rounded-md">
              Ladda ner CV
            </a>
          </div>
        </div>

        <aside aria-hidden className="hidden lg:flex justify-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5 transform-gpu hover:scale-[1.02] transition">
            <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-20"
              >
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#g)" />
              </svg>
              <div className="absolute text-white text-center p-6">
                <p className="text-sm font-medium">Featured project</p>
                <h3 className="mt-2 font-bold text-2xl">Pixel-perfect UI</h3>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
