import { useSelector } from "react-redux";
import { 
  Div,
  Section,
  P,
  Ul,
  Li,
  H4
} from "./HomePage.styled";

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
 

const HomePage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <Div>
      <Section>
        {/* slider */}
        <h1 style={{ textAlign: 'center' }}>
          {lang[languages].homePage_h1}
          <span style={{color: 'var(--text-second-orange)'}}>
            {" "} Electro world {" "} 
          </span>
          {lang[languages].homePage_h1_2}
        </h1>
        <h3 style={{ padding: '8px 0px', textAlign: 'center' }}>
          <i> {lang[languages].homePage_h3} </i>
        </h3>
        <P>
          {lang[languages].homePage_p1} <b>Electro world</b>!
        </P>  
        <P>
          <b>Electro world</b>
          {lang[languages].homePage_p2}
        </P>  
        <P>
          <b><i>{lang[languages].homePage_p3}</i></b>
        </P>
        <Ul>
          <Li>
            <i>{lang[languages].homePage_ul1_li1}</i>
            {lang[languages].homePage_ul1_li1_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul1_li2}</i>
            {lang[languages].homePage_ul1_li2_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul1_li3}</i>
            {lang[languages].homePage_ul1_li3_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul1_li4}</i>
            {lang[languages].homePage_ul1_li4_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul1_li5}</i>
            {lang[languages].homePage_ul1_li5_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul1_li6}</i>
            {lang[languages].homePage_ul1_li6_2}
          </Li>
        </Ul>
        <P>
          {lang[languages].homePage_p4}
        </P>
        <P>
          <b><i>{lang[languages].homePage_p5}</i></b>
        </P>
        <Ul>
          <Li>
            <i>{lang[languages].homePage_ul2_li1}</i>
            {lang[languages].homePage_ul2_li1_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul2_li2}</i>
            {lang[languages].homePage_ul2_li2_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul2_li3}</i>
            {lang[languages].homePage_ul2_li3_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul2_li4}</i>
            {lang[languages].homePage_ul2_li4_2}
          </Li>
          <Li>
            <i>{lang[languages].homePage_ul2_li5}</i>
            {lang[languages].homePage_ul2_li5_2}
          </Li>
        </Ul>
        <P>
          <b><i>{lang[languages].homePage_p6}</i></b>
        </P>  
        <Ul>
          <Li>{lang[languages].homePage_ul3_li1}</Li>
          <Li>{lang[languages].homePage_ul3_li2}</Li>
          <Li>{lang[languages].homePage_ul3_li3}</Li>
        </Ul>
        <P>
          <b><i>{lang[languages].homePage_p6}</i></b>
        </P>
        <Ul>
          <Li>{lang[languages].homePage_ul4_li1}</Li>
          <Li>{lang[languages].homePage_ul4_li2}</Li>
          <Li>{lang[languages].homePage_ul4_li3}</Li>
        </Ul>
        <H4>
          <b>{lang[languages].homePage_h4}</b>
        </H4>
      </Section>
    </Div>
  );
};

export default HomePage;
