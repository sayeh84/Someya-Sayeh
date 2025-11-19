'use client'

import React, { useState } from 'react'

export default function SendEmailPage() {
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  async function sendEmail() {
    if (!to.trim()) return setFeedback('Du måste ange mottagarens e-post!')
    if (!subject.trim()) return setFeedback('Du måste ange ett ämne!')
    if (!message.trim()) return setFeedback('Du måste skriva ett meddelande!')

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        subject,
        message,
      }),
    })

    const data = await res.json()
    setFeedback('E-mail skickat!')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Skicka e-mail</h1>

      <input
        type="email"
        placeholder="Mottagarens e-post"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Ämne"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />

      <textarea
        placeholder="Meddelande..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', height: 120, padding: 10 }}
      />

      <button
        onClick={sendEmail}
        style={{
          padding: '10px 20px',
          marginTop: 20,
          border: '1px solid black',
        }}
      >
        Skicka e-mail
      </button>
      <div
        style={{
          marginTop: 20,
          padding: '10px 15px',
          borderRadius: 8,
          fontWeight: 'bold',
          backgroundColor: feedback
            ? feedback.includes('skickat')
              ? '#d1fae5'
              : '#fee2e2'
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
