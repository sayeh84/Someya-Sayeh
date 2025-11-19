'use client'

import { useState } from 'react'

export default function SendWhatsAppPage() {
  const [message, setMessage] = useState('')

  async function sendWhatsApp() {
    if (!message.trim()) {
      alert('Skriv ett meddelande först!')
      return
    }

    const res = await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: '+46733514861',
        message: message,
      }),
    })

    const data = await res.json()
    console.log(data)
    alert('WhatsApp skickat!')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Skicka WhatsApp</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Skriv ditt meddelande här..."
        style={{ width: '100%', height: 120, padding: 10 }}
      />

      <button
        onClick={sendWhatsApp}
        style={{ padding: '10px 20px', marginTop: 20 }}
      >
        Skicka WhatsApp
      </button>
    </div>
  )
}
