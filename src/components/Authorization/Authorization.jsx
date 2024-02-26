import { useSelector } from "react-redux";
import user from "assets/images/svg/user_icon.svg";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const Authorization = () => {
  const languages = useSelector(selectLanguages);

  return (
    <div style={{display: "flex", alignItems: 'center'}}>
      <div>{lang[languages].Authorization}</div>
      <img src={user} alt="user icon" />
    </div>

  );
}

export default Authorization;