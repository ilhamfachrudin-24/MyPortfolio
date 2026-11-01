"use client";

import { motion } from "framer-motion";
import {
  Github,
  Menu
} from "lucide-react";



export default function Navbar() {


return (

<motion.nav

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:0.6
}}

className="
fixed
top-0
left-0
w-full
z-50
px-6
py-5
backdrop-blur-xl
bg-black/50
border-b
border-white/10
"

>


<div className="
max-w-6xl
mx-auto
flex
items-center
justify-between
">


<h2 className="
text-2xl
font-bold
gradient-text
">

ILHAM.DEV

</h2>



<div className="
hidden
md:flex
gap-8
text-gray-300
">


<a
href="#about"
className="hover:text-cyan-400"
>
About
</a>


<a
href="#skills"
className="hover:text-cyan-400"
>
Skills
</a>


<a
href="#projects"
className="hover:text-cyan-400"
>
Projects
</a>


<a
href="#contact"
className="hover:text-cyan-400"
>
Contact
</a>



</div>




<a

href="https://github.com/ilhamfachrudin-24"

target="_blank"

className="
text-cyan-400
"

>

<Github />

</a>




<div className="
md:hidden
text-cyan-400
">

<Menu />

</div>



</div>


</motion.nav>


)


}
