"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  Send
} from "lucide-react";


export default function Contact(){


const contacts = [

{
icon:<Mail className="text-cyan-400"/>,
name:"Email",
value:"novi240397@gmail.com",
link:"mailto:novi240397@gmail.com"
},


{
icon:<Github className="text-cyan-400"/>,
name:"GitHub",
value:"github.com/ilhamfachrudin-24",
link:"https://github.com/ilhamfachrudin-24"
},


{
icon:<Linkedin className="text-cyan-400"/>,
name:"LinkedIn",
value:"Add LinkedIn Profile",
link:"#"
}

];



return (

<section

id="contact"

className="
max-w-6xl
mx-auto
px-6
py-24
text-center
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
mb-6
"

>

Let's Build The Future

</motion.h2>



<p className="
text-gray-400
max-w-2xl
mx-auto
mb-12
leading-8
">

Interested in Web3, AI,
Blockchain, or Full Stack Development?

Let's collaborate and build innovative digital solutions.

</p>





<div className="
grid
md:grid-cols-3
gap-6
">


{

contacts.map((contact,index)=>(


<motion.a

key={index}

href={contact.link}

target="_blank"

whileHover={{
y:-8
}}

className="
glass
rounded-3xl
p-7
"

>


<div className="
flex
justify-center
mb-5
">

{contact.icon}

</div>




<h3 className="
font-bold
text-xl
mb-3
">

{contact.name}

</h3>




<p className="
text-gray-400
text-sm
">

{contact.value}

</p>



</motion.a>


))


}


</div>





<div className="
mt-14
flex
justify-center
"


>


<a

href="mailto:novi240397@gmail.com"

className="
px-8
py-4
rounded-full
bg-cyan-400
text-black
font-bold
flex
items-center
gap-3
hover:scale-105
transition
"

>

<Send size={18}/>

Contact Me

</a>


</div>



</section>

)

}
