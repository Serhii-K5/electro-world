import { useSelector } from 'react-redux';

import {
  Container,
  Section,
  H1,
  P,
  Span,
  Ul,
  Li,
  H4
} from 'pages/HomePage/HomePage.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const AboutUsPage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <Container>
      <Section>
        <H1>{lang[languages].aboutUsPage_h1}</H1>
        <P>
          {lang[languages].aboutUsPage_p1_1}
          <Span>
            <b>Electro world</b>
          </Span>
          {lang[languages].aboutUsPage_p1_2}
        </P>
        <P>
          <b>{lang[languages].aboutUsPage_p2}</b>
        </P>
        <ul>
          <Li>{lang[languages].aboutUsPage_ul1_li}</Li>
        </ul>
        <P>
          <b>{lang[languages].aboutUsPage_p3}</b>
        </P>
        <Ul>
          <Li>{lang[languages].aboutUsPage_ul2_li1}</Li>
          <Li>{lang[languages].aboutUsPage_ul2_li2}</Li>
          <Li>{lang[languages].aboutUsPage_ul2_li3}</Li>
          <Li>{lang[languages].aboutUsPage_ul2_li4}</Li>
        </Ul>
        <P>
          <b>{lang[languages].aboutUsPage_p4}</b>
        </P>
        <ul>
          <Li>
            <Span>
              <b>Electro world</b>
            </Span>{' '}
            {lang[languages].aboutUsPage_ul3_li}
          </Li>
        </ul>
        <P>
          <b>{lang[languages].aboutUsPage_p5}</b>
        </P>
        <ul>
          <Li>
            {lang[languages].aboutUsPage_ul4_li_1}
            <Span>
              <b>Electro world</b>
            </Span>
            {lang[languages].aboutUsPage_ul4_li_2}
          </Li>
        </ul>
        <Ul>
          <Li>{lang[languages].aboutUsPage_ul5_li1}</Li>
          <Li>{lang[languages].aboutUsPage_ul5_li2}</Li>
          <Li>{lang[languages].aboutUsPage_ul5_li3}</Li>
        </Ul>
        <P>
          <b>{lang[languages].aboutUsPage_p6}</b>
        </P>
        <ul>
          <Li>{lang[languages].aboutUsPage_ul6_li}</Li>
        </ul>
        <H4>
          <b>
            <i>{lang[languages].aboutUsPage_h4}</i>
          </b>
        </H4>
      </Section>
    </Container>
  );
};

export default AboutUsPage;

// "homePage_h4": "Заходите к нам и убедитесь сами!",
    // "aboutUsPage_h1": "Мы - ваш надежный партнер в мире электротоваров",  
    // "aboutUsPage_p1_1": "Добро пожаловать в ",  
    // "aboutUsPage_p1_2": ", вашу надежную точку в мире электротоваров и комплектующих к ним. Мы являемся ведущими специалистами в отрасли, обеспечивая наших клиентов широким ассортиментом продукции высочайшего качества по конкурентоспособным ценам.",  
    // "aboutUsPage_p2": "Наша миссия:",  
    // "aboutUsPage_ul1_li": "Мы стремимся обеспечить наших клиентов совершенными продуктами и выдающимися услугами, превосходя их ожидания в каждом аспекте нашего бизнеса.",  
    // "aboutUsPage_p3": "Наши преимущества:",  
    // "aboutUsPage_ul2_li1": "широкий ассортимент продукции от ведущих мировых производителей;",  
    // "aboutUsPage_ul2_li2": "высокое качество продукции, подтвержденное многолетним опытом и отзывами клиентов;",  
    // "aboutUsPage_ul2_li3": "конкурентоспособные цены и гибкая система скидок для наших постоянных клиентов;",  
    // "aboutUsPage_ul2_li4": "профессиональная команда консультантов, готовых предоставить вам экспертную помощь и советы.",  
    // "aboutUsPage_p4": "Наша история:",  
    // "aboutUsPage_ul3_li": " был основан в 2012 году, с твердым убеждением в том, что технологии могут сделать мир лучше. С тех пор мы стремимся предоставлять нашим клиентам только лучшие продукты и услуги, соответствующие самым высоким стандартам качества и инноваций.",  
    // "aboutUsPage_p5": "Наши ценности:",  
    // "aboutUsPage_ul4_li_1": "В ",  
    // "aboutUsPage_ul4_li_2": " мы ценим доверие наших клиентов, честность в деловых отношениях и постоянное стремление к совершенствованию. И поэтому особое внимание мы уделяем:",  
    // "aboutUsPage_ul5_li1": "постоянному мониторингу за последними тенденциями и разработками в отрасли, что позволяет предлагать нашим клиентам самые передовые решения;",  
    // "aboutUsPage_ul5_li2": "качеству нашей продукции и услуг, которым мы гордимся, и которое обеспечивая надежность и долговечность в каждом изделии;",  
    // "aboutUsPage_ul5_li3": "обслуживанию клиентов, предоставляя отличное обслуживание и индивидуальный подход к каждому.",  
    // "aboutUsPage_p6": "Связаться с нами:",  
    // "aboutUsPage_ul6_li": "Мы готовы ответить на любые ваши вопросы и предоставить необходимую помощь. Свяжитесь с нами сегодня, и мы с удовольствием поможем вам найти идеальное решение для ваших потребностей",  
    // "aboutUsPage_h4": "Дайте нам шанс превзойти ваши ожидания."