import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Results from "./components/Results";
import Gallery from "./components/Gallery";
import Facilities from "./components/Facilities";
import TeachingApproach from "./components/TeachingApproach";
import Faculty from "./components/Faculty";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Navbar />
      <Announcement />
      <Hero />
      <Stats />
      <Courses />
      <Results />
      <Gallery />
      <Facilities />
      <TeachingApproach />
      {/* <Faculty /> */}
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;