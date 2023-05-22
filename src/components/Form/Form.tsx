import React, { useState } from "react";
import { regex, selectData, externalLink } from "../../data/contactoData";
import { TextWrapper } from "../../globalStyles";
import {
  FormInput,
  FormSection,
  FormSelect,
  FormTextArea,
  FormWrapper,
  Checkbox,
  CheckSection,
  FormLink,
  Button,
  ButtonWrapper,
} from "./FormStyles";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  function validateForm(
    name: string,
    email: string,
    selected: string,
    description: string
  ) {
    if (
      !name.trim() ||
      !email.trim() ||
      !description.trim() ||
      !selected.trim()
    ) {
      alert("Todos los campos son requeridos");

      return;
    }

    if (!regex.test(email.toLocaleLowerCase())) {
      setEmailError(true);
      alert("Campo email no es correcto");

      return;
    }

    alert("Formulario enviado correctamente");
  }

  const handleSend = (e: any) => {
    e.preventDefault();
    validateForm(name, email, selected, description);
  };

  const handleEmail = (text: string) => {
    setEmail(text);
    let emailReg = regex.test(text.toLocaleLowerCase());
    if (!emailReg) {
      setEmailError(!emailReg);
    } else {
      setEmailError(!emailReg);
    }
  };

  const handleChange = (text: string, type: string) => {
    if (type === "name") {
      setName(text);
    } else if (type === "razon") {
      setSelected(text);
    } else if (type === "description") {
      setDescription(text);
    }
  };

  return (
    <FormSection>
      <FormWrapper>
        <FormInput
          placeholder="Nombre"
          name="name"
          type="text"
          required
          onChange={(e) => handleChange(e.target.value, e?.target.name)}
        />
        <FormInput
          placeholder="Email"
          type="email"
          error={emailError}
          required
          className=""
          onChange={(e) => handleEmail(e.target.value)}
        />

        <FormSelect
          required
          name="razon"
          onChange={(e) => handleChange(e.target.value, e?.target.name)}
        >
          <option disabled   defaultValue={'DEFAULT'}  hidden>
            Razón
          </option>
          {selectData.map((el) => {
            return (
              <option key={el.id} value={el.value}>
                {el.name}
              </option>
            );
          })}
        </FormSelect>

        <FormTextArea
          placeholder="Descripción"
          required
          name="description"
          onChange={(e) => handleChange(e.target.value, e?.target.name)}
        />

        <CheckSection>
          <Checkbox type="checkbox" />
          <TextWrapper color="#FFFFFF" size="10px" margin="0px 0px 0px 15px">
            Acepto las{" "}
            <FormLink href={externalLink} target="_blank">
              condiciones legales
            </FormLink>
          </TextWrapper>
        </CheckSection>

        <ButtonWrapper>
          <Button type="button" value="Enviar" onClick={(e) => handleSend(e)} />
        </ButtonWrapper>
      </FormWrapper>
    </FormSection>
  );
};

export default Form;
