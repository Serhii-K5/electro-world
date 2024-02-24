import Logo from 'components/Logo/Logo';
import { Container, NavLinkStyle } from "./Footer.styled";


const Footer = () => {
  return (
    <footer  style={{ backgroundColor: 'var(--text-color-primary-black)' }}>
      <Container style={{ color: 'var(--text-color-white)' }} >
        <section style={{display: 'flex'}}>
          <div style={{maxWidth: '490px', padding: '16px' }}>
            <div style={{ width: '167px' }}>
              <Logo/>
            </div>
            <p style={{paddingTop: '16px'}}>
              Щодня оновлюється каталог, більше 100 000 товарів в асортименті. Оптові
              ціни. Власна система логістики. Унікальна пропорційна сумі замовлення
              знижка для кожного покупця.
            </p>
            <p style={{paddingTop: '16px'}} > © 2024 Electro world. Всі права захищені</p>
          </div>
          <div style={{padding: '16px'}}>
            <p style={{paddingTop: '16px'}}>Головне меню</p>
            <hr />
            <NavLinkStyle>
              ДОМАШНЯ
            </NavLinkStyle>
            <NavLinkStyle>
              ЗАМОВЛЕННЯ
            </NavLinkStyle>
            <NavLinkStyle>
              ДОПОМОГА
            </NavLinkStyle>
            <NavLinkStyle>
              ПРО НАС
            </NavLinkStyle>
            <NavLinkStyle>
              ДОСТАВКА</NavLinkStyle>
            <NavLinkStyle>
              ПОВІДОМЛЕННЯ
            </NavLinkStyle>
          </div>
          <div style={{padding: '16px'}}>
            <p>Контакти</p>
            <hr style={{ color: '#FFF' }} />
            <p>+38(068)976-68-80</p>
            <p>Графік роботи:</p>
            <p>Пн-Чт:	8:30 - 18:00</p>
            <p>Пт:	8:30 - 17:00</p>
            <p>Сб:	Вихідний</p>
            <p>Нд:	9:00 - 17:00</p>
            <p>Робота з відгуками і пропозиціями:</p>
            <p>Пн-Пт:	10:00 - 12:00</p>
            <p>м.Балта, вул. Плеханівська 57А</p>
          </div>
          <div style={{padding: '16px'}}>
            <p>Мій обліковий запис</p>
            <hr style={{ color: '#FFF' }} />
            <p>Авторизація</p>
          </div>        
        </section>
      </Container>
    </footer>
  )
};

export default Footer;
