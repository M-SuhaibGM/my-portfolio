import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="" style={{backgroundImage:"url(images/top.jpg)"}}
    >

      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <Footer />
    </main>
  );
}
