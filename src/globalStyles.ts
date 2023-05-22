import styled, { createGlobalStyle } from "styled-components";
import {
  SectionInterface,
  MainHeadingInterface,
  TextWrapperInterface,
  ColumnInterface,
} from "./interfaces";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: "#222222";
  
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1<MainHeadingInterface>`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: ${({ mt }) => (mt ? mt : "")};
  color: ${({ green }) => (green ? "#D6F379" : "#FFFFFF")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2<MainHeadingInterface>`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ green }) => (green ? "#D6F379" : "#FFFFFF")};
  letter-spacing: 0;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const TextWrapper = styled.span<TextWrapperInterface>`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;

export const Section = styled.section<SectionInterface>`
  padding: ${(props) => (props.padding ? props.padding : "140px 0")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  background-color: ${(props) => (props.color ? props.color : "#222222")};
  position: ${(props) => (props.position ? props.position : "")};
  width: ${(props) => (props.width ? props.width : "auto")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "auto")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "auto")};
  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.smPadding ? props.smPadding : "70px 0")};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(justify): any => (justify ? justify : "")};
  align-items: ${(align): any => (align ? align : "")};
  gap: ${(gap): any => (gap ? gap : "")};
  padding: ${(padding): any => (padding ? padding : "")};
  margin: ${(margin): any => (margin ? margin : "")};
  position: ${(position): any => (position ? position : "")};
  width: ${(width): any => (width ? width : "auto")};
  min-width: ${(minWidth): any => (minWidth ? minWidth : "auto")};
  max-width: ${(maxWidth): any => (maxWidth ? maxWidth : "auto")};
  height: ${(height): any => (height ? height : "auto")};
  max-height: ${(maxHeight): any => (maxHeight ? maxHeight : "auto")};
  min-height: ${(minHeight): any => (minHeight ? minHeight : "auto")};
  flex-wrap: ${(wrap): any => (wrap ? wrap : "")};
`;

export const Column = styled.div<ColumnInterface>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export default GlobalStyle;
