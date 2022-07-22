import React from 'react'
import { BrandFot } from './StyledBrand'
import One from "../../assets/image/brands/ekedc.png"
import Two from "../../assets/image/brands/ie.png"
import Three from "../../assets/image/brands/eedc.png"
import Four from "../../assets/image/brands/k.png"
import Five from "../../assets/image/brands/brains.png"
import Six from "../../assets/image/brands/pro.png"
import Seven from "../../assets/image/brands/lite.png"
import Eight from "../../assets/image/brands/hyb.png"
// import Nine from "../../assets/image/about/icon/9.svg"
import Slider from 'react-slick'


const Brand = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <>
        <BrandFot>
          <div className='header_name'>These leading brands trust us</div>

          <Slider {...settings} className="slider" >
            <div>
              <img src={One} alt = ""/>
            </div>
            <div>
              <img src={Two} alt = ""/>
            </div>
            <div>
              <img src={Three} alt = ""/>
            </div>
            <div>
              <img src={Four} alt = ""/>
            </div>
            <div>
              <img src={Five} alt = ""/>
            </div>
            <div>
              <img src={Six} alt = ""/>
            </div>
            <div>
              <img src={Seven} alt = ""/>
            </div>
            <div>
              <img src={Eight} alt = ""/>
            </div>
            {/* <div>
              <img src={Nine} alt = ""/>
            </div> */}
          </Slider>
        </BrandFot>
      </>
     
    )
}

export default Brand