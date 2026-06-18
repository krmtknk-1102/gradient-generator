// ============================================================
// ナビ スクロール固定
// ============================================================

export function setupStickyNav() {
  const nav     = document.getElementById('siteNav')
  const hero    = document.getElementById('hero')
  const spacer  = document.getElementById('navSpacer')

  // スクロール固定
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        nav.classList.add('is-sticky')
        spacer.style.display = 'block'
        spacer.style.height  = nav.offsetHeight + 'px'
      } else {
        nav.classList.remove('is-sticky')
        spacer.style.display = 'none'
      }
    },
    { threshold: 0 }
  )
  observer.observe(hero)

  // ハンバーガーメニュー
  const hamburger = document.getElementById('navHamburger')
  const navLinks  = document.getElementById('navLinks')
  const siteNav  = document.getElementById('siteNav')

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open')
    navLinks.classList.toggle('is-open', isOpen)
    hamburger.setAttribute('aria-expanded', isOpen)
    siteNav.classList.toggle('is-open')
  })

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('is-open')
      navLinks.classList.remove('is-open')
      hamburger.setAttribute('aria-expanded', 'false')
    })
  })
}