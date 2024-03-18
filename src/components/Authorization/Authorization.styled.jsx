import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--active-blue);
  };
`;

export const Img = styled.img`
  width: 35px;
`;