import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative overflow-hidden selection:bg-sky-500 selection:text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-500/10 blur-[130px] rounded-full z-0" />
      <div className="pointer-events-none absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full z-0" />
      <div className="pointer-events-none absolute top-[70%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 blur-[150px] rounded-full z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;