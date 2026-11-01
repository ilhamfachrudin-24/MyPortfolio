"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Blocks,
  Github
} from "lucide-react";


export default function Stats(){


const stats = [

{
icon:<Blocks className="text-cyan-400"/>,
number:"2+",
title:"Years Exploring Web3"
},


{
icon:<Rocket className="text-cyan-400"/>,
number:"10+",
title:"Projects Built"
},


{
icon:<Code2 className="text-cyan-400"/>,
number:"15+",
title:"Technology Stack"
},


{
icon:<Github className="text-cyan-400"/>,
number:"Open",
title:"Source Development"
}

];



return (

<section

className="
max-w-6xl
mx-auto
px-6
py-16
"

>


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">


{

stats.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="
glass
rounded-3xl
p-6
text-center
"

>


<div className="
flex
justify-center
mb-4
">

{item.icon}

</div>



<h3 className="
text-3xl
font-bold
gradient-text
">

{item.number}

</h3>



<p className="
text-gray-400
text-sm
mt-2
">

{item.title}

</p>



</motion.div>


))


}


</div>


</section>

)

}
