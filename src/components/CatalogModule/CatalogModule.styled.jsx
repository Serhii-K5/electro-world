import styled from 'styled-components';

// import { NavLink } from "react-router-dom";
// import BgImg from "assets/images/auto/cars-rent.jpg";

// const transition = `250ms linear`;

// export const Ul = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   padding: 16px 24px;
//   color: var(--text-color-blue);
  
//   gap: 30px;
//   font-size: 30px;
//   // text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
//   // background-color: rgba(0, 0, 0, 0.5);
// `;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 16px 24px;
`;

// export const Div = styled.div`
//   position: relative;
//   padding: 0 16px;
//   width: 90%;
//   background: var(--text-color-white);
//   overflow: hidden;
  
//   &:before {
//     content: ' ';
//     display: block;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 2;
//     opacity: 0.1;
//     background-image: url(${BgImg});
//     background-repeat: no-repeat;
//     background-position: 50% 0;
//     background-size: cover;
//   };
// `;

// export const H2 = styled.h2`
//   text-align: center;
//   font-size: 50px;
// `;

// export const Section = styled.section`
//   margin-top: 50px;
//   margin-bottom: 30px;
//   position: relative;
//   z-index: 3;
// `;

// export const Img = styled.img`
//   width: 300px;
// `;

// export const Aside = styled.aside`
//   padding-left: 0.5rem;
//   margin-left: 0.5rem;
//   float: right;
//   box-shadow: inset 5px 0 5px -5px #29627e;
//   font-style: italic;
//   color: #29627e;

//   & > p {
//     margin: 0.5rem;
//   }
// `

// export const Li = styled.li`
//   // transition: color 1250ms linear, font-weight 1250ms linear;
//   // transition: font-weight, font-size 2250ms linear, font-size 3250ms linear;
//   // transition: font-weight, font-size, color 2250ms linear;
//   // transition: color 2250ms linear;
//   // transition: font-size 3250ms linear;
//   // transition: transform 3250ms linear;
//   transition: font-size 4s 1s;

//   :hover {
//     color: var(--text-color-active-blue);
//     // font-size: bold; 
//     transform: scale(1.5);
//     // font-weight: bold;
//     font-size: 20px;
    
//   }
//   :active {
//     color: var(--text-color-active-blue);
//     // font-size: bold; 
//     font-weight: bold;
//     // scale(1.5);
//   }
  
// `
// export const NavContainer = styled.nav`
//   display: flex;
//   margin: 0;  
//   align-items: flex-start;
//   gap: 15px;
//   flex-direction: column;
// `;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
  transition: background-color ${transition};

  &.active,
  &:active,
  &:focus,
  &:hover {
    color: var(--text-color-active-blue);
  }
`;

// export const Button = styled.button`
//   border: none;
//   background-color: transparent;
//   color: #000;
//   position: relative;
//   font-size: 36px;
//   font-weight: 700;
//   text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
//   transition: background-color ${transition};

//   &:active,
//   &:focus,
//   &:hover {
//     color: var(--text-color-active-blue);
//   }
// `;

