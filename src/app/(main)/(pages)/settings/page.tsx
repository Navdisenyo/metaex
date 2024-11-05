// pages/Settings.tsx
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwriteClient"
import { Button } from "@/components/ui/button"
import { Models } from 'appwrite'
import LoadingOverlay from "@/components/global/loading-overlay"
import ProfileForm from "@/components/forms/profile-form"


const Settings = () => {
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

  if (!user) return 
  <div>
      <LoadingOverlay isLoading={isLoading} />
  </div>

  return (
    <div className="flex flex-col gap-4">
        <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
            <span>Profile Settings</span>
        </h1>
        <div className="flex flex-col gap-4 p-6">
            <div>
                {/* <h1 className="text-base text-gray-500">Welcome, {user.email}</h1> */}
            </div>
            <div className="flex flex-col">
              <ProfileForm />
            </div>            
        </div>
    </div>
  )
}
export default Settings