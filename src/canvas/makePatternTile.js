// ============================================================
// パターン（1タイル分）描画
// ============================================================

export function makePatternTile(patId, bgColor, lineColor, scale=1) {
  const tc = document.createElement('canvas')
  const s = scale
  const fill = (ctx, w, h) => {
    if (bgColor === 'transparent') {
        ctx.clearRect(0, 0, w, h)
    } else {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, w, h)
    }
  }

  if (patId==='solid') {
    tc.width=2; tc.height=2
    fill(tc.getContext('2d'),2,2); return tc
  }
  if (patId==='grid') {
    const sz=Math.round(27*s); tc.width=sz; tc.height=sz
    const x=tc.getContext('2d'); fill(x,sz,sz)
    x.strokeStyle=lineColor; x.lineWidth=Math.max(1,s)
    x.beginPath(); x.moveTo(sz-.5,0); x.lineTo(sz-.5,sz)
    x.moveTo(0,sz-.5); x.lineTo(sz,sz-.5); x.stroke(); return tc
  }
  if (patId==='grid-fine') {
    const sz=Math.round(13*s); tc.width=sz; tc.height=sz
    const x=tc.getContext('2d'); fill(x,sz,sz)
    x.strokeStyle=lineColor; x.lineWidth=Math.max(.5,s*.5)
    x.beginPath(); x.moveTo(sz-.5,0); x.lineTo(sz-.5,sz)
    x.moveTo(0,sz-.5); x.lineTo(sz,sz-.5); x.stroke(); return tc
  }
  if (patId==='dot') {
    const sz=Math.round(16*s); tc.width=sz; tc.height=sz
    const x=tc.getContext('2d'); fill(x,sz,sz)
    x.fillStyle=lineColor; x.beginPath()
    x.arc(sz/2,sz/2,Math.max(1.5,2.5*s),0,Math.PI*2); x.fill(); return tc
  }
  if (patId==='dot-large') {
    const sz=Math.round(27*s); tc.width=sz; tc.height=sz
    const x=tc.getContext('2d'); fill(x,sz,sz)
    x.fillStyle=lineColor; x.beginPath()
    x.arc(sz/2,sz/2,Math.max(3,5*s),0,Math.PI*2); x.fill(); return tc
  }
  if (patId==='h-border') {
    const sz=Math.round(20*s); tc.width=2; tc.height=sz
    const x=tc.getContext('2d'); fill(x,2,sz)
    x.fillStyle=lineColor; x.fillRect(0,sz-Math.max(1,s),2,Math.max(1,s)); return tc
  }
  if (patId==='v-border') {
    const sz=Math.round(20*s); tc.width=sz; tc.height=2
    const x=tc.getContext('2d'); fill(x,sz,2)
    x.fillStyle=lineColor; x.fillRect(sz-Math.max(1,s),0,Math.max(1,s),2); return tc
  }
  if (patId==='diagonal') {
    const sz=Math.round(16*s); tc.width=sz; tc.height=sz
    const x=tc.getContext('2d'); fill(x,sz,sz)
    x.strokeStyle=lineColor; x.lineWidth=Math.max(1,s)
    x.beginPath()
    x.moveTo(0,sz); x.lineTo(sz,0)
    x.moveTo(-sz,sz); x.lineTo(0,0)
    x.moveTo(sz,sz*2); x.lineTo(sz*2,sz)
    x.stroke(); return tc
  }
  if (patId==='cross-dot') {
    const sz=Math.round(21*s); tc.width=sz; tc.height=sz
    const x=tc.getContext('2d'); fill(x,sz,sz)
    x.fillStyle=lineColor
    const r=Math.max(1.5,2*s)
    ;[[0,0],[sz/2,sz/2]].forEach(([px,py])=>{
      x.beginPath(); x.arc(px,py,r,0,Math.PI*2); x.fill()
    }); return tc
  }
  tc.width=2; tc.height=2; fill(tc.getContext('2d'),2,2); return tc
}