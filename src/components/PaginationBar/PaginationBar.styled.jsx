import styled from 'styled-components';

const transition = `250ms linear`;

export const DivPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivShift = styled.div`
  display: flex;
  width: 30px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const DivPage = styled.div`
  display: flex;
  // width: 50px;
  // height: 40px;
  width: 30px;
  height: 25px;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  transition: background-color ${transition};

  &.active {
    background-color: green;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-active-button-color);
  }
`;