import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
// const transition = `250ms linear`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  max-width: 1440px;
  min-height: 87vh;

  // background-color: #f6f8fd;
  // box-shadow: 0 0 0.75rem;
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  padding-left: 25px;
  max-width: 1440px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
  padding-bottom: 30px;
`;

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

export const BtnDiv = styled.div`
  display: flex;
  margin: 0 auto 16px;
  width: 180px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-button-color);
  border-radius: 5px;
  color: var(--bg-primary);
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-active-button-color);
  }
`;