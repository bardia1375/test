import React from "react";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
// import { useDispatch } from "react-redux";
// import {setMovies} from "../features/movies/movieSlice"
// import db from "../firebase";
const Home = () => {
// const dispatch = useDispatch()
//   useEffect(() => {
//     db.collection().onSnapshot((snapshot) => {
//       let tempMovies = snapshot.docs.map((doc) => {
//         return {
//           id: doc.id,
//           ...doc.data(),
//         };
//       })
//   dispatch(setMovies(tempMovies));
//     });
//   }, []);
  return (
    <div className="main">
      <ImgSlider />
      <Viewers />
      <Movies />
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
