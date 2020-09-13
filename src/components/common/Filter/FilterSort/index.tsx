import React from 'react'
import classnames from 'classnames'
import './index.scss'
interface IProps{
  data?: any;
  setData?: React.Dispatch<any>;
}
const FilterSort: React.FC<IProps> = (props) => {
  console.log('sort')
  const { data, setData } = props
  const copyData = JSON.parse(JSON.stringify(data))
  const handle = (index: number) => {
    copyData.submenu.forEach((item: any, i: number) => {
      item.select = false
      data.submenu[i].select = false
    })
    copyData.submenu[index].select = true
    data.submenu[index].select = true
    setData!(copyData)
  }
  return (
    <ul className="filter-sort">
      {
        data.submenu.map((item: any, index: number) => {
          const className = classnames('filter-sort-item d-flex jc-between ai-center', {select: item.select})
          return (
            <li className={className} key={index} onClick={() => handle(index)}>
              <span>{item.name}</span>
              <i className="iconfont icon-duihao"></i>
            </li>
          )
        })
      }
      {/* <li className="filter-sort-item d-flex jc-between ai-center select">
        <span>价格从高到低</span>
        <i className="iconfont icon-duihao"></i>
      </li>
      <li className="filter-sort-item d-flex jc-between ai-center">
        <span>价格从高到低</span>
        <i className="iconfont icon-duihao"></i>
      </li>
      <li className="filter-sort-item d-flex jc-between ai-center">
        <span>价格从高到低</span>
        <i className="iconfont icon-duihao"></i>
      </li>
      <li className="filter-sort-item d-flex jc-between ai-center">
        <span>价格从高到低</span>
        <i className="iconfont icon-duihao"></i>
      </li>
      <li className="filter-sort-item d-flex jc-between ai-center">
        <span>价格从高到低</span>
        <i className="iconfont icon-duihao"></i>
      </li> */}
    </ul>
  )
}

export default React.memo(FilterSort)