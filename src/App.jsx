import { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));
const Experience = lazy(() => import("./sections/Experience"));
const Footer = lazy(() => import("./sections/Footer"));
const Project = lazy(() => import("./sections/Project"));
const Chatbot = lazy(() => import("./components/Chatbot"));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Project />
        <Experience />
        <Contact />
        <Footer />
        <Chatbot />
      </Suspense>
    </main>
  );
};

export default App;
