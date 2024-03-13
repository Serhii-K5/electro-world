import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const Form = styled.form`
  padding-top: 16px;
`;

export const Label = styled.label`
  font-size: 1.15rem;
  min-width: 50px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 1.15rem;
  min-width: 50%;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1.15rem;
  width: 100%;
  height: 10vh;
  border-radius: 5px;
`;

export const Btn = styled.button`
  margin: 20px 30% 10px;
  padding: 10px;
  font-size: 1.15rem;
  border: none;
  border-radius: 5px;
  width: 40%;
  background-color: var(--bg-button-color);
  color: var(--bg-primary);
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-active-button-color);
  }
`;
