"use client";

import { motion } from "framer-motion";


export default function Skills(){


const categories = [

{
title:"Blockchain & Web3",

skills:[
"Solana",
"Ethereum",
"Rust",
"Solidity",
"Smart Contract",
"DeFi",
"DApps",
"Token Development",
"Wallet Integration"
]

},


{
title:"Artificial Intelligence",

skills:[
"Generative AI",
"AI Automation",
"Prompt Engineering",
"LLM",
"AI Agents",
"AI Workflow",
"AI Coding Assistant"
]

},


{
title:"Full Stack Development",

skills:[
"JavaScript",
"TypeScript",
"Python",
"Next.js",
"React",
"Tailwind CSS",
"REST API",
"Git",
"GitHub"
]

}


];



return (

<section

id="skills"

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

Technical Skills

</motion.h2>




<div className="
grid
md:grid-cols-3
gap-6
">


{

categories.map((category,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.03
}}

className="
glass
rounded-3xl
p-7
"

>


<h3 className="
text-xl
font-bold
text-cyan-400
mb-6
">

{category.title}

</h3>




<div className="
flex
flex-wrap
gap-3
">


{

category.skills.map((skill)=>(


<span

key={skill}

className="
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-sm
text-gray-300
hover:border-cyan-400
hover:text-cyan-400
transition
"

>

{skill}

</span>


))


}


</div>



</motion.div>


))


}


</div>



</section>

)

}
