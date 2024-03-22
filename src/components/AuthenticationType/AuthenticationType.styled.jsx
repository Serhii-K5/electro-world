import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const Ul = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Li = styled.li`
  padding: 10px 10px;
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--active-blue);
  }
`;
