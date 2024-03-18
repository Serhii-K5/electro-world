import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 16px;
  justify-content: center;
  row-gap: 10px;
  column-gap: 50px;
`;

export const DivBtn = styled.div`
  padding: 3px 16px;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  border: solid 3px #78a0ff;
  border-radius: 5px;
`;

export const Div2 = styled.div`
  background-color: transparent;
  box-shadow: 0px 4px 4px var(--third-black);
  background: linear-gradient(to top, var(--primary-green), var(--second-green), var(--second-green), var(--primary-green)); 
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
  // text-shadow: 1px 1px 0px rgba(255,255,255,20);
  text-shadow: 1px 1px 0px var(--third-white);
  color: #d96040;
`;


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
  color: var(--primary-black);
  position: relative;
  font-size: 24px;
  font-weight: 700;  
  // text-shadow: 1px 1px 0px rgba(255,255,255,20);
  text-shadow: 1px 1px 0px var(--third-white);
  transition: color ${transition};
  
  &:hover,
  &.active,
  &:active,
  &:focus {
    color: var(--active-blue);
  };
`;

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
    color: var(--active-blue);
  };
`;
