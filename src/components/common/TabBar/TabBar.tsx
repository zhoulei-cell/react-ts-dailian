import React from 'react'
import './TabBar.scss'

const TabBar: React.FC<{}> = (props) => {
  return (<div className="tab-bar d-flex">{props.children}</div>)
}

export default TabBar