import styled from "styled-components";
import { EmailInterface } from "../../interfaces";


export const FormSection = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 70%;
  @media screen and (max-width: 967px) {
    width: 50%;
    margin-top: 30px;
  }
  @media screen and (max-width: 745px) {
    width: 90%;
  }
`;

export const FormInput = styled.input<EmailInterface>`
  background-color: transparent;
  border: none;
  height: 50px;
  color: white;
  margin-bottom: 46px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #ffffff;
    border-color: ${({ error }) => (error ? "#FF7777" : "#FFFFFF")};
    color: ${({ error }) => (error ? "#FF7777" : "#FFFFFF")};
  }
`;
export const Checkbox = styled.input`
  cursor: pointer;
  //background-color: #fff;
  width: 18px;
  height: 18px;
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  }
`;

export const Button = styled.input`
  color: white;
  background-color: transparent;
  border: none;
  align-self: flex-end;
`;

export const FormSelect = styled.select`
  background-color: transparent;
  border: none;
  height: 50px;
  color: #6d6d6d;
  margin-bottom: 46px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #ffffff;
  }
`;

export const FormTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  height: 50px;
  color: white;
  margin-bottom: 46px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #ffffff;
  }
`;

export const CheckSection = styled.div`
  display: flex;
  align-items: center;
`;

export const FormLink = styled.a`
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  margin-top: 50px;
`;
