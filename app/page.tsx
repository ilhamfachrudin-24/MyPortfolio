import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProjectGallery from "@/components/ProjectGallery";
import GithubProjects from "@/components/GithubProjects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { getGithubProjects } from "@/lib/github";


export default async function Home(){


const githubProjects = await getGithubProjects();



return (

<>


<Navbar />


<main>


<Hero />


<Stats />


<About />


<Skills />


<Experience />


<Projects />


<ProjectGallery />


<GithubProjects

projects={githubProjects}

/>


<Certificates />


<Contact />


</main>


<Footer />


</>

);

}
