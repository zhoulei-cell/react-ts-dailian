import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
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

const SignUp: React.FC<RouteComponentProps> = (props) => {
  const {change: phoneChange, value: phoneValue} = useInput()
  const {change: pwdChange, value: pwdValue} = useInput()
  const {change: dbPwdChange, value: dbPwdValue} = useInput()
  const {change: verifyChange, value: verifyValue} = useInput()
  const {change: codeTextChange, value: codeText} = useCountDown()
  console.log(phoneValue, pwdValue, dbPwdValue, verifyValue)
  const { history } = props
  const submit: VoidFunction = useCallback(() => {
    console.log('注册')
  }, [])

  const leftClick: VoidFunction = useCallback(() => {
    history.goBack()
  }, [history])

  const getVerify: VoidFunction = () => {
    codeTextChange()
  }
  return (<div className="sign-up">
    {/* <!-- 头部返回导航栏 --> */}
		<SignNavBar leftClick={leftClick}/>
		{/* <!-- 头部返回导航栏 --> */}

    {/* <!-- 头像和背景 --> */}
		<SignTop/>
		{/* <!-- 头像和背景 --> */}

    {/* <!-- 表单部分 --> */}
    <div className="container">
      <SignInput icon={phone} placeholder="请输入手机号" change={phoneChange}/>
      <SignInput icon={pwd} placeholder="请输入密码" change={pwdChange}/>
      <SignInput icon={pwd} placeholder="请输入再次密码" change={dbPwdChange}/>
      <SignInput icon={verify} placeholder="请输入验证码" change={verifyChange} code={true} codeText={codeText} changeCode={getVerify}/>
      <SignBtn text="注册" onClick={submit}/>
    </div>
    {/* <!-- 表单部分 --> */}
  </div>)
}

export default SignUp