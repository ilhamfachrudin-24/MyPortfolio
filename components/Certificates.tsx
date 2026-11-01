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

year:
"2026",

description:
"Training focused on Generative AI concepts, AI tools usage, and practical artificial intelligence applications."

},



{

title:
"AI for Coding Assist",

issuer:
"AI Development Training",

year:
"2026",

description:
"Learning AI-assisted programming workflows, coding productivity, and modern software development with AI tools."

},



{

title:
"Artificial Intelligence Training",

issuer:
"AI Technology Course",

year:
"2026",

description:
"Introduction to artificial intelligence, automation, and practical implementation of AI technologies."

},



{

title:
"TOEFL ITP",

issuer:
"English Language Assessment",

year:
"2026",

description:
"English proficiency assessment focused on listening, structure, and reading comprehension."

},



{

title:
"Microsoft Office & Internet",

issuer:
"Digital Skills Training",

year:
"2026",

description:
"Training covering productivity tools, internet usage, and digital workplace skills."

}


];



return (

<section

className="
max-w-6xl
mx-auto
px-6
py-24
"

>


<h2 className="
text-4xl
md:text-5xl
font-bold
gradient-text
mb-12
"

>

Certificates

</h2>




<div className="
grid
md:grid-cols-3
gap-8
"

>


{

certificates.map((certificate,index)=>(


<motion.div

key={index}

whileHover={{

y:-10

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
mb-3
"

>

{certificate.title}

</h3>




<p className="
text-cyan-400
text-sm
"

>

{certificate.issuer}

</p>




<p className="
text-gray-500
text-sm
mt-2
"

>

{certificate.year}

</p>





<p className="
text-gray-400
mt-5
leading-7
"

>

{certificate.description}

</p>





<button

className="
mt-6
flex
items-center
gap-2
text-cyan-400
"

>

View Certificate

<ExternalLink size={16}/>

</button>



</motion.div>


))


}


</div>


</section>

)

}
