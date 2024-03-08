import { useSelector } from 'react-redux';
import {
  Container,
  Section,
  H1,
  // Span,
  // H3,
  // DivBlock,
  P,
  Ul,
  Li,
  // Img,
  H4,
} from 'pages/HomePage/HomePage.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import delivery from 'assets/images/jpg/delivery.jpg';
import meest from 'assets/images/jpg/meest.jpg';
import novaPoshta from 'assets/images/jpg/novaPoshta.jpg';
import ukrposhta from 'assets/images/jpg/ukrposhta.jpg';

const DeliveryPage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <Container>
      <Section>
        <H1>
          <sup>Доставка</sup>
        </H1>
        {/* <h2
          style={{ margin: '50px auto', textAlign: 'center', fontSize: '50px' }}
        >
          Page under construction
        </h2> */}
        <P>
          <b>
            <i>{lang[languages].deliveryPage_p1}</i>
          </b>
        </P>
        <ul>
          <Li>
            <a href="https://novaposhta.ua/basic_tariffs">
              <img src={novaPoshta} alt="Nova poshta icon" width={'150px'} />
            </a>
            {lang[languages].deliveryPage_ul1_li1}
            {/* Доставка в отделение Новой Почты в вашем населенном пункте. */}
          </Li>
          <Li>
            <a href="https://track.ukrposhta.ua/tracking_UA.html">
              <img src={ukrposhta} alt="Ukrposhta icon" width={'150px'} />
            </a>
            {lang[languages].deliveryPage_ul1_li2}
            {/* Доставка в отделение Укрпочты в вашем населенном пункте. */}
          </Li>
          <Li>
            <a href="https://delivery-auto.com/?token=0f61503f-b7a5-4f5c-ab08-9668b6a6bf61">
              <img src={delivery} alt="Delivery icon" width={'150px'} />
            </a>
            {lang[languages].deliveryPage_ul1_li3}
            {/* Доставка в отделение Delivery в вашем населенном пункте. */}
          </Li>
          <Li>
            <span>
              <a href="https://ua.meest.com/parcel-track">
                <img src={meest} alt="Meest icon" width={'150px'} />
              </a>
            </span>
            <span>{lang[languages].deliveryPage_ul1_li4}</span>
            {/* Доставка в отделение Meest в вашем населенном пункте. */}
          </Li>
          <Li>
            <b>{lang[languages].deliveryPage_ul1_li5_1}</b>
            {lang[languages].deliveryPage_ul1_li5_2}
            {/* Самовывоз: Вы можете забрать заказ самостоятельно из нашего магазина
            в г. Балта, Одесская область. */}
          </Li>
        </ul>
        <P>
          <b>
            <i>{lang[languages].deliveryPage_p2}</i>
          </b>
        </P>
        <ul>
          <Li>
            Стоимость доставки рассчитывается согласно тарифам
            компании-перевозчика.
          </Li>
          <Li>Самовывоз: Бесплатно.</Li>
        </ul>
        <P>
          <b>
            <i>{lang[languages].deliveryPage_p3} Сроки доставки:</i>
          </b>
        </P>
        <Ul>
          <Li> Новая Почта: 1-3 дня. </Li>
          <Li> Укрпочта: 2-5 дней. </Li>
          <Li> Delivery: 1-3 дня. </Li>
          <Li> Meest Express: 1-3 дня. </Li>
          <Li> Самовывоз: В день заказа. </Li>
        </Ul>
        <P>
          <b>
            <i>{lang[languages].homePage_p2} Оплата:</i>
          </b>
        </P>
        <Ul>
          <Li>
            {' '}
            Наложенным платежом: Вы можете оплатить заказ при получении в
            отделении почты.{' '}
          </Li>
          <Li>
            {' '}
            Предоплата на карту: Вы можете оплатить заказ на карту ПриватБанка.{' '}
          </Li>
        </Ul>
        <P>
          <b>
            <i>{lang[languages].homePage_p2} Обратите внимание:</i>
          </b>
        </P>
        <Ul>
          <Li>Доставка заказов осуществляется только по территории Украины.</Li>
          <Li>
            Сроки доставки могут быть увеличены в связи с форс-мажорными
            обстоятельствами.
          </Li>
          <Li>
            Перед отправкой заказа мы обязательно проверяем его на наличие
            повреждений.
          </Li>
        </Ul>
        <P>
          <b>
            <i>
              {lang[languages].homePage_p2} Если у вас есть какие-либо вопросы
              по поводу доставки, пожалуйста, свяжитесь с нами:
            </i>
          </b>
        </P>
        <ul>
          <Li>Телефон: +380 (097) 123-45-67</Li>
          <Li>Email: [удаленный электронный адрес]</Li>
        </ul>
        <H4>
          <b>{lang[languages].homePage_h4} Приятных покупок!</b>
        </H4>
      </Section>
    </Container>
  );
};

export default DeliveryPage;


// Доставка
// Способы доставки:

// Новая Почта: Доставка в отделение Новой Почты в вашем населенном пункте.
// Укрпочта: Доставка в отделение Укрпочты в вашем населенном пункте.
// Justin: Доставка в отделение Justin в вашем населенном пункте.
// Самовывоз: Вы можете забрать заказ самостоятельно из нашего магазина в г. Балта, Одесская область.
// Стоимость доставки:

// Новая Почта: Стоимость доставки Новой Почтой рассчитывается согласно тарифам компании.
// Укрпочта: Стоимость доставки Укрпочтой рассчитывается согласно тарифам компании.
// Justin: Стоимость доставки Justin рассчитывается согласно тарифам компании.
// Самовывоз: Бесплатно.
// Сроки доставки:

