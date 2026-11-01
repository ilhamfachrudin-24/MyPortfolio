"use client";

import { FileDown } from "lucide-react";
import { motion } from "framer-motion";


export default function DownloadCV(){


return (

<motion.a

href="/cv.pdf"

download

whileHover={{
scale:1.05
}}

className="
inline-flex
items-center
gap-3
px-7
py-3
rounded-full
bg-cyan-400
text-black
font-bold
transition
"

>


<FileDown size={20}/>


Download CV


</motion.a>


)

}
