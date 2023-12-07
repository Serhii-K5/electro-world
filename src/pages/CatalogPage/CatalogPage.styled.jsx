import styled from 'styled-components';

const transition = `250ms linear`;

export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
  padding-bottom: 30px;
`;

// export const Button = styled.button`
//   // display: none;
//   margin: 0 auto;
//   width: 270px;
//   height: 50px;
//   align-items: center;
//   justify-content: center;
//   background-color: var(--text-color-blue);
//   color: #FFF;
//   font-family: inherit;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1.43;
//   border: none;
//   border-radius: 12px;
//   // transition: background-color 250ms linear;
//   transition: background-color ${transition};
// `;

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
  transition: background-color ${transition};

  &:active,
  &:focus,
  &:hover {
    background-color: var(--bg-active-button-color);
  }
`;

