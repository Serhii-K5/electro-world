import { useState } from "react";
import { Outlet } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
  DivNav,
  DivCatalog,
  Sup,
  NavContainer,
  NavLinkStyle,
  Span,
} from "./NavLinkBar.styled";

import { useSelector } from "react-redux";
// import { selectOrders } from "redux/selectors";
import { selectLanguages } from "redux/selectors";

import MessageModule from "components/MessageModule/MessageModule";
import lang from "assets/json/language.json";

import { GiHamburgerMenu } from "react-icons/gi";
import electricity from "assets/images/svg/electricity.svg";

const NavLinkBar = () => {
  // const orderProducts = useSelector(selectOrders);  
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalCatalogShown, setIsModalCatalogShown] = useState(false);

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onCloseCatalogModal = () => {
    setIsModalCatalogShown(false);
  };

  const onOpenCatalogModal = () => {
    setIsModalCatalogShown(true);
  };
  
  return (
    <>
      <DivNav>
        <DivCatalog>
          <GiHamburgerMenu
            style={{ marginRight: '10px', fontSize: '26px' }}
            onClick={onOpenCatalogModal}
          />
          <Sup>{lang[languages].NavLinkBar_catalog1.toUpperCase()}</Sup>
        </DivCatalog>
        <NavContainer>
          <NavLinkStyle to="/">
            {/* Home */}
            <sup>{lang[languages].NavLinkBar_home.toUpperCase()}</sup>
          </NavLinkStyle>
          <img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/catalog">
            <sup>{lang[languages].NavLinkBar_catalog.toUpperCase()}</sup>
          </NavLinkStyle>
          <img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/orders">
            <sup>{lang[languages].NavLinkBar_orders.toUpperCase()}</sup>
          </NavLinkStyle>
          <img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/help">
            <sup>{lang[languages].NavLinkBar_help.toUpperCase()}</sup>
          </NavLinkStyle>
          <img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/about_us">
            <sup>{lang[languages].NavLinkBar_aboutUs.toUpperCase()}</sup>
          </NavLinkStyle>
          <img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/delivery">
            <sup>{lang[languages].NavLinkBar_delivery.toUpperCase()}</sup>
          </NavLinkStyle>
          <img src={electricity} alt="electricity symbol" />
          {/* Message */}
          <Span onClick={onOpenModal}>
            <sup>{lang[languages].NavLinkBar_message.toUpperCase()}</sup>
          </Span>
        </NavContainer>
      </DivNav>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      {isModalCatalogShown && <MessageModule onClose={onCloseCatalogModal} />}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default NavLinkBar;