import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
import FILTER_PANEL_WIDTH from 'pages';
// const transition = `750ms linear`;

export const Container = styled.div`
  position: relative;
  display: flex;
  // width: 374px;
  // height: 260px;
  // max-width: 1000px;
  // min-width: calc(100vw - 276px);
  width: calc(100vw - (FILTER_PANEL_WIDTH + px));
  // heigth: 100px;
  // heigth: 190px;
  // min-heigth: 190px;
  // max-heigth: 100px;
  // flex-direction: column;
  gap: 10px;
  cursor: pointer;
  border: 1px solid var(--text-color-grey);
`;

export const DivHov = styled.div`
  position: absolute;
  right: 0;
  // padding: 15px;
  padding: 10px;
  right: 0;
  background-color: var(--bg-primary);
  transition: width ${transition}, height ${transition}, filter ${transition};

  overflow: hidden;
  // width: 426px;
  // width: 372px;
  // min-width: calc(100vw - 276px);
  width: calc(100vw - 276px);
  // height: 100px;
  height: 190px;

  &:hover,
  &:active,
  &:focus {
    // width: 555px;
    // left: -5vw;
    // width: 90vw;
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
  // object-fit: cover;
  border-radius: 50%;
  border: 1px solid grey;
  transition: border-color ${transition}, fill ${transition};

  &:hover,
  &:active,
  &:focus {
    border-color: var(--bg-second-green);
    fill: var(--bg-second-green);
  }
`;

export const ImgDiv1 = styled.div`
  width: 25px;
  height: 25px;
`;

export const Aside = styled.aside`
  // padding-left: 0.5rem;
  // margin-left: 0.5rem;
  float: left;
  text-align: center;
  // box-shadow: inset 5px 0 5px -5px #29627e;
  // font-style: italic;
  // color: #29627e;

  // & > p {
  //   margin: 0.5rem;
  // }
`

export const OptionDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  // padding: 0 10px;
  justify-content: flex-end;  
  text-align: end;
`;

export const Img = styled.img`
  // margin-bottom: 14px;
  width: 155px;
  height: 155px;
`;

export const OptionContainer = styled.div`
  display: block;
  margin-left: 10px;
  min-width: 100px;
`;

// export const PriceOld = styled.p`
export const PriceOld = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-grey); 
  text-decoration: line-through;
`;

export const PriceOld1 = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-grey);
`;

// export const Price = styled.p`
export const Price = styled.span`
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
  border: solid 1px var(--text-color-grey);
`;

export const QuantityDiv = styled.div` 
  display: flex;
  // margin: 20px;
  width: 100px;
  justify-content: flex-end;
`;

export const Div = styled.div` 
  color: var(--text-color-primary-black); 
  width: 30px;
  height: 30px;
  border: solid 1px var(--text-color-grey);
  justify-content: center;
  font-size: 20px;
  transition: font-size ${transition}, font-weight ${transition};

  &:hover,
  &:active,
  &:focus {
    font-size: 22px;
    font-weight: bold;
  };
`;

export const ButtonDiv = styled.div` 
  display: inline;
  // margin-top: 15px;
  padding: 10px 16px;
  // heigth: 30px;
  width: fit-content;
  height: fit-content;
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
  };
  
  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    color: var(--text-second-green);
  };
  
  &.isOrder:hover {
    background-color: transparent;
    color: var(--text-second-orange);
  };
`;

export const Name = styled.p`
  color: var(--text-color-blue);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  overflow: hidden;
  whiteSpace: wrap;
  textOverflow: ellipsis;
  transition: color ${transition};
  
  &:hover,
  &:active,
  &:focus {    
    color: var( --text-color-active-blue);
  };
`;

export const Memo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;
