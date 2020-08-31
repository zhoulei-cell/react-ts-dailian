/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import HomeTopBar from '../../../components/Home/HomeTopBar'
import HomeSearchNav from '../../../components/Home/HomeSearchNav'
import { Swiper, SwiperItem } from '../../../components/common/Swiper'
import HomeOrderCard from '../../../components/Home/HomeOrderCard'

import './index.scss'

import banner1 from '../../../assets/images/home/swiper/banner1.png'
import banner2 from '../../../assets/images/home/swiper/banner2.png'
import banner3 from '../../../assets/images/home/swiper/banner3.png'

const Index: React.FC = () => {
  const search: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    console.log(e.target.value)
  }
  const swiperChange = (index: number) => {
    console.log(index)
  }
  return (
    <>
      <HomeTopBar title="首页"/>
      <HomeSearchNav onChange={search}/>
      <Swiper autoPlay={true} onChange={swiperChange} interval={3000}>
        <SwiperItem>
          <img src={banner1}/>
        </SwiperItem>
        <SwiperItem>
          <img src={banner2}/>
        </SwiperItem>
        <SwiperItem>
          <img src={banner3}/>
        </SwiperItem>
      </Swiper>
      <HomeOrderCard/>
      <HomeOrderCard/>
      <HomeOrderCard/>
      <HomeOrderCard/>
    </>
  )
}

export default Index