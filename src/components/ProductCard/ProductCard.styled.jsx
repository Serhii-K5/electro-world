import styled from "styled-components";

const transition = `150ms linear`;

export const Container = styled.div`
  position: relative;
  display: flex;
  // padding: 1px;
  // max-width: 420px;
  width: 430px;
  height: 260px;
  flex-direction: column;
  gap: 10px; 
  // border: solid 1px var(--text-color-grey);
  cursor: pointer;  

  // overflow: hidden;
  border: 1px solid var(--text-color-grey);

  // &:hover {
  //   top: 45px;
  //   right: 63px;
  //   // overflow: auto;
  //   z-index: 50;
  //   width: 550px;
  //   height: 350px;
  // }
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
  // padding: 10px;
  align-items: center;
  justify-content: center;
  // width: 100%;
  width: 45px;
  height: 45px;
  // object-fit: cover;
  border-radius: 50%;
  border: 1px solid grey;
  transition: border-color ${transition}, fill ${transition};

  &:hover {
    border-color: var(--bg-second-green);
    fill: var(--bg-second-green);
  }
`;

export const DivHov = styled.div`
  position: absolute;
  padding: 15px;
  right: 0;
  background-color: var(--bg-primary);
  // box-shadow: 0px 5px 5px gray;
  transition: width ${transition}, height ${transition}, filter ${transition};

  overflow: hidden;
  width: 426px;
  height: 256px;

  &:hover {
    width: 555px;
    height: 350px;
    z-index: 100;
    filter: drop-shadow(0 0 0.75rem gray);
   }
`;

// export const ImgAside = styled.img`
//   margin: 0 auto;  
//   // margin-top: 20px;
//   // justify-content: center;
//   // text-align: center;
//   // width: 100%;
//   // width: 25px;
//   // height: 25px;
//   object-fit: cover;
//   // fill: grey;
//   fill: red;
//   // stroke: red;
//   fill: inherit;
//   // all: inherit;
  
//   &:hover {
//     fill: green;  
//   }  
// `;

export const OptionDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 0 10px;
  justify-content: flex-end;  
  text-align: end;
`;

export const Img = styled.img`
  margin-bottom: 14px;
  // width: 100%;
  width: 140px;
  height: 140px;
  // object-fit: cover;
`;

export const OptionContainer = styled.div`
  // display: flex;
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
  // color: var(--text-color-primary-black);
  border: solid 1px var(--text-color-grey);
`;

export const QuantityDiv = styled.div` 
  display: flex;
  margin: 20px;
  justify-content: flex-end;
  // overflow: visible;
  // color: var(--text-color-primary-black); 
  // width: 30px;
  // height: 30px;
  // border: solid 1px black;
  // text-align: center;
  // font-size: 20px;

  // &:hover {
  //   // overflow: visible;
  // }
`;

export const Div = styled.div` 
  // display: inline;
  // display: flex;
  color: var(--text-color-primary-black); 
  width: 30px;
  height: 30px;
  border: solid 1px var(--text-color-grey);
  // text-align: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    font-size: 22px;
    font-weight: bold;
    // transform: scale(1.2);
  }


`;

export const ButtonDiv = styled.div` 
  // display: inline;
  margin-top: 15px;
  padding: 10px 16px;
  color: var(--text-color-white); 
  // width: 30px;
  // height: 30px;
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
  
  &:hover {
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

  &:hover {    
    color: var( --text-color-active-blue);
  }
`;

export const Memo = styled.p`
  // color: var(--bg-second-green);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  whiteSpace: wrap;
  textOverflow: ellipsis;
`;

// export const TitleContainer = styled.div`
//   display: flex;
//   margin-bottom: 8px;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const Title = styled.p`
//   color: var(--text-color-primary-black);
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 1.5;
// `;

// export const Span = styled.span`
//   color: var(--text-color-blue);
//   margin-left: 4px;
// `;

// export const Year = styled.span`
//   margin-left: 4px;
// `;

// export const RentalPrice = styled.p`
//   color: var(--text-color-primary-black);
//   font-size: 16px;
//   line-height: 1.5;
//   font-weight: 500;
// `;

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

  &:hover {
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

  &:hover {
    transform: scale(1.2);
  }
`;
