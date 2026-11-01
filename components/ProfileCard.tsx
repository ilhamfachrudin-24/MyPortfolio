"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  MapPin,
  BadgeCheck
} from "lucide-react";



export default function ProfileCard(){


return (

<motion.div

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.6
}}

className="
max-w-sm
mx-auto
glass
rounded-3xl
p-8
text-center
"

>



<div className="
relative
w-40
h-40
mx-auto
mb-6
"

>


<Image

src="/avatar.png"

alt="Ahmad Ilham"

fill

className="
rounded-full
object-cover
"

/>


</div>





<div className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-cyan-400/10
text-cyan-400
text-sm
mb-5
"

>

<BadgeCheck size={16}/>

Open To Work

</div>





<h2 className="
text-2xl
font-bold
gradient-text
">

Ahmad Ilham

</h2>




<p className="
text-cyan-400
mt-2
"

>

Web3 Developer

<br/>

AI Engineer & Full Stack Developer

</p>






<div className="
flex
justify-center
items-center
gap-2
text-gray-400
mt-5
text-sm
"

>

<MapPin size={16}/>

Indonesia

</div>





<p className="
text-gray-400
mt-6
leading-7
"

>

Building blockchain applications,
AI automation tools,
and modern digital solutions
with Web3 and Artificial Intelligence.

</p>




</motion.div>

)

}
