import styled from "styled-components";

export const Quantity = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 25px;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  fill: var(--bg-button-color);
  background-color: var(--bg-active-button-color);
  border-radius: 50%;
  color: var(--text-color-white);
  border: 1px solid #ffffff75;

  font-size: 16px;
  font-weight: normal;
  text-shadow: none;  
`;

export const Div = styled.div`
  display: flex;
  position: relative;
  left: 0px;
  bottom: 0px;
  align-items: flex-end;
`