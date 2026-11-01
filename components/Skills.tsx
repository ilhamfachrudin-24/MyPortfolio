"use client";

import { motion } from "framer-motion";


export default function Skills(){


const skillGroups = [


{
title:"Web3 & Blockchain",

skills:[

"Solana",

"Ethereum",

"Smart Contract",

"Solidity",

"Rust",

"DeFi",

"DEX",

"Web3.js",

"Wallet Integration"

]

},



{
title:"AI & Automation",

skills:[

"Generative AI",

"LLM",

"AI Automation",

"Prompt Engineering",

"AI Agents",

"Machine Learning",

"AI Tools"

]

},



{
title:"Full Stack Development",

skills:[

"Next.js",

"TypeScript",

"JavaScript",

"React",

"Tailwind CSS",

"Python",

"FastAPI",

"Node.js",

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


<h2 className="
text-4xl
md:text-5xl
font-bold
gradient-text
mb-12
"

>

Technical Skills

</h2>




<div className="
grid
md:grid-cols-3
gap-8
"


>


{

skillGroups.map((group,index)=>(


<motion.div

key={index}

whileHover={{

y:-8

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
"

>

{group.title}

</h3>



<div className="
flex
flex-wrap
gap-3
"

>


{

group.skills.map((skill)=>(


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
