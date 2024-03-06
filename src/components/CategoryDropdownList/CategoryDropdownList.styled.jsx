import styled from 'styled-components';
import { transition } from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

export const Ul = styled.ul`
  border: 1px solid var(--text-color-grey);
  // box-shadow: 0 0 0.75rem;
`;

export const Li = styled.li`
  padding: 10px 5px;
  border-bottom: 1px solid var(--bg-overlay);
  // transition: background-color ${transition}, color ${transition};
  transition: background-color ${transition};
  // color: black;

  &.parent {
    border-bottom: 0px;
    // font-size: 16px;
    padding: 0px 5px;
  }

  &:hover,
  &:active,
  &:focus {
    // color: var(--text-color-active-blue);
    background-color: var(--bg-color-grey);
  }
`;
  
export const Span = styled.span`
  color: inherit;
  // color: black;
  // transition: color ${transition};

  // &:hover,
  // &:active,
  // &:focus {
  //   // box-shatdown: ;
  //   color: var(--text-color-active-blue);
  // }
`;  
  