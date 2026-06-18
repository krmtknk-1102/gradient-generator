import { render } from '../canvas/render.js'

// ============================================================
// ダウンロードボタン
// ============================================================

export function setupDownload(state) {
  document.getElementById('dlBtn').addEventListener('click', async () => {
    // フォントの完全ロードを待つ
    await document.fonts.ready

    const off = document.createElement('canvas')
    off.width  = state.imgW
    off.height = state.imgH
    render(off.getContext('2d'), state.imgW, state.imgH, state)

    const link = document.createElement('a')
    link.download = `thumbnail-${state.imgW}x${state.imgH}.png`
    link.href = off.toDataURL('image/png')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}