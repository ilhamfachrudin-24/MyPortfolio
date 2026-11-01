"use client";

import { useState } from "react";

import {
  Github,
  Menu,
  X
} from "lucide-react";

import {
  motion
} from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import DownloadCV from "./DownloadCV";



export default function Navbar(){


const [open,setOpen] = useState(false);



const links = [

{
name:"About",
url:"#about"
},

{
name:"Skills",
url:"#skills"
},

{
name:"Experience",
url:"#experience"
},

{
name:"Projects",
url:"#projects"
},

{
name:"Contact",
url:"#contact"
}

];



return (

<motion.nav

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:0.6
}}

className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-xl
bg-black/40
border-b
border-white/10
"

>


<div className="
max-w-6xl
mx-auto
px-6
py-4
flex
items-center
justify-between
">


<h2 className="
text-2xl
font-bold
gradient-text
">

ILHAM.DEV

</h2>




<div className="
hidden
md:flex
items-center
gap-8
">


{

links.map((link)=>(


<a

key={link.name}

href={link.url}

className="
text-gray-300
hover:text-cyan-400
transition
"

>

{link.name}

</a>


))

}


</div>





<div className="
hidden
md:flex
items-center
gap-3
">


<ThemeToggle />


<DownloadCV />


<a

href="https://github.com/ilhamfachrudin-24"

target="_blank"

className="
text-cyan-400
hover:scale-110
transition
"

>

<Github />

</a>



</div>





<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-cyan-400
"

>


{

open

?

<X/>

:

<Menu/>

}


</button>



</div>







{

open && (


<div className="
md:hidden
px-6
pb-6
space-y-5
bg-black/80
"

>


{

links.map((link)=>(


<a

key={link.name}

href={link.url}

onClick={()=>setOpen(false)}

className="
block
text-gray-300
hover:text-cyan-400
"

>

{link.name}

</a>


))


}



<div className="
flex
gap-3
pt-4
">


<ThemeToggle />

<DownloadCV />

</div>



</div>


)


}



</motion.nav>


)

}
