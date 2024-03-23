import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const Div = styled.div`
  text-align: center;
  align-items: flex-end;
  // transition: font-size 250ms linear;
  border: 1px solid grey;

  // &:hover {
  //   font-size: 18px;
  // }
`;

export const Img = styled.img`
  width: 150px;
  heigth: 150px;
`;

export const P = styled.p`
  transition: color ${transition};
  
  &:hover,
  &:active,
  &:focus {
    color: var(--active-blue);
  }
`;