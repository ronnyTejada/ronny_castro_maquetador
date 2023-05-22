import styled from "styled-components";
import Slider from "react-slick";

export const MostListenedTextSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 24px;
`;
export const ImageWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
`;

export const CarouselImage = styled.img`
  width: 270px;
  
  height: 241px;
  border-radius: 12px;
  object-fit: cover;
  vertical-align: middle;
  opacity: 0.8;
`;

export const SliderTextSection = styled.div`
  display: none;
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
  }
  .slick-center {
    color: #e67e22;
    opacity: 1;
    -webkit-transform: scale(1.08);
    -moz-transform: scale(1.08);
    -ms-transform: scale(1.08);
    -o-transform: scale(1.08);
    transform: scale(1.08);
    background-color: #d6f379;
    border-radius: 24px;
    z-index: 100;

    ${CarouselImage}:nth-child(1) {
      width: 90%;
      margin-top: 20px;
      height: 141px;
      background-color: red;
    }

    ${SliderTextSection}:nth-child(2) {
      display: flex;

      flex-direction: column;
      align-items: flex-start;
      justify-items: flex-start;

      width: 90%;
    }
    @media screen and (max-width: 1006px) {
      max-width: 800px;
    }

    @media screen and (max-width: 433px) {
      z-index: 100;
    }
  }

  .slick-slide {
    @media screen and (max-width: 411px) {
      width: auto;
    }
  }

  .slick-list {
    overflow: hidden;
  }
`;
