import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import SignTop from '../../components/Sign/SignTop'
import SignSwitch from '../../components/Sign/SignSwitch'
import SignBtn from '../../components/Sign/SignBtn'
import SignInput from '../../components/Sign/SignInput'

import useTabChange from '../../hooks/useTabChang'
import useInput from '../../hooks/useInput'
import useCountDown from '../../hooks/useCountDown'

import './index.scss'

import phone from '../../assets/images/sign/phone.png'
import pwd from '../../assets/images/sign/pwd.png'
import verify from '../../assets/images/sign/verify.png'


const SignIn: React.FC<RouteComponentProps> = (props) => {
  const {currentIndex, change} = useTabChange()
  const tabData: string[] = ['账号登录','短信登录']

  const {change: phoneChange, value: phoneValue} = useInput()
  const {change: pwdChange, value: pwdValue} = useInput()
  const {change: verifyChange, value: verifyValue} = useInput()
  const {change: codeTextChange, value: codeText} = useCountDown()
  console.log(phoneValue, pwdValue, verifyValue)

  const {history} = props

  const submit: VoidFunction = useCallback(() => {
    console.log('登录')
  }, [])

  const goPage: (path: string) => void = (path: string) => {
    history.push(path)
  }
  const getVerify: VoidFunction = () => {
    codeTextChange()
  }
  return (<div className="sign-in">
    {/* 头像和背景 */}
		<SignTop />
		{/* 头像和背景 */}

    <div className="sign-container">
      {/* 登录方式切换 */}
      <SignSwitch data={tabData} currentIndex={currentIndex} change={change}/>
      {/* 登录方式切换 */}

      {/* 登录表单 */}
      <div className="sign-form">
        <SignInput icon={phone} placeholder="请输入手机号" change={phoneChange}/>
        { currentIndex === 0 && <SignInput icon={pwd} placeholder="请输入密码" change={pwdChange}/> }
        { currentIndex === 1 && <SignInput icon={verify} placeholder="请输入验证码" change={verifyChange} code={true} codeText={codeText} changeCode={getVerify}/> }
        <SignBtn text="登录" onClick={submit}/>
      </div>
      {/* 登录表单 */}

      { /* 页面跳转链接 */ }
      <div className="link-wrap d-flex jc-between">
        <span onClick={() => goPage('/signUp')}>注册</span>
        <span onClick={() => goPage('/findPwd')}>忘记密码？</span>
      </div>
      { /* 页面跳转链接 */ }
    </div>
  </div>)
}

export default SignIn