import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
export default function Home() {
  return (
    <main className="bg-[#f1eaea] dark:bg-[#001b1d]">
      <section id="home">
        <Navbar />
        <HeroSection />
      </section>
      <section id="about">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
