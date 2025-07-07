import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import './Howto.css'
import { Pagination } from "swiper/modules"
import Howtocard from './Howtocard'
import { useState } from 'react'

export default function Howto() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 6 

    return(
        <div className="howto-grid">
            <p>어던 강의부터 시작해야 할지 모르겠다면?</p>
            <p>코드랩 입문자를 위한 실전형 강의 추천</p>
            
            <div className="howto-card-title">
             <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                         <rect x="12" y="12" width="48" height="48" rx="10" fill="#1A3D24"/>
                         <rect width="48" height="48" rx="10" fill="#333333"/>
                         <rect width="48" height="48" rx="10" fill="url(#paint0_linear_188_8440)"/>
                         <defs>
                             <linearGradient id="paint0_linear_188_8440" x1="0" y1="0" x2="48.5033" y2="0.602104" gradientUnits="userSpaceOnUse">
                             <stop stop-color="#2CFF8C"/>
                             <stop offset="1" stop-color="#03FD49"/>
                             </linearGradient>
                         </defs>
                     </svg>
                <div>
                    <p className="title-title">프론트엔드</p>
                    <p className="title-sub">화면에 생명을 불어넣는 첫 코딩 여행</p>
                </div>
             </div>

             {/* 프로그레스 바 */}
             <div className="progress-bar-container">
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                    ></div>
                </div>
             </div>

             <div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.5}
                    loop={true} 
                    className="mySwiper"
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                >
                    <SwiperSlide><Howtocard count="1"/></SwiperSlide>
                    <SwiperSlide><Howtocard count="2"/></SwiperSlide>
                    <SwiperSlide><Howtocard count="3"/></SwiperSlide>
                    <SwiperSlide><Howtocard count="4"/></SwiperSlide>
                    <SwiperSlide><Howtocard count="5"/></SwiperSlide>
                    <SwiperSlide><Howtocard count="6"/></SwiperSlide>
                   
                </Swiper>
             </div>
        </div>
    )
}