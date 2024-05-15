import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Services from './Sections/Services';
import TextBlock from './Components/TextBlock';
import Process from './Sections/Process';
import ImageSection from './Sections/ImageSection';
import Strategies from './Sections/Strategies';
import ContactCallToAction from './Sections/ContactCallToAction';
import Testimonials from './Sections/Testimonials';
import FAQ from './Sections/FAQ';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Hero />

      <About />

      <Services />

      <TextBlock 
        section={"HOW WE WORK"} 
        header={"OUR WINNING METHODOLOGY"} 
        info={"Through a blend of strategic planning, creative innovation, and meticulous execution, we deliver results that exceed expectations."} 
      />

      <Process />

      <ImageSection />

      <TextBlock 
        section={"STRATEGIES"} 
        header={"UNVEILING THE STRATEGIES"} 
        info={"Our meticulously curated collection of strategies and tactics, meticulously designed to propel your brand forward in the digital realm."} 
      />

      <Strategies />

      {/*<ContactCallToAction />*/}

      <TextBlock 
        section={"TESTIMONIALS"} 
        header={"HEAR WHAT OUR CLIENTS HAVE TO SAY"} 
        info={"Discover the stories of success straight from our clients' mouths. Dive into testimonials showcasing the impact of our services."} 
      />

      <Testimonials />

      <FAQ />

      <Contact />
      
      <Footer />

    </div>
  );
}

export default App;
