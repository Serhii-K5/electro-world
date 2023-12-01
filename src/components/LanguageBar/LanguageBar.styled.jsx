import styled from "styled-components";

export const Div = styled.div `
  display: inline;
  padding: 5px;
  border: 1px solid var(--text-color-grey);
  font-size: 16px;  
`

export const Ul = styled.ul `
  margin: 0 auto;
  padding: 5px;
  max-width: 1440px;
  text-align: right;
  font-size: 16px;
`

export const Li = styled.li `
  display: inline-block;
  padding: 5px;
  // background-color: var(--bg-button-color);
  border: 1px solid var(--bg-button-color);
  border-radius: 5px;
  color: var(--text-color-white);

  &:hover {
    background-color: var(--bg-active-button-color);
    border-color: var(--bg-active-button-color);
  }
`