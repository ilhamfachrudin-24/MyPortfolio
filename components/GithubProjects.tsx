"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink
} from "lucide-react";


interface Project {

  name:string;

  description:string;

  language:string;

  url:string;

}



export default function GithubProjects({

projects

}:{

projects:Project[]

}){


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

GitHub Projects

</motion.h2>





<div className="
grid
md:grid-cols-3
gap-6
">


{

projects.map((project,index)=>(


<motion.div

key={project.name}

whileHover={{
y:-10
}}

className="
glass
rounded-3xl
p-7
"

>


<Github

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

{project.name}

</h3>





<p className="
text-gray-400
leading-7
mb-5
">

{project.description}

</p>




<span className="
inline-block
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-cyan-300
text-sm
mb-5
">

{project.language}

</span>





<a

href={project.url}

target="_blank"

className="
flex
items-center
gap-2
text-cyan-400
"

>

Open Repository

<ExternalLink size={16}/>

</a>



</motion.div>


))


}


</div>


</section>

)

}
