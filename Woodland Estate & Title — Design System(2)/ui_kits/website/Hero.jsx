/* global React, Btn */
function Hero({ tag, title, sub, compact, actions }) {
  return (
    <section className={`hero${compact ? ' compact' : ''}`}>
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        {tag && <div className="hero-tag">{tag}</div>}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {sub && <p className="hero-sub">{sub}</p>}
        {actions && <div className="hero-actions">{actions}</div>}
      </div>
    </section>
  );
}
window.Hero = Hero;
