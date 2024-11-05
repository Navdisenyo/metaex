'use client'

import { Loader2 } from "lucide-react"

export default function LoadingOverlay({ isLoading = true }: { isLoading?: boolean }) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="rounded-lg bg-background p-4 shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    </div>
  )
}