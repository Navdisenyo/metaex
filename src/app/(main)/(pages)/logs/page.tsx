// pages/Refferal.tsx
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwriteClient"
import { Button } from "@/components/ui/button"
import { Models } from 'appwrite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Copy, LinkIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const Logs = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const referralLink = `localhost:3000/ref/${user?.$id}` // Using $id instead of userId

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard.",
      })
      setTimeout(() => setCopied(false), 2000)
    })
  }

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
            <span>Refferals</span>
        </h1>
        <div className="flex flex-col gap-10 p-6">
            <div>
                <h2 className="text-2xl font-bold">Refferals</h2>
            </div>
                <Card className="">
                    <CardHeader>
                    <CardTitle>Your Referral Link</CardTitle>
                    <CardDescription>Share this link to invite others and earn 10% rewards!</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                        <Label htmlFor="referral-link">Referral Link</Label>
                        <div className="flex">
                            <Input
                            id="referral-link"
                            value={referralLink}
                            readOnly
                            className="flex-grow"
                            />
                            <Button
                            onClick={copyToClipboard}
                            className="ml-2"
                            variant="outline"
                            size="icon"
                            >
                            <Copy className={copied ? "text-green-500" : ""} />
                            </Button>
                        </div>
                        </div>
                        <div className="flex items-center space-x-2">
                        <LinkIcon className="text-primary" />
                        <span className="font-medium">Your unique referral link</span>
                        </div>
                    </div>
                    </CardContent>
                </Card>
            </div>
            {/* profile form */}
        </div>
  
  )
}
export default Logs