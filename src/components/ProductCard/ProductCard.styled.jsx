import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const Container = styled.div`
  position: relative;
  display: flex;
  width: 374px;
  height: 260px;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  border: 1px solid var(--primary-grey);
`;

export const DivHov = styled.div`
position: absolute;
padding: 10px;
right: 0;
background-color: var(--primary-white);
transition: width ${transition}, height ${transition}, filter ${transition};

overflow: hidden;
width: 371px;
height: 256px;

&:hover,
&:active,
&:focus {
  width: 555px;
  height: 350px;
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

export const ImgContainer = styled.div`
  width: 25px;
  height: 25px;
`;

export const Aside = styled.aside`
  padding-left: 0.5rem;
  margin-left: 0.5rem;
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
  margin-bottom: 14px;
  width: 135px;
  height: 135px;
`;

export const OptionContainer = styled.div`
  display: block;
  margin-left: 10px;
  min-width: 245px;
`;

export const PriceOld = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-grey);
  text-decoration: line-through;
`;

export const Price = styled.p`
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
  margin: 20px;
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
  margin-top: 15px;
  padding: 10px 16px;
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
