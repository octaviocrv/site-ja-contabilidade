import './App.css'

const metrics = [
  { value: '+300', label: 'Clientes ativos' },
  { value: 'R$ 21 mi', label: 'Economizados em impostos' },
  { value: '97%', label: 'Satisfacao no atendimento' },
  { value: '+607', label: 'Planejamentos tributarios entregues' },
]

const services = [
  {
    title: 'Contato direto',
    image: '/assets/destaques/Contato.png',
    text: 'Atendimento rapido por WhatsApp e acompanhamento consultivo.',
  },
  {
    title: 'Atendimento local e online',
    image: '/assets/destaques/Local.png',
    text: 'Base em Contagem - MG, com operacao digital para todo o Brasil.',
  },
  {
    title: 'Time especialista',
    image: '/assets/destaques/Equipe.png',
    text: 'Equipe tecnica para contabilidade, fiscal e pericia contabil.',
  },
  {
    title: 'Servicos estrategicos',
    image: '/assets/destaques/Servicos.png',
    text: 'Regularizacao, abertura, planejamento e suporte para crescimento.',
  },
  {
    title: 'Duvidas simplificadas',
    image: '/assets/destaques/Duvidas.png',
    text: 'Explicacoes claras para cada etapa financeira e tributaria.',
  },
  {
    title: 'Avaliacao constante',
    image: '/assets/destaques/Avaliacoes.png',
    text: 'Indicadores e revisoes para garantir resultado com seguranca.',
  },
]

function App() {
  return (
    <div className="pageShell">
      <header className="topbar">
        <div className="topbarInner">
          <a className="brand" href="#inicio">
            <img src="/assets/uploads/Logo.jpeg" alt="JA Contabilidade" />
            <span>JA Contabilidade</span>
          </a>

          {/* Textos da navegação atualizados conforme a imagem */}
          <nav className="mainNav" aria-label="Navegacao principal">
            <a href="#inicio">Início</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#sobre-nos">Sobre nós</a>
            <a href="#perguntas">Perguntas Frequentes</a>
          </nav>

          <a className="topbarCta" href="#contato">
            Agendar Consulta
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="heroCopy">
            {/* Título e textos principais atualizados para ficarem idênticos à imagem */}
            <h1>
              Procurando uma
              <br />
              Contabilidade que te ajude
              <br />
              a pagar <span className="taxHighlight">menos impostos?</span>
            </h1>

            <p className="heroDescription">
              Junte-se a mais de 300 empresas em <strong>todo Brasil</strong> que já
              economizaram mais de 21 milhões de reais em impostos!
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="#contato">
                Agendar consultoria tributária gratuita
              </a>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="glowOrb" />
            <div className="teamStage">
              <span className="teamPill">TIME JA CONTABILIDADE</span>

              <img
                className="teamPhoto"
                src="/assets/identidade/semfundo/foto-do-time-juntos-horizontal-sem-fundo.svg"
                alt="Time da JA Contabilidade"
              />

              <div className="teamCaption">
                <img src="/assets/uploads/Logo.jpeg" alt="Logo da JA Contabilidade" />
                <div>
                  <h2>JA Contabilidade e Pericia</h2>
                  <p>
                    Solucoes para abertura, regularizacao, planejamento tributario e
                    acompanhamento contabil.
                  </p>
                </div>
              </div>

              <span className="floatingStat floatingOne">+300 empresas atendidas</span>
              <span className="floatingStat floatingTwo">Atendimento para todo o Brasil</span>
            </div>
          </div>
        </section>

        <section className="metrics" id="resultados" aria-label="Resultados">
          {metrics.map((metric) => (
            <article className="metricCard" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className="services" id="servicos">
          <div className="servicesHeader">
            <p className="eyebrow">SERVICOS ESTRATEGICOS</p>
            <h2>Uma estrutura contabil completa para sua operacao</h2>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <div className="serviceIconWrap">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contactCta" id="contato">
          <p className="eyebrow">PRONTO PARA O PROXIMO NIVEL?</p>
          <h2>Converse com a JA e receba um plano para reduzir custos fiscais.</h2>
          <a
            className="btnPrimary"
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
          <small>Atualize o numero acima para o seu WhatsApp oficial.</small>
        </section>
      </main>

      <footer className="footer">
        <p>JA Contabilidade e Pericia | Contagem - MG | Atendimento em todo o Brasil</p>
      </footer>
    </div>
  )
}

export default App 