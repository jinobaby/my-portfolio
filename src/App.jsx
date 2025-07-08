import Navbar from './components/Navbar';
import About from './components/About';
import Hoome from './components/Hoome';
import './Index.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="snap-container">
        <section className="snap-section" id="home">
          <Hoome/>
        </section>
        <section className="snap-section" id="about">
          <About/>
        </section>
        <section className="snap-section" id="work">
          {/* Add your Work component or content here */}
          Work
        </section>
        <section className="snap-section" id="contact">
          {/* Add your Contact component or content here */}
          Contact
        </section>
      </div>
    </>
  );
}

export default App;
