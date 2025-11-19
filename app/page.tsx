'use client'

import PortfolioPag from '@/app/Portfolio/portfolio'

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6 w-full  border border-gray-100">
        <PortfolioPag />
      </div>
    </div>
  )
}
