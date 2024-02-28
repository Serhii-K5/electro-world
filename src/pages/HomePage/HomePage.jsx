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
import img1 from "assets/images/image1.png";
import img2 from "assets/images/image2.png";
import img3 from "assets/images/image3.png";
 

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
        <div style={{display: 'flex'}}>          
          <div>          
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
          </div>
          <div style={{display: 'flex'}}>
            <img src={img1} alt="img" style={{content: "", position: "relative", height: '40%', top: '250px', left: '-55px'}}/>
            <img src={img2} alt="img" style={{content: "", position: "relative", height: '90%', top: '-7px', right: '45px'}}/>
            <img src={img3} alt="img" style={{content: "", position: "relative", height: 'fit-content', top: 0, right: '720px'}}/>
          </div>
        </div>
        <H4 style={{content: "", position: "relative"}}>
          <b>{lang[languages].homePage_h4}</b>
        </H4>
      </Section>
    </Div>
  );
};

export default HomePage;
