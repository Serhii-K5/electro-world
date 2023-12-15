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
  ModalSelect,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

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
import CategorySelection from 'components/CategorySelection/CategorySelection';
// import MessageModule from 'components/MessageModule/MessageModule';

const CatalogModule = ({ modal, onClose }) => {
  // const [isVisibleArrow, setIsVisibleArrow] = useState(false);
  const [visibleSelect, setVisibleSelect] = useState(modal);
  const [pathSelect, setPathSelect] = useState(modal);

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

  // const handleOverlayClick = event => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  // const handleClick = event => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  // const findParentId = (codeId) => {
  //   const index = category.findIndex(item => item.cat_parentId === codeId);
  //   // return index > 0 ? setIsVisibleArrow(true) : setIsVisibleArrow(false);
  //   index > 0 ? setIsVisibleArrow(true) : setIsVisibleArrow(false);
  //   // return index > 0 && <span>{' >'}</span>;
  // };

  // const findParentId1 = (codeId) => {
  //   setIsVisibleArrow(category.findIndex(e => e.cat_parentId === codeId) > 0);
  // };



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

  const [isModalShown, setIsModalShown] = useState(false);

  const handleMouseMove = () => {
    setIsModalShown(true);
  };

  const handleMouseOut = () => {
    setIsModalShown(false);
  };

  const handleMove = () => {
    setVisibleSelect(visibleSelect + 1);
  };

  const fr = () => {
    for (let index = 0; index < visibleSelect + 1; index++) {
      const element = array[index];
      <li key={index} ></li>
    }
  };

  return (
    <ul>
      
      {array.forEach(element => {
        <ModalSelect
          onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseOut}
        >
          {/* <CloseBtn type="button" onClick={onClose}>
          <img src={cross} alt="close button" />
        </CloseBtn>

        <p>Catalog module</p> */}

          {category.length > 0 && (
            <CategorySelection
              parentId={visibleSelect}
              onMouseMove={() => handleMove()}
            />
          )}
        </ModalSelect>;
        
      })}
      {/* <Overlay onClick={handleOverlayClick}> */}
      <ModalSelect
        onMouseMove={handleMouseMove}
        // onMouseLeave={handleMouseOut}
      >
        {/* <CloseBtn type="button" onClick={onClose}>
          <img src={cross} alt="close button" />
        </CloseBtn>

        <p>Catalog module</p> */}

        {category.length > 0 && (
          <CategorySelection
            parentId={visibleSelect}
            onMouseMove={() => handleMove()}
          />
        )}
      </ModalSelect>
      {/* {visibleSelect > 0 && (
        <ModalSelect>
          <CloseBtn type="button" onClick={onClose}>
            <img src={cross} alt="close button" />
          </CloseBtn>

          <p>Catalog module</p>

          {category.length > 0 && visibleSelect > 0 && (
            <CategorySelection
              parentId={visibleSelect}
              onMouseMove={handleMove}
            />
          )}
        </ModalSelect>
      )} */}
      {/* {isModalShown && <MessageModule />} */}
    </ul>
  );
};

export default CatalogModule;
