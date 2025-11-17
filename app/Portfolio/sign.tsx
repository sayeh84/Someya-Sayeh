'use client'

interface SignProps {
  email?: string | null
}

export default function Sign({ email }: SignProps) {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 w-fit border border-gray-100 space-x-4">
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">Inloggad som</p>
        <p className="font-semibold text-gray-800">{email}</p>
      </div>
    </div>
  )
}
