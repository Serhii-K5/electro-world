import Logo from 'components/Logo/Logo';
// import {BgLogo, TextLogo } from "./Footer.styled";
import {BgLogo, TextLogo } from "../Layout/Layout.styled";

const Footer = () => {
  return (
    <footer>
      <section style={{backgroundColor: 'var(--text-color-primary-black)'}}>
        <div style={{maxWidth: '400px', padding: '16px', color: 'var(--text-color-white)'}}>
          <div style={{ width: '167px' }}>
            <Logo/>
          </div>
          <p>
            Щодня оновлюється каталог, більше 100 000 товарів в асортименті. Оптові
            ціни. Власна система логістики. Унікальна пропорційна сумі замовлення
            знижка для кожного покупця.
          </p>
          <p>© 2024 Electro world. Всі права захищені</p>
        </div>
        <div></div>
        <div></div>
        <div></div>        
      </section>
    </footer>
  )
};

export default Footer;