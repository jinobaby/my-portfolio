import Navbar from './components/Navbar';
import About from './components/About';
import Hoome from './components/Hoome';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '7vh' }}>
        <div className="snap-container">
          <section className="snap-section" id="home">
            <Hoome />
          </section>
          <section className="snap-section" id="about">
            <About />
          </section>
          <section className="snap-section" id="work">
            {/* Add your Work component or content here */}
            <Experience />
          </section>
          <section className="snap-section" id="projects">
            {/* Add your Projects component or content here */}
            <Projects />
          </section>
          <section className="snap-section" id="contact">
            {/* Add your Contact component or content here */}
            Contact
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
