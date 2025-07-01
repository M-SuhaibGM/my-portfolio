import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesPage from "./components/Certificates";


export default function Home() {
  return (
    <>
      <div>
        <main style={{
          backgroundImage: "url('images/top.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:"100vh",
        }}>
          <Navbar />
          <div className="container   mx-auto px-12 py-4   ">
            <HeroSection />
          </div>
        </main>
      </div>
      <div className="container  mx-auto my-2 px-12 py-4  border-2 border-white rounded-lg">
        <AboutSection />
      </div>
      <div className="container  mx-auto  my-2 px-12 py-4 border-2 border-white rounded-lg">
        <ProjectsSection />
      </div>
      <div className="container  mx-auto my-2 px-12 py-4 border-2 border-white rounded-lg">
        <CertificatesPage />
      </div>
      <div className="container  mx-auto my-2 px-12 py-4 border-2 border-white rounded-lg">
        <EmailSection />
      </div>
      <Footer />
    </>
  );
}
