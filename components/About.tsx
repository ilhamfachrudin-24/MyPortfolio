"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Blocks
} from "lucide-react";


export default function About(){


const cards = [

{
icon:<Blocks className="text-cyan-400" />,
title:"Web3 Developer",
text:
"Building blockchain applications, decentralized solutions, and exploring Solana & Ethereum ecosystems."
},


{
icon:<Brain className="text-cyan-400" />,
title:"AI Builder",
text:
"Creating AI automation workflows, experimenting with Generative AI, LLM, and AI-powered tools."
},


{
icon:<Code2 className="text-cyan-400" />,
title:"Full Stack Developer",
text:
"Developing modern applications using Next.js, TypeScript, Python, and scalable technologies."
}

];



return (

<section
id="about"
className="
max-w-6xl
mx-auto
px-6
py-24
"
>


<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-4xl
md:text-5xl
font-bold
gradient-text
mb-10
"

>

About Me

</motion.h2>




<p className="
text-gray-300
leading-8
max-w-4xl
mb-12
">

I am Ahmad Ilham, a Web3 Developer and AI Builder
focused on Blockchain Technology, Artificial Intelligence,
and Full Stack Development.

I explore and build digital solutions including
decentralized applications, crypto analytics tools,
AI automation systems, and modern web applications.

</p>





<div className="
grid
md:grid-cols-3
gap-6
">


{

cards.map((card,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="
glass
rounded-3xl
p-7
"

>


<div className="
mb-5
">

{card.icon}

</div>



<h3 className="
text-xl
font-bold
mb-3
">

{card.title}

</h3>



<p className="
text-gray-400
leading-7
">

{card.text}

</p>



</motion.div>


))


}


</div>


</section>

)

}
