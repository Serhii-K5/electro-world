import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

// import BgLogoImg from "assets/images/logo.png";

// export const BgLogo = styled.div`
//   position: relative;
//   top: 8px;
//   width: 130px;
//   background-image: url(${BgLogoImg});
//   background-repeat: no-repeat;
//   // background-position: 50% 0;
//   background-size: 100%;
// `;

// const transition = `250ms linear`;

export const Div = styled.div`
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.5);
  background: linear-gradient(to top, var(--bg-primary-green), var(--bg-second-green), var(--bg-second-green), var(--bg-primary-green)); 
`;

export const Header = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 7px 16px;
  gap: 20px;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
`;

export const BgLogo = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  border: 5px double orangered;
  padding: 8px 16px;
  border-radius: 50%;
`;

export const TextLogo = styled.p`
  font-size: 20px;
  text-shadow: 1px 1px 0px rgba(255,255,255,20);
  color: #d96040;
`;

// export const Button = styled.button`
//   position: absolute;
//   top: 7px;
//   left: 8px;
//   padding: 0;
//   width: 27px;
//   height: 27px;
//   border: none;
//   background-color: transparent;
// `;

// export const Input = styled.input`
//   padding: 8px 10px 8px 43px;
//   width: 100%;
//   border-radius: 5px;
//   font-size: 20px;
//   border: none;
// `;


export const DivNav = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 30px;
  justify-content: center;
`;

const ConstNavLinkStyle = `
  color: var(--text-color-primary-black);
  position: relative;
  font-size: 24px;
  font-weight: 700;  
  text-shadow: 1px 1px 0px rgba(255,255,255,20);
  transition: color ${transition};
  
  &:hover,
  &.active,
  &:active,
  &:focus {
    color: var(--text-color-active-blue);
  };
`

export const NavLinkStyle = styled(NavLink)`
  ${ConstNavLinkStyle};
`;

export const Span = styled.span`
  ${ConstNavLinkStyle};
`;

export const LoginBtn = styled.button`
  margin-left: auto; 
  background-color: transparent;
  border: none;
  font-size: larger;
  font-weight: 700;
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--text-color-active-blue);
  };
`;
