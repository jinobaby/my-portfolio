import Navbar from './components/Navbar';
import About from './components/About';
import Hoome from './components/Hoome';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/jinobaby/',
      icon: '/my-portfolio/linkedin_.png',
    },
    {
      url: 'https://github.com/jinobaby',
      icon: '/my-portfolio/github_.png',
    },
    {
      url: 'https://x.com/iamjinobaby',
      icon: '/my-portfolio/x_.png',
    },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          position: 'fixed',
          top: '75%',
          right: '24px',
          transform: 'translateY(-50%)',
          background: 'var(--color-main)',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
          padding: '16px 12px',
          zIndex: 900,
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
          alignItems: 'center',
        }}
        className="social-links-bar"
      >
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src={link.icon}
              alt={link.name}
              style={{ width: 22, height: 22, marginBottom: 4, filter: 'grayscale(0%)' }}
              loading="lazy"
            />
            <span style={{ color: '#222', fontWeight: 500, fontSize: 12 }}>{link.name}</span>
          </a>
        ))}
      </div>
      <div style={{ paddingTop: '7vh' }}>
        <div className="snap-container">
          <section className="snap-section" id="home">
            <Hoome />
          </section>
          <section className="snap-section" id="about">
            <About />
          </section>
          <section className="snap-section" id="work">
            <Experience />
          </section>
          <section className="snap-section" id="projects">
            <Projects />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
