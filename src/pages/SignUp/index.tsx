import React from 'react'
import SignTop from '../../components/Sign/SignTop'
import SignInput from '../../components/Sign/SignInput'
import SignBtn from '../../components/Sign/SignBtn'
import './index.scss'

import useInput from '../../hooks/useInput'

import phone from '../../assets/images/sign/phone.png'
import pwd from '../../assets/images/sign/pwd.png'
import verify from '../../assets/images/sign/verify.png'

const SignUp: React.FC = () => {
  const {change: phoneChange, value: phoneValue} = useInput()
  const {change: pwdChange, value: pwdValue} = useInput()
  const {change: dbPwdChange, value: dbPwdValue} = useInput()
  const {change: verifyChange, value: verifyValue} = useInput()
  console.log(phoneValue, pwdValue, dbPwdValue, verifyValue)

  const submit: () => void = () => {
    console.log('注册')
  }
  return (<div className="sign-up">
    {/* <!-- 头像和背景 --> */}
		<SignTop/>
		{/* <!-- 头像和背景 --> */}

    <div className="container">
      <SignInput icon={phone} placeholder="请输入手机号" change={phoneChange}/>
      <SignInput icon={pwd} placeholder="请输入密码" change={pwdChange}/>
      <SignInput icon={pwd} placeholder="请输入再次密码" change={dbPwdChange}/>
      <SignInput icon={verify} placeholder="请输入验证码" change={verifyChange} code={true} codeText="获取验证码"/>
      <SignBtn text="注册" onClick={submit}/>
    </div>
  </div>)
}

export default SignUp