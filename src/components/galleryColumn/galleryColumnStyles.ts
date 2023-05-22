import { motion } from "framer-motion";
import styled from "styled-components";

interface ColumnGalleryInterface {
  top?: any;
  id?: string;
}

export const ColumnItem = styled.img`
  width: 100%;
  height: 350.94px;
  border-radius: 24px;
  margin-bottom: 30px;
`;

export const Column = styled(motion.div)<ColumnGalleryInterface>`
  display: flex;
  flex-direction: row;
  width: 302.06px;
  gap: 30px;
  background-color: "#D6F379";

  ${ColumnItem}:nth-child(even) {
    position: relative;
    top: calc(450px / 10 / 2);
  }
`;
