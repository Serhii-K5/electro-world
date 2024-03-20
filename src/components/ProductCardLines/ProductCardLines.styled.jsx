import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
import { FILTER_PANEL_WIDTH } from 'constantValues/constants';


export const Container = styled.div`
  position: relative;
  display: flex;
  width: calc(100vw - ${FILTER_PANEL_WIDTH} + 70px);
  gap: 10px;
  cursor: pointer;
`;

export const DivHov = styled.div`
position: absolute;
  padding: 10px;
  right: 70px;
  background-color: var(--primary-white);
  transition: width ${transition}, height ${transition}, filter ${transition};

  overflow: hidden;
  width: calc(100vw - ${FILTER_PANEL_WIDTH});
  height: 165px;

  &:hover,
  &:active,
  &:focus {
    width: calc(100vw - 200px);
    height: 210px;
    z-index: 70;
    filter: drop-shadow(0 0 0.75rem gray);
  }
  `;

export const Aside = styled.aside`
  float: left;
  text-align: center;
`;

export const Img = styled.img`
  width: 155px;
  height: 155px;
`;

export const ContainerDiscription = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const DiscriptionDiv = styled.div`
  margin-right: auto;
  width: 45vw;
`;

export const ValuesDiv = styled.div`
  display: flex;
  gap: 16px;
  align-content: center;
  flex-wrap: wrap;
  width: 27vw;
  justify-content: center;
`;

export const СurrencyDiv = styled.div`
  width: 100px;
`;

export const PriceOldDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const PriceDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-black);
`;

export const PriceOld = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-grey);
  text-decoration: line-through;
`;

export const PriceOldСurrency = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-grey);
`;

export const QuantityDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonDiv = styled.div`
  padding: 10px 16px;
  width: 205px;
  height: fit-content;
  color: var(--primary-white);
  border-radius: 5px;
  border: solid 1px var(--second-green);
  text-align: center;
  font-size: 20px;
  background-color: var(--second-green);
  transition: background-color ${transition}, color ${transition};

  &.isOrder {
    border-color: var(--second-orange);
    background-color: var(--second-orange);
  }

  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    color: var(--second-green);
  }

  &.isOrder:hover {
    background-color: transparent;
    color: var(--third-orange);
  }
`;
