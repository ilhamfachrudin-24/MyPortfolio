"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function ProjectGallery(){


const projects = [

{
title:
"TITAN AI Trading Bot",

image:
"/projects/titan-ai.png",

description:
"AI crypto trading framework with market intelligence, risk management, and automated analysis."
},


{
title:
"BlockSeries",

image:
"/projects/blockseries.png",

description:
"Web3 application platform focused on blockchain technology and decentralized applications."
},


{
title:
"Crypto Analytics Tools",

image:
"/projects/crypto-tools.png",

description:
"Blockchain analytics tools for monitoring tokens, liquidity, and crypto market data."
}

];



return (

<section

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
mb-12
"

>

Project Showcase

</motion.h2>





<div className="
grid
md:grid-cols-3
gap-8
">


{

projects.map((project,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="
glass
rounded-3xl
overflow-hidden
"

>


<div className="
relative
h-52
w-full
"

>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
"

/>


</div>





<div className="
p-6
">


<h3 className="
text-xl
font-bold
mb-3
">

{project.title}

</h3>



<p className="
text-gray-400
leading-7
">

{project.description}

</p>



</div>



</motion.div>


))


}


</div>


</section>

)

}
