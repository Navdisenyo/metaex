// pages/Billing.tsx
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwriteClient"
import { Button } from "@/components/ui/button"
import { Models } from 'appwrite'

const Billing = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
  const router = useRouter()

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

  if (!user) return 
//   <div>Loading...</div>

  return (
    <div className="flex flex-col gap-4">
        <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
            <span>Billing</span>
        </h1>
        <div className="flex flex-col gap-10 p-6">
            <div>
                <h2 className="text-2xl font-bold">Subscription & Investment</h2>
                <h1 className="text-base text-gray-500">Welcome, {user.email}</h1>
                {/* <p>You are on the free plan. Upgrade to paid plan to get more features. We will coming soon with more...</p> */}
            </div>

            {/* Subscription Boxes */}
              <section className="mb-12">
                {/* <h2 className="text-2xl font-semibold mb-4 text-center">Subscription Plans</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Monthly Plan */}
                  <div className="border p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">Monthly Plan</p>
                    <p className="text-4xl font-bold mb-4">$23.00</p>
                    <p className="text-gray-500 mb-4">Per month</p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
                  </div>

                  {/* 6-Months Plan */}
                  <div className="border p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">6-Months Plan</p>
                    <p className="text-4xl font-bold mb-4">$132.99</p>
                    <p className="text-gray-500 mb-4">For 6 months</p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
                  </div>

                  {/* Annual Plan */}
                  <div className="border p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">Annual Plan</p>
                    <p className="text-4xl font-bold mb-4">$113.99</p>
                    <p className="text-gray-500 mb-4">For 1 year</p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
                  </div>
                </div>
              </section>

              {/* Investment Plans */}
              <section>
                {/* <h2 className="text-2xl font-semibold mb-4 text-center">Investment Plans</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 3-Month Investment Plan */}
                  <div className="border p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">3-Month Plan</p>
                    <p className="text-4xl font-bold mb-4">$100.00</p>
                    <p className="text-gray-500 mb-2">Locking Period: 3 months</p>
                    <p className="text-gray-700 mb-4">Earn up to 6 - 8% ROI</p>
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg">Invest Now</button>
                  </div>

                  {/* 6-Month Investment Plan */}
                  <div className="border p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">6-Month Plan</p>
                    <p className="text-4xl font-bold mb-4">$500.00</p>
                    <p className="text-gray-500 mb-2">Locking Period: 6 months</p>
                    <p className="text-gray-700 mb-4">Earn up to 8 - 10% ROI</p>
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg">Invest Now</button>
                  </div>

                  {/* 1-Year Investment Plan */}
                  <div className="border p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">1-Year Plan</p>
                    <p className="text-4xl font-bold mb-4">$1000.00</p>
                    <p className="text-gray-500 mb-2">Locking Period: 1 year</p>
                    <p className="text-gray-700 mb-4">Earn up to 10 - 15% ROI</p>
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg">Invest Now</button>
                  </div>
                </div>
              </section>
            {/* profile form */}
        </div>
    </div>
  )
}
export default Billing