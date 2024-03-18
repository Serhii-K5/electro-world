import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const UlPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivShift = styled.div`
  position: relative;
  display: flex;
  width: 30px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const LiPagination = styled.li`
  cursor: pointer;
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--active-blue);
  }

  &.active {
    background-color: var(--second-green);
  }
`;

export const DivPage = styled.div`
  display: flex;
  width: 30px;
  height: 25px;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
