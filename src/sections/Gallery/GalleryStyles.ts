import { motion } from "framer-motion";
import styled from "styled-components";

export const GallerySection = styled(motion.section)`
  flex-direction: column;
  overflow: hidden;
  height: 50vh;
  background-color: #d6f379 !important;
`;

export const GalleryContentWrapper = styled.div`
  background-color: #d6f379 !important;
  -ms-transform: rotate(-23.34deg);
  -webkit-transform: rotate(-23.34deg);
  transform: rotate(-23.34deg);
`;
