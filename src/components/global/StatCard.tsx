import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  type: 'users' | 'investment' | 'scheduled' | 'pending' | 'cancelled'
  count: number
  label: string
  icon: React.ReactNode
  gradient: string
}

const StatCard = ({ count = 0, label, icon, gradient }: StatCardProps) => {
  return (
    <Card className={`overflow-hidden`}>
      <div className={`bg-gradient-to-r ${gradient} p-4`}>
        <CardContent className="p-6 flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-2xl font-bold text-white">{count}</p>
            <p className="text-sm text-white/80">{label}</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            {icon}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default StatCard