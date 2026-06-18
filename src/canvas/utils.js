// ============================================================
// canvas描画　共通関数
// ============================================================

// HEXカラーコードをRGB数値に変換
export const hexToRgb = hex => ({
  r: parseInt(hex.slice(1,3),16),
  g: parseInt(hex.slice(3,5),16),
  b: parseInt(hex.slice(5,7),16),
})

// 2色の中間色を計算
export const lerpColor = (c1,c2,t) => ({
  r: Math.round(c1.r+(c2.r-c1.r)*t),
  g: Math.round(c1.g+(c2.g-c1.g)*t),
  b: Math.round(c1.b+(c2.b-c1.b)*t),
})

// RGBオブジェクトをCSSの色文字列に変換
export const rgbStr = c => `rgb(${c.r},${c.g},${c.b})`

// グラデーションの始点・終点座標計算
export function angleToVector(deg, w, h) {
  const rad=deg*Math.PI/180, cos=Math.cos(rad), sin=Math.sin(rad)
  const cx=w/2, cy=h/2, d=(Math.abs(sin)*w+Math.abs(cos)*h)/2
  return { x1:cx-sin*d, y1:cy+cos*d, x2:cx+sin*d, y2:cy-cos*d }
}

// 角丸長方形のパス描画
export function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w/2, h/2)
  ctx.beginPath()
  ctx.moveTo(x+r, y)
  ctx.lineTo(x+w-r, y); ctx.arcTo(x+w, y, x+w, y+r, r)
  ctx.lineTo(x+w, y+h-r); ctx.arcTo(x+w, y+h, x+w-r, y+h, r)
  ctx.lineTo(x+r, y+h); ctx.arcTo(x, y+h, x, y+h-r, r)
  ctx.lineTo(x, y+r); ctx.arcTo(x, y, x+r, y, r)
  ctx.closePath()
}