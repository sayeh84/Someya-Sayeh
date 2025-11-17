'use client'

import PortfolioPag from '@/app/Portfolio/portfolio'

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6 w-full max-w-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Inte inloggad</h1>
        <p className="text-gray-500 text-center">
          Logga in för att komma åt ditt konto och spara dina inställningar.
        </p>
        <PortfolioPag />
      </div>
    </div>
  )
}
