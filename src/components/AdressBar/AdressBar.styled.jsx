import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const VodafoneBg = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background-color: var(--primary-white);
`;

export const Span = styled.span`
  font-size: 16px;
  width: 162px;
  transition: font-size ${transition}, color ${transition};

  &#black {
    color: var(--primary-black);

    &.isScaleKs,
    &.isScaleVd {
      color: red;
    }
  }

  &#blue {
    color: var(--active-blue);
    
    &.isScaleKs,
    &.isScaleVd {
      color: red;
    }
  }
`;

