/* global React */
const { useState } = React;

function VLogo({ dark }) {
  return (
    <a className="nav__logo">
      <img src="../../assets/vilt-logo-163x50.png" alt="VILT" style={{height: 32, width: 'auto', filter: dark ? 'brightness(0) invert(1)' : 'none'}} />
    </a>
  );
}

function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('português - BR');
  const langs = ['english', 'español', 'português - PT', 'português - BR', 'deutsch', 'français'];
  return (
    <div className="lang">
      <button className="lang__btn" onClick={() => setOpen(o => !o)}>{lang} ▾</button>
      {open && (
        <div className="lang__menu">
          {langs.map(l => (
            <button key={l} className={`lang__item ${l === lang ? 'is-active' : ''}`}
              onClick={() => { setLang(l); setOpen(false); }}>{l}</button>
          ))}
        </div>
      )}
    </div>
  );
}

function TopNav() {
  return (
    <nav className="nav">
      <VLogo />
      <div className="nav__links">
        <span className="nav__link">O que fazemos</span>
        <span className="nav__link">Verticais de indústria</span>
        <span className="nav__link">Insights</span>
        <span className="nav__link">Sobre nós</span>
      </div>
      <div className="nav__right">
        <LangSwitcher />
        <button className="nav__cta">Entre em contato</button>
      </div>
    </nav>
  );
}

function IntroPill() {
  return (
    <div className="intro-pill">
      <span className="intro-pill__thumb"></span>
      Apresentando a VILT
      <span className="intro-pill__chev">›</span>
    </div>
  );
}

function HeroBlock() {
  return (
    <section className="hero">
      <div>
        <div className="hero__eyebrow">Homepage</div>
        <h1 className="hero__headline">
          O futuro é ilimitado <strong>repense seus negócios</strong> na era da IA.
        </h1>
        <button className="hero__cta">Saiba mais →</button>
      </div>
      <div className="hero__art">
        <span className="hero__art-label">team photography placeholder</span>
      </div>
    </section>
  );
}

window.VLogo = VLogo;
window.LangSwitcher = LangSwitcher;
window.TopNav = TopNav;
window.IntroPill = IntroPill;
window.HeroBlock = HeroBlock;
