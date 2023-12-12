import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

// const transition = `250ms linear`;

export const DivNav = styled.div`
  display: flex;
  padding: 10px 10px 0;
  column-gap: 10px;
  align-items: center;
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

export const Img = styled.img`
  margin: 0;
  position: relative;
  top: -3px;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
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
  color: var(--text-color-primary-black);
  position: relative;
  font-size: 20px;
  font-weight: 700;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 20);
  transition: color ${transition};
`;

export const Span = styled.span`
  ${ConstNavLinkStyle};
`;
