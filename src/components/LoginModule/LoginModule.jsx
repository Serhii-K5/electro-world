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
// import { Span } from './LoginModule.styled';

import TypeAuthentification from 'components/AuthenticationType/AuthenticationType';

import cross from "assets/images/svg/cross.svg";
import UserFormRegister from 'components/UserFormRegister/UserFormRegister';
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const LoginModule = ({ onClose }) => {
  const languages = useSelector(selectLanguages);
  // const [credentials, setCredentials] = useState({ email: '', password: '' });
  // const dispatch = useDispatch();
  const [typeAuth, setTypeAuth] = useState('');
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
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
              <H2>{lang[languages].authorization.toUpperCase()}</H2>
            </TitleDiv>
            <CloseBtn type="button" onClick={onClose}>
              <img src={cross} alt="close button" />
            </CloseBtn>
            <Section>
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

export default LoginModule;


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

