import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Services from './Sections/Services';
import TextBlock from './Components/TextBlock';
import Process from './Sections/Process';

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
    </div>
  );
}

export default App;
