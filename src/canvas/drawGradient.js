import { hexToRgb, lerpColor, rgbStr, angleToVector } from './utils.js'

// ============================================================
// グラデーション描画
// ============================================================

export function drawGradient(ctx, w, h, s) {
  const rgb1=hexToRgb(s.color1), rgb2=hexToRgb(s.color2)

  if (s.gradType==='linear') {
    const v=angleToVector(s.angle,w,h)
    const g=ctx.createLinearGradient(v.x1,v.y1,v.x2,v.y2)
    g.addColorStop(0,s.color1); g.addColorStop(1,s.color2)
    ctx.fillStyle=g; ctx.fillRect(0,0,w,h)

  } else if (s.gradType==='radial') {
    const g=ctx.createRadialGradient(w*.5,h*.5,0,w*.5,h*.5,Math.max(w,h)*.72)
    g.addColorStop(0,s.color1); g.addColorStop(1,s.color2)
    ctx.fillStyle=g; ctx.fillRect(0,0,w,h)

  } else if (s.gradType==='radial-corner') {
    const g=ctx.createRadialGradient(w*.15,h*.15,0,w*.15,h*.15,Math.max(w,h)*1.1)
    g.addColorStop(0,s.color1); g.addColorStop(1,s.color2)
    ctx.fillStyle=g; ctx.fillRect(0,0,w,h)

  } else if (s.gradType==='conic') {
    const cx=w/2, cy=h/2, steps=360
    for (let i=0;i<steps;i++) {
      const a1=(i/steps)*Math.PI*2-Math.PI/2
      const a2=((i+1)/steps)*Math.PI*2-Math.PI/2
      const t=i/steps
      const col=lerpColor(rgb1,rgb2,t<.5?t*2:(1-t)*2)
      ctx.beginPath(); ctx.moveTo(cx,cy)
      ctx.arc(cx,cy,Math.max(w,h),a1,a2)
      ctx.closePath(); ctx.fillStyle=rgbStr(col); ctx.fill()
    }

  } else if (s.gradType==='wave') {
    const id=ctx.createImageData(w,h); const d=id.data
    for (let y=0;y<h;y++) for (let x=0;x<w;x++) {
      const wave=Math.sin((x/w)*Math.PI*4+(y/h)*Math.PI*2)*.5+.5
      const t=Math.pow(wave,1.2)
      const col=lerpColor(rgb1,rgb2,t)
      const idx=(y*w+x)*4
      d[idx]=col.r; d[idx+1]=col.g; d[idx+2]=col.b; d[idx+3]=255
    }
    ctx.putImageData(id,0,0)

  } else if (s.gradType==='diagonal-wave') {
    const id=ctx.createImageData(w,h); const d=id.data
    for (let y=0;y<h;y++) for (let x=0;x<w;x++) {
      const diag=(x/w+y/h)/2
      const wave=Math.sin(diag*Math.PI*6)*.15
      const t=Math.max(0,Math.min(1,diag+wave))
      const col=lerpColor(rgb1,rgb2,t)
      const idx=(y*w+x)*4
      d[idx]=col.r; d[idx+1]=col.g; d[idx+2]=col.b; d[idx+3]=255
    }
    ctx.putImageData(id,0,0)

  } else if (s.gradType==='soft-blob') {
    const id=ctx.createImageData(w,h); const d=id.data
    const cx1=w*.3,cy1=h*.35,cx2=w*.7,cy2=h*.65,rr=Math.max(w,h)*.6
    for (let y=0;y<h;y++) for (let x=0;x<w;x++) {
      const d1=Math.sqrt((x-cx1)**2+(y-cy1)**2)/rr
      const d2=Math.sqrt((x-cx2)**2+(y-cy2)**2)/rr
      const t=Math.max(0,Math.min(1,d1/(d1+d2+.001)))
      const col=lerpColor(rgb1,rgb2,t)
      const idx=(y*w+x)*4
      d[idx]=col.r; d[idx+1]=col.g; d[idx+2]=col.b; d[idx+3]=255
    }
    ctx.putImageData(id,0,0)

  }
}