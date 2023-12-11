import styled from 'styled-components';

const transition = `250ms linear`;

export const Container = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: 1440px;
  cursor: pointer;
`;

export const DivH2 = styled.div`
  padding: 10px 0;
  text-align: center;
  background-color: #80808021;
`;

export const DivBtn = styled.div`
  margin: 0;
  margin-left: auto;
  width: 250px;
  border: 1px solid var(--bg-button-color);
  text-align: center;
  font-size: 20px;
  padding: 10px 16px;
  color: white;
  background-color: var(--bg-button-color);
  border-radius: 5px;
  transition: background-color ${transition}, color ${transition};
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    background-color: var(--bg-primary);
    color: var(--text-color-active-blue);
  }
`;

export const H3 = styled.h3` 
  color: #ba052f;
  font-size: 48px;
  margin-bottom: 36px;
`;

export const H4 = styled.h4`
  color: #000;
  font-size: 40px;
`;

export const DivCheckout = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
`

export const DivCheckoutBtn = styled.div`
  margin: 0;
  margin-left: auto;
  width: 250px;
  border: 1px solid var(--text-second-green);
  text-align: center;
  font-size: 20px;
  padding: 10px 16px;
  color: white;
  background-color: var(--bg-second-green);
  border-radius: 5px;
  transition: background-color ${transition}, color ${transition};
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    background-color: var(--bg-primary);
    color: var(--text-second-green);
  }
`;
