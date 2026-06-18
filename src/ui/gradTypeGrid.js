import { gradTypes } from '../options.js'
import { drawGradient } from '../canvas/drawGradient.js'
import { redraw } from './colorSync.js'

// ============================================================
// グラデーション選択ボタン生成
// ============================================================

export function setupGradTypeGrid(state, canvas) {
  const grid = document.getElementById('gradTypeGrid')

  gradTypes.forEach(gt => {
    const btn = document.createElement('button')
    btn.className = 'grad-type-btn' + (gt.id === state.gradType ? ' active' : '')

    const tc = document.createElement('canvas')
    tc.width = 120; tc.height = 60
    btn.appendChild(tc)

    const lbl = document.createElement('div')
    lbl.className = 'grad-type-label'
    lbl.textContent = gt.label
    btn.appendChild(lbl)

    grid.appendChild(btn)

    btn.addEventListener('click', () => {
      state.gradType = gt.id
      grid.querySelectorAll('.grad-type-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      document.getElementById('angleSection').style.display = gt.id === 'linear' ? 'flex' : 'none'
      redraw(state, canvas)
    })
  })
}

// ============================================================
// サムネイル描画
// ============================================================

export function renderGradThumbs(state) {
  const btns = document.querySelectorAll('.grad-type-btn')
  btns.forEach((btn, i) => {
    const tc = btn.querySelector('canvas')
    const ctx = tc.getContext('2d')
    const saved = state.gradType
    state.gradType = gradTypes[i].id
    drawGradient(ctx, 120, 60, { ...state, noiseOffset: 42 })
    state.gradType = saved
  })
}