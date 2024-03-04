import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
// const transition = `150ms linear`;


export const Container = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid var(--text-color-grey);
`;

export const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100px;
`;

export const QuantityDiv = styled.div` 
  display: flex;
`;

export const PriceOld = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-grey); 
  text-decoration: line-through;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color-primary-black); 
`;

export const Input = styled.input` 
  display: flex; 
  width: 35px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  color: var(--text-color-primary-black);
  border: solid 1px var(--text-color-grey);
`;

export const Div = styled.div` 
  color: var(--text-color-primary-black); 
  width: 30px;
  height: 30px;
  border: solid 1px var(--text-color-grey);
  font-size: 20px;
  text-align: center;
  transition: font-size ${transition}, font-weight ${transition};
  
  &:hover,
  &:active,
  &:focus {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const ButtonDiv = styled.div` 
  width: 250px;
  padding: 10px 16px;
  color: var(--text-color-white); 
  border-radius: 5px;
  border: solid 1px var(--bg-second-green);
  text-align: center;
  font-size: 20px;
  background-color: var(--bg-second-green);
  transition: background-color ${transition}, color ${transition};
  
  &.isOrder {
    border-color: var(--bg-second-orange);
    background-color: var(--bg-second-orange);
  }
  
  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    color: var(--text-second-green);
  }
  
  &.isOrder:hover {
    background-color: transparent;
    color: var(--text-second-orange);
  }
`;

export const Name = styled.p`
  color: var(--text-color-blue);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  overflow: hidden;
  whiteSpace: wrap;
  textOverflow: ellipsis;

  &:hover,
  &:active,
  &:focus {    
    color: var( --text-color-active-blue);
  }
`;

export const Memo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  whiteSpace: wrap;
  textOverflow: ellipsis;
`;

export const Ul = styled.ul`
  display: flex;
  margin-bottom: 4px;
  width: 274px;
  align-items: center;
  gap: 6px;
`;

export const Li = styled.li`
  height: 18px;
  padding-right: 6px;
  color: var(--text-color-secondary-black);
  font-size: 12px;
  line-height: 1.5;
  border-right: 1px solid var(--text-color-secondary-black);

  &:last-child {
    border-right: none;
    padding: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: var(--text-color-blue);
  color: #FFF;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  border-radius: 12px;
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-active-button-color);
  }
`;

export const OrderBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  margin: 0;
  padding: 0;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  transition: transform ${transition};

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.2);
  }
`;
