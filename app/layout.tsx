import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";



export const metadata: Metadata = {


title:
"Ahmad Ilham | Web3 Developer & AI Engineer",



description:

"Ahmad Ilham is a Web3 Developer, AI Engineer, and Full Stack Developer building blockchain applications, AI automation tools, and modern digital solutions.",



keywords:[

"Ahmad Ilham",

"Web3 Developer",

"Blockchain Developer",

"AI Engineer",

"Artificial Intelligence",

"Full Stack Developer",

"Solana Developer",

"Ethereum Developer",

"Smart Contract Developer",

"DeFi Developer",

"Next.js Developer",

"Python Developer"

],




authors:[

{

name:

"Ahmad Ilham"

}

],




creator:

"Ahmad Ilham",




openGraph:{


title:

"Ahmad Ilham | Web3 Developer & AI Engineer",



description:

"Building the future with Blockchain, Artificial Intelligence, and Full Stack Development.",



type:

"website",



locale:

"en_US",



},





twitter:{


card:

"summary_large_image",



title:

"Ahmad Ilham | Web3 AI Developer",



description:

"Web3 Developer, AI Engineer, and Full Stack Developer."


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

<html

lang="en"

suppressHydrationWarning

>


<body>


<ThemeProvider>

{children}

</ThemeProvider>


</body>


</html>


);

}
