import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title:
    "Ahmad Ilham | Web3 Developer AI Engineer",

  description:
    "Web3 Developer, AI Engineer and Full Stack Developer building Blockchain Applications, AI Automation Tools, and Digital Solutions.",

  keywords: [
    "Web3 Developer",
    "Blockchain Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Solana",
    "Ethereum",
    "Artificial Intelligence",
    "DeFi"
  ],

  authors: [
    {
      name: "Ahmad Ilham"
    }
  ],

  openGraph: {

    title:
      "Ahmad Ilham | Web3 AI Developer",

    description:
      "Building the future with Web3 and Artificial Intelligence.",

    type:
      "website",

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body>

        {children}

      </body>


    </html>

  );

}
