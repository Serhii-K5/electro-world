import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  max-width: 1440px;
  // min-height: 87vh;

  // background-color: #f6f8fd;
  // box-shadow: 0 0 0.75rem;
`;

// export const NavLinkStyle = styled(NavLink)`
//   display: block;
//   padding: 16px 0;
// `;

const ConstNavLinkStyle = `
  display: block;
  color: var(--input-background-color);
  // position: relative;
  // padding: 16px 0;
  
  font-size: 20px;
  // font-weight: 700;  
  // text-shadow: 1px 1px 0px rgba(255,255,255,20);
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
    color: var(--text-color-active-blue);
  };
`;



