import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  max-width: 1440px;
  // min-height: 87vh;

  // background-color: #f6f8fd;
  // box-shadow: 0 0 0.75rem;
`;

export const NavLinkStyle = styled(NavLink)`
  display: block;
  padding: 16px 0;
`;