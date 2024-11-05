import UserForm from "@/components/forms/UserForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LottieAnimation from "@/components/global/LottieAnimation";


const LoginPage = () => {
    return (
        <div className="flex h-screen max-h-screen bg-black">
            {/* TODO: Add OTP Login For Admin */}
           <section className="remove-scrollbar container my-auto mx-5">
            <div className="sub-container max-w-[496px]">
                <Link href="/">
                <Image src="/logo.png" alt="metaex" height={1000} width={1000} className="mb-5 h-10 w-fit" />
                </Link>
                <section className="mb-12 space-x-4">
                    <h1 className="text-2xl font-bold text-gray-200 ml-4">Hi there 👋</h1>
                    <p className="text-gray-200">Welcome back to Metaex!</p>
                </section>
                <UserForm />

                <div className="text-14-regular mt-20 flex justify-between">
                   <p className="justify-items-end text-gray-100 xl:text-left">© 2024 Metaex | Powered by Navdisenyo</p>
                   <Link href="/signup" className="text-yellow-500">
                    Signup
                   </Link>
                </div>
            </div>
           </section>
           <LottieAnimation />
           {/* <Image src="/metaex.webp" alt="metaex" height={1000} width={1000} className="side-img max-w-[50%]" /> */}
        </div>
    )
}

export default LoginPage;