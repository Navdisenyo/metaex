"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Define Zod schema for validation
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(10, "Enter valid phone number"),
  gender: z.enum(["Male", "Female"]),
  address: z.string().min(5, "Address is required"),
  occupation: z.string().min(2, "Occupation is required"),
  identificationType: z.enum([
    "NID Card",
    "Driver's License",
    "Passport",
    "Resident Alien Card (Green Card)",
    "Birth Certificate",
    "Voter ID Card",
  ]),
  identificationNumber: z.string().min(5, "Identification number is required"),
  broker: z.enum(["BYBIT", "BINANCE", "EXNESS"]),
  exchangeUID: z.string().min(5, "Exchange UID is required"),
  plan: z.enum(["Copy Trading", "Asset Management"]),
  investmentAmount: z.string().min(1, "Investment amount is required"),
  registeredEmail: z.string().email("Invalid email"),
  note: z.string().optional(),
  consent1: z.boolean().refine(val => val === true, { message: "Consent is required" }),
  consent2: z.boolean().refine(val => val === true, { message: "Consent is required" }),
  consent3: z.boolean().refine(val => val === true, { message: "Consent is required" }),
})

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "Male",
      identificationType: "NID Card",
      broker: "BYBIT",
      plan: "Copy Trading",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Submitted", data)
  }

  return (
    <div className="flex flex-col ml-5 mr-5">
      <h1 className="text-3xl font-bold mb-6"></h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
          {/* Personal Information */}
          <section className="col-span-2">
            <h2 className="text-2xl font-semibold mb-9">Personal Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                // disabled={true}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="email@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      <div className="flex gap-4">
                        <RadioGroupItem value="Male" id="male" />
                        <label htmlFor="male">Male</label>
                        <RadioGroupItem value="Female" id="female" />
                        <label htmlFor="female">Female</label>
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address</FormLabel>
                    <FormControl>
                      <Input placeholder="1234 Main St, NJ, USA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Identification and Verification */}
          <section className="col-span-2">
            <h2 className="text-xl font-semibold mt-9 mb-9">Identification and Verification</h2>
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="identificationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Identification Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ID Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="NID Card">NID Card</SelectItem>
                        <SelectItem value="Driver's License">Driver's License</SelectItem>
                        <SelectItem value="Passport">Passport</SelectItem>
                        <SelectItem value="Resident Alien Card (Green Card)">Resident Alien Card</SelectItem>
                        <SelectItem value="Birth Certificate">Birth Certificate</SelectItem>
                        <SelectItem value="Voter ID Card">Voter ID Card</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="identificationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Identification Number</FormLabel>
                    <FormControl>
                      <Input placeholder="1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Other Information */}
          <section className="col-span-2">
            <h2 className="text-xl font-semibold mt-9 mb-9">Other Information</h2>
            <div className="grid grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="broker"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Choose your Exchange</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Select Exchange" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="BYBIT">BYBIT</SelectItem>
                            {/* <SelectItem value="BINANCE">BINANCE</SelectItem>
                            <SelectItem value="EXNESS">EXNESS</SelectItem> */}
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Your Exchange UID */}
                <FormField
                    control={form.control}
                    name="exchangeUID"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Your Exchange UID</FormLabel>
                        <FormControl>
                        <Input placeholder="Enter your UID" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Choose Plan with Us */}
                <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Choose Plan with Us</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Select Plan" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Copy Trading">Copy Trading</SelectItem>
                            <SelectItem value="Asset Management">Asset Management</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Investment Amount */}
                <FormField
                    control={form.control}
                    name="investmentAmount"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Investment Amount</FormLabel>
                        <FormControl>
                        <Input placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Registered Exchange Email */}
                <FormField
                    control={form.control}
                    name="registeredEmail"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Registered Exchange Email</FormLabel>
                        <FormControl>
                        <Input placeholder="example@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Note */}
                <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Note</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            placeholder="Add any additional information"
                            className="w-full border border-gray-800 rounded-md p-2 h-24 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                />
            </div>
          </section>

          {/* Consent and Privacy */}
          <section className="col-span-2">
            <h2 className="text-xl font-semibold mt-9 mb-9">Consent and Privacy</h2>
            <FormField
              control={form.control}
              name="consent1"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                    <span>I consent to receive trading for my Investment.</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent2"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                    <span>I consent to the use and disclosure of my wealth information for trading purposes.</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent3"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                    <span>I acknowledge that I have reviewed and agree to the privacy policy.</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <Button type="submit">Update Profile</Button>
        </form>
      </Form>
    </div>
  )
}