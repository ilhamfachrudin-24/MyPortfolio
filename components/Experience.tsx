"use client";

import { motion } from "framer-motion";

import {
  Code2,
  BrainCircuit,
  Blocks
} from "lucide-react";



export default function Experience(){


const experiences = [


{

icon:
<Blocks className="text-cyan-400"/>,


role:
"Independent Web3 Developer",


period:
"2023 - Present",


description:
"Building and researching blockchain-based applications, decentralized tools, crypto analytics platforms, and Web3 solutions across Solana and Ethereum ecosystems."

},



{

icon:
<BrainCircuit className="text-cyan-400"/>,


role:
"AI Engineer & Automation Builder",


period:
"2024 - Present",


description:
"Developing AI-powered tools, automation workflows, and experimenting with Generative AI, LLM applications, and AI-assisted development."

},



{

icon:
<Code2 className="text-cyan-400"/>,


role:
"Full Stack Developer (Project Based)",


period:
"2023 - Present",


description:
"Creating modern web applications using Next.js, TypeScript, Tailwind CSS, Python, and backend technologies with focus on scalable digital products."

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


<h2 className="
text-4xl
md:text-5xl
font-bold
gradient-text
mb-12
"

>

Experience

</h2>




<div className="
space-y-8
"


>


{

experiences.map((item,index)=>(


<motion.div

key={index}

whileHover={{

x:10

}}

className="
glass
rounded-3xl
p-8
flex
gap-6
"

>


<div className="
mt-1
"

>

{item.icon}

</div>



<div>


<h3 className="
text-2xl
font-bold
"

>

{item.role}

</h3>



<p className="
text-cyan-400
mt-2
"

>

{item.period}

</p>




<p className="
text-gray-400
mt-4
leading-8
"

>

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
