import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { API_URL } from '../../config/contansts';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Vswiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={API_URL +"/img/Party/vt1.jpg"}/></SwiperSlide>
        <SwiperSlide><img src={API_URL +"/img/Party/vt2.jpg"}/></SwiperSlide>
        <SwiperSlide><img src={API_URL +"/img/Party/vt3.jpg"}/></SwiperSlide>
        <SwiperSlide><img src={API_URL +"/img/Party/vt4.jpg"}/></SwiperSlide>
      </Swiper>
    </>
  );
}
