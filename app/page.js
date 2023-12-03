import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-[#f1eaea] dark:bg-[#001b1d]">
      <section id="home">
        <Navbar />
        <HeroSection />
      </section>
      <section id="about">Parallax Section</section>
      <section>About Section</section>
      <section id="portfolio">Parallax Section</section>
      <section>Portfolio Section1</section>
      <section>Portfolio Section2</section>
      <section>Portfolio Section3</section>
      <section id="contact">Contact Section</section>
    </main>
  );
}
