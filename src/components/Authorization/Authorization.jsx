import { useState } from "react";
import { useSelector } from "react-redux";
import user from "assets/images/svg/user_icon.svg";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import AutorizationModule from "components/AutorizationModule/AutorizationModule";


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
      <div onClick={onOpenModal} style={{display: "flex", alignItems: 'center'}}>
        <div>{lang[languages].Authorization}</div>
        <img src={user} alt="user icon" style={{width: '35px'}}/>
      </div>
      {isModalShown && <AutorizationModule onClose={onCloseModal} />}
    </>
  );
}

export default Authorization;