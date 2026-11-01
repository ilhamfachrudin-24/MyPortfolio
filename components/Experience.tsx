"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Blocks,
  Search
} from "lucide-react";


export default function Experience(){


const experiences = [

{
icon:<Brain className="text-cyan-400"/>,
role:"AI Engineer",
period:"2025 - Present",

description:
"Developing AI automation workflows, exploring Generative AI, LLM applications, and AI-assisted development solutions."
},


{
icon:<Blocks className="text-cyan-400"/>,
role:"Web3 Developer",
period:"2024 - Present",

description:
"Building blockchain-based applications, researching Solana and Ethereum ecosystems, DeFi protocols, and decentralized technologies."
},


{
icon:<Search className="text-cyan-400"/>,
role:"Crypto Researcher",
period:"2023 - Present",

description:
"Analyzing crypto markets, token ecosystems, blockchain infrastructure, smart contracts, and Web3 innovations."
}


];



return (

<section

id="experience"

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

Experience

</motion.h2>




<div className="
space-y-6
">


{

experiences.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.5,
delay:index*0.2
}}

className="
glass
rounded-3xl
p-7
flex
gap-5
items-start
"

>


<div className="
p-3
rounded-xl
bg-white/5
">

{item.icon}

</div>



<div>


<h3 className="
text-xl
font-bold
">

{item.role}

</h3>


<p className="
text-cyan-400
text-sm
mb-3
">

{item.period}

</p>



<p className="
text-gray-400
leading-7
">

{item.description}

</p>



</div>



</motion.div>


))


}


</div>


</section>

)

}
