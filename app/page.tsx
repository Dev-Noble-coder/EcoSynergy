import Image from "next/image";
import Navbar from "./components/Navbar";
import Heropage from "./components/Heropage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-5 lg:mx-14">
      <Navbar />
      <Heropage />
      <Marquee />
      <About />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}
