
import SplashCursor from '../App.jsx/SplashCursor/SplashCursor';
import About from './components/About';
import Hoome from './components/Hoome';
import './Index.css';

function App() {
  return (
    <>
    <SplashCursor/>
    <div className="snap-container">
      <section className="snap-section">
        <Hoome/>
      </section>
      <section className="snap-section">
        <About/>
      </section>
    </div>
    </>
  );
}

export default App;
