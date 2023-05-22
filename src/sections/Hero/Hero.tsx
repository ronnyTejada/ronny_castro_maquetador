import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";
import {
  heroImage,
  heroText,
  heroTitleOne,
  heroTitleTwo,
  heroLinkText,
} from "../../data/heroData";
import { MainHeading, TextWrapper } from "../../globalStyles";
import {
  Img,
  HeroContainer,
  HeroSection,
  Link,
  IconWrapper,
  ImgWrapper,
} from "./HeroStyles";
import * as Scroll from "react-scroll";

const Hero = () => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();
  var scroll = Scroll.animateScroll;

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <HeroSection height="100vh" ref={ref}>
      <ImgWrapper>
        <Img
          src={heroImage}
          initial={initial}
          transition={{ delay: 1, duration: 0.6 }}
          animate={animation}
        />
      </ImgWrapper>

      <HeroContainer
        initial={initial}
        transition={{ delay: 1, duration: 0.6 }}
        animate={animation}
      >
        <MainHeading green={false}>{heroTitleOne}</MainHeading>
        <MainHeading green={true}>{heroTitleTwo}</MainHeading>
        <TextWrapper color="#FFFFFF" weight={"200"} size={"16x"}>
          {heroText.slice(0, 35)}
        </TextWrapper>
        <TextWrapper color="#FFFFFF" weight={"200"} size={"16px"}>
          {heroText.slice(35, 54)}
        </TextWrapper>

        <Link onClick={scrollToBottom}>
          <TextWrapper>{heroLinkText}</TextWrapper>
          <IconWrapper>
            <ArrowRight />
          </IconWrapper>
        </Link>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
