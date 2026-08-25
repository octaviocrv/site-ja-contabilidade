/**
 * Transforma listas/grades marcadas com `data-carousel` em carrossel deslizante
 * no mobile. O deslize em si e feito por CSS (scroll-snap nativo, que da inercia
 * correta em Android e iOS); aqui so montamos os indicadores de pagina.
 */

export const MOBILE_MEDIA = '(max-width: 767px)'

type Cleanup = () => void

const noop: Cleanup = () => {}

function itemsOf(carousel: HTMLElement) {
  return Array.from(carousel.children).filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && !child.hasAttribute('data-carousel-skip'),
  )
}

function buildDots(carousel: HTMLElement): Cleanup {
  const items = itemsOf(carousel)
  if (items.length < 2) {
    return noop
  }

  const nav = document.createElement('div')
  nav.className = 'ja-dots'
  nav.setAttribute('role', 'tablist')
  nav.setAttribute('aria-label', carousel.getAttribute('data-carousel') || 'Itens')

  const buttons = items.map((item, index) => {
    const dot = document.createElement('button')
    dot.type = 'button'
    dot.setAttribute('role', 'tab')
    dot.setAttribute('aria-label', `Item ${index + 1} de ${items.length}`)
    dot.addEventListener('click', () => {
      item.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    })
    nav.appendChild(dot)
    return dot
  })

  // Item ativo = o que estiver mais proximo do centro da area visivel.
  const sync = () => {
    const viewport = carousel.getBoundingClientRect()
    const center = viewport.width / 2
    let activeIndex = 0
    let shortest = Number.POSITIVE_INFINITY

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect()
      const distance = Math.abs(rect.left + rect.width / 2 - viewport.left - center)
      if (distance < shortest) {
        shortest = distance
        activeIndex = index
      }
    })

    buttons.forEach((dot, index) => {
      dot.setAttribute('aria-current', String(index === activeIndex))
    })
  }

  let frame = 0
  const onScroll = () => {
    if (frame) return
    frame = requestAnimationFrame(() => {
      frame = 0
      sync()
    })
  }

  carousel.insertAdjacentElement('afterend', nav)
  carousel.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  sync()

  return () => {
    if (frame) cancelAnimationFrame(frame)
    carousel.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    nav.remove()
  }
}

export function enhanceCarousels(root: ParentNode): Cleanup {
  const carousels = Array.from(root.querySelectorAll<HTMLElement>('[data-carousel]'))
  if (!carousels.length) {
    return noop
  }

  const mql = window.matchMedia(MOBILE_MEDIA)
  let mounted: Cleanup[] = []

  const apply = () => {
    mounted.forEach((cleanup) => cleanup())
    mounted = mql.matches ? carousels.map(buildDots) : []
  }

  apply()
  mql.addEventListener('change', apply)

  return () => {
    mql.removeEventListener('change', apply)
    mounted.forEach((cleanup) => cleanup())
  }
}
