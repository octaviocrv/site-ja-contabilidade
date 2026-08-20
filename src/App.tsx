import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import sessao2Html from './content/sections/section-02.html?raw'
import sessao3Html from './content/sections/section-03.html?raw'
import sessao4Html from './content/sections/section-04.html?raw'
import sessao5Html from './content/sections/section-05.html?raw'
import sessao6Html from './content/sections/section-06.html?raw'
import footerHtml from './content/sections/section-footer.html?raw'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Sobre nós', href: '#sobre-nos' },
]

const stats = [
  { value: '+60', label: 'Clientes Ativos' },
  { value: 'R$ 4mi', label: 'Economizados em impostos' },
  { value: '97%', label: 'de satisfação no Atendimento' },
  { value: '+527', label: 'Planejamentos Tributários Entregues' },
]

const whatsappLink =
  'https://wa.me/553131509984?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20JA%20Contabilidade.'

function LegacyHtmlSection({
  html,
  removeOCaminhoTitle = false,
  sectionId,
  whatsappLink,
}: {
  html: string
  removeOCaminhoTitle?: boolean
  sectionId?: string
  whatsappLink: string
}) {
  const hostRef = useRef<HTMLDivElement>(null)

  const content = useMemo(() => {
    const doc = new DOMParser().parseFromString(html, 'text/html')

    if (removeOCaminhoTitle) {
      Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).forEach((heading) => {
        if (heading.textContent?.trim() === 'O Caminho') {
          heading.remove()
        }
      })
    }

    // Mantem a conversao centralizada em WhatsApp, com excecoes marcadas no HTML.
    Array.from(doc.querySelectorAll('a[href]')).forEach((anchor) => {
      if (anchor.getAttribute('data-preserve-link') === 'true') {
        anchor.setAttribute('target', '_blank')
        anchor.setAttribute('rel', 'noopener noreferrer')
        return
      }

      anchor.setAttribute('href', whatsappLink)
      anchor.setAttribute('target', '_blank')
      anchor.setAttribute('rel', 'noopener noreferrer')
    })

    const links = Array.from(
      doc.querySelectorAll('helmet link[rel="stylesheet"], head link[rel="stylesheet"], link[rel="stylesheet"]'),
    )
      .map((node) => node.outerHTML)
      .join('\n')
    const styles = Array.from(doc.querySelectorAll('helmet style, head style, style'))
      .map((node) => node.outerHTML)
      .join('\n')
    const blocks = Array.from(doc.querySelectorAll('section, footer'))
      .map((node) => node.outerHTML)
      .join('\n')

    return [links, styles, blocks].filter(Boolean).join('\n')
  }, [html, removeOCaminhoTitle, whatsappLink])

  useEffect(() => {
    if (!hostRef.current) {
      return
    }

    const shadowRoot = hostRef.current.shadowRoot ?? hostRef.current.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = content

    // Scripts inserted via innerHTML never execute; recreate them so embedded
    // section behavior (e.g. carousels) actually runs.
    Array.from(shadowRoot.querySelectorAll('script')).forEach((oldScript) => {
      const newScript = document.createElement('script')
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value))
      newScript.textContent = oldScript.textContent
      oldScript.replaceWith(newScript)
    })
  }, [content])

  return <div id={sectionId} className="legacyShadowHost" ref={hostRef} />
}

function App() {
  const [activeHref, setActiveHref] = useState('#inicio')

  useEffect(() => {
    const syncActiveNavByHash = () => {
      const hash = window.location.hash
      const hasNavLinkForHash = navLinks.some((link) => link.href === hash)

      if (hasNavLinkForHash) {
        setActiveHref(hash)
      } else if (!hash) {
        setActiveHref('#inicio')
      }
    }

    syncActiveNavByHash()
    window.addEventListener('hashchange', syncActiveNavByHash)
    return () => window.removeEventListener('hashchange', syncActiveNavByHash)
  }, [])

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
              <a
                key={link.label}
                href={link.href}
                className={activeHref === link.href ? 'navLinkActive' : 'navLink'}
                aria-current={activeHref === link.href ? 'page' : undefined}
                onClick={() => setActiveHref(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href={whatsappLink} className="headerCta" target="_blank" rel="noopener noreferrer">
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
                Junte-se a mais de <strong>60 empresas</strong> em todo Brasil que já economizaram mais de{' '}
                <strong>4 milhões</strong> de reais em impostos!
              </p>
              <a href={whatsappLink} className="heroCta" target="_blank" rel="noopener noreferrer">
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
                  <span>+60 empresas atendidas</span>
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
              + de <strong>60</strong> empresas já tomaram essa decisão.
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

        <LegacyHtmlSection html={sessao2Html} removeOCaminhoTitle sectionId="secao-02" whatsappLink={whatsappLink} />
        <LegacyHtmlSection html={sessao3Html} sectionId="caminho" whatsappLink={whatsappLink} />
        <LegacyHtmlSection html={sessao4Html} sectionId="servicos" whatsappLink={whatsappLink} />
        <LegacyHtmlSection html={sessao5Html} sectionId="depoimentos" whatsappLink={whatsappLink} />
        <LegacyHtmlSection html={sessao6Html} sectionId="sobre-nos" whatsappLink={whatsappLink} />
        <LegacyHtmlSection html={footerHtml} sectionId="contato" whatsappLink={whatsappLink} />
      </main>

      <a
        href={whatsappLink}
        className="whatsappFloat"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
      </a>
    </div>
  )
}

export default App