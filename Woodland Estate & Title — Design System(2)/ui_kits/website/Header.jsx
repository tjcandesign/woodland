/* global React */
function Header({ active, onNav }) {
  return (
    <header className="top-header">
      <a className="top-header-brand" onClick={() => onNav('home')}>
        <img src="../../assets/woodland-stacked-white.svg" alt="Woodland Estate & Title"/>
      </a>
      <nav className="top-nav">
        <a className={active === 'services' ? 'active' : ''} onClick={() => onNav('services')}>Services</a>
        <a className={active === 'process' ? 'active' : ''} onClick={() => onNav('process')}>Closing Process</a>
        <a className={active === 'conduct' ? 'active' : ''} onClick={() => onNav('conduct')}>Code of Conduct</a>
        <a className={active === 'contact' ? 'active' : ''} onClick={() => onNav('contact')}>Contact</a>
        <a className="cta">Send Earnest Money</a>
      </nav>
    </header>
  );
}
window.Header = Header;
