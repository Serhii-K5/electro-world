import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

export const Aside = styled.aside`
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;

  & > p {
    margin: 0.5rem;
  };
`

export const Li = styled.li`  
  transition: color ${transition}, font-weight ${transition};

  &:hover,
  &:focus,
  &:active {
    color: var(--text-color-active-blue);
    font-weight: bold;
    // font-size: bold; 
    // transform: scale(1.5);
    // font-size: 20px;
    
  };
`
export const NavContainer = styled.nav`
  display: flex;
  margin: 0;  
  align-items: flex-start;
  gap: 15px;
  flex-direction: column;
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
  transition: color ${transition};

  &:hover,
  &:focus,
  &:active {
    color: var(--text-color-active-blue);
  };
`;
