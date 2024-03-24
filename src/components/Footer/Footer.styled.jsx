import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  max-width: 1440px;
`;

const ConstNavLinkStyle = `
  display: block;
  color: var(--input-background-color);  
  font-size: 18px;
  transition: color ${transition};
  
  &:hover,
  &.active,
  &:active,
  &:focus {
    color: var(--active-blue);
  };
`
export const NavLinkStyle = styled(NavLink)`
  ${ConstNavLinkStyle};
`;

export const Span = styled.span`
  ${ConstNavLinkStyle};
`;

export const Section = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1440px;  
  color: inherit;
  justify-content: space-around;
`;

export const P = styled.p`
  cursor: pointer;
  transition: color ${transition};

  &:hover,
  &:active,
  &:focus {
    color: var(--active-blue);
  };
`;



