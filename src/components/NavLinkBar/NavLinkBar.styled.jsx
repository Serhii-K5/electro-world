import styled from "styled-components";
import { NavLink } from "react-router-dom";

const transition = `250ms linear`;

export const DivNav = styled.div`
  display: flex;
  padding: 10px 10px 0;
  justify-content: center;
`;

export const DivCatalog = styled.div`
  // display: flex;
  // padding-top: 10px;
  // justify-content: center;
  // gap: 5px;
  margin-right: auto;
`;

export const Sup = styled.sup`
  font-size: 22px;
  font-weight: 700;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 10px;
  justify-content: center;
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
