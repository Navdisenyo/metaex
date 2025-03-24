// 'use client'

// import React, { useEffect, useState } from 'react'
// import { Client, Databases, Query, Functions } from 'appwrite'
// import { format } from 'date-fns'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// // const client = new Client()
// //   .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
// //   .setProject('your-project-id') // Replace with your project ID

// // const databases = new Databases(client)
// // const functions = new Functions(client)

// interface Appointment {
//   $id: string
//   userId: string
//   userName: string
//   status: 'pending' | 'scheduled' | 'cancelled'
//   appointmentDate: string
//   exchange: string
// }

// const AppointmentTable = () => {
//   const [appointments, setAppointments] = useState<Appointment[]>([])
//   const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
//   const [scheduledDate, setScheduledDate] = useState('')
//   const [scheduledTime, setScheduledTime] = useState('')

//   useEffect(() => {
//     fetchAppointments()
//   }, [])

//   const fetchAppointments = async () => {
//     // try {
//     //   const response = await databases.listDocuments('your-database-id', 'appointments-collection-id', [
//     //     Query.orderDesc('$createdAt'),
//     //     Query.limit(100)
//     //   ])
//     //   setAppointments(response.documents as Appointment[])
//     // } catch (error) {
//     //   console.error('Error fetching appointments:', error)
//     // }
//   }

//   const handleSchedule = async () => {
//     if (!selectedAppointment || !scheduledDate || !scheduledTime) return

//     try {
//       const scheduledDateTime = `${scheduledDate}T${scheduledTime}:00.000Z`
//       await databases.updateDocument('your-database-id', 'appointments-collection-id', selectedAppointment.$id, {
//         status: 'scheduled',
//         appointmentDate: scheduledDateTime
//       })

//       // Send email notification
//       await functions.createExecution('send-email-function-id', JSON.stringify({
//         to: selectedAppointment.userName,
//         subject: 'Appointment Scheduled',
//         body: `Your appointment has been scheduled for ${format(new Date(scheduledDateTime), 'PPpp')}`
//       }))

//       fetchAppointments()
//       setSelectedAppointment(null)
//       setScheduledDate('')
//       setScheduledTime('')
//     } catch (error) {
//       console.error('Error scheduling appointment:', error)
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'pending':
//         return 'bg-blue-100 text-blue-800'
//       case 'scheduled':
//         return 'bg-green-100 text-green-800'
//       case 'cancelled':
//         return 'bg-red-100 text-red-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   return (
//     <div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>ID</TableHead>
//             <TableHead>User Name</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Appointment</TableHead>
//             <TableHead>Exchange</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {appointments.map((appointment) => (
//             <TableRow key={appointment.$id}>
//               <TableCell>{appointment.$id}</TableCell>
//               <TableCell>{appointment.userName}</TableCell>
//               <TableCell>
//                 <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(appointment.status)}`}>
//                   {appointment.status}
//                 </span>
//               </TableCell>
//               <TableCell>
//                 {appointment.appointmentDate
//                   ? format(new Date(appointment.appointmentDate), 'PPpp')
//                   : 'Not scheduled'}
//               </TableCell>
//               <TableCell>{appointment.exchange}</TableCell>
//               <TableCell>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => setSelectedAppointment(appointment)}
//                       disabled={appointment.status !== 'pending'}
//                     >
//                       Schedule
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Schedule Appointment</DialogTitle>
//                     </DialogHeader>
//                     <div className="grid gap-4 py-4">
//                       <div className="grid grid-cols-4 items-center gap-4">
//                         <Label htmlFor="date" className="text-right">
//                           Date
//                         </Label>
//                         <Input
//                           id="date"
//                           type="date"
//                           value={scheduledDate}
//                           onChange={(e) => setScheduledDate(e.target.value)}
//                           className="col-span-3"
//                         />
//                       </div>
//                       <div className="grid grid-cols-4 items-center gap-4">
//                         <Label htmlFor="time" className="text-right">
//                           Time
//                         </Label>
//                         <Input
//                           id="time"
//                           type="time"
//                           value={scheduledTime}
//                           onChange={(e) => setScheduledTime(e.target.value)}
//                           className="col-span-3"
//                         />
//                       </div>
//                     </div>
//                     <Button onClick={handleSchedule}>Schedule Appointment</Button>
//                   </DialogContent>
//                 </Dialog>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }

// export default AppointmentTable
