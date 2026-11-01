"use client";

import { motion } from "framer-motion";

import {
  UserRound,
  Sparkles,
  Blocks
} from "lucide-react";



export default function About(){


const highlights = [


{

icon:
<UserRound className="text-cyan-400"/>,


title:
"Web3 Developer",


text:
"Building blockchain applications, decentralized tools, and exploring Web3 ecosystems including Solana and Ethereum."

},



{

icon:
<Sparkles className="text-cyan-400"/>,


title:
"AI Engineer",


text:
"Developing AI-powered solutions, automation workflows, and experimenting with Generative AI and LLM technologies."

},



{

icon:
<Blocks className="text-cyan-400"/>,


title:
"Full Stack Builder",


text:
"Creating modern web applications using Next.js, TypeScript, Python, and scalable development technologies."

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
mb-8
"

>

About Me

</motion.h2>





<p className="
text-gray-400
text-lg
leading-8
max-w-4xl
mb-12
"

>

I am a Web3 Developer, AI Engineer, and Full Stack Developer
focused on building modern digital solutions using Blockchain,
Artificial Intelligence, and software development technologies.

I create and research blockchain applications, AI automation tools,
crypto analytics platforms, and innovative technology products.

My journey focuses on continuous learning, open-source development,
and building practical solutions that connect Web3 and AI.

</p>





<div className="
grid
md:grid-cols-3
gap-8
"

>


{

highlights.map((item,index)=>(


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


<div className="
mb-5
"

>

{item.icon}

</div>




<h3 className="
text-xl
font-bold
mb-4
"

>

{item.title}

</h3>



<p className="
text-gray-400
leading-7
"

>

{item.text}

</p>



</motion.div>


))


}


</div>



</section>

)

}
