import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const Span = styled.span`
  transform: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--active-blue);
  }
`;
