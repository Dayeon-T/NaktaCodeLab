import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import './Howto.css'
import { Pagination } from "swiper/modules"
import Howtocard from './Howtocard'
import { useState } from 'react'
import Howtosection from './Howtosection'
export default function Howto() {
    

    return(
        <div className="howto-grid">
            <p className="whatclass">어떤 강의부터 시작해야 할지 모르겠다면?</p>
            <p className="recom">코드랩 입문자를 위한 실전형 강의 추천</p>
            <div className="sectionhow">
                <Howtosection/>
                <hr className="section-hr"/>
                <Howtosection/>
                <hr className="section-hr"/>
                <Howtosection/>
                <hr className="section-hr"/>
                <Howtosection/>
            </div>
        </div>
    )
}