// import { useState } from "react";
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Div,
  Header,
  // BgLogo,
  // TextLogo,
} from "./Layout.styled";
import Logo from "components/Logo/Logo";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

// import { GiShoppingCart } from "react-icons/gi";
// import logo from "../../assets/images/logo.png";

import { useSelector } from "react-redux";
import { selectOrders } from 'redux/selectors';

import MessageModule from "components/MessageModule/MessageModule";
import {LanguageBar} from "components/LanguageBar/LanguageBar";
import AdressBar from 'components/AdressBar/AdressBar';
import Footer from 'components/Footer/Footer';

import NavLinkBar from 'components/NavLinkBar/NavLinkBar';
import SearchField from 'components/SearchField/SearchField'

// import { useSearchParams } from 'react-router-dom';

export default function Layout() {
  const orderProducts = useSelector(selectOrders);
  const [isModalShown, setIsModalShown] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center'}}>
        {/* <div style={{padding: '3px 16px', color: 'var(--text-color-white)', backgroundColor: 'var(--bg-primary-orange)', border: 'solid 3px var(--bg-second-orange)', borderRadius: '5px'}}> Мінімальне замовлення - 300грн </div> */}
        <div style={{padding: '3px 16px', color: 'var(--text-color-white)', backgroundColor: 'var(--bg-primary-orange)', border: 'solid 3px #F38E74', borderRadius: '5px'}}> Мінімальне замовлення - 300грн </div>
        <LanguageBar />
      </div>
      <Div>
        <Header>
          <Logo />
          <SearchField />
          <AdressBar />
          <Link to="/orders">
            <ShoppingCart quantity={orderProducts.length} />
          </Link>
        </Header>
      </Div>
      <NavLinkBar />
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      <Outlet />
      <Footer />
    </>
  );
}
