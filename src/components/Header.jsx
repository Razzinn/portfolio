import './Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>RMI</h2>
        </div>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>Chi Sono</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Competenze</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Progetti</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contatti</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
