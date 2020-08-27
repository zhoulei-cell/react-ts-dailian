import React, { memo } from 'react'
import './index.scss'

export interface IProps{
  icon: string;
  placeholder: string;
  type?: string;
  code?: boolean;
  codeText?: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeCode?: VoidFunction;
}

const SignInput: React.FC<IProps> = (props: IProps) => {
  const { icon, placeholder, type, code, codeText, change, changeCode } = props
  return (
    <div className="input-wrap d-flex ai-center">
      <img className="input-img" src={icon} alt="icon"/>
      <input className="input flex-1" type={type} placeholder={placeholder} onChange={(e) => change(e)}/>
      { code && <div className="code" onClick={changeCode}>{codeText}</div> }
    </div>
  )
}

SignInput.defaultProps = {
  type: 'text',
  code: false,
  codeText: '获取验证码'
}
export default memo(SignInput)

