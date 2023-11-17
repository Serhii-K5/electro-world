import {
  Aside,
  Li,
  NavContainer,
  NavLinkStyle,
} from './AsideBar.styled';

const AsideBar = () => {
  return (
    <Aside>
      <NavContainer>
        <NavLinkStyle to="/">Home</NavLinkStyle>
        <ul style={{ padding: '0 25px' }}>
          <Li>
            <a href="#section1"> - About Us</a>
          </Li>
          <Li>
            <a href="#section2"> - Our fleet</a>
          </Li>
          <Li>
            <a href="#section3"> - Contact us</a>
          </Li>
        </ul>
        <NavLinkStyle to="/catalog">Catalog</NavLinkStyle>
        <NavLinkStyle to="/orders">Orders</NavLinkStyle>
      </NavContainer>
    </Aside>
  );
};

export default AsideBar;
