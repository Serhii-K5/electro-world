import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


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
  border: 1px solid var(--primary-blue);
  text-align: center;
  font-size: 20px;
  padding: 10px 16px;
  color: white;
  background-color: var(--primary-blue);
  border-radius: 5px;
  transition: background-color ${transition}, color ${transition};
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    background-color: var(--primary-white);
    color: var(--active-blue);
  }
`;

export const H3 = styled.h3` 
  color: #BA052F;
  font-size: 48px;
  margin-bottom: 36px;
`;

export const H4 = styled.h4`
  color: var(--primary-black);
  font-size: 40px;
`;

export const DivCheckout = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: flex-end;
  column-gap: 30px;
`;

export const DivCheckoutBtn = styled.div`
  // margin: 0;
  // margin-left: auto;
  // margin-right: 0;
  // margin: 0 0 0 auto;
  width: 250px;
  border: 1px solid var(--second-green);
  text-align: center;
  font-size: 20px;
  padding: 10px 16px;
  color: var(--primary-white);
  background-color: var(--second-green);
  border-radius: 5px;
  transition: background-color ${transition}, color ${transition};
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    background-color: var(--primary-white);
    color: var(--second-green);
  }
`;
