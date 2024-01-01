import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FaUserLock } from "react-icons/fa6";

const font = Poppins ({
    subsets: ["latin"],
    weight: ["600"] 
})

interface HeaderProps {
    label: string;

}


export  const Header =({
    label,
}:HeaderProps)=> {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold flex gap-x-2 border-b-2 border-gray-700 rounded-md p-1 shadow-lg shadow-gray-400",font.className)}>
                <FaUserLock className='text-yellow-300'/>
                Auth</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}