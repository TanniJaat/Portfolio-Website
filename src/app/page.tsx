import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import Practice from '@/components/Practice'

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <NavBar />
      <Hero/>
     

      <About />

      <Project/>
     <Practice />
      <ContactMe />
    

    </main>
  );
}
