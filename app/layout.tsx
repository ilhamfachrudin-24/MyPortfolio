import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";


export const metadata: Metadata = {


title:
"Ahmad Ilham | Web3 Developer & AI Engineer",


description:
"Web3 Developer, AI Engineer, and Full Stack Developer building blockchain applications, AI automation tools, and digital solutions.",



keywords:[

"Web3 Developer",

"Blockchain Developer",

"AI Engineer",

"Full Stack Developer",

"Solana",

"Ethereum",

"Smart Contract",

"DeFi",

"Artificial Intelligence"

],



authors:[

{
name:"Ahmad Ilham"
}

],



openGraph:{


title:
"Ahmad Ilham | Web3 AI Developer",


description:
"Building the future with Web3, Blockchain, and Artificial Intelligence.",


type:"website",


images:[

{
url:"/og-image.png",

width:1200,

height:630,

alt:"Ahmad Ilham Web3 AI Developer"

}

]

},



twitter:{


card:"summary_large_image",


title:
"Ahmad Ilham | Web3 AI Developer",


description:
"Web3 Developer • AI Engineer • Full Stack Developer",


images:[
"/og-image.png"
]

},



icons:{

icon:"/favicon.ico"

},



robots:{

index:true,

follow:true

}


};



export default function RootLayout({

children,

}: Readonly<{

children:React.ReactNode;

}>) {


return (

<html lang="en" suppressHydrationWarning>

<body>

<ThemeProvider>

{children}

</ThemeProvider>

</body>

</html>

);

}
