import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_URL } from '../../config/contansts';


export default function App(){
    return(
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={API_URL +"/img/Party/st1.jpg"}/></SwiperSlide>
          <SwiperSlide><img src={API_URL +"/img/Party/st2.jpg"}/></SwiperSlide>
          <SwiperSlide><img src={API_URL +"/img/Party/st3.jpg"}/></SwiperSlide>
          <SwiperSlide><img src={API_URL +"/img/Party/st4.jpg"}/></SwiperSlide>
          <SwiperSlide><img src={API_URL +"/img/Party/st5.jpg"}/></SwiperSlide>
          <SwiperSlide><img src={API_URL +"/img/Party/st6.jpg"}/></SwiperSlide>
        </Swiper>
    )
}