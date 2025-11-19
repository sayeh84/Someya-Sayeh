'use client'

import Image from 'next/image'
export default function about() {
  return (
    <>
      <section id="about" className="mt-[1px] max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Om mig</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <div className="w-full aspect-square rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
              <Image
                src="/me.png"
                alt="Portrait"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-muted">
            <p>
              Jag arbetar som frontendutvecklare med fokus på problemlösning och
              strukturerade designprinciper. Mitt arbete handlar om att
              översätta design till tillgängliga, modulära och testbara
              komponenter samt att optimera prestanda i användargränssnitt.{' '}
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
