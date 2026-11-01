"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Code2,
  Brain,
  Blocks,
  ExternalLink
} from "lucide-react";


export default function Home() {


  const skills = [

    "Solana",
    "Ethereum",
    "Rust",
    "Solidity",
    "Smart Contract",
    "DeFi",
    "Python",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Generative AI",
    "AI Automation",
    "LLM"

  ];



  const projects = [

    {
      title:
      "TITAN AI Trading Bot",

      description:
      "AI crypto trading framework combining Multi AI Analysis, Market Intelligence, Smart Money Tracking and Risk Management.",

      stack:
      "Python • FastAPI • Next.js • TypeScript",

      github:
      "https://github.com/ilhamfachrudin-24"
    },


    {
      title:
      "BlockSeries",

      description:
      "Web3 application platform focused on blockchain technology and decentralized applications.",

      stack:
      "Next.js • TypeScript • Tailwind CSS",

      github:
      "https://github.com/ilhamfachrudin-24"
    },


    {
      title:
      "Crypto Analytics Tools",

      description:
      "Blockchain research tools using crypto market data and Web3 APIs.",

      stack:
      "Web3 API • Blockchain • Data Analytics",

      github:
      "https://github.com/ilhamfachrudin-24"
    }


  ];




return (

<main>


{/* HERO */}

<section className="
min-h-screen
flex
items-center
justify-center
text-center
px-6
">


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>


<p className="
text-cyan-400
tracking-[5px]
mb-5
">

WEB3 • AI • FULL STACK

</p>



<h1 className="
text-5xl
md:text-7xl
font-bold
gradient-text
">

AHMAD ILHAM

</h1>



<h2 className="
text-3xl
mt-6
neon
">

Web3 Developer
<br/>
AI Engineer & Full Stack Developer

</h2>



<p className="
max-w-2xl
mx-auto
mt-8
text-gray-400
text-lg
">

Building Blockchain Applications,
AI Automation Tools,
and Modern Digital Solutions.

</p>




<div className="
flex
justify-center
gap-5
mt-10
">


<a

href="https://github.com/ilhamfachrudin-24"

target="_blank"

className="
glass
px-6
py-3
rounded-full
flex
items-center
gap-2
hover:border-cyan-400
"

>

<Github size={20}/>

GitHub

</a>



<a

href="mailto:novi240397@gmail.com"

className="
glass
px-6
py-3
rounded-full
flex
items-center
gap-2
hover:border-cyan-400
"

>

<Mail size={20}/>

Contact

</a>


</div>


</motion.div>


</section>






{/* ABOUT */}

<section className="
max-w-5xl
mx-auto
px-6
py-20
">


<h2 className="
text-4xl
gradient-text
mb-8
">

About Me

</h2>



<p className="
text-gray-300
leading-8
">

I am a Web3 Developer and AI Builder focused on
Blockchain Technology, Cryptocurrency,
Artificial Intelligence and Full Stack Development.

I build decentralized applications,
crypto analytics tools,
and AI-powered solutions.

</p>


</section>








{/* SKILLS */}


<section className="
max-w-5xl
mx-auto
px-6
py-20
">


<h2 className="
text-4xl
gradient-text
mb-10
">

Technical Skills

</h2>



<div className="
flex
flex-wrap
gap-4
">


{

skills.map((skill)=>(


<span

key={skill}

className="
glass
px-5
py-3
rounded-full
text-cyan-300
"

>

{skill}

</span>


))


}


</div>


</section>









{/* PROJECTS */}


<section className="
max-w-5xl
mx-auto
px-6
py-20
">


<h2 className="
text-4xl
gradient-text
mb-10
">

Featured Projects

</h2>



<div className="
grid
md:grid-cols-3
gap-6
">


{

projects.map((project)=>(


<motion.div

whileHover={{
y:-10
}}

key={project.title}

className="
glass
rounded-3xl
p-6
"

>


<Blocks
className="
text-cyan-400
mb-5
"
/>



<h3 className="
text-xl
font-bold
mb-3
">

{project.title}

</h3>



<p className="
text-gray-400
mb-5
">

{project.description}

</p>



<p className="
text-sm
text-cyan-300
">

{project.stack}

</p>



<a

href={project.github}

target="_blank"

className="
flex
items-center
gap-2
mt-5
text-cyan-400
"

>

View Github

<ExternalLink size={16}/>

</a>



</motion.div>


))


}


</div>


</section>









{/* CONTACT */}

<section className="
text-center
py-20
">


<h2 className="
text-4xl
gradient-text
">

Let's Build The Future

</h2>


<p className="
text-gray-400
mt-5
">

novi240397@gmail.com

</p>


</section>





</main>

)


}
