"use client";


import {

Github,

Linkedin,

Twitter

} from "lucide-react";



export default function Footer(){


return (

<footer

className="
border-t
border-white/10
mt-20
"

>


<div className="
max-w-6xl
mx-auto
px-6
py-10
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
"

>



<div>


<h2 className="
text-2xl
font-bold
gradient-text
"

>

ILHAM.DEV

</h2>



<p className="
text-gray-400
mt-3
text-sm
"

>

Web3 Developer • AI Engineer • Full Stack Developer

</p>


</div>






<div className="
flex
gap-4
"

>


<a

href="https://github.com/ilhamfachrudin-24"

target="_blank"

className="
glass
p-3
rounded-full
text-cyan-400
hover:scale-110
transition
"

>

<Github size={20}/>

</a>





<a

href="#"

className="
glass
p-3
rounded-full
text-cyan-400
hover:scale-110
transition
"

>

<Linkedin size={20}/>

</a>





<a

href="#"

className="
glass
p-3
rounded-full
text-cyan-400
hover:scale-110
transition
"

>

<Twitter size={20}/>

</a>



</div>



</div>





<div className="
text-center
text-gray-500
text-sm
pb-6
"

>

© 2026 Ahmad Ilham.
Built with Next.js, TypeScript, AI & Web3 Technology.

</div>




</footer>

)

}
