import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: auto;
  padding: 16px 24px;
  color: var(----text-color-primary-black);
  
  // gap: 30px;
  font-size: 19px;
  // text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
  text-shadow: 1px 1px 0px rgba(255,255,255,20);

  // background-color: rgba(0, 0, 0, 0.5);
`;

export const A = styled.a`
  // color: inherit;  
  // color: var(--text-color-blue);
  // text-align: center;
  // text-shadow: 1px 1px 0px rgba(0,0,0,0.5);

  // display: flex;
  // gap: 8px;
  // align-items: center;

  // color: rgba(0,0,0,0.6);
  color: var(----text-color-primary-black);
  text-shadow: 1px 1px 0px rgba(255,255,255,20);

  &:hover {
    color: var(--text-color-active-blue);
  }

  &.active {
    color: var(--text-color-active-blue);
  }
`;

