
const bodyEl: HTMLElement = document.body
const htmlEl: HTMLElement = document.documentElement
let metaEl: HTMLMetaElement = (document.querySelector<HTMLMetaElement>('meta[name="viewport"]'))!

const setMeta: (htmlEl: HTMLElement, metaEl: HTMLMetaElement) => void = (htmlEl, metaEl) => {
  let dpr: number = Math.round(window.devicePixelRatio)
  let scale = 1 / dpr
  
  let content: string = 'width=device-width, initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no'
  if (metaEl) {
    metaEl.setAttribute('content', content)
  } else {
    metaEl = document.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaEl.setAttribute('content', content)
    document.head.appendChild(metaEl)
  }
  htmlEl.setAttribute('data-dpr', String(dpr))
}
const resize: (htmlEl: HTMLElement, bodyEl: HTMLElement) => void = (htmlEl, bodyEl) => {
  let width = htmlEl.getBoundingClientRect().width
  let rem = width / 10 // 把屏幕分成10份
  let dpr: number = Math.round(window.devicePixelRatio)
  htmlEl.style.fontSize = rem + 'px'
  bodyEl.style.fontSize = 12 * dpr + 'px'
}
const event: (resize: (htmlEl: HTMLElement, bodyEl: HTMLElement) => void, htmlEl: HTMLElement, bodyEl: HTMLElement) => void = function (): void {
  window.addEventListener('load', () => {
    resize(htmlEl, bodyEl)
  })
  window.addEventListener('resize', () => {
    resize(htmlEl, bodyEl)
  })
}
const init: () => void = function (): void {
  setMeta(htmlEl, metaEl)
  resize(htmlEl, bodyEl)
  event(resize, htmlEl, bodyEl)
}
export default {
  init
}