import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
  DivNav,
  DivCatalog,
  Sup,
  UlCatalog,
  Img,
  NavContainer,
  NavLinkStyle,
  Span,
} from "./NavLinkBar.styled";

import { useDispatch, useSelector } from 'react-redux';
import { selectDirectoryPath, selectLanguages } from 'redux/selectors';
// import { selectOrders } from "redux/selectors";
import { addDirectoryPath, changeDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } from 'redux/slice/directoryPathSlice';

import MessageModule from "components/MessageModule/MessageModule";
// import CatalogModule from 'components/CatalogModule/CatalogModule';
import CategorySelection from 'components/CategorySelection/CategorySelection';
import lang from "assets/json/language.json";
// import category from "assets/json/category.json";
// import DropdownButton from '../DropdownButton/DropdownButton';


import { GiHamburgerMenu } from "react-icons/gi";
import electricity from "assets/images/svg/electricity.svg";


const NavLinkBar = () => {
  // const orderProducts = useSelector(selectOrders); 
  const dispatch = useDispatch();
  const directoryPath = useSelector(selectDirectoryPath); 
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalCatalogShown, setIsModalCatalogShown] = useState(false);
  const [isChangeModalCatalog, setIsChangeModalCatalog] = useState(false);

  
  useEffect(() => {
    directoryPath > 0
      ? setIsChangeModalCatalog(true)
      : setIsChangeModalCatalog(false);
    
    // console.log(directoryPath);
  }, [directoryPath]);
  
  
  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  // const onCloseCatalogModal = () => {
  //   setIsModalCatalogShown(false);
  //   console.log(directoryPath);
  //   dispatch(deleteDirectoryPath(0));    
  // };

  const onOpenCatalogModal = () => {
    setIsModalCatalogShown(true);
    // dispatch(deleteAllDirectoryPath([]));
  };

  const clearingDirectoryPath = () => {
    // dispatch(deleteAllDirectoryPath([]));
    dispatch(deleteAllDirectoryPath());
    setIsModalCatalogShown(false);
  };

  // const addDirectory = value => {
  //   dispatch(addDirectoryPath(value));
  // };

  // const changeDirectory = value => {
  //   dispatch(changeDirectoryPath(value));
  // };

  // const deleteDirectory = value => {
  //   value.cat_id === directoryPath[directoryPath.length - 1].cat_id &&
  //     dispatch(deleteDirectoryPath(value));

  //   // console.log(directoryPath);
  // };

  return (
    <>
      <DivNav>
        <div
          onMouseEnter={onOpenCatalogModal}
          onMouseLeave={clearingDirectoryPath}
        >
          <div>
            <DivCatalog>
              <GiHamburgerMenu
                style={{ marginRight: '10px', fontSize: '24px' }}
              />
              <div>
                <Sup>{lang[languages].NavLinkBar_catalog1.toUpperCase()}</Sup>
              </div>
            </DivCatalog>
            {isModalCatalogShown && (
              <UlCatalog style={{ width: '100vw' }}>
                <CategorySelection parentId={0} style={{ width: '100px' }} />
                {directoryPath.map((item, index) => (
                  <CategorySelection parentId={item.cat_id} style={{ width: '100px' }}/>
                ))}
              </UlCatalog>
              // <UlCatalog style={{ width: '100vw' }}>
              //   <CategorySelection parentId={0} />
              //   {directoryPath.map((item, index) => (
              //     <ul>
              //       <CategorySelection parentId={item.cat_id} />
              //     </ul>
              //   ))}
              // </UlCatalog>
            )}
          </div>
        </div>

        <NavContainer>
          <NavLinkStyle to="/">
            {/* Home */}
            <sup>{lang[languages].NavLinkBar_home.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/catalog">
            <sup>{lang[languages].NavLinkBar_catalog.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/orders">
            <sup>{lang[languages].NavLinkBar_orders.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/help">
            <sup>{lang[languages].NavLinkBar_help.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/about_us">
            <sup>{lang[languages].NavLinkBar_aboutUs.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/delivery">
            <sup>{lang[languages].NavLinkBar_delivery.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          {/* Message */}
          <Span onClick={onOpenModal}>
            <sup>{lang[languages].NavLinkBar_message.toUpperCase()}</sup>
          </Span>
        </NavContainer>
      </DivNav>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
    </>
  );
}

export default NavLinkBar;