import { roundRect } from './utils.js'
import { makePatternTile } from './makePatternTile.js'

// ============================================================
// 長方形描画
// ============================================================

export function drawRect(ctx, w, h, s) {
  if (!s.showRect) return
  const rw = w - s.margin * 2
  const rh = h - s.margin * 2
  if (rw <= 0 || rh <= 0) return

  ctx.save()
  roundRect(ctx, s.margin, s.margin, rw, rh, s.radius)
  ctx.clip()

  const scale = Math.max(1, w / 600)

  // 背景色で塗る
  ctx.globalAlpha = s.opacity / 100
  ctx.fillStyle = s.color3
  ctx.fillRect(s.margin, s.margin, rw, rh)

  // パターンをpatternOpacityで重ねる（solidの場合はスキップ）
  if (s.rectPattern !== 'solid') {
    ctx.globalAlpha = (s.opacity / 100) * (s.patternOpacity / 100)
    const tile = makePatternTile(s.rectPattern, 'transparent', s.color5, scale)
    ctx.fillStyle = ctx.createPattern(tile, 'repeat')
    ctx.fillRect(s.margin, s.margin, rw, rh)
  }

  ctx.restore()
}