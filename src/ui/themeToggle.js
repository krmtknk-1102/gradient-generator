// ============================================================
// ライトモード・ダークモード切替
// ============================================================

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  // OSのテーマ設定を初期値として読み取り
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme, btn) {
  document.documentElement.setAttribute('data-theme', theme)
  btn.setAttribute(
    'aria-label',
    theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'
  )
  btn.setAttribute(
    'title',
    theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'
  )
  btn.querySelector('.theme-icon-sun').style.display  = theme === 'dark'  ? 'block' : 'none'
  btn.querySelector('.theme-icon-moon').style.display = theme === 'light' ? 'block' : 'none'
}

export function setupThemeToggle() {
  const btn = document.getElementById('themeToggleBtn')
  if (!btn) return

  let current = getInitialTheme()
  applyTheme(current, btn)

  btn.addEventListener('click', () => {
    current = current === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, current)
    applyTheme(current, btn)
  })
}