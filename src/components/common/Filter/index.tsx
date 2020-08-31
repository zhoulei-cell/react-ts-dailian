import React from 'react'
import './index.scss'

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <ul className="filter-list d-flex">
        <li className="filter-item flex-1 d-flex jc-center ai-center">
          <span>全部</span>
        </li>
        <li className="filter-item flex-1 d-flex jc-center ai-center">
          <span>综合排序</span>
        </li>
        <li className="filter-item flex-1 d-flex jc-center ai-center">
          <span>价格</span>
        </li>
      </ul>
    </div>
  )
}

export default Filter