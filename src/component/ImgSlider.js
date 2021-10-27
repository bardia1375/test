import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    // fade:true
  };
  return (
    <Carousel {...settings}>
      <CarouselItem>
        <img src="./images/slider-badging.jpg" alt=""/>
      </CarouselItem>
      <CarouselItem>
        <img src="./images/slider-badag.jpg" alt=""/>
      </CarouselItem>
      <CarouselItem>
        <img src="./images/slider-scale.jpg" alt=""/>
      </CarouselItem>
      <CarouselItem>
        <img src="./images/slider-scales.jpg" alt=""/>
      </CarouselItem>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
//   ul li botton{
//       &:before{
//           font-size:10px;
//           color:rgb(150,158,171)
//       }
//   }
  li.slick-active button:before{
      color:white
  }
  .slick-list{
      overflow:visible
  }   // با این فلش چپ  رفت و بجاش عکس ها در حاشیه هم امدند 
  button{
      z-index:1
  }
  `;
const CarouselItem = styled.div`
cursor:pointer;
img{
    border: 4px solid transparent;
    border-radius:4px;
    width:100%;
    height:100%;
    box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0/73%) 0px 16px 10px -10px;
    transition-duration:300ms;
    &:hover{
        border:4px solid rgba(249,249,249,0.8);
       
}`;
