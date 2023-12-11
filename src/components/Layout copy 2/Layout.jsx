import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  BgLogo,
  TextLogo,
  Header,
  NavContainer,
  NavLinkStyle,
  DivNav,
  Span,
  Div,
} from "./Layout.styled";

// import AdressBar from "../AdressBar/AdressBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// import { GiShoppingCart } from "react-icons/gi";

// import logo from "../../assets/images/logo.png";

import { useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
import { selectLanguages } from "redux/selectors";

import MessageModule from "components/MessageModule/MessageModule";
import {LanguageBar} from "components/LanguageBar/LanguageBar";
import AdressBar from 'components/AdressBar/AdressBar';
import lang from "assets/json/language.json";

// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { SiVodafone } from "react-icons/si";
// import { FaViber } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
// import { FcElectricity } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";

import ks from "assets/images/svg/kyivstar.svg";
import electricity from "assets/images/svg/electricity.svg";

export default function Layout() {
  const orderProducts = useSelector(selectOrders);  
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  // const handleClick = () => {    
  //   setIsModalShown(true);
  // };
  const st = {textAlign: "right",  padding: '5px',}
  
  return (
    <>
      <LanguageBar />

      <Div>
        <Header>
          <BgLogo>
            <TextLogo>
              <b> Electro world </b>
            </TextLogo>
          </BgLogo>
          <div style={{ position: 'relative' }}>
            <SlMagnifier
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                width: '25px',
                height: '25px',
              }}
            />
            <input
              type="text"
              style={{
                padding: '8px 10px 8px 43px',
                width: '100%',
                borderRadius: '5px',
                fontSize: '20px',
                border: 'none',
              }}
              placeholder={lang[languages].layout_find}
            />
          </div>
          <AdressBar/>
          <Link to="/orders">
            <ShoppingCart quantity={orderProducts.length} />
          </Link>
        </Header>
      </Div>
      <DivNav>
        {/* <div>
          <GiHamburgerMenu />
          <sup>Каталог товаров</sup>
        </div> */}
        <NavContainer>
          <NavLinkStyle to="/">
            {/* Home */}
            <sup>{lang[languages].layout_navLinkHome.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <img src={electricity} alt="electricity symbol" /> */}
          <NavLinkStyle to="/catalog">
            <sup>{lang[languages].layout_navLinkCatalog.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <img src={electricity} alt="electricity symbol" /> */}
          <NavLinkStyle to="/orders">
            <sup>{lang[languages].layout_navLinkOrders.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <img src={electricity} alt="electricity symbol" /> */}
          <NavLinkStyle to="/help">
            <sup>{lang[languages].layout_navLinkHelp.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <img src={electricity} alt="electricity symbol" /> */}
          <NavLinkStyle to="/about_us">
            <sup>{lang[languages].layout_navLinkAboutUs.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <img src={electricity} alt="electricity symbol" /> */}
          <NavLinkStyle to="/delivery">
            <sup>{lang[languages].layout_navLinkDelivery.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <img src={electricity} alt="electricity symbol" /> */}
          {/* Message */}
          <Span onClick={onOpenModal}>
            <sup>{lang[languages].layout_navLinkMessage.toUpperCase()}</sup>
          </Span>
        </NavContainer>
      </DivNav>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      <div>
        <Outlet />
      </div>
    </>
  );
}
