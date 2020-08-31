import React, { useRef, useEffect } from 'react'
import './index.scss'

interface IProps{
  autoPlay?: boolean;
  moveRadio?: number; 
  interval?: number;
  pagination?: boolean;
  onChange?: (index: number) => void;
}

const Swiper: React.FC<IProps> = (props) => {

  let { autoPlay, moveRadio, interval, pagination, onChange: change } = props
  let currentIndex: number = 1
  let paginaIndex: number = currentIndex - 1
  let startX: number = 0
  const arr: React.ReactNode[] = []
  const children: React.ReactNode = props.children
  const count: number = React.Children.count(children)
  const slideTotal: number = count + 2
  const swipeRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const paginaRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number>(0)
  const pagainaArr: React.ReactNode[] = []
  const width: number = document.documentElement.clientWidth

  cloneElement()

  function cloneElement(): void {
    arr.push((children as React.ReactNode[])[count - 1])
    React.Children.forEach(children, child => {
      arr.push(child)
    })
    arr.push((children as React.ReactNode[])[0])

    for(let i: number = 0; i <= count - 1; i++){
      pagainaArr.push(<span className="swiper-pagination-item" key={i} onClick={() => changePagination(i)}></span>)
    }
  }

  function changePagination(num: number): void {
    currentIndex = num + 1
    paginaIndex = num
    change && change(paginaIndex)
    slideChange(currentIndex, paginaIndex)
  }

  function next(): void {
    currentIndex += 1
    checkChange()
  }

  function prev(): void {
    currentIndex -= 1
    checkChange()
  }

  function checkChange(): void {
    if (currentIndex >= slideTotal - 1) {
      paginaIndex = 0
    } else if (currentIndex <= 0) {
      paginaIndex = slideTotal - 3
    } else {
      paginaIndex = currentIndex - 1
    }
    change && change(paginaIndex)
    slideChange(currentIndex, paginaIndex)
  }

  function slideChange(index: number, paginaIndex: number): void {
    const children: HTMLCollection = paginaRef.current!.children
    swipeRef.current!.style.transition = 'transform .5s'
    swipeRef.current!.style.transform = `translateX(-${(index) * width}px)`
    Array.prototype.forEach.call(children, (child: HTMLSpanElement, index: number) => {
      if (paginaIndex === index) {
        child.classList.add('active')
      } else {
        child.classList.remove('active')
      }
    })
  }

  function transitionEnd(e: React.TransitionEvent): void {
    if (e.propertyName === 'transform') {
      checkPosition()
    }
  }

  function checkPosition(): void {
    
    if (currentIndex >= slideTotal - 1) {
      currentIndex = 1
    } else if (currentIndex <= 0) {
      currentIndex = slideTotal - 2
    }
    swipeRef.current!.style.transition = ''
    swipeRef.current!.style.transform = `translateX(-${(currentIndex) * width}px)`
  }

  start()
  function start(): void {
    if (autoPlay) {
      timerRef.current = window.setInterval(next, interval)
    }
  }

  function clear(): void{
    if (autoPlay) {
      window.clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    swipeRef.current!.style.transform = `translateX(-${(currentIndex) * width}px)`
    paginaRef.current!.children[paginaIndex].classList.add('active')
    return () => {
      if (autoPlay) {
        window.clearInterval(timerRef.current)
      }
    }
  }, [width, currentIndex, paginaIndex, autoPlay])

  function touchStart(e: React.TouchEvent<HTMLDivElement>): void {
    clear()
    const point = e.changedTouches[0]
    startX = point.pageX
  }

  function touchMove(e: React.TouchEvent<HTMLDivElement>): void {
    const point = e.changedTouches[0]
    let scaleX: number = point.pageX - startX
    if (scaleX > 0) {
      scaleX = Math.abs(scaleX) >= width ? width : scaleX
    } else {
      scaleX = Math.abs(scaleX) >= width ? -width : scaleX
    }
    const moveX = scaleX + -(currentIndex * width)
    swipeRef.current!.style.transition = ''
    swipeRef.current!.style.transform = `translateX(${moveX}px)`
  }

  function touchEnd(e: React.TouchEvent<HTMLDivElement>): void {
    const point = e.changedTouches[0]
    let scaleX: number = point.pageX - startX
    if (Math.abs(scaleX) / width >= moveRadio!) {
      if (scaleX > 0) {
        prev()
      } else {
        next()
      }
    } else {
      swipeRef.current!.style.transition = 'transform .5s'
      swipeRef.current!.style.transform = `translateX(-${(currentIndex) * width}px)`
    }
    start()
  }

  return (
    <div className="swiper-container" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
      <div className="swiper-wrapper d-flex" ref={swipeRef} onTransitionEnd={transitionEnd}>
        {arr}
      </div>
      {/* <!-- 如果需要分页器 --> */}
      {
        pagination ? (
          <div className="swiper-pagination d-flex jc-center" ref={paginaRef}>
            {
              pagainaArr
            }
          </div>
        ) : null
      }
      {/* <!-- 如果需要分页器 --> */}
    </div>
  )
}

Swiper.defaultProps = {
  autoPlay: false,
  moveRadio: 0.3,
  interval: 1000,
  pagination: true
}

export default Swiper