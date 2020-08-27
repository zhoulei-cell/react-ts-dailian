import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeRoutes } from '../../routes'
import { TabBar, TabBarItem } from '../../components/common/TabBar'
import './index.scss'

interface ITabData{
  path: string;
  text: string;
  color?: string;
  selectedColor?: string;
  iconPath?: string;
  selectedIconPath?: string;
}
const tabData: ITabData[] = [
  {
    path: "/home",
    text: "首页",
    color: "#989898",
    selectedColor: "#00CB82",
    iconPath: require("../../assets/images/home/tabbar/index.png"),
    selectedIconPath: require("../../assets/images/home/tabbar/indexcheck.png")
  },
  {
    path: "/home/match",
    text: "赛事",
    color: "#989898",
    selectedColor: "#00CB82",
    iconPath: require("../../assets/images/home/tabbar/shaishi.png"),
    selectedIconPath: require("../../assets/images/home/tabbar/shaishicheck.png")
  },
  {
    path: "/home/order",
    text: "接单大厅",
    color: "#989898",
    selectedColor: "#00CB82",
    iconPath: require("../../assets/images/home/tabbar/order.png"),
    selectedIconPath: require("../../assets/images/home/tabbar/ordercheck.png")
  },
  {
    path: "/home/chat",
    text: "热聊",
    color: "#989898",
    selectedColor: "#00CB82",
    iconPath: require("../../assets/images/home/tabbar/qunliao.png"),
    selectedIconPath: require("../../assets/images/home/tabbar/qunliaocheck.png")
  },
  {
    path: "/home/mine",
    text: "我的",
    color: "#989898",
    selectedColor: "#00CB82",
    iconPath: require("../../assets/images/home/tabbar/wode.png"),
    selectedIconPath: require("../../assets/images/home/tabbar/wodecheck.png")
  }
]

const Home: React.FC = () => {
  return (<div className="home d-flex fd-column">
    <div className="container flex-1">
      <Switch>
        {
          HomeRoutes.map((item, index) => (
            <Route {...item} key={index}/>
          ))
        }
      </Switch>
    </div>
    <div className="tab-bar-wrap">
      <TabBar>
        {
          tabData.map((item, index) => (<TabBarItem {...item} key={index}/>))
        }
      </TabBar>
    </div>
  </div>)
}

export default Home

