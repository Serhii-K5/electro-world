import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguages } from 'redux/selectors';
import Logo from 'components/Logo/Logo';
import MessageModule from 'components/Feedback/Feedback';
import AutorizationModule from 'components/LoginModule/LoginModule';
import AdressBarFooter from 'components/AdressBarFooter/AdressBarFooter';
import { Container, Section, NavLinkStyle, Span, P } from './Footer.styled';

import lang from 'assets/json/language.json';

const Footer = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalAutorizationShown, setIsModalAutorizationShown] =
    useState(false);

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onOpenModalAutorization = () => {
    setIsModalAutorizationShown(true);
  };

  const onCloseModal = () => {
    setIsModalShown(false);
    setIsModalAutorizationShown(false);
  };
  const languages = useSelector(selectLanguages);
  return (
    <footer style={{ backgroundColor: 'var(--primary-black)' }}>
      <Container style={{ color: 'var(--primary-white)' }}>
        <Section>
          <div style={{ maxWidth: '490px', padding: '0 16px' }}>
            <div style={{ width: '167px' }}>
              <Logo />
            </div>
            <p style={{ paddingTop: '16px' }}>{lang[languages].footer_p}</p>
            <p style={{ paddingTop: '16px' }}>
              {' '}
              © 2024 Electro world. {lang[languages].footer_reserved}
            </p>
          </div>
          <div style={{ padding: '16px' }}>
            <p>
              <b>{lang[languages].footer_mainBar}</b>
            </p>
            <hr />
            <NavLinkStyle to="/">
              {lang[languages].NavLinkBar_home.toUpperCase()}
            </NavLinkStyle>
            {/* <NavLinkStyle to="/catalog">
              {lang[languages].NavLinkBar_catalog.toUpperCase()}
            </NavLinkStyle> */}
            <NavLinkStyle to="/orders">
              {lang[languages].NavLinkBar_orders.toUpperCase()}
            </NavLinkStyle>
            <NavLinkStyle to="/help">
              {lang[languages].NavLinkBar_help.toUpperCase()}
            </NavLinkStyle>
            <NavLinkStyle to="/about_us">
              {lang[languages].NavLinkBar_aboutUs.toUpperCase()}
            </NavLinkStyle>
            <NavLinkStyle to="/delivery">
              {lang[languages].NavLinkBar_delivery.toUpperCase()}
            </NavLinkStyle>
            <Span onClick={onOpenModal}>
              {lang[languages].NavLinkBar_message.toUpperCase()}
            </Span>
          </div>
          <div style={{ padding: '16px' }}>
            <p>
              <b>{lang[languages].footer_contacts}</b>
            </p>
            <hr style={{ color: 'var(--primary-white)' }} />
            <AdressBarFooter color="while" />
            <p style={{ paddingTop: '16px' }}>
              {lang[languages].footer_schedule}
            </p>
            <p style={{ paddingLeft: '16px' }}>Пн-Чт: 8:30 - 18:00</p>
            <p style={{ paddingLeft: '16px' }}>Пт: 8:30 - 17:00</p>
            <p style={{ paddingLeft: '16px' }}>
              {'Сб: '} {lang[languages].footer_dayOff}
            </p>
            <p style={{ paddingLeft: '16px' }}>
              {/* {lang[languages].footer_Sunday} 9:00 - 17:00 */}
              {lang[languages].footer_Sunday} {' '} {lang[languages].footer_dayOff}
            </p>
            <p style={{ paddingTop: '16px' }}>
              {lang[languages].footer_comments}
            </p>
            <p style={{ paddingLeft: '16px' }}>Пн-Пт: 10:00 - 12:00</p>
            <p style={{ paddingTop: '16px' }}>
              {lang[languages].footer_address}
            </p>
          </div>
          <div style={{ padding: '16px' }}>
            <p>
              <b>{lang[languages].footer_account}</b>
            </p>
            <hr style={{ color: 'var(----primary-white)' }} />
            <P onClick={onOpenModalAutorization}>
              {lang[languages].authorization}
            </P>
          </div>
        </Section>
      </Container>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
      {isModalAutorizationShown && (
        <AutorizationModule onClose={onCloseModal} />
      )}
    </footer>
  );
};

export default Footer;