// Новая Почта: 1-3 дня.
// Укрпочта: 2-5 дней.
// Justin: 1-3 дня.
// Самовывоз: В день заказа.
// Оплата:

// Наложенным платежом: Вы можете оплатить заказ при получении в отделении почты.
// Предоплата на карту: Вы можете оплатить заказ на карту ПриватБанка.
// Обратите внимание:

// Доставка заказов осуществляется только по территории Украины.
// Сроки доставки могут быть увеличены в связи с форс-мажорными обстоятельствами.
// Перед отправкой заказа мы обязательно проверяем его на наличие повреждений.
// Если у вас есть какие-либо вопросы по поводу доставки, пожалуйста, свяжитесь с нами:

// Телефон: +380 (097) 123-45-67
// Email: [удаленный электронный адрес]
// https://contacts.google.com/

// Приятных покупок!

// -------------------------------------------------------------
// V2

// Доставка
// Способы доставки:

// Новая Почта: Доставка в отделение Новой Почты по всей Украине. Срок доставки 1-3 дня.
// Укрпочта: Доставка в отделение Укрпочты по всей Украине. Срок доставки 3-5 дней.
// Самовывоз: Вы можете забрать заказ самостоятельно из нашего магазина в г. Балта, Одесская область.
// Стоимость доставки:

// Новая Почта:
// До 30 кг:
// Бесплатно - при заказе от 3000 грн.
// 50 грн. - при заказе до 3000 грн.
// От 30 до 50 кг:
// 70 грн. - при заказе от 5000 грн.
// 100 грн. - при заказе до 5000 грн.
// Укрпочта:
// До 2 кг:
// Бесплатно - при заказе от 2000 грн.
// 30 грн. - при заказе до 2000 грн.
// От 2 до 5 кг:
// 40 грн. - при заказе от 4000 грн.
// 60 грн. - при заказе до 4000 грн.
// Самовывоз: Бесплатно.
// Сроки доставки:

// Новая Почта: 1-3 дня.
// Укрпочта: 3-5 дней.
// Самовывоз: Вы можете забрать заказ в день оформления, после подтверждения его готовности.
// Оплата:

// Наложенным платежом: Вы можете оплатить заказ при получении в отделении Новой Почты или Укрпочты.
// Онлайн-оплата: Вы можете оплатить заказ онлайн с помощью карты Visa/MasterCard.
// Контактная информация:

// Телефон: +380 (00) 000-00-00
// Email: [удаленный электронный адрес]
// Важно:

// Перед оформлением заказа, пожалуйста, ознакомьтесь с его условиями.
// Мы не несем ответственности за задержки в доставке, caused by форс-мажорными обстоятельствами.
// ## Дополнительная информация

// https://novaposhta.ua/
// https://www.ukrposhta.ua/ua
// ## Примеры текстов для разных разделов страницы:

// 1. Заголовок:

// Доставка электротоваров по всей Украине
// Быстрая и удобная доставка
// Выберите способ доставки, который вам подходит
// 2. Описание:

// Мы предлагаем несколько способов доставки, чтобы вы могли выбрать наиболее удобный для вас.
// Все заказы доставляются в кратчайшие сроки.
// Вы можете отследить статус вашего заказа онлайн.
// 3. Преимущества:

// Бесплатная доставка при заказе от 3000 грн.
// Доставка в день заказа (при самовывозе)
// Оплата при получении
// 4. Гарантии:

// Мы гарантируем сохранность вашего заказа.
// В случае повреждения товара при доставке, мы вернем вам деньги.
// 5. Контактная информация:

// Если у вас есть вопросы, пожалуйста, свяжитесь с нами.
// Мы будем рады помочь вам выбрать способ доставки и оформить заказ.



// -------------------------------------------------
//   v3

// Доставка
// Способы доставки:

// Новая Почта: Доставка в отделение Новой Почты по всей Украине.
// Укрпочта: Доставка в отделение Укрпочты по всей Украине.
// Самовывоз: Вы можете забрать заказ бесплатно в нашем магазине в г. Балта, Одесская область.
// Стоимость доставки:

// Новая Почта: Стоимость доставки Новой Почтой рассчитывается согласно тарифам компании.
// Укрпочта: Стоимость доставки Укрпочтой рассчитывается согласно тарифам компании.
// Самовывоз: Бесплатно.
// Сроки доставки:

// Новая Почта: 1-3 дня.
// Укрпочта: 3-5 дней.
// Самовывоз: Вы можете забрать заказ в день оформления, после подтверждения его готовности.
// Оплата:

// Наложенным платежом: Вы можете оплатить заказ при получении в отделении Новой Почты или Укрпочты.
// Предоплата: Вы можете оплатить заказ онлайн на сайте магазина.
// Отслеживание заказа:

// Новая Почта: Вы можете отследить свой заказ на сайте Новой Почты по номеру экспресс-накладной.
// Укрпочта: Вы можете отследить свой заказ на сайте Укрпочты по номеру отправления.
// Дополнительная информация:

// Доставка заказов на сумму свыше 10 000 грн. осуществляется бесплатно.
// Мы не осуществляем доставку товаров в оккупированные Российской Федерацией территории.
// Контакты:

// Телефон: +380 (000) 000-00-00
// Email: [удаленный электронный адрес]
// https://novaposhta.ua/
// https://www.ukrposhta.ua/ua