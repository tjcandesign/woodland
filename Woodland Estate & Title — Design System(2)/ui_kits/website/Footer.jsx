/* global React */
const { useEffect, useRef } = React;

function Footer() {
  const ringRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(y / max, 0), 1);
      if (ringRef.current) ringRef.current.style.setProperty('--spin', (ratio * 450) + 'deg');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo-spin">
            <img ref={ringRef} className="footer-logo-ring" src="../../assets/circle-ring-white.svg" alt=""/>
            <img className="footer-logo-w" src="../../assets/circle-w-white.svg" alt="Woodland"/>
          </div>
          <p>Attorney-led property settlements, steady and thorough. The way closings ought to feel.</p>
        </div>
        <div className="footer-col">
          <h5>Explore</h5>
          <a>Services</a><a>Closing Process</a><a>Code of Conduct</a><a>Contact</a>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <a>Security</a><a>COVID-19 Practices</a><a>Utility Links</a>
        </div>
        <div className="footer-col">
          <h5>Capitol Hill Office</h5>
          <p>659 C Street, SE<br/>Washington, DC 20003</p>
          <p>202.516.6855<br/>Fax (202) 888-1179</p>
          <p>woodlandteam@woodlandtitleDC.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>©2018 by Woodland Estate & Title</div>
        <div className="footer-underwriters">Underwriters: Fidelity National · Stewart Title Guaranty</div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
