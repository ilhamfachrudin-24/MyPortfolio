"use client";

import { motion } from "framer-motion";

import {
  Github,
  ExternalLink
} from "lucide-react";



export default function Projects(){


const projects = [


{

title:
"TITAN AI Trading Bot",


category:
"AI + Crypto Trading Infrastructure",


description:
"AI-powered crypto trading framework combining multi-model AI analysis, market intelligence, smart money tracking, risk management, and automated trading architecture.",


tech:[

"Python",

"FastAPI",

"AI Agents",

"Next.js",

"Blockchain"

],


github:
"https://github.com/ilhamfachrudin-24"


},



{

title:
"BlockSeries",


category:
"Web3 Application Platform",


description:
"Web3 platform focused on blockchain technology, decentralized applications, and modern digital infrastructure.",


tech:[

"Next.js",

"TypeScript",

"Tailwind",

"Web3.js",

"Solidity"

],


github:
"https://github.com/ilhamfachrudin-24"


},



{

title:
"Crypto Analytics Tools",


category:
"Blockchain Research Tools",


description:
"Tools for monitoring crypto markets, token analysis, liquidity tracking, and blockchain ecosystem research.",


tech:[

"API",

"Python",

"JavaScript",

"Blockchain Data"

],


github:
"https://github.com/ilhamfachrudin-24"


}


];



return (

<section

id="projects"

className="
max-w-6xl
mx-auto
px-6
py-24
"

>


<h2 className="
text-4xl
md:text-5xl
font-bold
gradient-text
mb-12
"

>

Featured Projects

</h2>




<div className="
grid
md:grid-cols-3
gap-8
"

>


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
p-7
"

>


<p className="
text-cyan-400
text-sm
mb-3
"

>

{project.category}

</p>




<h3 className="
text-2xl
font-bold
mb-4
"

>

{project.title}

</h3>




<p className="
text-gray-400
leading-7
mb-6
"

>

{project.description}

</p>




<div className="
flex
flex-wrap
gap-2
mb-6
"

>


{

project.tech.map((item)=>(


<span

key={item}

className="
px-3
py-1
rounded-full
bg-white/5
border
border-white/10
text-sm
"

>

{item}

</span>


))


}


</div>





<a

href={project.github}

target="_blank"

className="
flex
items-center
gap-2
text-cyan-400
"

>

<Github size={18}/>

Repository


<ExternalLink size={16}/>

</a>




</motion.div>


))


}


</div>


</section>

)

}
