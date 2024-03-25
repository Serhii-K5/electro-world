import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { login } from 'redux/authSlice';

import {
  Overlay,
  ModalBacking,
  Modal,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

import {
  TitleDiv,
  Section,
  H2,
  P,
} from 'components/Feedback/Feedback.styled';

// import {
//   H1,
// } from 'pages/HomePage/HomePage.styled';

// import { Span } from './LoginModule.styled';

import TypeAuthentification from 'components/AuthenticationType/AuthenticationType';

import cross from "assets/images/svg/cross.svg";
import UserFormRegister from 'components/UserFormRegister/UserFormRegister';
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const CheckoutModule = ({ onClose, sum, numbeOfPositions }) => {
  const languages = useSelector(selectLanguages);
  // const [credentials, setCredentials] = useState({ email: '', password: '' });
  // const dispatch = useDispatch();
  const [typeAuth, setTypeAuth] = useState('');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCredentials({ ...credentials, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // dispatch(login(credentials));
  // };

  const handleSelect = type => {
    setTypeAuth(type);
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <ModalBacking>
          <Modal style={{ maxWidth: '40vw' }}>
            <TitleDiv>
              <H2>{lang[languages].checkoutModule_h1.toUpperCase()}</H2>
            </TitleDiv>
            <CloseBtn type="button" onClick={onClose}>
              <img src={cross} alt="close button" />
            </CloseBtn>
            <Section>
              <h2 style={{ margin: '40px auto', textAlign: 'center' }}>
                <b>Page is under construction</b>
              </h2>
              <p>
                <span>Ваш заказ: </span>
                <span>позиций: </span>
                {numbeOfPositions}
                <span>на сумму: </span>
                {sum}
                грн.
              </p>
              <p>
                Для оформления заказа, необходимы Ваши контактные данные.
                Пожалуйста, укажите как бы Вы хотели представиться и заполните
                выбранную форму.
              </p>
              <TypeAuthentification handleSelect={handleSelect} />

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

              <P>{lang[languages].loginModule_p1}</P>
              {/* <div style={{ padding: '25px' }}> */}
              <div>
                <TypeAuthentification handleSelect={handleSelect} />
              </div>
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
              {typeAuth !== '' && <UserFormRegister typeMassege={typeAuth} />}
            </Section>
          </Modal>
        </ModalBacking>
      </Overlay>
    </>
  );
};

export default CheckoutModule;


// Создайте компонент LoginPage:
// jsx
// Copy code
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/authSlice';

// const LoginPage = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(credentials));
//   };

//   return (
//     <div>
//       <h2>Авторизация</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Пароль:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Войти</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// Создайте файл authSlice.js в папке redux:
// javascript
// Copy code
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart(state) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     loginSuccess(state, action) {
//       state.isLoading = false;
//       state.user = action.payload;
//     },
//     loginFailure(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

// export default authSlice.reducer;

// export const login = (credentials) => async (dispatch) => {
//   try {
//     dispatch(loginStart());
//     // Здесь должен быть ваш API-запрос для авторизации
//     const user = await api.login(credentials);
//     dispatch(loginSuccess(user));
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };
// В вашем корневом файле приложения (App.js или аналогичном) настройте Redux Store:
// jsx
// Copy code
// import React from 'react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './redux/rootReducer';
// import LoginPage from './components/LoginPage';

// const store = configureStore({
//   reducer: rootReducer,
// });

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <LoginPage />
//       </div>
//     </Provider>
//   );
// };

// export default App;
// Это базовый пример страницы авторизации в React с использованием Redux Toolkit для управления состоянием приложения. Не забудьте настроить ваше API для обработки запросов на авторизацию.

