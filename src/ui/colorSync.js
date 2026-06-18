import { render } from '../canvas/render.js'
import { renderGradThumbs } from './gradTypeGrid.js'
import { refreshPatThumbs } from './patternGrid.js'

// ============================================================
// カラーピッカー・HEX入力処理
// ============================================================

export function setupColorSync(pickerId, hexId, swatchId, stateKey, state, canvas) {
  const picker  = document.getElementById(pickerId)
  const hexEl   = document.getElementById(hexId)
  const swatch  = document.getElementById(swatchId)

  const update = (v) => {
    state[stateKey] = v
    swatch.style.background = v
    renderGradThumbs(state)
    refreshPatThumbs()
    redraw(state, canvas)
  }

  picker.addEventListener('input', () => { update(picker.value); hexEl.value = picker.value })
  hexEl.addEventListener('input', () => {
    if (/^#[0-9A-Fa-f]{6}$/.test(hexEl.value)) { update(hexEl.value); picker.value = hexEl.value }
  })
  document.getElementById(swatchId.replace('Display','')).addEventListener('click', () => picker.click())
  swatch.style.background = picker.value
}

// ============================================================
// canvas描画
// ============================================================

export function redraw(state, canvas) {
  canvas.width  = state.imgW
  canvas.height = state.imgH
  render(canvas.getContext('2d'), state.imgW, state.imgH, state)
  document.getElementById('sizeLabel').textContent = `${state.imgW} × ${state.imgH} px`
}