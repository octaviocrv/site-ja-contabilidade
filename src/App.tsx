import './App.css'

const navLinks = [
  { label: 'Início', href: '#inicio', active: true },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Sobre nós', href: '#sobre-nos' },
  { label: 'Perguntas Frequentes', href: '#perguntas' },
]

const stats = [
  { value: '+300', label: 'Clientes Ativos' },
  { value: 'R$ 21mi', label: 'Economizados em impostos' },
  { value: '97%', label: 'de satisfação no Atendimento' },
  { value: '+607', label: 'Planejamentos Tributários Entregues' },
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="headerInner">
          <div className="logoGroup">
            <div className="logoCircle">
              <img src="/assets/uploads/Logo.jpeg" alt="JA Contabilidade" />
            </div>
            <span className="logoText">JA Contabilidade</span>
          </div>

          <nav className="nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={link.active ? 'navLinkActive' : 'navLink'}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="headerCta">
            Agendar Consultoria
          </a>
        </div>
      </header>

      <main>
        <section className="heroArea">
          {/* Fundo compartilhado entre hero e prova social */}
          <div className="heroBgPattern" aria-hidden="true" />

          <section className="hero" id="inicio">
            {/* Elementos decorativos de fundo */}
            <div className="glowOrb" aria-hidden="true" />

            <div className="heroLeft">
              <h1 className="heroTitle">
                Procurando uma Contabilidade que te ajude a pagar <span className="gold">menos impostos</span>?
              </h1>
              <p className="heroText">
                Junte-se a mais de <strong>300 empresas</strong> em todo Brasil que já economizaram mais de{' '}
                <strong>21 milhões</strong> de reais em impostos!
              </p>
              <a href="#contato" className="heroCta">
                Agendar consultoria
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="heroRight">
              <div className="teamStage">
                <div className="teamPill">
                  <span>TIME JA CONTABILIDADE</span>
                </div>

                <div className="teamPhotoWrap">
                  <img src="/assets/identidade/semfundo/foto-time-tamanho-real.png" alt="Equipe JA Contabilidade" />
                  <div className="teamPhotoFade" />
                </div>

                <div className="teamCaption">
                  <img src="/assets/uploads/Logo.jpeg" alt="Logo JA" />
                  <div>
                    <span className="teamCaptionTitle">JA Contabilidade e Perícia</span>
                    <span className="teamCaptionText">
                      Soluções para abertura, regularização, planejamento tributário e acompanhamento contábil.
                    </span>
                  </div>
                </div>

                <div className="floatingStat floatingStatOne">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A55C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21v-6h6v6" />
                    <path d="M9 9h.01" />
                    <path d="M15 9h.01" />
                    <path d="M9 13h.01" />
                    <path d="M15 13h.01" />
                  </svg>
                  <span>+300 empresas atendidas</span>
                </div>

                <div className="floatingStat floatingStatTwo">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A55C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Atendimento para todo o Brasil</span>
                </div>
              </div>
            </div>
            </section>

          <div className="proofRow">
            <div className="avatarStack">
              {['#C8A55C', '#A8894A', '#D4B96E', '#8B7340'].map((color, index) => (
                <div className="avatar" style={{ background: color }} key={color + index}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A0A0A">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              ))}
            </div>
            <span className="proofText">
              + de <strong>300</strong> empresas já tomaram essa decisão.
            </span>
          </div>
        </section>

        <div className="statsSection">
          <div className="statsGrid">
            {stats.map((stat) => (
              <div className="statCard" key={stat.label}>
                <div className="statGlowLine" />
                <span className="statValue">{stat.value}</span>
                <span className="statLabel">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App