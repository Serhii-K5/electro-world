import styled from "styled-components";

export const Div = styled.div`
  // display: flex;
  // position: relative;
  
  // width: 25vw;
  text-align: center;
  align-items: flex-end;
  // transition:: scale 1250ms linear;
  transition: font-size 250ms linear;
  border: 1px solid grey;

  &:hover {
    // scale: 1.05;
    font-size: 18px;
    // fill: red;
  }
`;