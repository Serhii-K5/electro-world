// import { useState } from "react";
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  Div,
  Header,
  BgLogo,
  TextLogo,
  Input,
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
import Footer from 'components/Footer/Footer';
// import {Footer} from 'components/FooterE/FooterE';
import lang from "assets/json/language.json";

import { SlMagnifier } from "react-icons/sl";
import NavLinkBar from 'components/NavLinkBar/NavLinkBar';

import { useSearchParams } from 'react-router-dom';

export default function Layout() {
  const orderProducts = useSelector(selectOrders);  
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  // const onOpenModal = () => {
  //   setIsModalShown(true);
  // };

  // const handleClick = () => {    
  //   setIsModalShown(true);
  // };
  // const st = {textAlign: "right",  padding: '5px',}
  
  const handleSubmit = evt => {    
    setSearchParams({ query: evt.target[1].value });
    evt.preventDefault();
    return;
  };
  
  useEffect(() => {
    // const movieTitle = searchParams.get('query');
    // if (movieTitle) {
    //   API.getSearch(movieTitle).then(value => setMovies(value));
    // }
    
  }, [searchParams]);
  
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
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            {/* <div type="submit" onClick={handleSubmit}>
              <SlMagnifier
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  width: '25px',
                  height: '25px',
                }}
              />
            </div> */}
            <button
              type="submit"
              style={{
                position: 'absolute',
                top: '7px',
                left: '8px',
                padding: 0,
                width: '27px',
                height: '27px',
                border: 'none',
                backgroundColor: 'transparent',
              }}
            >
              <SlMagnifier
                style={{
                //   position: 'absolute',
                //   top: '8px',
                //   left: '8px',
                  width: '25px',
                  height: '25px',
                }}
              />
            </button>
            <Input
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
          </form>
          {/* <div style={{ position: 'relative' }}>
            <SlMagnifier
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                width: '25px',
                height: '25px',
              }}
            />
            <Input
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
          </div> */}
          <AdressBar />
          <Link to="/orders">
            <ShoppingCart quantity={orderProducts.length} />
          </Link>
        </Header>
      </Div>
      <NavLinkBar />
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
