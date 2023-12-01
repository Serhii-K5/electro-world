import styled from 'styled-components';

export const DivPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivShift = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const DivPage = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  border: 2px solid #000;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: var(--bg-active-button-color);
  }

  &:focus {
    background-color: var(--bg-active-button-color);
  }

  &:hover {
    background-color: var(--bg-active-button-color);
  }
`;