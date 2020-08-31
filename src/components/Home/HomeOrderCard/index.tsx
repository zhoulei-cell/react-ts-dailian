import React, { memo } from 'react'
import './index.scss'

import icon from '../../../assets/images/home/other/wanz.png'
import same from '../../../assets/images/home/other/shenlei.png'

const HomeOrderCard: React.FC = () => {
  return (
    <div className="order-card-wrap">
      <div className="order-card d-flex ai-center">
        <img className="same" src={same} alt="同省"/>
        <div className="card-image">
          <img src={icon} alt="王者"/>
        </div>
        <div className="card-content">
          <div className="title">安卓QQ区*默认服*星耀一一星到王者一星</div>
          <div className="author">发布者: 清风为谁流</div>
          <div className="bail">保证金：20元 | 时间： 50小时</div>
        </div>
        <div className="card-money">￥2000</div>
      </div>
    </div>
  )
}

export default memo(HomeOrderCard)