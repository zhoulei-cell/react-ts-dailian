import React from 'react'
import './index.scss'

const SwiperItem: React.FC = (props) => {
  return (
    <div className="swiper-item">
      {props.children}
    </div>
  )
}

export default SwiperItem