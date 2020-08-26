import React, { memo } from 'react'
import classnames from 'classnames'
import './index.scss'

export interface IProps{
  data: string[];
  currentIndex: number;
  change: (index: number) => void
}
const SignSwitch: React.FC<IProps> = (props: IProps) => {
  const { data, currentIndex, change } = props
  return (
    <div className="tab-bar d-flex">
      { 
        data.map((item, index) => {
          const className: string = classnames('tab-item', 'flex-1', {active: currentIndex === index})
          return (
            <div className={className} key={index} onClick={() => change(index)}>{item}</div>
          )
        })
      }
    </div>
  )
}


export default memo(SignSwitch)