"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function LoadingScreen(){


const [loading,setLoading] = useState(true);



useEffect(()=>{


const timer = setTimeout(()=>{

setLoading(false);

},1500);



return ()=>clearTimeout(timer);


},[]);




if(!loading){

return null;

}



return (

<motion.div

initial={{
opacity:1
}}

animate={{
opacity:0
}}

transition={{
delay:1.2,
duration:0.5
}}

className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black
"


>


<motion.div

initial={{
scale:0.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="
text-center
"

>


<h1 className="
text-5xl
font-black
gradient-text
"

>

ILHAM.DEV

</h1>




<p className="
mt-4
text-cyan-400
tracking-[5px]
text-sm
"

>

WEB3 • AI

</p>



<motion.div

animate={{

scaleX:[0,1,0]

}}

transition={{

duration:1.5

}}

className="
h-1
w-48
bg-cyan-400
mt-8
mx-auto
rounded-full
"

></motion.div>



</motion.div>


</motion.div>

)

}
