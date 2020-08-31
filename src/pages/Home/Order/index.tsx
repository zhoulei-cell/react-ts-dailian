import React from 'react'
import HomeTopBar from '../../../components/Home/HomeTopBar'
import HomeSearchNav from '../../../components/Home/HomeSearchNav'
import Filter from '../../../components/common/Filter'
import HomeOrderCard from '../../../components/Home/HomeOrderCard'

import './index.scss'

const Order: React.FC = () => {

  const searchChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <HomeTopBar title="接单大厅"/>
      <div className="search-warpper">
        <HomeSearchNav isLeft={false} isRight={false} onChange={searchChange}/>
      </div>
      <Filter/>

      <HomeOrderCard/>
      <HomeOrderCard/>
      <HomeOrderCard/>
    </>
  )
}

export default Order