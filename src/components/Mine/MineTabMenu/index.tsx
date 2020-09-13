import React from 'react'
import './index.scss'
export interface IData{
  icon: string;
  text: string;
  click?: VoidFunction;
}

interface IProps{
  data: IData[]
}
const MineTabMenu: React.FC<IProps> = (props) => {
  return (
    <div className="tab-menu-wrap">
      <div className="tab-menu d-flex flex-wrap">
        {
          props.data.map(item => {
            const { icon, text, click } = item
            return ( 
              <div className="tab-item d-flex fd-column jc-center ai-center" onClick={click} key={text}>
                <img className="item-img" src={icon} alt="icon"/>
                <div className="item-text">{text}</div>
              </div>             
            )
          })
        }
      </div>
    </div>
  )
}

export default MineTabMenu