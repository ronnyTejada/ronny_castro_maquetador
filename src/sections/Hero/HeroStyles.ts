import { motion } from "framer-motion";
import styled from "styled-components";
import { Section } from "../../globalStyles";

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 967px) {
    width: 222px;
    height: 222px;
  }
`;

export const HeroSection = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 79px;
  @media screen and (max-width: 967px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5%;
  }
`;
export const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export const Link = styled.a`
  display: flex;
  color: white;
  position: relative;
  width: 115px;
  top: 35%;
  align-content: center;
  align-items: center;
  cursor: pointer;
`;
export const IconWrapper = styled.span`
  margin-left: 28px;
`;
