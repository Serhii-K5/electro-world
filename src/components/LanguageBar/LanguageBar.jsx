// import { useSelector } from "react-redux";
// import { selectLanguages } from "redux/selectors";
import { DivPage } from "pages/CatalogPage/CatalogPage.styled";
import {  
  Div,
} from "./LanguageBar.styled";

const LanguageBar = () => {
  // const languages = useSelector(selectLanguages);
  // const languages = "";
  
  return (
    <div style={{ textAlign: "right", justifyContent: 'center'}}>
      {/* <Span style={(languages === "" || languages === "UK") && { backgroundColor: 'var(--bg-second-green)' }}>UK</Span>
      <Span style={languages === "RU" && { backgroundColor: 'var(--bg-second-green)' }}>RU</Span> */}
      <Div style={{display: 'inline', backgroundColor: 'var(--bg-second-green)'}}>UK</Div>
      <Div>RU</Div>
      
    </div>
  )
};

export default LanguageBar();