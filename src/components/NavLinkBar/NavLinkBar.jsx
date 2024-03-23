import { useEffect, useState } from 'react';
import {
  DivNav,
  DivCatalog,
  TitleSpan,
  UlCatalog,
  Li,
  Img,
  NavContainer,
  NavLinkStyle,
  Span,
} from './NavLinkBar.styled';

import { useSelector } from 'react-redux';
import { selectDirectoryPath, selectLanguages } from 'redux/selectors';

import MessageModule from 'components/Feedback/Feedback';
import CategoryDropdownList from 'components/CategoryDropdownList/CategoryDropdownList';
import lang from 'assets/json/language.json';

import { GiHamburgerMenu } from 'react-icons/gi';
import electricity from 'assets/images/svg/electricity.svg';

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


  return (
    <>
      <DivNav>
        <div
          onMouseEnter={onOpenCatalogModal}
          onMouseLeave={clearingDirectoryPath}
          onClick={onOpenCatalogModal}
        >
          {/* <div> */}
          <DivCatalog>
            <GiHamburgerMenu
              style={{ marginRight: '10px', fontSize: '24px' }}
            />
            <TitleSpan>
              {lang[languages].NavLinkBar_catalog.toUpperCase()}
            </TitleSpan>
            {/* <div>
                <Sup>{lang[languages].NavLinkBar_catalog.toUpperCase()}</Sup>
              </div> */}
          </DivCatalog>
          {isModalCatalogShown && !isModalCatalogClick && (
            <UlCatalog onClick={handleClick}>
              <Li key={0}>
                <CategoryDropdownList parentId={0} />
              </Li>
              {directoryPath.map((item, index) => (
                <Li key={index + 1}>
                  <CategoryDropdownList parentId={item.cat_id} />
                </Li>
              ))}
            </UlCatalog>
          )}
          {/* </div> */}
        </div>

        <NavContainer>
          <NavLinkStyle to="/">
            {/* Home */}
            {lang[languages].NavLinkBar_home.toUpperCase()}
          </NavLinkStyle>
          {/* <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/catalog">
            {lang[languages].NavLinkBar_catalog1.toUpperCase()}
          </NavLinkStyle> */}
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/orders">
            {lang[languages].NavLinkBar_orders.toUpperCase()}
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/help">
            {lang[languages].NavLinkBar_help.toUpperCase()}
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/about_us">
            {lang[languages].NavLinkBar_aboutUs.toUpperCase()}
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/delivery">
            {lang[languages].NavLinkBar_delivery.toUpperCase()}
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          {/* Message */}
          <Span onClick={onOpenModal}>
            {lang[languages].NavLinkBar_message.toUpperCase()}
          </Span>
        </NavContainer>
      </DivNav>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
    </>
  );
};

export default NavLinkBar;
