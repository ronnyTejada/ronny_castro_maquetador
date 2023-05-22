import styled from "styled-components";
import { Column, Section } from "../../globalStyles";

export const ContactSection = styled(Section)`
  display: flex;
  flex-direction: row;
  padding-top: 0;
  @media screen and (max-width: 967px) {
    flex-direction: column;
    padding-left: 10%;
    padding-bottom: 5%;
  }
`;

export const ColumnContact = styled(Column)`
  @media screen and (max-width: 967px) {
    align-items: flex-start;
  }
`;
