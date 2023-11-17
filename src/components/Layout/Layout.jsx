import { Outlet } from "react-router-dom";
import {
  BgLogo,
  TextLogo,
  Header,
  NavContainer,
  NavLinkStyle,
  Div,
} from "./Layout.styled";

import AdressBar from "../AdressBar/AdressBar";

// import logo from "../../assets/images/logo.png";

export default function Layout() {
  
  return (
    <>
      <Div>
        <Header>
          <BgLogo>
            <TextLogo><b> Electro world </b></TextLogo>
          </BgLogo>
          {/* <img src={logo} alt="Logo company" style={{width: "120px", boxShadow: "1px 1px 0px rgba(255,255,255)"}} /> */}
          <NavContainer>
            <NavLinkStyle to="/" >
                Home
            </NavLinkStyle>
            <NavLinkStyle to="/catalog">
              Catalog
            </NavLinkStyle>
            <NavLinkStyle to="/orders">Orders</NavLinkStyle>
          </NavContainer>
          <AdressBar />
        </Header>
      </Div>
      
      <div>
        <Outlet />
      </div>
    </>    
  );
}
