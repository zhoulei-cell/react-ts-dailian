import React from 'react'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export interface IRoutes{
  path: string,
  component: React.FC | React.ComponentClass,
  exact?: boolean
}

const routes: IRoutes[] = [
  {
    path: '/home',
    component: Home,
    exact: true
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
  }
]

export default routes