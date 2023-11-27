import { Outlet } from "react-router-dom";
import {
  BgLogo,
  TextLogo,
  Header,
  NavContainer,
  NavLinkStyle,
  Div,
  // Quantity,
} from "./Layout.styled";

import AdressBar from "../AdressBar/AdressBar";
import ShoppingCart from "../../components/NumberPurchases/NumberPurchases";

// import { GiShoppingCart } from "react-icons/gi";

// import logo from "../../assets/images/logo.png";

import { useSelector } from "react-redux";
import { selectOrdersAll } from "redux/selectors";

export default function Layout() {
  const ordersAll = useSelector(selectOrdersAll);
  
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
          <ShoppingCart quantity={ordersAll} />
          {/* <div style={{ position: 'relative' }}>
            <GiShoppingCart style={{width: '60px', height: '60px', fill: "blue" }} />
            <Quantity>100</Quantity>
          </div> */}
        </Header>
      </Div>
      
      <div>
        <Outlet />
      </div>
    </>    
  );
}
