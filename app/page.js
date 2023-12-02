import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-[#fdfdfd] dark:bg-[#001b1d]">
      <section>
        <Navbar />
      </section>
      <section>Parallax Section</section>
      <section>About Section</section>
      <section>Parallax Section</section>
      <section>Portfolio Section1</section>
      <section>Portfolio Section2</section>
      <section>Portfolio Section3</section>
      <section>Contact Section</section>
    </main>
  );
}
