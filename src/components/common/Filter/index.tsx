import React from 'react'
import FilterSort from './FilterSort'
import FilterSelect from './FilterSelect'
import './index.scss'
import { px2rem } from '../../../utils/rem'
import { data } from '../../../utils/data'

interface IProps{
  maskTop?: number;
  maskBottom?: number;
}

class Filter extends React.Component<IProps, {filterData: any, isShow: boolean}>{
  static defaultProps: { maskTop: number; maskBottom: number }
  constructor(props: IProps) {
    super(props)
    this.state = {
      filterData: null,
      isShow: false
    }
    console.log("zhix")
  }
  filterClick = (item: any) => {
    if (item.submenu) {
      this.setState({filterData: item, isShow: true})
    }
  } 
  setFilterData = (item: any) => {
    this.setState({filterData: item})
  }
  render() {
    return (
      <div className="filter">
        <ul className="filter-list d-flex">
          {
            data.map(item => {
  
              return (
                <li className="filter-item flex-1 d-flex jc-center ai-center" key={item.name} onClick={() => this.filterClick(item)}>
                  <span>{item.name}</span> 
                  <i className="iconfont icon-xiajiantou"></i>
                </li>
              )
            })
          }
        </ul>
        {
          this.state.isShow ? (
            <>
              <div className="mask" style={{top: px2rem(this.props.maskTop!), bottom: px2rem(this.props.maskBottom!)}} onClick={() => this.setState({isShow: false})}></div>
              <div className="filter-mask">
                {
                  this.state.filterData!.type === "radio" ? (
                    <FilterSort data={this.state.filterData} setData={this.setFilterData}/>
                  ) : (
                    <FilterSelect data={this.state.filterData} setData={this.setFilterData}/>
                  )
                }
              </div>
            </>
          ) : null
        }
      </div>
    )
  }
}

// const Filter: React.FC<IProps> = (props) => {
//   const { maskTop, maskBottom } = props
//   const [isShow, setIsShow] = useState<boolean>(false)
//   const [filterData, setFilterData] = useState<any>(null)
//   const filterClick = (item: any) => {
//     if (item.submenu) {
//       setIsShow(true)
//       setFilterData(item)
//     }
//   }
//   return (
//     <div className="filter">
//       <ul className="filter-list d-flex">
//         {
//           data.map(item => {

//             return (
//               <li className="filter-item flex-1 d-flex jc-center ai-center" key={item.name} onClick={() => filterClick(item)}>
//                 <span>{item.name}</span> 
//                 <i className="iconfont icon-xiajiantou"></i>
//               </li>
//             )
//           })
//         }
//       </ul>
//       {
//         isShow ? (
//           <>
//             <div className="mask" style={{top: px2rem(maskTop!), bottom: px2rem(maskBottom!)}} onClick={() => setIsShow(false)}></div>
//             <div className="filter-mask">
//               {
//                 filterData!.type === "radio" ? (
//                   <FilterSort data={filterData} setData={setFilterData}/>
//                 ) : (
//                   <FilterSelect data={filterData} setData={setFilterData}/>
//                 )
//               }
//             </div>
//           </>
//         ) : null
//       }
//     </div>
//   )
// }

Filter.defaultProps = {
  maskTop: 350,
  maskBottom: 100
}
export default Filter