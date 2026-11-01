"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Moon,
  Sun
} from "lucide-react";



export default function ThemeToggle(){


const {theme,setTheme} = useTheme();

const [mounted,setMounted] = useState(false);



useEffect(()=>{

setMounted(true);

},[]);



if(!mounted){

return null;

}



return (

<button

onClick={()=>{

setTheme(

theme === "dark"

? "light"

: "dark"

)

}}

className="
glass
p-3
rounded-full
text-cyan-400
hover:scale-110
transition
"

>


{

theme === "dark"

?

<Sun size={20}/>

:

<Moon size={20}/>

}


</button>

);

}
