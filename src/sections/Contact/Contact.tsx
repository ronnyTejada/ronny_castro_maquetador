import React from "react";
import Form from "../../components/Form/Form";
import { contactoTitle } from "../../data/contactoData";
import { Heading } from "../../globalStyles";
import { ContactSection, ColumnContact } from "./ContactStyles";

const Contact = () => {
  return (
    <ContactSection height="100%">
      <ColumnContact width="100%">
        <Heading green={false}>{contactoTitle.slice(0, 14)}</Heading>
        <Heading green={true}>{contactoTitle.slice(14, 27)}</Heading>
      </ColumnContact>
      <ColumnContact width="100%">
        <Form />
      </ColumnContact>
    </ContactSection>
  );
};

export default Contact;
