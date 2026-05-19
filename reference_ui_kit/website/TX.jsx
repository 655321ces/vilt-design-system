/* global React */
const { useState: useStateTX } = React;

function SectionEyebrow({ children }) {
  return <span className="section__eyebrow">{children}</span>;
}

function TXBlock() {
  const [tab, setTab] = useStateTX('tx');
  const tabs = {
    cx: {
      key: 'CX',
      title: 'Customer Experience',
      h: 'Transformando clientes em defensores do seu negócio',
      p: 'Aproveitamento do poder da experiência total e da IA para promover a satisfação e a fidelidade do cliente. Soluções orientadas por IA permitem experiências perfeitas, promovendo a defesa do cliente.'
    },
    ex: {
      key: 'EX',
      title: 'Employee Experience',
      h: 'Harmonizando eficiência e empatia na era da IA',
      p: 'Uma experiência positiva do funcionário significa menos tempo procurando informações, proficiência mais rápida em uma nova função, comunicação mais eficaz — tudo isso levando à excelência operacional.'
    },
    tx: {
      key: 'TX',
      title: 'Total Experience',
      h: 'Experiência total, integrada por design',
      p: 'Em vez de tratar as experiências do cliente e do funcionário separadamente, a Total Experience as integra. O Gartner estima que empresas que proporcionam uma experiência total deverão superar concorrentes em 25% nas métricas de satisfação.'
    }
  };
  return (
    <section className="section">
      <SectionEyebrow>(TX) experiência total</SectionEyebrow>
      <h2 className="section__title">A experiência total é a arena competitiva de qualquer empresa atualmente.</h2>
      <div className="tx" style={{ marginTop: 40 }}>
        <div className="tx__tabs">
          {Object.entries(tabs).map(([id, t]) => (
            <button key={id} className={`tx__tab ${tab === id ? 'is-active' : ''}`} onClick={() => setTab(id)}>
              <span className="tx__tab-key">{t.key}</span>
              <span className="tx__tab-title">{t.title}</span>
            </button>
          ))}
        </div>
        <div className="tx__panel">
          <h3>{tabs[tab].h}</h3>
          <p>{tabs[tab].p}</p>
          <div className="tx__panel-art">photography placeholder · {tabs[tab].key}</div>
        </div>
      </div>
    </section>
  );
}

window.SectionEyebrow = SectionEyebrow;
window.TXBlock = TXBlock;
