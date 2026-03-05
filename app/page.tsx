import Hero from "./components/hero";
import NavBar from "./components/NavBar";
import TechStack from "./components/techstack";
import Work from "./components/work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-15">
      
      <NavBar />
      <Hero />
      <Work />
      <TechStack />

      {/* Main Content */}

    </main>
  );
}
