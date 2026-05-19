/* global React */

function DiffCard({ variant, art, title, body }) {
  return (
    <div className={`diff diff--${variant}`}>
      <div className="diff__art">{art}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function DiffsBlock() {
  const items = [
    { v: 'a', art: 'people · driven', t: 'Excelência orientada para as pessoas',
      p: 'Não somos apenas uma empresa de TI; somos uma organização voltada para as pessoas, que reconhece o verdadeiro valor de nossos funcionários e clientes.' },
    { v: 'b', art: 'technical', t: 'Conhecimento técnico inigualável',
      p: 'Nossa equipe é formada por profissionais excepcionais que adotam a inovação e tecnologias emergentes para oferecer soluções de ponta.' },
    { v: 'c', art: 'transparent', t: 'Liderança transparente',
      p: 'Comunicação aberta e compreensão clara dos objetivos garantem que nossa equipe e clientes se sintam informados, envolvidos e capacitados.' },
    { v: 'd', art: 'inclusive', t: 'Inclusão e diversidade',
      p: 'Celebramos o poder da diversidade e promovemos um ambiente inclusivo onde perspectivas únicas prosperam.' },
    { v: 'e', art: 'positive', t: 'Cultura positiva',
      p: 'O riso e a alegria são parte integrante de nossa cultura. Bom humor estimula a criatividade e cria um local de trabalho vibrante.' },
  ];
  return (
    <section className="section--alt">
      <div className="section__inner">
        <SectionEyebrow>Nossos diferenciais</SectionEyebrow>
        <h2 className="section__title">O que nos torna únicos?</h2>
        <div className="diffs" style={{ marginTop: 32 }}>
          {items.map(i => <DiffCard key={i.v} variant={i.v} art={i.art} title={i.t} body={i.p} />)}
        </div>
      </div>
    </section>
  );
}

function CommandmentList() {
  const items = [
    'Os interesses do cliente estão sempre em primeiro lugar',
    'Somos uma equipe e trabalhamos sempre como uma equipe',
    'Cada membro da equipe sempre dá o melhor de si',
    'Somos sempre parte da solução, nunca parte do problema',
    'O bom humor é obrigatório',
  ];
  return (
    <section className="section">
      <div className="cmd-block">
        <div>
          <SectionEyebrow>Em que acreditamos</SectionEyebrow>
          <h2 className="section__title">Nossos 5 <span style={{color:'var(--vilt-magenta)'}}>Mandamentos</span></h2>
          <p style={{ color: 'var(--fg-2)', maxWidth: '40ch', lineHeight: 1.6 }}>
            A base ética profissional desta empresa, com a qual todos os funcionários da VILT estão muito familiarizados.
          </p>
        </div>
        <ol className="cmd-list">
          {items.map((it, i) => (<li key={i}><b>{String(i+1).padStart(2,'0')}.</b>{it}</li>))}
        </ol>
      </div>
    </section>
  );
}

window.DiffCard = DiffCard;
window.DiffsBlock = DiffsBlock;
window.CommandmentList = CommandmentList;
