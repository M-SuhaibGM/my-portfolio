import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <>
      <main className="" style={{ backgroundImage: "url(images/top.jpg)" }}
      >
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
        </div>
      </main>
      <div className="container  mx-auto px-12 py-4">
        <AboutSection />
      </div>
      <div className="container  mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
      <div className="container  mx-auto px-12 py-4">
        <EmailSection />
      </div>
      <Footer />
    </>
  );
}
