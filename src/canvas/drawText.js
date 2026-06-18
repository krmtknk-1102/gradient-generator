// ============================================================
// テキスト描画
// ============================================================

export function drawText(ctx, w, h, s) {
  if (!s.showText||!s.textContent.trim()) return
  ctx.font=`${s.isBold?700:400} ${s.fontSize}px '${s.selectedFont}', sans-serif`
  ctx.fillStyle=s.color4
  ctx.textAlign=s.textAlign
  ctx.textBaseline='middle'
  const xPos=s.textAlign==='left'?s.margin+20:s.textAlign==='right'?w-s.margin-20:w/2
  const lines=s.textContent.split('\n')
  const totalH=lines.length*s.fontSize*s.lineHeight
  const startY=h/2-totalH/2+s.fontSize*s.lineHeight/2
  lines.forEach((line,i)=>{ ctx.fillText(line,xPos,startY+i*s.fontSize*s.lineHeight) })
}