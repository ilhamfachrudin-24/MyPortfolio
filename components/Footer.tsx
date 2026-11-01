"use client";

import { motion } from "framer-motion";
import {
  Github,
  Heart
} from "lucide-react";


export default function Footer(){


return (

<footer

className="
border-t
border-white/10
mt-20
px-6
py-10
"

>


<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

className="
max-w-6xl
mx-auto
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
text-gray-400
"

>



<div className="
text-center
md:text-left
">


<h3 className="
text-xl
font-bold
gradient-text
mb-2
">

ILHAM.DEV

</h3>


<p className="
text-sm
">

Web3 Developer • AI Engineer • Full Stack Developer

</p>


</div>





<div className="
flex
items-center
gap-4
">


<a

href="https://github.com/ilhamfachrudin-24"

target="_blank"

className="
text-cyan-400
hover:scale-110
transition
"

>

<Github/>

</a>



<p className="
flex
items-center
gap-2
text-sm
">

Built with

<Heart

size={15}

className="
text-cyan-400
"

/>

and AI

</p>



</div>




</motion.div>





<p className="
text-center
text-xs
text-gray-600
mt-8
">

© 2026 Ahmad Ilham. All rights reserved.

</p>



</footer>

)

}
