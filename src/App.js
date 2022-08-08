import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Mails } from "./components/Mails/Mails";

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="mails">
        <Mails />
      </div>
      <div id="footer">
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
