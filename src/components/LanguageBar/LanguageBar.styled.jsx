import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Ul = styled.ul `
  padding: 5px 10px;
  text-align: right;
  font-size: 16px;
  cursor: pointer;
`

export const Li = styled.li`
  display: inline-block;
  padding: 5px;
  border: 1px solid var(--primary-blue);
  border-radius: 5px;
  color: var(--primary-black);
  transition: background-color ${transition}, border-color ${transition},
    color ${transition};

  &:not(:first-child) {
    margin-left: 3px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--active-blue);
    border-color: var(--active-blue);
    color: var(--primary-white);
  }
`;