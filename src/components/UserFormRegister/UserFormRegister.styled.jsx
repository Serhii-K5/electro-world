import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const Form = styled.form`
  padding-top: 16px;
`;

export const Label = styled.label`
  font-size: 1.15rem;
  min-width: 50px;
`;

const inputs = `
  font-size: 1.15rem;
  border-radius: 5px;

  &.valid {
    border: solid 2px green;
  };

  &.invalid {
    border: solid 2px red;
  };
`;

export const Input = styled.input`
  min-width: 55%;
  margin: 10px 0;
  padding: 10px;

  ${inputs};
`;

export const InputPassword = styled.input`
  width: 51%;
  margin: 10px 0;
  padding: 10px 35px 10px 10px;
  
  ${inputs};
`;

export const Textarea = styled.textarea`
  padding: 10px;
  // font-size: 1.15rem;
  width: 100%;
  height: 10vh;
  
  ${inputs};
`;

export const Btn = styled.button`
  margin: 20px 30% 10px;
  padding: 10px;
  font-size: 1.15rem;
  border: none;
  border-radius: 5px;
  width: 40%;
  background-color: var(--primary-blue);
  color: var(--primary-white);
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--active-blue);
  }
`;

export const RemindPassword = styled.div`
  margin: 10px 0;
  text-align: center;
`;
