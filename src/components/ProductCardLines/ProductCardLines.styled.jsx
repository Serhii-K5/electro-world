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

export const ImgDiv = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid grey;
  transition: border-color ${transition}, fill ${transition};

  &:hover,
  &:active,
  &:focus {
    border-color: var(--second-green);
    fill: var(--second-green);
  }
`;

export const ImgDiv1 = styled.div`
  width: 25px;
  height: 25px;
`;

export const Aside = styled.aside`
  float: left;
  text-align: center;
`;

export const OptionDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  text-align: end;
`;

export const Img = styled.img`
  width: 155px;
  height: 155px;
`;

export const OptionContainer = styled.div`
  display: block;
  margin-left: 10px;
  min-width: 100px;
`;

export const PriceOld = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-grey);
  text-decoration: line-through;
`;

export const PriceOld1 = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-grey);
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-black);
`;

export const Input = styled.input`
  display: flex;
  width: 35px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  border: solid 1px var(--primary-grey);
`;

export const QuantityDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Div = styled.div`
  color: var(--primary-black);
  width: 30px;
  height: 30px;
  border: solid 1px var(--primary-grey);
  justify-content: center;
  font-size: 20px;
  transition: font-size ${transition}, font-weight ${transition};

  &:hover,
  &:active,
  &:focus {
    font-size: 22px;
    font-weight: bold;
  }
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

export const Name = styled.p`
  color: var(--primary-blue);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  overflow: hidden;
  whitespace: wrap;
  textoverflow: ellipsis;
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--active-blue);
  }
`;

export const Memo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;
