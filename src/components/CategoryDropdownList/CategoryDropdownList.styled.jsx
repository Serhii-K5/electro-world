import styled from 'styled-components';
import { transition } from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

export const Ul = styled.ul`
  border: 1px solid var(--primary-grey);
`;

export const Li = styled.li`
  padding: 10px 5px;
  border-bottom: 1px solid var(--second-black);
  transition: background-color ${transition};

  &.parent {
    border-bottom: 0px;
    padding: 0px 5px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--primary-grey);
  }
`;
  
export const Span = styled.span`
  color: inherit;
`;  
  