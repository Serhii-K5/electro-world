import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const VodafoneBg = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background-color: var(--bg-primary);
`;

export const Span = styled.span`
  // display: inline-flex;
  // border-radius: 50%;
  // background-color: var(--bg-primary);
  font-size: 16px;
  width: 162px;
  transition: font-size ${transition}, color ${transition};

  // &.isScaleKs,
  // &.isScaleVd {
  //   font-size: 17px;
  //   color: red;
  // }

  &#black {
    color: var(--text-color-primary-black);
    &.isScaleKs,
    &.isScaleVd {
      color: red;
    }
  };

  &#blue {
    color: var(--text-color-active-blue);
    // color: grey;
    &.isScaleKs,
    &.isScaleVd {
      color: red;
    }
  };


  `;

