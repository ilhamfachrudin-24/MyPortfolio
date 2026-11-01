"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Bot,
  Blocks,
  ChartNoAxesCombined
} from "lucide-react";


export default function Projects(){


const projects = [

{
icon:<Bot className="text-cyan-400" size={35}/>,

title:"TITAN AI Trading Bot",

description:
"AI-powered crypto trading framework combining Multi AI Analysis, Market Intelligence, Smart Money Tracking, Risk Management, and automated trading concepts.",

stack:[
"Python",
"FastAPI",
"Next.js",
"TypeScript",
"AI API"
],

github:
"https://github.com/ilhamfachrudin-24/TITAN-AI-Trading-Bot"

},



{
icon:<Blocks className="text-cyan-400" size={35}/>,

title:"BlockSeries",

description:
"Web3 application platform focused on blockchain technology, decentralized applications, and modern Web3 architecture.",

stack:[
"Next.js",
"TypeScript",
"Tailwind CSS",
"Web3"
],

github:
"https://github.com/ilhamfachrudin-24"

},



{
icon:<ChartNoAxesCombined className="text-cyan-400" size={35}/>,

title:"Crypto Analytics Tools",

description:
"Blockchain research tools for analyzing token data, liquidity, volume, and crypto ecosystem activity.",

stack:[
"DexScreener API",
"CoinGecko API",
"Birdeye API"
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

Featured Projects

</motion.h2>




<div className="
grid
md:grid-cols-3
gap-6
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
p-7
"

>


<div className="
mb-6
">

{project.icon}

</div>




<h3 className="
text-xl
font-bold
mb-4
">

{project.title}

</h3>




<p className="
text-gray-400
leading-7
mb-6
">

{project.description}

</p>




<div className="
flex
flex-wrap
gap-2
mb-6
">


{

project.stack.map((item)=>(


<span

key={item}

className="
text-xs
px-3
py-2
rounded-full
bg-white/5
border
border-white/10
text-cyan-300
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
hover:text-cyan-300
"

>

<Github size={18}/>

Repository

<ExternalLink size={15}/>

</a>



</motion.div>


))


}


</div>


</section>

)

}
