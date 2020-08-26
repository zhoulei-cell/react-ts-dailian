import React, { memo } from 'react'
import './index.scss'

export interface IProps{
  text: string;
  onClick: () => void;
}

const SignBtn: React.FC<IProps> = (props: IProps) => {
  const { text, onClick } = props
  return (
    <div className="sign-btn">
      <div className="btn" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick()}>{text}</div>
    </div>
  )
}

export default memo(SignBtn)