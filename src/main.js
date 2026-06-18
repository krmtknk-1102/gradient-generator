// ============================================================
// エントリーポイント
// ============================================================

import './styles/main.scss'
import { state } from './state.js'
import { redraw } from './ui/colorSync.js'
import { setupColorSync } from './ui/colorSync.js'
import { setupGradTypeGrid, renderGradThumbs } from './ui/gradTypeGrid.js'
import { setupPatternGrid, refreshPatThumbs } from './ui/patternGrid.js'
import { setupFontGrid } from './ui/fontGrid.js'
import { setupDownload } from './ui/download.js'
import { setupThemeToggle } from './ui/themeToggle.js'
import { setupStickyNav } from './ui/stickyNav.js'

const canvas = document.getElementById('previewCanvas')

// カラー同期
setupColorSync('color1','hex1','swatchDisplay1','color1',state,canvas)
setupColorSync('color2','hex2','swatchDisplay2','color2',state,canvas)
setupColorSync('color3','hex3','swatchDisplay3','color3',state,canvas)
setupColorSync('color4','hex4','swatchDisplay4','color4',state,canvas)
setupColorSync('color5','hex5','swatchDisplay5','color5',state,canvas)

// グラデ・パターン・フォント
setupGradTypeGrid(state, canvas)
setupPatternGrid(state, canvas)
setupFontGrid(state, canvas)
setupDownload(state)

// 方向ボタン
document.getElementById('dirGrid').querySelectorAll('.dir-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('dirGrid').querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    state.angle = parseInt(btn.dataset.angle)
    redraw(state, canvas)
  })
})
document.getElementById('dirGrid').querySelectorAll('.dir-btn')[7].classList.add('active')

// 画像サイズ
;[document.getElementById('imgW'), document.getElementById('imgH')].forEach(el => {
  el.addEventListener('change', () => {
    state.imgW = Math.max(50, Math.min(4000, parseInt(document.getElementById('imgW').value) || 1200))
    state.imgH = Math.max(50, Math.min(4000, parseInt(document.getElementById('imgH').value) || 630))
    document.getElementById('imgW').value = state.imgW
    document.getElementById('imgH').value = state.imgH
    redraw(state, canvas)
  })
})
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.imgW = parseInt(btn.dataset.w)
    state.imgH = parseInt(btn.dataset.h)
    document.getElementById('imgW').value = state.imgW
    document.getElementById('imgH').value = state.imgH
    redraw(state, canvas)
  })
})

// 角丸長方形
document.getElementById('rectToggle').addEventListener('change', e => {
  state.showRect = e.target.checked
  document.getElementById('rectSettings').classList.toggle('disabled-overlay', !state.showRect)
  redraw(state, canvas)
})
document.getElementById('marginSlider').addEventListener('input', e => {
  state.margin = parseInt(e.target.value)
  document.getElementById('marginVal').textContent = state.margin + 'px'
  redraw(state, canvas)
})
document.getElementById('radiusSlider').addEventListener('input', e => {
  state.radius = parseInt(e.target.value)
  document.getElementById('radiusVal').textContent = state.radius + 'px'
  redraw(state, canvas)
})
document.getElementById('opacitySlider').addEventListener('input', e => {
  state.opacity = parseInt(e.target.value)
  document.getElementById('opacityVal').textContent = state.opacity + '%'
  redraw(state, canvas)
})
document.getElementById('patternOpacitySlider').addEventListener('input', e => {
  state.patternOpacity = parseInt(e.target.value)
  document.getElementById('patternOpacityVal').textContent = state.patternOpacity + '%'
  redraw(state, canvas)
})

// テキスト
document.getElementById('textToggle').addEventListener('change', e => {
  state.showText = e.target.checked
  document.getElementById('textSettings').classList.toggle('disabled-overlay', !state.showText)
  redraw(state, canvas)
})
document.getElementById('textInput').addEventListener('input', e => {
  state.textContent = e.target.value
  redraw(state, canvas)
})
document.getElementById('boldBtn').addEventListener('click', () => {
  state.isBold = !state.isBold
  document.getElementById('boldBtn').classList.toggle('active', state.isBold)
  redraw(state, canvas)
})
;['alignLeft','alignCenter','alignRight'].forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    state.textAlign = document.getElementById(id).dataset.align
    ;['alignLeft','alignCenter','alignRight'].forEach(i => document.getElementById(i).classList.remove('active'))
    document.getElementById(id).classList.add('active')
    redraw(state, canvas)
  })
})
document.getElementById('fontSizeSlider').addEventListener('input', e => {
  state.fontSize = parseInt(e.target.value)
  document.getElementById('fontSizeVal').textContent = state.fontSize + 'px'
  redraw(state, canvas)
})
document.getElementById('lineHeightSlider').addEventListener('input', e => {
  state.lineHeight = parseInt(e.target.value) / 10
  document.getElementById('lineHeightVal').textContent = state.lineHeight.toFixed(1)
  redraw(state, canvas)
})

// 初期描画
document.getElementById('patColorField').style.display = 'none'
document.getElementById('angleSection').style.display = 'flex'
renderGradThumbs(state)
redraw(state, canvas)
setupThemeToggle()
setupStickyNav()