import { useState } from "react";
import { useSelector } from "react-redux";
import user from "assets/images/svg/user_icon.svg";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import LoginModule from "components/LoginModule/LoginModule";
import { Div, Img } from "./Authorization.styled";


// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './redux/rootReducer';

const Authorization = () => {
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };


  // const store = configureStore({
  //   reducer: rootReducer,
  // });


  return (
    <>
      <Div onClick={onOpenModal}>
        <b>{lang[languages].authorization.toUpperCase()}</b>
        <Img src={user} alt="user icon"/>
      </Div>

      {/* <Provider store={store}>
        <div>
          <LoginModule />
        </div>
      </Provider> */}

      {isModalShown && <LoginModule onClose={onCloseModal} />}
    </>
  );
}

export default Authorization;