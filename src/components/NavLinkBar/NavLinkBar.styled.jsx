import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';


export const DivNav = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  max-width: 1440px;
  column-gap: 10px;
  align-items: center;
`;

export const DivCatalog = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TitleSpan = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const UlCatalog = styled.ul`
  display: flex;
  position: absolute;
  z-index: 100;
  background-color: var(--primary-white);
  box-shadow: 0px 100vw 0px 100vw var(--second-black);
`;

export const Li = styled.li`
  border: 1px solid grey;
`;

export const Img = styled.img`
  margin: 0;
  position: relative;
  top: 2px;
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
  color: var(--primary-black);
  font-size: 20px;
  font-weight: 700;
  // text-shadow: 1px 1px 0px var(--second-black);
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
