import React from 'react'
import './index.scss'

import no_vip_img from '../../../assets/images/home/user/no_vip.png'
import qq_img from '../../../assets/images/home/user/qq.jpg'

const MineTop: React.FC = () => {
  return (
    <div className="mine-top">
      <div className="top-box d-flex ai-center">
        <img className="vip-icon" src={no_vip_img} alt="vip"/>
        <div className="top-content d-flex ai-center">
          <div className="photo-img">
            <img src={qq_img} alt="头像"/>
          </div>
          <div className="user-info">
            <div className="user-title">清风为谁流</div>
            <div className="user-phone">手机号： 15309085854</div>
            <div className="user-grade">打手等级: 初级</div>
          </div>

          <div className="resource-container d-flex">
            <div className="account resource-box flex-1 d-flex fd-column jc-center ai-center">
              <div className="num">0</div>
              <div className="text">账户余额</div>
            </div>
            <div className="diamond resource-box flex-1 d-flex fd-column jc-center ai-center">
              <div className="num">0</div>
              <div className="text">钻石余额</div>
            </div>
            <div className="coupon resource-box flex-1 d-flex fd-column jc-center ai-center">
              <div className="num">0</div>
              <div className="text">优惠卷</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MineTop