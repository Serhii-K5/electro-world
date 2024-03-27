// import { useState } from "react";
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { DivUpper, DivBtn, Div, Header } from './Layout.styled';
import Logo from 'components/Logo/Logo';

import ShoppingCart from '../ShoppingCart/ShoppingCart';

// import { GiShoppingCart } from "react-icons/gi";
// import logo from "../../assets/images/logo.png";

import { useSelector } from 'react-redux';
import { selectOrders } from 'redux/selectors';

import MessageModule from 'components/Feedback/Feedback';
import { LanguageBar } from 'components/LanguageBar/LanguageBar';
import AdressBar from 'components/AdressBar/AdressBar';
import Authorization from 'components/Authorization/Authorization';
import Footer from 'components/Footer/Footer';

import NavLinkBar from 'components/NavLinkBar/NavLinkBar';
import SearchField from 'components/SearchField/SearchField';
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

// import { useSearchParams } from 'react-router-dom';

export default function Layout() {
  const orderProducts = useSelector(selectOrders);
  const [isModalShown, setIsModalShown] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const languages = useSelector(selectLanguages);

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  return (
    <>
      <DivUpper>
        <DivBtn>{lang[languages].layout_minOrder}</DivBtn>
        <LanguageBar />
        <Authorization />
      </DivUpper>
      <Div>
        <Header>
          <Link to="/">
            <Logo />
          </Link>
          <SearchField />
          <AdressBar color="blue" />
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
