import { useDispatch, useSelector } from "react-redux";
import { selectLanguages } from "redux/selectors";
import { changeLanguage } from "redux/slice/languageSlice";
import {  
  Div,
  Ul,
  Li,
} from "./LanguageBar.styled";
import lang from "assets/json/language.json";

export const LanguageBar = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  
  const handleClick = (value) => {
    dispatch(changeLanguage(value));
  };
  
  return (
    <Ul>
      {lang.length > 0 && lang.map((el, index)=> 
        languages === el.lang_id ? 
          <Li key={index} onClick={() => (handleClick(el.lang_id))} style={{ backgroundColor: 'var(--bg-second-green)' }}>{el.lang_name}</Li>
          : <Li key={index} onClick={() => (handleClick(el.lang_id))} >{el.lang_name}</Li>
        )}
    </Ul>
  )
};

// export default LanguageBar;