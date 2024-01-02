// import { useState } from "react";
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  Div,
  Header,
  BgLogo,
  TextLogo,
  Button,
  Input,
} from "./Layout.styled";

// import AdressBar from "../AdressBar/AdressBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// import { GiShoppingCart } from "react-icons/gi";
// import logo from "../../assets/images/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
import { selectLanguages, selectFilters } from "redux/selectors";

import MessageModule from "components/MessageModule/MessageModule";
import {LanguageBar} from "components/LanguageBar/LanguageBar";
import AdressBar from 'components/AdressBar/AdressBar';
import Footer from 'components/Footer/Footer';
// import {Footer} from 'components/FooterE/FooterE';
import lang from "assets/json/language.json";

import { SlMagnifier } from "react-icons/sl";
import NavLinkBar from 'components/NavLinkBar/NavLinkBar';

import { useSearchParams } from 'react-router-dom';
import { changefilters } from "redux/slice/filtersSlice";

export default function Layout() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  // const [searchText, setSearchText] = useState('');
  

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
  
  const handleSubmit = e => {    
    e.preventDefault();
    // setSearchParams({ query: e.target[1].value });    
    dispatch(changefilters({key: 'name', value: e.target[1].value})); 
    return;
  };
  
  const onBlurInp = e => {    
    dispatch(changefilters({key: 'name', value: e.target.value})); 
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
            <Button
              type="submit"
            >
              <SlMagnifier
                style={{width: '25px', height: '25px',}}
              />
              <Link to="/catalog" />
            </Button>
            <Input
              type="text"
              placeholder={lang[languages].layout_find}
              // onChange={handleChange}
              onBlur={onBlurInp}
              // onFocusOut={onBlurInp}
            />
          </form>
          <AdressBar />
          <Link to="/orders">
            <ShoppingCart quantity={orderProducts.length} />
          </Link>
        </Header>
      </Div>
      <NavLinkBar />
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      <Outlet> 
        <footer>
          <Footer />
        </footer>
      </Outlet>       
      {/* <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer> */}
    </>
  );
}
