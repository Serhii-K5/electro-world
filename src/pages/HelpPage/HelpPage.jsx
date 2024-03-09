import { useSelector } from 'react-redux';
// import { DeliveryLi, Span } from "./DeliveryPage.styled";

import {
  Container,
  Section,
  H1,
  Span,
  H3,
  // DivBlock,
  // P,
  Ul,
  Li,
  // Img,
  H4,
} from 'pages/HomePage/HomePage.styled';
import { P, Ol, LiItem, Div } from "./HelpPage.styled";

import { PHONE_KS_STR, PHONE_MTC_STR} from "constantValues/constants";

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const HelpPage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <>
      <Container>
        <Section>
          <H1>
            {lang[languages].helpPage_h1.toUpperCase()}
          </H1>
          <P>
            {lang[languages].helpPage_p1_1}
            <Span>
              <b>Electro world</b>
            </Span>.
            {lang[languages].helpPage_p1_2}            
          </P>
          <H3>
            <b>{lang[languages].helpPage_h3_1}</b>
          </H3>          
          <Ol>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li1}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p2}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul1_li1}</Li>
                  <Li>{lang[languages].helpPage_ul1_li2}</Li>
                  <Li>{lang[languages].helpPage_ul1_li3}</Li>
                  <Li>{lang[languages].helpPage_ul1_li4}</Li>
                  <Li>{lang[languages].helpPage_ul1_li5}</Li>
                  <Li>{lang[languages].helpPage_ul1_li6}</Li>
                  <Li>{lang[languages].helpPage_ul1_li7}</Li>
                </Ul>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li2}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p3}</P>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li3}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p4}</P>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li4}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p5}</P>
                <Ul>
                  <Li><b>Телефон:</b> {PHONE_KS_STR}, {PHONE_MTC_STR} </Li>
                  <Li><b>Email:</b> support@electro-world.com </Li>
                  <Li><b>Онлайн-чат:</b> {lang[languages].helpPage_ul2_li3} </Li>
                  <Li>{lang[languages].helpPage_ul2_li4} </Li>
                </Ul>
              </Div>
            </LiItem>
          </Ol>
          <H3>
            <b>{lang[languages].helpPage_h3_2}</b>
          </H3>
          <Ol>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol2_li1}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p6}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul3_li1}</Li>
                  <Li>{lang[languages].helpPage_ul3_li2}</Li>
                  <Li>{lang[languages].helpPage_ul3_li3}</Li>
                </Ul>
                <P>{lang[languages].helpPage_p7}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul4_li1}</Li>
                  <Li>{lang[languages].helpPage_ul4_li2}</Li>
                  <Li>{lang[languages].helpPage_ul4_li3}</Li>
                </Ul>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol2_li2}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p8}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul5_li1}</Li>
                  <Li>{lang[languages].helpPage_ul5_li2}</Li>
                  <Li>{lang[languages].helpPage_ul5_li3}</Li>
                  <Li>{lang[languages].helpPage_ul5_li4}</Li>
                </Ul>
              </Div>
            </LiItem>
          </Ol>
          <H4>
            <b>{lang[languages].deliveryPage_h4}</b>
          </H4>
        </Section>
      </Container>
    </>
  );
};

export default HelpPage;

// Помощь и поддержка
// Добро пожаловать в раздел помощи и поддержки Electro World! Здесь вы найдете ответы на часто задаваемые вопросы и руководства по использованию нашего сайта.

// Часто задаваемые вопросы (FAQ)
// 1. Как оформить заказ?
// Для оформления заказа на нашем сайте выполните следующие шаги:

// Выберите необходимый товар из каталога.
// Нажмите кнопку "Добавить в корзину".
// Перейдите в корзину, нажав на иконку корзины в правом верхнем углу.
// Проверьте содержимое корзины и нажмите кнопку "Оформить заказ".
// Заполните необходимую информацию для доставки и выберите способ оплаты.
// Нажмите кнопку "Подтвердить заказ".
// 2. Как отследить мой заказ?
// После оформления заказа вы получите электронное письмо с подтверждением заказа и информацией о его статусе. Вы также можете отследить статус вашего заказа, войдя в свой аккаунт на нашем сайте и перейдя в раздел "Мои заказы".

// Как вернуть товар?
// Возврат товара можно совершить в сроки утановленные законодательством Украин непосредственно в нашем магазине или оговорить способ возврата, предварительно связавшись с нами удобным способом.

// 3. Как связаться с нами для получения поддержки?
// Если у вас возникли вопросы или проблемы, связанные с вашим заказом или использованием нашего сайта, вы можете связаться с нашей службой поддержки по следующим контактным данным:

// Телефон: +123456789
// Электронная почта: support@electro-world.com
// Онлайн-чат: Доступен в правом нижнем углу сайта.

// Руководства по использованию
// 1. Регистрация и вход в аккаунт
// Для создания аккаунта на нашем сайте выполните следующие шаги:

// Нажмите на кнопку "Войти" в правом верхнем углу сайта.
// Выберите "Зарегистрироваться".
// Заполните необходимую информацию в форме регистрации и нажмите кнопку "Зарегистрироваться".
// Для входа в аккаунт:

// Нажмите на кнопку "Войти" в правом верхнем углу сайта.
// Введите свой адрес электронной почты и пароль.
// Нажмите кнопку "Войти".
// 2. Изменение данных в профиле
// Чтобы изменить свои данные в профиле, выполните следующие действия:

// Войдите в свой аккаунт.
// Перейдите в раздел "Мой профиль".
// Нажмите кнопку "Редактировать профиль".
// Внесите необходимые изменения и нажмите кнопку "Сохранить".


// 1. Структура страницы:

// Главная страница:

// Часто задаваемые вопросы (FAQ):
// Как оформить заказ?
// Как оплатить заказ?
// Как осуществляется доставка?
// Как вернуть товар?
// и т.д.
// Контакты:
// Email
// Телефон
// Адрес
// Ссылки на другие разделы:
// О магазине
// Гарантия
// Политика конфиденциальности
// и т.д.
// Подробные статьи:

// Как оформить заказ:
// Пошаговая инструкция с изображениями.
// Ответы на возможные вопросы.
// Как оплатить заказ:
// Описание доступных способов оплаты.
// Инструкции по оплате.
// Как осуществляется доставка:
// Информация о сроках и стоимости доставки.
// Отслеживание заказа.
// Как вернуть товар:
// Условия возврата товара.
// Процесс возврата товара.