import { useState } from "react";
import { useSelector } from "react-redux";
import userIcon from 'assets/images/svg/user_icon.svg';
import { selectLanguages, selectUserName } from 'redux/selectors';
import lang from 'assets/json/language.json';
import LoginModule from "components/LoginModule/LoginModule";
import { Div, Img } from "./Authorization.styled";


const Authorization = () => {
  const languages = useSelector(selectLanguages);
  const user = useSelector(selectUserName);
  const curentUser = user === '' ? lang[languages].authorization : user;

  const [isModalShown, setIsModalShown] = useState(false);

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };


  return (
    <>
      <Div onClick={onOpenModal}>
        {/* <b>{lang[languages].authorization.toUpperCase()}</b> */}
        <b>{curentUser.toUpperCase()}</b>
        <Img src={userIcon} alt="user icon" />
      </Div>

      {isModalShown && (
        <LoginModule
          onClose={onCloseModal}
          nameWindows={lang[languages].authorization}
        />
      )}
    </>
  );
}

export default Authorization;