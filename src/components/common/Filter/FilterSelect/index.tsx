import React from 'react'
import classnames from 'classnames'
import './index.scss'
interface IProps{
  data?: any;
  setData?: React.Dispatch<any>;
}
const FilterSelect: React.FC<IProps> = (props) => {
  const { data } = props
  console.log(data)
  return (
    <div className="filter-selector-wrap">
      <div className="filter-selector">
        {
          data.submenu.map((item: any, index: number) => {
            return (
              <div className="filter-selector-group" key={index}>
                <h3 className="title">{item.name}</h3>
                <ul className="filter-selector-list d-flex flex-wrap">
                  {
                    item.submenu.map((sub: any, index: number) => {
                      const className = classnames("filter-selector-item d-flex jc-center ai-center", {select: sub.select})
                      return (
                        <li className={className} key={index}>{sub.name}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
        {/* <div className="filter-selector-group">
          <h3 className="title">初始段位</h3>
          <ul className="filter-selector-list d-flex flex-wrap">
            <li className="filter-selector-item d-flex jc-center ai-center">不限</li>
            <li className="filter-selector-item d-flex jc-center ai-center select">青铜</li>
            <li className="filter-selector-item d-flex jc-center ai-center">白银</li>
            <li className="filter-selector-item d-flex jc-center ai-center">黄金</li>
            <li className="filter-selector-item d-flex jc-center ai-center">铂金</li>
            <li className="filter-selector-item d-flex jc-center ai-center">钻石</li>
            <li className="filter-selector-item d-flex jc-center ai-center">星耀</li>
            <li className="filter-selector-item d-flex jc-center ai-center">王者</li>
          </ul>
        </div>
        <div className="filter-selector-group">
          <h3 className="title">目标段位</h3>
          <ul className="filter-selector-list d-flex flex-wrap">
            <li className="filter-selector-item d-flex jc-center ai-center">不限</li>
            <li className="filter-selector-item d-flex jc-center ai-center">青铜</li>
            <li className="filter-selector-item d-flex jc-center ai-center">白银</li>
            <li className="filter-selector-item d-flex jc-center ai-center">黄金</li>
            <li className="filter-selector-item d-flex jc-center ai-center">铂金</li>
            <li className="filter-selector-item d-flex jc-center ai-center">钻石</li>
            <li className="filter-selector-item d-flex jc-center ai-center">星耀</li>
            <li className="filter-selector-item d-flex jc-center ai-center select">王者</li>
          </ul>
        </div>
        <div className="filter-selector-group">
          <h3 className="title">价格</h3>
          <ul className="filter-selector-list d-flex flex-wrap">
            <li className="filter-selector-item d-flex jc-center ai-center">不限</li>
            <li className="filter-selector-item d-flex jc-center ai-center">0-50元</li>
            <li className="filter-selector-item d-flex jc-center ai-center">50-100元</li>
            <li className="filter-selector-item d-flex jc-center ai-center select">100-150元</li>
            <li className="filter-selector-item d-flex jc-center ai-center">150-200元</li>
            <li className="filter-selector-item d-flex jc-center ai-center">200-250元</li>
            <li className="filter-selector-item d-flex jc-center ai-center">250-300元</li>
          </ul>
        </div> */}
      </div>
      <div className="btn-group d-flex">
        <div className="cancel flex-1 d-flex ai-center jc-center">取消</div>
        <div className="confirm flex-1 d-flex ai-center jc-center">确定</div>
      </div>
    </div>
  )
}

export default FilterSelect