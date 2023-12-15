// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { fetchAdverts } from 'redux/operations';

// import CarCard from 'components/CarCard/CarCard';
// import { selectAdverts } from 'redux/selectors';

// import Hero from "components/Hero/Hero";
// import OurOffice from "components/OurOffice/OurOffice";
// import {
  // Ul,
  // NavLinkStyle,
  // Container,
  // Div,
  // H2,
  // Section,
  // Img,
  // Button,
// } from './CatalogModule.styled';

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

import { useEffect, useState } from "react";
import {
  Overlay,
  Modal,
  CloseBtn,
} from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

// import {
//   // Ul,
//   NavLinkStyle,
//   // Container,
//   // Div,
//   // H2,
//   // Section,
//   // Img,
//   // Button,
// } from './CatalogModule.styled';

import cross from "assets/images/svg/cross.svg";
import category from 'assets/json/category.json';

const CatalogModule = ({ onClose }) => {
  const [isVisibleArrow, setIsVisibleArrow] = useState(false);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const findParentId = (codeId) => {
    const index = category.findIndex(item => item.cat_parentId === codeId);
    return index > 0 ? setIsVisibleArrow(true) : setIsVisibleArrow(false);
  };



  // const categoryItem = (codeId) => {
  //   return category.map(item => {
  //     findParentId(item.cat_id);
  //     item.cat_parentId === codeId &&
  //       (isVisibleArrow ? (
  //         <li key={item.cat_id} onClick={() => handleClick()}>
  //           {item.cat_name} {' >'}
  //         </li>
  //       ) : (
  //         <li key={item.cat_id} onClick={() => handleClick()}>
  //           {/* <NavLinkStyle to="/catalog"> {item.cat_name} </NavLinkStyle> */}
  //           {item.cat_name}
  //         </li>
  //       ));
  //   });
  // };

  // const cat = (codeId) => {
  //   return category.map(item => {
  //     item.cat_parentId === codeId && (
  //       <li key={item.cat_id} onClick={() => handleClick()}>
  //         {item.cat_name} {' >'}
  //       </li>
  //     );
  //   });
  // }

  // <Link to="/orders">
  //   <ShoppingCart quantity={orderProducts.length} />
  // </Link>;

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Modal>
          <CloseBtn type="button" onClick={onClose}>
            <img src={cross} alt="close button" />
          </CloseBtn>

          <p>Catalog module</p>

          {category.length > 0 && (
            <ul>
              {category.map(
                (item, index) =>
                  item.cat_parentId === 0 && (
                    <li
                      // key={item.id + '_' + index}
                      key={index}
                      onClick={() => findParentId(item.id)}
                    >
                      {/* <CarCard card={item} /> */}
                      {item.cat_name} {' >'}
                    </li>
                  )
              )}
            </ul>
          )}
          {/* <ul> */}
          {/* {categoryItem()} */}
          {/* {() => cat(0)} */}
          {/* {category.map(item => {
              item.cat_parentId === 0 && (
                // <li key={item.cat_id} onClick={() => handleClick()}>
                <li key={item.cat_id}>
                  {item.cat_name} {' >'}
                </li>
              );
            })} */}
          {/* </ul> */}
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

export default CatalogModule;
