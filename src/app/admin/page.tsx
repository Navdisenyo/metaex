import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StatCard from '@/components/global/StatCard'
import { Calendar, Clock, DollarSign, Users, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AppointmentTable from '@/components/global/AppointmentTable'
const AdminPage = () => {
  return (
    <div className='flex max-w-9xl flex-col space-y-20 bg-gray-900 min-h-screen'>
    <div className="p-4">
      <header className='flex justify-between items-center mb-8 border-b border-gray-600 pb-4'>
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.png" alt="metaex" height={50} width={150} className="ml-20" />
        </Link>
        <Button className="text-gray-300 mr-20">ARBITRAGE</Button>
      </header>

      <div className="admin-main">
        <section className='w-full space-y-4 mb-8 ml-24'>
          <h2 className='text-3xl font-bold text-gray-300'>Welcome, ✌️</h2>
          <p className='text-gray-300'>Start the day by managing new appointments & more...</p>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
          <StatCard
            type="users"
            // count={stats.totalUsers}
            label="Total Users"
            icon={<Users className="h-6 w-6" />}
            gradient="from-blue-500 to-blue-600"
          />
          <StatCard
            type="investment"
            // count={stats.totalInvestment}
            label="Total Investment"
            icon={<DollarSign className="h-6 w-6" />}
            gradient="from-green-500 to-green-600"
          />
          <StatCard
            type="scheduled"
            // count={stats.scheduledAppointments}
            label="Scheduled Appointments"
            icon={<Calendar className="h-6 w-6" />}
            gradient="from-purple-500 to-purple-600"
          />
          <StatCard
            type="pending"
            // count={stats.pendingAppointments}
            label="Pending Appointments"
            icon={<Clock className="h-6 w-6" />}
            gradient="from-yellow-500 to-yellow-600"
          />
          <StatCard
            type="cancelled"
            // count={stats.cancelledAppointments}
            label="Cancelled Appointments"
            icon={<X className="h-6 w-6" />}
            gradient="from-red-500 to-red-600"
          />
        </section>

          <section className='w-full'>
            <h3 className='text-2xl font-bold text-gray-300 mb-4'>Appointments</h3>
            <AppointmentTable />
          </section>
      </div>
    </div>
  </div>
  )
}

export default AdminPage