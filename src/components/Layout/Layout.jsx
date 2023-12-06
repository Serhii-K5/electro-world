// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {
  BgLogo,
  TextLogo,
  Header,
  NavContainer,
  NavLinkStyle,
  Div,
  // Quantity,
} from "./Layout.styled";

// import AdressBar from "../AdressBar/AdressBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// import { GiShoppingCart } from "react-icons/gi";

// import logo from "../../assets/images/logo.png";

import { useSelector } from "react-redux";
// import { selectOrdersAll } from "redux/selectors";
import { selectOrders } from "redux/selectors";
import CardModal from "components/ProductModal/ProductModal";
import {LanguageBar} from "components/LanguageBar/LanguageBar";
import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";
import { SlMagnifier } from "react-icons/sl";
import { FaViber } from "react-icons/fa";

export default function Layout() {
  // const ordersAll = useSelector(selectOrdersAll);
  const orderProducts = useSelector(selectOrders);  
  const languages = useSelector(selectLanguages);
  // const [isModalShown, setIsModalShown] = useState(false);
  // const onCloseModal = () => {
  //   setIsModalShown(false);
  // };

  // const onOpenModal = () => {
  //   setIsModalShown(true);
  // };

  // const handleClick = () => {    
  //   setIsModalShown(true);
  // };

  
  return (
    <>
      <LanguageBar/>
      {/* <ul>
        {lang.map((el, index)=> 
          <li key={index}>{el.lang_name}</li>
        )} */}
      {/* <li style={{ display: 'inline-block', padding: '5px', backgroundColor: 'blue', border: '1px solid blue', color: 'white', borderRadius: '5px' }}>UK</li>
      <li style={{display: 'inline-block', padding: '5px', border: '1px solid blue', borderRadius: '5px', marginLeft: '5px'}}>RU</li> */}
    {/* </ul> */}
      {/* <ul style={{ textAlign: "right",  padding: '5px', fontSize: '16px', maxWidth:'1440px', margin: '0 auto'}}>
        <li style={{display: 'inline-block', padding: '5px', backgroundColor: 'blue', border: '1px solid blue', color: 'white', borderRadius: '5px'}}>UK</li>
        <li style={{display: 'inline-block', padding: '5px', border: '1px solid blue', borderRadius: '5px', marginLeft: '5px'}}>RU</li>
      </ul> */}
      {/* <div style={{ textAlign: "right",  padding: '5px', fontSize: '16px'}}> */}
        {/* <div style={(languages === "" || languages === "UK") && { backgroundColor: 'var(--bg-second-green)' }}>UK</div>
        <div style={languages === "RU" && { backgroundColor: 'var(--bg-second-green)' }}>RU</div> */}
        {/* <div style={{display: 'inline-block', padding: '5px', backgroundColor: 'blue', border: '1px solid blue', color: 'white', borderRadius: '5px'}}>UK</div>
        <div style={{display: 'inline-block', padding: '5px', border: '1px solid blue', borderRadius: '5px'}}>RU</div>

      </div> */}
      {/* <LanguageBar/> */}
      <Div>
        <Header>
          <BgLogo>
            <TextLogo><b> Electro world </b></TextLogo>
          </BgLogo>
          {/* <img src={logo} alt="Logo company" style={{width: "120px", boxShadow: "1px 1px 0px rgba(255,255,255)"}} /> */}
          <NavContainer>
            <NavLinkStyle to="/" >
              {/* Home */}
              {lang[languages].layout_navLinkHome}
            </NavLinkStyle>
            <NavLinkStyle to="/catalog">
              {/* Catalog */}
              {lang[languages].layout_navLinkCatalog}
            </NavLinkStyle>
            <NavLinkStyle to="/orders">
              {/* Orders */}
              {lang[languages].layout_navLinkOrders}
            </NavLinkStyle>
            
            {/* <NavLinkStyle to="/orders">
              <ShoppingCart quantity={orderProducts.length}/>
            </NavLinkStyle> */}
            
          </NavContainer>
          {/* <AdressBar /> */}
          {/* <ShoppingCart quantity={ordersAll} /> */}
          {/* <ShoppingCart quantity={orderProducts.length} onClick={onOpenModal} /> */}
          {/* <ShoppingCart quantity={orderProducts.length}/> */}
          {/* <div style={{ position: 'relative' }}>
            <GiShoppingCart style={{width: '60px', height: '60px', fill: "blue" }} />
            <Quantity>100</Quantity>
          </div> */}
          {/* <ShoppingCart quantity={orderProducts.length} onClick={e => <NavLinkStyle to="/orders"/>}></ShoppingCart> */}
          <div style={{ position: 'relative' }}>
            <SlMagnifier style={{position: 'absolute', top: '8px', left: '8px', width: '25px', height: '25px',}}/>
            <input
              type="text"
              style={{ padding: '8px 10px 8px 43px', width: '200px', borderRadius: '5px', fontSize: '20px' }}
              placeholder={lang[languages].layout_find}
            />
          </div>
          <div>
            <div>
              <a href="tel:+380689766880"> <BsFillTelephoneFill style={{position: "relative", top: "3px", right: "-22px", color: "#FFF"}}/> <BsFillTelephoneFill style={{position: "relative", top: "3px"}}/> +380689766880</a>
              <FaViber style={{marginLeft: '3px', fill: "blueviolet"}} />
            </div>
            {/* <a href="tel:+380689766880" style={{display: 'block'}}> <BsFillTelephoneFill style={{position: "relative", top: "3px", right: "-22px", color: "#FFF"}}/> <BsFillTelephoneFill style={{position: "relative", top: "3px"}}/> +380689766880</a>
            <FaViber/> */}
            <a href="tel:+380689766880" style={{ display: 'block' }}> <BsFillTelephoneFill style={{ position: "relative", top: "3px", right: "-22px", color: "#FFF" }} /> <BsFillTelephoneFill style={{ position: "relative", top: "3px" }} /> +380689766880</a>
          </div>
          
          <Link to="/orders">
            <ShoppingCart quantity={orderProducts.length}/>
          </Link>
        </Header>
      </Div>
      {/* {isModalShown && <CardModal card={card} onClose={onCloseModal} />} */}
      <div>
        <Outlet />
      </div>
    </>    
  );
}
