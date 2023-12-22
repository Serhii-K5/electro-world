import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

// const transition = `250ms linear`;

export const DivNav = styled.div`
  display: flex;
  margin: auto;
  padding: 10px 10px 0;
  max-width: 1440px;
  column-gap: 10px;
  align-items: center;
  // box-shadow: 0 0 0.75rem;
`;

export const DivCatalog = styled.div`
display: flex;
align-items: center;
cursor: pointer;
// padding-top: 10px;
// justify-content: center;
// gap: 5px;
// margin-right: auto;
`;

export const Sup = styled.sup`
font-size: 22px;
font-weight: 700;
`;

export const UlCatalog = styled.ul`
  display: flex;
  // max-width: 20%;
  position: absolute;
  z-index: 100;
  background-color: var(--bg-primary);
  // border: 1px solid var(--text-color-grey);
  // box-shadow: 3px 3px 3px var(--text-color-grey);
  box-shadow: 0px 100vw 0px 100vw var(--bg-overlay);
  // filter: drop-shadow(0 0 0.75rem gray);
`;

export const Img = styled.img`
  margin: 0;
  position: relative;
  top: -3px;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 6px;
  align-items: center;
  column-gap: 10px;
  justify-content: center;
  width: 80%;
`;

const ConstNavLinkStyle = `
  color: var(--text-color-primary-black);
  position: relative;
  font-size: 20px;
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
