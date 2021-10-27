import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { selectMovies } from "../features/movies/movieSlice";
// import { useSelector } from "react/redux";
function Movies() {
  // const movies = useSelector(selectMovies);
  // console.log("this is movies", movies)
  return (
    <Containers>
      <h4>Recommended for you</h4>
      <Content>
        {/* {movies &&
          movies.map((movie) => (
            <ContentItem key={movie.id}>
              <img src={movie.cardImg} alt=""/>
            </ContentItem>
          ))} */}
        <ContentItem>
          <Link to={"./datail/"}>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
        <ContentItem>
          <Link>
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/378/tom-jerry-photo-1378298.webp" />
          </Link>
        </ContentItem>
      </Content>
    </Containers>
  );
}

export default Movies;

const Containers = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const ContentItem = styled.div`
border-radius:10px;
over-flow:hidden;
border:3px solid rgba(249,249,249,0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor:pointer;
box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,rgb(0 0 0 /73%) 0px 16px 10px -10px;  }
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    box-shadow:rgb(0 0 0/80%) 0px 26px 30px -10px,rgb(0 0 0 /73%) 0px 16px 10px -10px; 
      transform:scale(1.05);
      border-color:rgba(249,249,249,0.8);

  }

`;
