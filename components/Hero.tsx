"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail
} from "lucide-react";

import DownloadCV from "./DownloadCV";


export default function Hero(){


return (

<section

className="
min-h-screen
flex
items-center
justify-center
text-center
px-6
pt-24
"


>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
max-w-4xl
"

>


<p className="
text-cyan-400
tracking-[6px]
text-sm
mb-6
">

WEB3 • AI • FULL STACK

</p>





<h1 className="
text-5xl
md:text-7xl
font-black
gradient-text
">

AHMAD ILHAM

</h1>





<h2 className="
mt-6
text-3xl
md:text-5xl
font-bold
neon
">

Web3 Developer

<br/>

AI Engineer & Full Stack Developer

</h2>





<p className="
mt-8
max-w-2xl
mx-auto
text-gray-400
text-lg
leading-8
">

Building Blockchain Applications,
AI Automation Tools,
and Modern Full Stack Solutions.

Focused on Web3,
Artificial Intelligence,
and scalable technology.

</p>






<div className="
flex
flex-wrap
justify-center
gap-5
mt-10
">



<a

href="https://github.com/ilhamfachrudin-24"

target="_blank"

className="
glass
px-7
py-3
rounded-full
flex
items-center
gap-3
text-cyan-300
hover:scale-105
transition
"

>

<Github size={20}/>

GitHub

</a>





<a

href="mailto:novi240397@gmail.com"

className="
glass
px-7
py-3
rounded-full
flex
items-center
gap-3
text-cyan-300
hover:scale-105
transition
"

>

<Mail size={20}/>

Email

</a>





<DownloadCV />



</div>





<div className="
mt-20
text-sm
text-gray-500
"

>

Available for Web3, AI & Full Stack Opportunities

</div>



</motion.div>


</section>

)

}
