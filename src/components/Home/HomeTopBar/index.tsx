import React, { memo } from 'react'
import './index.scss'

interface IProps{
  title: string;
}

const TopBar: React.FC<IProps> = (props: IProps) => {
  const { title } = props
  return (
    <div className="top-bar">{title}</div>
  )
}

export default memo(TopBar)