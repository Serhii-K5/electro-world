import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Aside = styled.aside`
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;

  & > p {
    margin: 0.5rem;
  }
`

export const Li = styled.li`
  // transition: color 1250ms linear, font-weight 1250ms linear;
  // transition: font-weight, font-size 2250ms linear, font-size 3250ms linear;
  // transition: font-weight, font-size, color 2250ms linear;
  // transition: color 2250ms linear;
  // transition: font-size 3250ms linear;
  // transition: transform 3250ms linear;
  // transition: font-size 4s 1s;

  :hover {
    color: var(--text-color-active-blue);
    // font-size: bold; 
    // transform: scale(1.5);
    font-weight: bold;
    // font-size: 20px;
    
  }
  :active {
    color: var(--text-color-active-blue);
    // font-size: bold; 
    font-weight: bold;
    // scale(1.5);
  }
  
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

&:hover {
  color: var(--text-color-active-blue);
}

&.active {
  color: var(--text-color-active-blue);
}
`;
