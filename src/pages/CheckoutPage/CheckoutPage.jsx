import { useSelector } from 'react-redux';

import {
  Container,
  Section,
  H1,
  // P,
  // Span,
  // Ul,
  // Li,
  // H4,
} from 'pages/HomePage/HomePage.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const CheckoutPage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <Container>
      <Section>
        <H1>{lang[languages].checkoutPage_h1.toUpperCase()}</H1>
        <h2 style={{ margin: '40px auto', textAlign: 'center' }}>
          <b>Page is under construction</b>
        </h2>
        <p>Ваш заказ на сумму </p>
        <span>[сумма] грн.</span>
        <p>
          Для оформления заказа, необходимы Ваши контактные данные. Пожалуйста,
          укажите как бы Вы хотели представиться?
        </p>

        {/* <H1>{lang[languages].aboutUsPage_h1}</H1>
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
        </ul> */}

        {/* <input
                type="checkbox"
                id="agreement"
                value={value}
                checked={checked}
                onChange={e => changeCheckbox(key, value, e)}
              />
              <label htmlFor="agreement">
                <Span>({count})</Span>
              </label> */}
      </Section>
    </Container>
  );
};

export default CheckoutPage;
