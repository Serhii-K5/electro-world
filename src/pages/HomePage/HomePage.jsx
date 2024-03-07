import { useSelector } from "react-redux";
import {
  Container,
  Section,
  H1,
  Span,
  H3,
  DivBlock,
  P,
  Ul,
  Li,
  Img,
  H4,
} from './HomePage.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import img1 from 'assets/images/png/image1.png';
import img2 from 'assets/images/png/image2.png';
import img3 from 'assets/images/png/image3.png';
 

const HomePage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <Container>
      <Section>
        {/* slider */}
        <H1>
          {lang[languages].homePage_h1}
          <Span>
            {' '}
            Electro world{' '}
          </Span>
          {lang[languages].homePage_h1_2}
        </H1>
        <H3>
          <i> {lang[languages].homePage_h3} </i>
        </H3>
        <P>
          {lang[languages].homePage_p1} <b>Electro world</b>!
        </P>
        <P>
          <b>Electro world</b>
          {lang[languages].homePage_p2}
        </P>
        <P>
          <b>
            <i>{lang[languages].homePage_p3}</i>
          </b>
        </P>
        <DivBlock>
          <div style={{ maxWidth: '1000px' }}>
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
            <P>{lang[languages].homePage_p4}</P>
          </div>
          <div>
            <Img src={img3} alt="electrician " />
          </div>
        </DivBlock>
        <DivBlock style={{ justifyContent: 'space-evenly' }}>
          <div>
            <Img src={img1} alt="Малая бытовая техника" />
          </div>
          <div>
            <P>
              <b>
                <i>{lang[languages].homePage_p5}</i>
              </b>
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
          </div>
        </DivBlock>
        <DivBlock>
          <div>
            <P>
              <b>
                <i>{lang[languages].homePage_p6}</i>
              </b>
            </P>
            <Ul>
              <Li>{lang[languages].homePage_ul3_li1}</Li>
              <Li>{lang[languages].homePage_ul3_li2}</Li>
              <Li>{lang[languages].homePage_ul3_li3}</Li>
            </Ul>
            <P>
              <b>
                <i>{lang[languages].homePage_p7}</i>
              </b>
            </P>
            <Ul>
              <Li>{lang[languages].homePage_ul4_li1}</Li>
              <Li>{lang[languages].homePage_ul4_li2}</Li>
              <Li>{lang[languages].homePage_ul4_li3}</Li>
            </Ul>
          </div>
          <div style={{ margin: '0 auto' }}>
            <Img src={img2} alt="arge and medium household appliances" />
          </div>
        </DivBlock>
        <H4>
          <b>{lang[languages].homePage_h4}</b>
        </H4>
      </Section>
    </Container>
  );
};

export default HomePage;
