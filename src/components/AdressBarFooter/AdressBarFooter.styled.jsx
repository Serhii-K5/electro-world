import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const VodafoneBg = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background-color: var(--primary-white);
`;

export const Span = styled.span`
  color: var(--primary-white);
  font-size: 16px;
  width: 162px;
  transition: color ${transition};

  &.isScaleKs,
  &.isScaleVd {
    color: red;
  }
`;

