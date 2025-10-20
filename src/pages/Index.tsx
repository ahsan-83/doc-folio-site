import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Specialty from "@/components/Specialty";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Specialty />
        <Gallery />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
