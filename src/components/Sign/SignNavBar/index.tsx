import React from 'react'
import './index.scss'
import back from '../../../assets/images/sign/back.png'

interface IProps{
  leftClick: VoidFunction
}

const SignNavBar: React.FC<IProps> = (props: IProps) => {
  const { leftClick } = props
  return (
    <div className="sign-nav-bar">
      <div onClick={leftClick} className="left d-flex ai-center">
        <img src={back} alt=""/>
      </div>
    </div>
  )
}

export default SignNavBar