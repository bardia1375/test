import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/671BC33B56B9E92D7C6A48C03165BF75C06BB91C271FF86C6A4CCA47BDC400AC/scale?width=1344&aspectRatio=1.78&format=png"></img>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitles>2018 - 7m - Family - Fantasy - Kids - Animation</SubTitles>
      <Descriptin>
        Bao is a 2018 American computer-animated short film written and directed
        by Domee Shi and produced by Pixar Animation Studios. It was screened at
        the Tribeca Film Festival before being released with Incredibles 2 on
        June 15, 2018. The film is about an aging and lonely Chinese-Canadian
        mother, suffering from empty nest syndrome, who receives an unexpected
        second chance at motherhood when she makes a steamed bun (baozi) that
        comes to life. The film won the Oscar for the Best Animated Short Film
        at the 91st Academy Awards.
      </Descriptin>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.9;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 30vw;
  margin-top: 50px;
  //   border:1px solid red;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  text-transform: uppercase;
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Descriptin = styled.div`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 16px;
  width: 35%;
`;
