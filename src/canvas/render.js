import { drawGradient } from './drawGradient.js'
import { drawRect }     from './drawRect.js'
import { drawText }     from './drawText.js'

// ============================================================
// 描画エントリーポイント
// ============================================================

export function render(ctx, w, h, state) {
  // 描画順
  drawGradient(ctx, w, h, state)
  drawRect(ctx, w, h, state)
  drawText(ctx, w, h, state)
}