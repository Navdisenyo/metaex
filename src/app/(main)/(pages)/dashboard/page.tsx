// pages/dashboard.tsx
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwriteClient"
import { Button } from "@/components/ui/button"
import { Models } from 'appwrite'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, BarChart2, PieChart, CreditCard, Calendar, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import LoadingOverlay from "@/components/global/loading-overlay"


// Mock data for referrals
const referrals = [
  { id: "REF001", name: "John Doe", joinDate: "2023-05-15", earnAmount: 150 },
  { id: "REF002", name: "Jane Smith", joinDate: "2023-06-02", earnAmount: 220 },
  { id: "REF003", name: "Bob Johnson", joinDate: "2023-06-18", earnAmount: 180 },
]

const DashboardPage = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch user details on mount
    async function fetchUser() {
      try {
        const userDetails = await account.get()
        setUser(userDetails)
      } catch (error) {
        console.error("User not logged in:", error)
        router.push("/login") // Redirect to login if not authenticated
      }
    }
    fetchUser()
  }, [router])

  // Log out function
  async function handleLogout() {
    try {
      await account.deleteSession("current")
      router.push("/login") // Redirect to login on logout
    } catch (error) {
      console.error("Failed to log out:", error)
    }
  }
  // Loading animation
  useEffect(() => {
    // Simulate an async operation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!user) return <div>
      <LoadingOverlay isLoading={isLoading} />
  </div>

  return (
    <div className="flex flex-col gap-4">
        <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
            <span>Dashboard</span>
        </h1>
        <div className="flex flex-col gap-10 p-6">
            <div>
                <h2 className="text-2xl font-bold">Dashboard</h2>
                  <h1 className="text-base text-gray-500">Welcome, {user.email}</h1>
            </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Investment
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Trade
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">
                +180 trades from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Profit Percentage
              </CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12.5%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Revenue This Month
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,234.56</div>
              <p className="text-xs text-muted-foreground">
                +15.2% from last month
              </p>
            </CardContent>
          </Card>
      </div>
      
      {/* New Referral Block */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center">
            <Users className="mr-2 h-6 w-6" />
            User Referrals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Referral Name</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead>Earned Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrals.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell>{referral.id}</TableCell>
                  <TableCell className="font-medium">{referral.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {referral.joinDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                      ${referral.earnAmount}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}


export default DashboardPage