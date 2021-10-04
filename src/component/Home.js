import React from "react";
import styled from "styled-components";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";


const Home = () => {
  return (
    <div className="main">
      <ImgSlider />
      <Viewers/>
    </div>
  );
};
export default Home;

// const Container = styled.div`
//   min-height:calc(100vh - 30px);
//   padding: 0 3.5vw;
//   position:relative;
//   background:green;
//   &:before{
//      background:url("../home-background.png") center center/cover no-repeat fixed ;

//       content:"";
//       position:absolute;
//       top:0;
//       left:0;
//       right:0;
//       bottom:0;
//       z-index:-1;
//   }
// `;
