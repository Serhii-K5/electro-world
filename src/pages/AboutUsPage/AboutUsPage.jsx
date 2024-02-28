// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { fetchAdverts } from 'redux/operations';

// import CarCard from 'components/CarCard/CarCard';
// import { selectAdverts } from 'redux/selectors';

// import Hero from "components/Hero/Hero";
// import OurOffice from "components/OurOffice/OurOffice";
// import {
//   Ul,
//   NavLinkStyle,
//   Container,
//   Div,
//   H2,
//   Section,
//   Img,
//   Button,
// } from './AboutUsPage.styled';

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

const AboutUsPage = () => {
  // const dispatch = useDispatch();
  // const adverts = useSelector(selectAdverts);
  // const [isAboutUsShown, setIsAboutUsShown] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchAdverts());
  // }, [dispatch]);

  // const handleCardsRandom = () => {
  //   const cardTotall =
  //     adverts.length > 0 && adverts.length > 4 ? 4 : adverts.length;
  //   const cardsRandom = [];
  //   cardsRandom.length = 4;

  //   for (let index = 0; index < cardTotall; index++) {
  //     cardsRandom.push(
  //       <li key={index}>
  //         <CarCard card={adverts[getRandomInRange(0, adverts.length)]} />
  //       </li>
  //     );
  //   }
  //   return cardsRandom;
  // };

  // const onOpenAboutUs = () => {
  //   setIsAboutUsShown(!isAboutUsShown);
  // };

  return (
    <>
      <p>About Us page</p>
      <h2 style={{margin: '50px auto', textAlign: 'center', fontSize: '50px'}}>Page under construction</h2>
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

export default AboutUsPage;


// Вариант 1: "О нас"
// Заголовок:
// "О нас: Мы - ваш надежный партнер в мире электротоваров"

// Текст:
// "Добро пожаловать в [название вашего магазина], вашу надежную точку в мире электротоваров и комплектующих к ним. Мы являемся ведущими специалистами в отрасли, обеспечивая наших клиентов широким ассортиментом продукции высочайшего качества по конкурентоспособным ценам.

// Наша миссия:
// Мы стремимся обеспечить наших клиентов совершенными продуктами и выдающимися услугами, превосходя их ожидания в каждом аспекте нашего бизнеса.

// Наши преимущества:

// Широкий ассортимент продукции от ведущих мировых производителей.
// Высокое качество продукции, подтвержденное многолетним опытом и отзывами клиентов.
// Конкурентоспособные цены и гибкая система скидок для наших постоянных клиентов.
// Профессиональная команда консультантов, готовых предоставить вам экспертную помощь и советы.
// Наши ценности:
// В [название вашего магазина] мы ценим доверие наших клиентов, честность в деловых отношениях и постоянное стремление к совершенствованию.

// Связаться с нами:
// Мы готовы ответить на любые ваши вопросы и предоставить необходимую помощь. Свяжитесь с нами сегодня, и мы с удовольствием поможем вам найти идеальное решение для ваших потребностей в электротоварах.

// Подвал:
// © [Название вашего магазина] [Год]. Все права защищены.

// Вариант 2: "О нас"
// Заголовок:
// "О нас: Инновации в мире электротехники"

// Текст:
// "Добро пожаловать в [название вашего магазина], вашего надежного партнера в сфере электротоваров и комплектующих к ним. Мы - команда энтузиастов, посвятивших свою жизнь созданию инновационных решений в области электротехники.

// Наша история:
// [Название вашего магазина] был основан в [год], с твердым убеждением в том, что технологии могут сделать мир лучше. С тех пор мы стремимся предоставлять нашим клиентам только лучшие продукты и услуги, соответствующие самым высоким стандартам качества и инноваций.

// Наша миссия:
// Наша миссия - делать технологии доступными и понятными для всех, обеспечивая инновационные и эффективные решения в сфере электротехники.

// Наши ценности:

// Инновации: Мы постоянно следим за последними тенденциями и разработками в отрасли, чтобы предложить нашим клиентам самые передовые решения.
// Качество: Мы гордимся качеством нашей продукции и услуг, обеспечивая надежность и долговечность в каждом изделии.
// Обслуживание клиентов: Мы стремимся превзойти ожидания наших клиентов, предоставляя отличное обслуживание и индивидуальный подход к каждому.
// Связаться с нами:
// Мы готовы помочь вам реализовать ваши проекты. Свяжитесь с нами сегодня, и дайте нам шанс превзойти ваши ожидания.

// Подвал:
// ©[Название вашего магазина][Год].Все права защищены.
