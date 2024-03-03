import { useState } from "react";
import { useSelector } from "react-redux";
import user from "assets/images/svg/user_icon.svg";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import AutorizationModule from "components/AutorizationModule/AutorizationModule";
import { Div, Img } from "./Authorization.styled";

const Authorization = () => {
  const languages = useSelector(selectLanguages);
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
        {lang[languages].Authorization}
        <Img src={user} alt="user icon"/>
      </Div>
      {isModalShown && <AutorizationModule onClose={onCloseModal} />}
    </>
  );
}

export default Authorization;