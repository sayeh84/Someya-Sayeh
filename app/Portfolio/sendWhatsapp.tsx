'use client'

import { useState } from 'react'

export default function SendWhatsAppPage() {
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  async function sendWhatsApp() {
    if (!message.trim()) {
      setFeedback('Skriv ett meddelande först!')
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
    setFeedback('WhatsApp skickat!')
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
        style={{
          padding: '10px 20px',
          marginTop: 20,
          border: '1px solid black',
        }}
      >
        Skicka WhatsApp
      </button>
      <div
        style={{
          marginTop: 20,
          padding: '10px 15px',
          borderRadius: 8,
          fontWeight: 'bold',
          backgroundColor: feedback
            ? feedback.includes('skickat')
              ? '#d1fae5' // GRÖN för success
              : '#fee2e2' // RÖD för error
            : 'transparent',
          color: feedback
            ? feedback.includes('skickat')
              ? '#065f46'
              : '#991b1b'
            : 'inherit',
          border: feedback ? '1px solid #ccc' : 'none',
          transition: '0.3s ease',
        }}
      >
        {feedback}
      </div>
    </div>
  )
}
