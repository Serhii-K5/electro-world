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
  fill: var(--primary-blue);
  background-color: var(--active-blue);
  border-radius: 50%;
  color: var(--primary-white);
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
  width: 160px;
  align-items: flex-end;
  transition: font-size 250ms linear;

  &:hover {
    font-size: 18px;
    fill: red;
  }
`;