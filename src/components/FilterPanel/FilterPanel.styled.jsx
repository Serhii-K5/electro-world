import styled from 'styled-components';
import {transition} from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

const transitionShift = `550ms linear`;

export const LiBlock = styled.li`
  border-top: 1px solid var(--primary-grey);
  width: 300px;
`;

export const Div = styled.div`
  display: flex;
  padding: 16px;
  cursor: pointer;
  transition: background-color ${transition};
  &:hover {
    background-color: #F5F5F5;
  }
`;

export const Strong = styled.strong`
  color: var(--primary-blue);
  padding-left: 10px;
`;

export const Ul = styled.ul`
  padding: 0 16px;
  overflow: hidden;
  transition: max-height ${transitionShift};
`;

export const Li = styled.li`
  padding: 5px 0;
  heigth: 1.4rem;
`;

export const Span = styled.span`
  padding-left: 10px;
  color: var(--second-grey);
`;
