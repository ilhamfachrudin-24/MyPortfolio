"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Send,
  Mail
} from "lucide-react";


export default function SocialLinks(){


const socials = [

{
name:"GitHub",

icon:<Github size={22}/>,

url:
"https://github.com/ilhamfachrudin-24"
},


{
name:"LinkedIn",

icon:<Linkedin size={22}/>,

url:
"#"
},


{
name:"X",

icon:<Twitter size={22}/>,

url:
"#"
},


{
name:"Telegram",

icon:<Send size={22}/>,

url:
"#"
},


{
name:"Email",

icon:<Mail size={22}/>,

url:
"mailto:novi240397@gmail.com"
}

];



return (

<div className="
flex
flex-wrap
justify-center
gap-4
"

>


{

socials.map((item)=>(


<a

key={item.name}

href={item.url}

target="_blank"

className="
glass
px-5
py-3
rounded-full
flex
items-center
gap-3
text-cyan-400
hover:scale-105
transition
"

>

{item.icon}

<span>

{item.name}

</span>


</a>


))


}


</div>

)

}
