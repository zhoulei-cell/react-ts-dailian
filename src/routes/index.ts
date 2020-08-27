import React from 'react'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import FindPwd from '../pages/FindPwd'


import Index from '../pages/Home/Index'
import Match from '../pages/Home/Match'
import Order from '../pages/Home/Order'
import Chat from '../pages/Home/Chat'
import Mine from '../pages/Home/Mine'

export interface IRoutes{
  path: string,
  component: React.FC<any> | React.ComponentClass<any>,
  exact?: boolean
}

const routes: IRoutes[] = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/signIn',
    component: SignIn,
    exact: true
  },
  {
    path: '/signUp',
    component: SignUp,
    exact: true
  },
  {
    path: '/findPwd',
    component: FindPwd,
    exact: true
  }
]

export const HomeRoutes: IRoutes[] = [
  {
    path: '/home',
    component: Index,
    exact: true
  },
  {
    path: '/home/match',
    component: Match,
    exact: true
  },
  {
    path: '/home/order',
    component: Order,
    exact: true
  },
  {
    path: '/home/chat',
    component: Chat,
    exact: true
  },
  {
    path: '/home/mine',
    component: Mine,
    exact: true
  },
]

export default routes