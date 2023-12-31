import styled from "styled-components";
import { transition } from "components/ConstComponentsStyle/ConstComponentsStyle.styled";
import { SHIFT_RANGE } from "constants/constants";

export const Form = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 7px;
  border-radius: 5px;
  border-color: var(--bg-color-grey)
`;

export const BtnDiv = styled.div`
  display: flex;
  margin: 10px auto 0;
  width: 80px;
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

export const RangeContainer = styled.div`
  position: relative;
  padding: ${SHIFT_RANGE}px;
`;

export const RangeBgDiv = styled.div`
  height: 4px;
  border: none;
  background-color: var(--bg-color-grey);
`;

export const RangeActiveDiv = styled.div`
  position: absolute;
  // width: inhiret;
  height: 4px;
  top: ${SHIFT_RANGE}px;
  background-color: var(--bg-button-color);
  // transition: width ${transition};
`;

export const RangeLineEdgesDiv = styled.div`
  position: absolute;
  width: ${SHIFT_RANGE}px;
  height: ${SHIFT_RANGE}px;
  top: -9px;
  background-color: var(--bg-primary);
  border-radius: 50%;
  border: 2px solid var(--bg-button-color);
  box-shadow: 0 0 5px var(--bg-button-color);
  transition: background-color ${transition}, box-shadow ${transition};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-second);
    box-shadow: none;
  }
`;

