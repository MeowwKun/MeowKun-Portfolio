import Hero from "./components/hero";
import NavBar from "./components/NavBar";
import TechStack from "./components/techstack";
import Work from "./components/work";
import Experience from "./components/experience";
import Footer from "./components/footer";
import ScrollAnimations from "./components/scroll-animations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ScrollAnimations />
      <div className="w-full p-15 flex flex-col items-center justify-start">
        <NavBar />
        <Hero />
        <Work />
        <TechStack />
        <Experience />
      </div>
      <Footer />

      {/* Main Content */}

    </main>
  );
}
