'use client'

export default function contact() {
  return (
    <>
      <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <p className="text-muted mt-2">
          Vill du arbeta tillsammans eller bara säga hej? Skicka ett meddelande.
        </p>

        <form
          className="mt-6 grid grid-cols-1 gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Skickat — ersätt med verklig hantering')
          }}
        >
          <label className="sr-only" htmlFor="name">
            Namn
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Ditt namn"
            className="input"
          />

          <label className="sr-only" htmlFor="email">
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="din@email.se"
            className="input"
          />

          <label className="sr-only" htmlFor="message">
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Skriv ditt meddelande här..."
            className="input resize-y"
          />

          <div className="flex items-center justify-between">
            <button type="submit" className="btn-primary px-5 py-2 rounded-md">
              Skicka
            </button>
            <p className="text-xs text-muted">
              Eller maila:{' '}
              <a href="mailto:hello@exempel.se" className="link-focus">
                hello@exempel.se
              </a>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}
