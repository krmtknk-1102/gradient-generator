import { patternDefs } from '../options.js'
import { makePatternTile } from '../canvas/makePatternTile.js'
import { redraw } from './colorSync.js'

// ============================================================
// パターン選択ボタン生成
// ============================================================

export function setupPatternGrid(state, canvas) {
  const grid = document.getElementById('patternGrid')

  patternDefs.forEach(pd => {
    const btn = document.createElement('button')
    btn.className = 'pat-btn' + (pd.id === state.rectPattern ? ' active' : '')

    const tc = document.createElement('canvas')
    tc.width = 64; tc.height = 64
    btn.appendChild(tc)

    const lbl = document.createElement('div')
    lbl.className = 'pat-label'
    lbl.textContent = pd.label
    btn.appendChild(lbl)

    grid.appendChild(btn)

    const renderThumb = () => {
      const ctx = tc.getContext('2d')
      const tile = makePatternTile(pd.id, state.color3, state.color5, 1)
      ctx.fillStyle = ctx.createPattern(tile, 'repeat')
      ctx.fillRect(0, 0, 64, 64)
    }
    renderThumb()
    btn._renderThumb = renderThumb

    btn.addEventListener('click', () => {
      state.rectPattern = pd.id
      grid.querySelectorAll('.pat-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      document.getElementById('patColorField').style.display =
        pd.id === 'solid' ? 'none' : 'flex'
      redraw(state, canvas)
    })
  })
}

// ============================================================
// サムネイル描画
// ============================================================

export function refreshPatThumbs() {
  document.querySelectorAll('.pat-btn').forEach(btn => {
    if (btn._renderThumb) btn._renderThumb()
  })
}