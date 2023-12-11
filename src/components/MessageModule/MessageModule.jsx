// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { fetchAdverts } from 'redux/operations';

// import CarCard from 'components/CarCard/CarCard';
// import { selectAdverts } from 'redux/selectors';

// import Hero from "components/Hero/Hero";
// import OurOffice from "components/OurOffice/OurOffice";
// import {
//   Ul,
//   NavLinkStyle,
//   Container,
//   Div,
//   H2,
//   Section,
//   Img,
//   Button,
// } from './MessageModule.styled';

// import Footer from '../../components/Footer/Footer';
// import car1 from '../../assets/images/auto/car-rent-1.jpg';
// import car2 from '../../assets/images/auto/car-rent-2.jpg';
// import car3 from '../../assets/images/auto/car-rent-3.jpg';
// import car4 from '../../assets/images/auto/car-rent-4.jpg';
// import car5 from '../../assets/images/auto/car-rent-5.jpg';
// // import cars from '../../assets/images/auto/cars-rent.jpg';

// import CarsSlider from '../../components/Slider/Slider';
// import getRandomInRange from 'utils/rendomNumber';
// import AboutUs from 'pages/AboutUs/AboutUs';
// import AboutUsLight from 'pages/AboutUsLight/AboutUsLight';
// import AsideBar from "components/AsideBar/AsideBar";

// // import brandList from "../../assets/jsons/makes.json";

import { useEffect } from "react";
import {
  Overlay,
  Modal,
  CloseBtn,
} from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

import cross from "assets/images/svg/cross.svg";

const MessageModule = ({ onClose }) => {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Modal>
          <CloseBtn type="button" onClick={onClose}>
            <img src={cross} alt="close button" />
          </CloseBtn>
          
          <p>Message module</p>
        </Modal>
      </Overlay>
      {/* <CarsSlider />
      <Container>
        <div style={{ display: 'flex' }}>
          <Div>
            <Section>
              <Hero />
            </Section>

            <Section>
              <H2 id="section1">About Us</H2>
                {isAboutUsShown ? <AboutUs /> : <AboutUsLight />}
                <Button onClick={onOpenAboutUs}> {isAboutUsShown ? "... Collapse section" : "To learn more ..." }</Button>
            </Section>
          </Div>
          <AsideBar />
        </div>

        <Section>
          <H2 id="section2">Our fleet</H2>
          {adverts.length > 0 ? (
            <Ul>{handleCardsRandom()}</Ul>
          ) : (
            <div style={{ display: 'flex' }}>
              <Img src={car1} alt="Car rent 1"></Img>
              <Img src={car2} alt="Car rent 2"></Img>
              <Img src={car3} alt="Car rent 3"></Img>
              <Img src={car4} alt="Car rent 4"></Img>
              <Img src={car5} alt="Car rent 5"></Img>
            </div>
          )}

          <p>
            <NavLinkStyle to="/catalog"> See more... </NavLinkStyle>
          </p>
        </Section>

        <Section>
          <OurOffice />
        </Section>
      </Container>
      <Footer /> */}
    </>
  );
};

export default MessageModule;
