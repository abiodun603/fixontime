import React from 'react'
import { BrandFot } from './StyledBrand'
import One from "../../assets/image/about/icon/1.svg"
import Two from "../../assets/image/about/icon/2.svg"
import Three from "../../assets/image/about/icon/3.svg"
import Four from "../../assets/image/about/icon/4.svg"
import Five from "../../assets/image/about/icon/5.svg"
import Six from "../../assets/image/about/icon/6.svg"
import Seven from "../../assets/image/about/icon/7.svg"
import Eight from "../../assets/image/about/icon/8.svg"
import Nine from "../../assets/image/about/icon/9.svg"

const Brand = () => {
    return (
        <BrandFot>
            <div className='header_name'>These leading brands trust us</div>
            <div className='images'>
                <img src={One} alt = ""/>
                <img src={Two} alt = ""/>
                <img src={Three} alt = ""/>
                <img src={Four} alt = ""/>
                <img src={Five} alt = ""/>
                <img src={Six} alt = ""/>
                <img src={Seven} alt = ""/>
                <img src={Eight} alt = ""/>
                <img src={Nine} alt = ""/>
            </div>
        </BrandFot>
    )
}

export default Brand
