import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
  DivNav,
  DivCatalog,
  Sup,
  Img,
  NavContainer,
  NavLinkStyle,
  Span,
} from "./NavLinkBar.styled";

import { useDispatch, useSelector } from 'react-redux';
import { selectDirectoryPath, selectLanguages } from 'redux/selectors';
// import { selectOrders } from "redux/selectors";
import { addDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } from 'redux/slice/directoryPathSlice';

import MessageModule from "components/MessageModule/MessageModule";
import CatalogModule from 'components/CatalogModule/CatalogModule';
import CategorySelection from 'components/CategorySelection/CategorySelection';
import lang from "assets/json/language.json";
import category from "assets/json/category.json";

import { GiHamburgerMenu } from "react-icons/gi";
import electricity from "assets/images/svg/electricity.svg";

const NavLinkBar = () => {
  // const orderProducts = useSelector(selectOrders); 
  const dispatch = useDispatch();
  const directoryPath = useSelector(selectDirectoryPath); 
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalCatalogShown, setIsModalCatalogShown] = useState(false);

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
  };

  const clearingDirectoryPath = () => {
    setIsModalCatalogShown(false);
    dispatch(addDirectoryPath([]));
  };

  const addDirectory = value => {
    dispatch(addDirectoryPath(value));
  };

  const deleteDirectory = value => {
    value.cat_id === directoryPath[directoryPath.length - 1].cat_id &&
      dispatch(deleteDirectoryPath(value));

    // console.log(directoryPath);
  };

  return (
    <>
      <DivNav>
        {/* <DivCatalog onClick={onOpenCatalogModal}> */}
        <DivCatalog onMouseMove={onOpenCatalogModal}>
          {/* <DivCatalog onMouseMove={onOpenCatalogModal} onMouseLeave={onCloseCatalogModal}> */}
          <GiHamburgerMenu style={{ marginRight: '10px', fontSize: '24px' }} />
          <div>
            <Sup>{lang[languages].NavLinkBar_catalog1.toUpperCase()}</Sup>
          </div>
        </DivCatalog>
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
      {/* <ul>

      </ul> */}
      <div style={{ width: '20%' }} onMouseLeave={clearingDirectoryPath}>
        {isModalCatalogShown && (
          // category.length > 0 && (
            <ul style={{ display: 'flex' }}>
              {directoryPath.length > 0 ? (
              // {directoryPath ? (
                <ul style={{ display: 'flex' }}>
                  {directoryPath.map((el, index) => (
                    <li key={index}>
                      <CategorySelection
                        parentId={el.cat_parentId}
                        // onMouseMove={() => addDirectory(el)}
                        // // onMouseOver={() => handleMove()}
                        // onMouseLeave={() => deleteDirectory(el)}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <CategorySelection
                  parentId={0}
                  // onMouseMove={() => addDirectory(el)}
                  // onMouseLeave={() => deleteDirectory(el)}
                />
              )}
            </ul>
          // )
          
          
          // <CategorySelection />
          // <CatalogModule modal={0} />}
          // <CatalogModule onClose={!isModalCatalogShown} />
        )}
      </div>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      {/* {isModalCatalogShown && <CatalogModule onClose={onCloseCatalogModal} />} */}
    </>
  );
}

export default NavLinkBar;