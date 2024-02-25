import { useEffect, useState } from "react";
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

import { useSelector } from 'react-redux';
import { selectDirectoryPath, selectLanguages } from 'redux/selectors';

import MessageModule from "components/MessageModule/MessageModule";
import CategoryDropdownList from 'components/CategoryDropdownList/CategoryDropdownList';
import lang from "assets/json/language.json";


import { GiHamburgerMenu } from "react-icons/gi";
import electricity from "assets/images/svg/electricity.svg";


const NavLinkBar = () => {
  const directoryPath = useSelector(selectDirectoryPath);
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalCatalogShown, setIsModalCatalogShown] = useState(false);
  const [isModalCatalogClick, setIsModalCatalogClick] = useState(false);
  const [isChangeModalCatalog, setIsChangeModalCatalog] = useState(false);

  useEffect(() => {
    directoryPath > 0
      ? setIsChangeModalCatalog(true)
      : setIsChangeModalCatalog(false);
  }, [directoryPath]);

  const onCloseModal = () => {
    setIsModalShown(false);
    setIsModalCatalogClick(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
    setIsChangeModalCatalog(isChangeModalCatalog);
  };

  const onOpenCatalogModal = () => {
    setIsModalCatalogShown(true);
  };

  const clearingDirectoryPath = () => {
    setIsModalCatalogShown(false);
    setIsModalCatalogClick(false);
  };

  const handleClick = () => {
    setIsModalCatalogClick(true);
  };

  // const st = { marginRight: '10px', fontSize: '24px' };

  return (
    <>
      <DivNav>
        <div
          onMouseEnter={onOpenCatalogModal}
          onMouseLeave={clearingDirectoryPath}
          onClick={onOpenCatalogModal}
        >
          <div>
            <DivCatalog>
              <GiHamburgerMenu
                style={{ marginRight: '10px', fontSize: '24px' }}
                // style={st}
              />
              <div>
                <Sup>{lang[languages].NavLinkBar_catalog1.toUpperCase()}</Sup>
              </div>
            </DivCatalog>
            {isModalCatalogShown && !isModalCatalogClick && (
              <UlCatalog onClick={handleClick}>
                <li key={0} style={{ border: '1px solid grey' }}>
                  <CategoryDropdownList parentId={0} />
                </li>
                {directoryPath.map((item, index) => (
                  <li key={index + 1} style={{ border: '1px solid grey' }}>
                    <CategoryDropdownList parentId={item.cat_id} />
                  </li>
                ))}
              </UlCatalog>
            )}
          </div>
        </div>

        <NavContainer>
          <NavLinkStyle to="/">
            {/* Home */}
            <sup>{lang[languages].NavLinkBar_home.toUpperCase()}</sup>
          </NavLinkStyle>
          {/* <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/catalog">
            <sup>{lang[languages].NavLinkBar_catalog.toUpperCase()}</sup>
          </NavLinkStyle> */}
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