import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Span = styled.span`
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--bg-active-button-color);
  }
`;
