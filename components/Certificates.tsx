"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink
} from "lucide-react";


export default function Certificates(){


const certificates = [

{
title:
"Generative AI Fundamentals",

issuer:
"AI Training Certificate",

description:
"Understanding Generative AI concepts, AI tools, and practical artificial intelligence applications."
},



{
title:
"AI Coding Assistant",

issuer:
"AI Development Training",

description:
"Using AI-assisted coding workflows to improve software development productivity."
},



{
title:
"TOEFL ITP",

issuer:
"English Language Certificate",

description:
"English proficiency certification for professional and technical communication."
},



{
title:
"Microsoft Office & Internet",

issuer:
"Digital Skills Certificate",

description:
"Computer fundamentals, productivity tools, and internet technology skills."
},



];


return (

<section

id="certificates"

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

Certificates

</motion.h2>





<div className="
grid
md:grid-cols-2
gap-6
">


{

certificates.map((certificate,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.03
}}

className="
glass
rounded-3xl
p-7
"

>


<Award

className="
text-cyan-400
mb-5
"

size={35}

/>




<h3 className="
text-xl
font-bold
mb-2
">

{certificate.title}

</h3>




<p className="
text-cyan-400
text-sm
mb-4
">

{certificate.issuer}

</p>




<p className="
text-gray-400
leading-7
">

{certificate.description}

</p>





<button

className="
mt-5
flex
items-center
gap-2
text-cyan-400
text-sm
"

>

View Certificate

<ExternalLink size={15}/>

</button>




</motion.div>


))


}


</div>



</section>

)

}
