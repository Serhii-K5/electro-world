import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Ul = styled.ul `
  // margin: 0 auto;
  padding: 5px 10px;
  // max-width: 1440px;
  text-align: right;
  font-size: 16px;
`

export const Li = styled.li `
  display: inline-block;
  padding: 5px;
  border: 1px solid var(--bg-button-color);
  border-radius: 5px;
  color: var(--text-color-primary-black);
  transition: background-color ${transition}, border-color ${transition}, color ${transition};

  &:not(:first-child) {
    margin-left: 3px;
  };

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-active-button-color);
    border-color: var(--bg-active-button-color);
    color: var(--text-color-white);
  };
`