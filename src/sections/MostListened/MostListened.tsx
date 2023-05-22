import React from "react";
import {
  data,
  mostListenedText,
  mostListenedTitle,
  sliderSettings,
} from "../../data/mostListenedData";
import { Heading, Section, TextWrapper } from "../../globalStyles";
import {
  MostListenedTextSection,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  SliderTextSection,
} from "./MostListenedStyles";

const MostListened = () => {
  return (
    <Section height="100vh">
      <Heading green={true}>{mostListenedTitle}</Heading>
      <MostListenedTextSection>
        <TextWrapper color="#FFFFFF" weight={"200"} size={"16x"}>
          {mostListenedText.slice(0, 52)}
        </TextWrapper>

        <TextWrapper color="#FFFFFF" weight={"200"} size={"16px"}>
          {mostListenedText.slice(52, 100)}
        </TextWrapper>
      </MostListenedTextSection>

      <ReviewSlider {...sliderSettings}>
        {data.map((el, index) => {
          return (
            <ImageWrapper key={index}>
              <CarouselImage src={el.image} />
              <SliderTextSection>
                <TextWrapper
                  size="1.1rem"
                  mt="18px"
                  weight="600"
                  color="#000000"
                >
                  {el.albumName}
                </TextWrapper>
                <TextWrapper size="9px" weight="600" mt="10px" color="#000000">
                  Publicado:{el.date}
                </TextWrapper>
              </SliderTextSection>
            </ImageWrapper>
          );
        })}
      </ReviewSlider>

      {/* <button onClick={sliderRef?.slickNext}>next</button> */}
    </Section>
  );
};

export default MostListened;
