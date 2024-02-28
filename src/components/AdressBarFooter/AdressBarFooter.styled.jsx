import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const VodafoneBg = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background-color: var(--bg-primary);
`;

export const Span = styled.span`
  color: var(--text-color-white);
  font-size: 16px;
  width: 162px;
  // transition: font-size ${transition}, color ${transition};
  transition: color ${transition};

  &.isScaleKs,
  &.isScaleVd {
    // font-size: 17px;
    color: red;
  }
`;

