import { fonts } from '../options.js'
import { redraw } from './colorSync.js'

// ============================================================
// フォント選択ボタン生成
// ============================================================

function loadGoogleFont(fontId) {
  const id = `gfont-${fontId.replace(/\s+/g, '-')}`
  if (document.getElementById(id)) return
  const link = document.createElement('link')
  link.id = id
  link.rel = 'stylesheet'
  const family = fontId.replace(/\s+/g, '+')
  link.href = `https://fonts.googleapis.com/css2?family=${family}:wght@400%3B700&display=swap`
  document.head.appendChild(link)
}

export function setupFontGrid(state, canvas) {
  const grid = document.getElementById('fontGrid')

  fonts.forEach(f => {
    loadGoogleFont(f.id)

    const btn = document.createElement('button')
    btn.className = 'font-btn' + (f.id === state.selectedFont ? ' active' : '')
    btn.innerHTML = `<span style="font-family:'${f.id}',sans-serif;">${f.label}</span><span class="font-tag">${f.tag}</span>`

    btn.addEventListener('click', async () => {
      state.selectedFont = f.id
      grid.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      await document.fonts.load(`400 32px '${f.id}'`, state.textContent)
      redraw(state, canvas)
    })

    grid.appendChild(btn)
  })
}