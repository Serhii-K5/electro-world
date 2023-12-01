// import { useSelector } from "react-redux";
// import { selectLanguages } from "redux/selectors";
import { DivPage } from "pages/CatalogPage/CatalogPage.styled";
import {  
  Div,
  Ul,
  Li,
} from "./LanguageBar.styled";
import lang from "assets/json/language.json";

export const LanguageBar = () => {
  // const languages = useSelector(selectLanguages);
  const languages = "UK";
  
  return (
    // <div style={{ textAlign: "right", justifyContent: 'center', maxWidth: '1440px'}}>
    //   {/* <Span style={(languages === "" || languages === "UK") && { backgroundColor: 'var(--bg-second-green)' }}>UK</Span>
    //   <Span style={languages === "RU" && { backgroundColor: 'var(--bg-second-green)' }}>RU</Span> */}
    //   <Div style={{display: 'inline', backgroundColor: 'var(--bg-second-green)'}}>UK</Div>
    //   <Div>RU</Div>      
    // </div>
    <Ul>
      {lang.length > 0 && lang.map((el, index)=> 
        <Li key={index} style={{ backgroundColor: 'var(--bg-second-green)' }}>{el.lang_name}</Li>
      )}
      {/* <li style={{ display: 'inline-block', padding: '5px', backgroundColor: 'blue', border: '1px solid blue', color: 'white', borderRadius: '5px' }}>UK</li>
      <li style={{display: 'inline-block', padding: '5px', border: '1px solid blue', borderRadius: '5px', marginLeft: '5px'}}>RU</li> */}
    </Ul>
  )
};

// export default LanguageBar();