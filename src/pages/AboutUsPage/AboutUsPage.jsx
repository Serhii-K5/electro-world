import { useSelector } from 'react-redux';

import {
  Container,
  Section,
  H1,
  P,
  Span,
  Ul,
  Li,
  H4
} from 'pages/HomePage/HomePage.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const AboutUsPage = () => {
  const languages = useSelector(selectLanguages);


  return (
    <Container>
      <Section>
        <H1>{lang[languages].aboutUsPage_h1}</H1>
        <P>
          {lang[languages].aboutUsPage_p1_1}
          <Span>
            <b>Electro world</b>
          </Span>
          {lang[languages].aboutUsPage_p1_2}
        </P>
        <P>
          <b>{lang[languages].aboutUsPage_p2}</b>
        </P>
        <ul>
          <Li>{lang[languages].aboutUsPage_ul1_li}</Li>
        </ul>
        <P>
          <b>{lang[languages].aboutUsPage_p3}</b>
        </P>
        <Ul>
          <Li>{lang[languages].aboutUsPage_ul2_li1}</Li>
          <Li>{lang[languages].aboutUsPage_ul2_li2}</Li>
          <Li>{lang[languages].aboutUsPage_ul2_li3}</Li>
          <Li>{lang[languages].aboutUsPage_ul2_li4}</Li>
        </Ul>
        <P>
          <b>{lang[languages].aboutUsPage_p4}</b>
        </P>
        <ul>
          <Li>
            <Span>
              <b>Electro world</b>
            </Span>{' '}
            {lang[languages].aboutUsPage_ul3_li}
          </Li>
        </ul>
        <P>
          <b>{lang[languages].aboutUsPage_p5}</b>
        </P>
        <ul>
          <Li>
            {lang[languages].aboutUsPage_ul4_li_1}
            <Span>
              <b>Electro world</b>
            </Span>
            {lang[languages].aboutUsPage_ul4_li_2}
          </Li>
        </ul>
        <Ul>
          <Li>{lang[languages].aboutUsPage_ul5_li1}</Li>
          <Li>{lang[languages].aboutUsPage_ul5_li2}</Li>
          <Li>{lang[languages].aboutUsPage_ul5_li3}</Li>
        </Ul>
        <P>
          <b>{lang[languages].aboutUsPage_p6}</b>
        </P>
        <ul>
          <Li>{lang[languages].aboutUsPage_ul6_li}</Li>
        </ul>
        <H4>
          <b>
            <i>{lang[languages].aboutUsPage_h4}</i>
          </b>
        </H4>
      </Section>
    </Container>
  );
};

export default AboutUsPage;