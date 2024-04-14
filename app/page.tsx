import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
       <h1 className="text-3xl dark:text-white text-black font-extrabold italic">welcome to quiz competition</h1>
       <div className="flex flex-row gap-4">
       <Button className="bg-slate-400 text-yellow-600 font-bold"><Link href={'/test'} >Start</Link></Button>

<Button className="bg-slate-400 text-red-600 font-bold"><Link href={'/master'} >Master</Link></Button>

       </div>
    </main>
  ); 
}
  