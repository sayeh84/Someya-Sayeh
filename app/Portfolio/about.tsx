'use client'

export default function about() {
  return (
    <>
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Om mig</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <div className="w-full aspect-square rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
              {/* placeholder for portrait */}
              <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-sky-300 flex items-center justify-center">
                {' '}
                <span className="text-white font-medium">Portrait</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 text-muted">
            <p>
              Jag är en frontendutvecklare som föredrar pragmatism och tydliga
              designprinciper. Jag tycker om att konvertera design till
              tillgängliga, testbara komponenter och optimera prestanda.
            </p>

            <h3 className="mt-6 font-medium">Teknologistack</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              <li>Next.js (latest)</li>
              <li>React</li>
              <li>TypeScript (valfritt)</li>
              <li>Tailwind CSS</li>
              <li>Storybook</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
