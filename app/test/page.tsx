
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"






const page = () => {
  return (
    <main
     className="min-h-screen  flex flex-col justify-center items-center">
         <h1 className="text-4xl italic font-bold mb-6">welcome to quizz world</h1>
          <Button className="bg-slate-300"><Link href={'/test/start'}>Start Quizz</Link></Button>

    </main>
  )
}
export default page

