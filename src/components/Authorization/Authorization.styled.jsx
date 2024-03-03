import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
  color: var(--text-color-white);
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--text-color-active-blue:);
  };
`;

export const Img = styled.img`
  width: 35px;
`;