"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function CustomCursor(){


const [position,setPosition] = useState({

x:0,

y:0

});



useEffect(()=>{


const moveCursor = (event:MouseEvent)=>{


setPosition({

x:event.clientX,

y:event.clientY

});


};



window.addEventListener(

"mousemove",

moveCursor

);



return ()=>{


window.removeEventListener(

"mousemove",

moveCursor

);


};


},[]);




return (

<motion.div

animate={{

x:position.x,

y:position.y

}}

transition={{

type:"spring",

stiffness:500,

damping:30

}}

className="
hidden
md:block
fixed
top-0
left-0
w-6
h-6
rounded-full
bg-cyan-400/40
border
border-cyan-400
pointer-events-none
z-[200]
"

style={{

translateX:"-50%",

translateY:"-50%"

}}


/>

)

}
