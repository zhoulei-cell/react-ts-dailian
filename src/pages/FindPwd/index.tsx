import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
//import { voidFuction } from '../../types'

import SignNavBar from '../../components/Sign/SignNavBar'
import SignTop from '../../components/Sign/SignTop'
import SignInput from '../../components/Sign/SignInput'
import SignBtn from '../../components/Sign/SignBtn'

import './index.scss'

import useInput from '../../hooks/useInput'
import useCountDown from '../../hooks/useCountDown'

import phone from '../../assets/images/sign/phone.png'
import pwd from '../../assets/images/sign/pwd.png'
import verify from '../../assets/images/sign/verify.png'

const FindPwd: React.FC<RouteComponentProps> = (props) => {
  const { history } = props
  const {change: phoneChange, value: phoneValue} = useInput()
  const {change: pwdChange, value: pwdValue} = useInput()
  const {change: verifyChange, value: verifyValue} = useInput()
  const {change: codeTextChange, value: codeText} = useCountDown()
  console.log(phoneValue, pwdValue, verifyValue)

  const submit: VoidFunction = useCallback(() => {
    console.log('找回密码')
  }, [])
  const leftClick: VoidFunction = useCallback(() => {
    history.goBack()
  }, [history])

  const getVerify: VoidFunction = () => {
    codeTextChange()
    //发送ajax请求
  }
  return (
    <div className="find-pwd">
      {/* <!-- 头部返回导航栏 --> */}
      <SignNavBar leftClick={leftClick}/>
      {/* <!-- 头部返回导航栏 --> */}

      {/* 头像和背景 */}
      <SignTop/>
      {/* 头像和背景 */}

      {/* 登录表单 */}
      <div className="container">
        <SignInput icon={phone} placeholder="请输入手机号" change={phoneChange}/>
        <SignInput icon={pwd} placeholder="请输入新密码" change={pwdChange}/>
        <SignInput icon={verify} placeholder="请输入验证码" change={verifyChange} code={true} codeText={codeText} changeCode={getVerify}/>
        <SignBtn text="立即找回" onClick={submit}/>
      </div>
      {/* 登录表单 */}
    </div>
  )
}

export default FindPwd