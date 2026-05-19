/* global React */
const { useState: useStateChat } = React;

function JoinUsCTA() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="join">
        <div>
          <div className="join__kicker">Carreiras</div>
          <h2 className="join__title">SEJA UM DE NÓS <em>joinus</em><sup>+</sup></h2>
          <p className="join__copy">
            Dê o primeiro passo. Junte-se a uma empresa multicultural que valoriza as pessoas
            acima de tudo. Um lugar onde você pode aprender, crescer, ensinar e aproveitar a vida.
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button className="join__btn">Junte-se à nossa equipe →</button>
        </div>
      </div>
    </section>
  );
}

function LetsChatForm() {
  const [submitted, setSubmitted] = useStateChat(false);
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section className="section">
      <div className="lets-chat">
        <div>
          <SectionEyebrow style={{ color: 'var(--vilt-magenta-300)' }}>Conecte-se conosco</SectionEyebrow>
          <h2 className="lets-chat__title">Vamos iniciar uma conversa</h2>
          <p className="lets-chat__sub">
            Envie-nos uma mensagem. Respondemos rapidamente — geralmente no mesmo dia útil.
          </p>
          <div className="lets-chat__contacts">
            <div><span>Vendas</span><a>sales@vilt-group.com</a></div>
            <div><span>Capital humano</span><a>human.capital@vilt-group.com</a></div>
            <div><span>Marketing</span><a>marketing@vilt-group.com</a></div>
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          {submitted ? (
            <div className="form__success">✓ Formulário enviado com sucesso!</div>
          ) : (
            <>
              <div><label>Seu nome</label><input defaultValue="Maria Silva" /></div>
              <div><label>Seu e-mail</label><input defaultValue="maria@empresa.com" /></div>
              <div className="full"><label>Assunto</label><input placeholder="Soluções de IA para seguros" /></div>
              <div className="full"><label>Mensagem</label><textarea placeholder="Conte-nos sobre seu projeto…"></textarea></div>
              <div className="full form__check"><input type="checkbox" defaultChecked /> Concordo com a <a>Política de privacidade</a></div>
              <button className="form__submit" type="submit">Enviar →</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__strip"></div>
      <div className="footer__inner">
        <div>
          <div className="footer__logo">
            <img src="../../assets/vilt-logo-163x50.png" alt="VILT" style={{height: 32, filter: 'brightness(0) invert(1)'}} />
          </div>
          <p className="footer__blurb">
            A VILT é líder global na criação de experiências excepcionais para clientes e funcionários,
            impulsionada por uma cultura que coloca as pessoas em primeiro lugar e pela solução inovadora
            de problemas. <strong>VILT</strong> is part of Tessi Group.
          </p>
        </div>
        <div className="footer__col">
          <h4>O que fazemos</h4>
          <a>Soluções</a><a>Serviços</a><a>Produtos</a><a>Histórias de sucesso</a><a>Parceiros</a>
        </div>
        <div className="footer__col">
          <h4>Sobre nós</h4>
          <a>Sobre nós</a><a>Trabalhando na VILT</a><a>Contato</a><a>CSR</a><a>Newsletter</a>
        </div>
      </div>
      <div className="footer__base">
        <span>© VILT Group · Política de privacidade · Aviso Legal · Política de cookies</span>
        <div className="footer__certs">
          <div className="footer__cert">ISO<br/>9001</div>
          <div className="footer__cert">APCER</div>
          <div className="footer__cert">ENS</div>
        </div>
      </div>
    </footer>
  );
}

window.JoinUsCTA = JoinUsCTA;
window.LetsChatForm = LetsChatForm;
window.Footer = Footer;
