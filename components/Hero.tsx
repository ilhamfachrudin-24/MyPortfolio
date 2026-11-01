"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  ArrowDown
} from "lucide-react";


export default function Hero() {


return (

<section className="
min-h-screen
flex
items-center
justify-center
text-center
px-6
pt-20
">


<motion.div

initial={{
opacity:0,
y:50
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
mb-6
text-sm
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
text-gray-400
text-lg
max-w-2xl
mx-auto
leading-8
">

Building Blockchain Applications,
AI Automation Tools,
and Modern Digital Solutions.

Focused on Web3,
Artificial Intelligence,
and scalable software development.

</p>





<div className="
flex
justify-center
gap-5
mt-10
flex-wrap
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
gap-2
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
gap-2
text-cyan-300
hover:scale-105
transition
"

>

<Mail size={20}/>

Email

</a>



</div>





<motion.div

animate={{

y:[0,10,0]

}}

transition={{

repeat:Infinity,

duration:2

}}

className="
mt-16
text-cyan-400
"

>


<ArrowDown/>


</motion.div>



</motion.div>


</section>


)


}
