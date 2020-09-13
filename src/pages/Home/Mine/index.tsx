import React from 'react'
import MineTop from '../../../components/Mine/MineTop'
import MineTabMenu, { IData } from '../../../components/Mine/MineTabMenu'
import './index.scss'

import qianbao from '../../../assets/images/home/user/qianbao.png'
import jiedan from '../../../assets/images/home/user/jd.png'
import fadan from '../../../assets/images/home/user/fd.png'
import fabu from '../../../assets/images/home/user/fadan.png'

import js from '../../../assets/images/home/user/js.png'
import dz from '../../../assets/images/home/user/dz.png'
import dindan from '../../../assets/images/home/user/dindan.png'
import yhk from '../../../assets/images/home/user/yhk.png'

import xgzl from '../../../assets/images/home/user/gerenzhongx.png'
import wdhy from '../../../assets/images/home/user/huiyuan.png'
import yqyj from '../../../assets/images/home/user/yaoqin.png'
import qdyj from '../../../assets/images/home/user/qiandao.png'
import smrz from '../../../assets/images/home/user/shouchang.png'
import bzzx from '../../../assets/images/home/user/bangzhu.png'
import lxwm from '../../../assets/images/home/user/kefu.png'
import tcdl from '../../../assets/images/home/user/loginout.png'

const menu1: IData[] = [
  {
    icon: qianbao,
    text: '钱包',
    click() {
      console.log('钱包')
    }
  },
  {
    icon: jiedan,
    text: '接单列表',
    click() {
      console.log('接单列表')
    }
  },
  {
    icon: fadan,
    text: '发单列表',
    click() {
      console.log('发单列表')
    }
  },
  {
    icon: fabu,
    text: '发布订单',
    click() {
      console.log('发布订单')
    }
  }
]

const menu2: IData[] = [
  {
    icon: js,
    text: '对战角色',
    click() {
      console.log('对战角色')
    }
  },
  {
    icon: dz,
    text: '我的发布',
    click() {
      console.log('我的发布')
    }
  },
  {
    icon: dindan,
    text: '接受对战',
    click() {
      console.log('接受对战')
    }
  },
  {
    icon: yhk,
    text: '银行卡管理',
    click() {
      console.log('银行卡管理')
    }
  }
]

const menu3: IData[] = [
  {
    icon: xgzl,
    text: '修改资料',
    click() {
      console.log('修改资料')
    }
  },
  {
    icon: wdhy,
    text: '我的会员',
    click() {
      console.log('我的会员')
    }
  },
  {
    icon: yqyj,
    text: '邀请有奖',
    click() {
      console.log('邀请有奖')
    }
  },
  {
    icon: qdyj,
    text: '签到有奖',
    click() {
      console.log('签到有奖')
    }
  },
  {
    icon: smrz,
    text: '实名认证',
    click() {
      console.log('实名认证')
    }
  },
  {
    icon: bzzx,
    text: '帮助中心',
    click() {
      console.log('帮助中心')
    }
  },
  {
    icon: lxwm,
    text: '联系我们',
    click() {
      console.log('联系我们')
    }
  },
  {
    icon: tcdl,
    text: '退出登录',
    click() {
      console.log('退出登录')
    }
  },
]

const Mine: React.FC = () => {
  return (
    <>
      <MineTop/>
      <div className="mine-container">
        <MineTabMenu data={menu1}/>

        <MineTabMenu data={menu2}/>

        <MineTabMenu data={menu3}/>

      </div>
    </>
  )
}

export default Mine