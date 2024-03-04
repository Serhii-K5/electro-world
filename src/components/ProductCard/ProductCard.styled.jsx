import styled from "styled-components";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

// const transition = `150ms linear`;

export const Container = styled.div`
  position: relative;
  display: flex;
  // width: 430px;
  width: 374px;
  height: 260px;
  flex-direction: column;
  gap: 10px; 
  cursor: pointer; 
  border: 1px solid var(--text-color-grey);
`;

export const Aside = styled.aside`
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: left;
  text-align: center;
  // box-shadow: inset 5px 0 5px -5px #29627e;
  // font-style: italic;
  // color: #29627e;

  // & > p {
  //   margin: 0.5rem;
  // }
`

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

export const DivHov = styled.div`
  position: absolute;
  // padding: 15px;
  padding: 10px;
  right: 0;
  background-color: var(--bg-primary);
  transition: width ${transition}, height ${transition}, filter ${transition};

  overflow: hidden;
  // width: 426px;
  width: 372px;
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

export const OptionDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  // padding: 0 10px;
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
  border: solid 1px var(--text-color-grey);
`;

export const QuantityDiv = styled.div` 
  display: flex;
  margin: 20px;
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
  margin-top: 15px;
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

// export const Ul = styled.ul`
//   display: flex;
//   margin-bottom: 4px;
//   width: 274px;
//   align-items: center;
//   gap: 6px;
// `;

// export const Li = styled.li`
//   height: 18px;
//   padding-right: 6px;
//   color: var(--text-color-secondary-black);
//   font-size: 12px;
//   line-height: 1.5;
//   border-right: 1px solid var(--text-color-secondary-black);

//   &:last-child {
//     border-right: none;
//     padding: 0;
//   }
// `;

// export const Button = styled.button`
//   display: flex;
//   width: 274px;
//   height: 44px;
//   align-items: center;
//   justify-content: center;
//   background-color: var(--text-color-blue);
//   color: #FFF;
//   font-family: inherit;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1.43;
//   border: none;
//   border-radius: 12px;
//   transition: background-color ${transition};

//   &:hover,
//   &:active,
//   &:focus {
//     background-color: var(--bg-active-button-color);
//   }
// `;

// export const OrderBtn = styled.button`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   display: flex;
//   margin: 0;
//   padding: 0;
//   width: 18px;
//   height: 18px;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   background: transparent;
//   transition: transform ${transition};

//   &:hover,
//   &:active,
//   &:focus {
//     transform: scale(1.2);
//   }
// `;
