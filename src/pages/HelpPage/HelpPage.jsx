import { useSelector } from 'react-redux';

import {
  Container,
  Section,
  H1,
  Span,
  H3,
  Ul,
  Li,
  H4,
} from 'pages/HomePage/HomePage.styled';
import { P, Ol, LiItem, Div } from "./HelpPage.styled";

import { PHONE_KS_STR, PHONE_MTC_STR} from "constantValues/constants";

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const HelpPage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <>
      <Container>
        <Section>
          <H1>
            {lang[languages].helpPage_h1.toUpperCase()}
          </H1>
          <P>
            {lang[languages].helpPage_p1_1}
            <Span>
              <b>Electro world</b>
            </Span>.
            {lang[languages].helpPage_p1_2}            
          </P>
          <H3>
            <b>{lang[languages].helpPage_h3_1}</b>
          </H3>          
          <Ol>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li1}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p2}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul1_li1}</Li>
                  <Li>{lang[languages].helpPage_ul1_li2}</Li>
                  <Li>{lang[languages].helpPage_ul1_li3}</Li>
                  <Li>{lang[languages].helpPage_ul1_li4}</Li>
                  <Li>{lang[languages].helpPage_ul1_li5}</Li>
                  <Li>{lang[languages].helpPage_ul1_li6}</Li>
                  <Li>{lang[languages].helpPage_ul1_li7}</Li>
                </Ul>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li2}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p3}</P>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li3}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p4}</P>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol1_li4}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p5}</P>
                <Ul>
                  <Li><b>Телефон:</b> {PHONE_KS_STR}, {PHONE_MTC_STR} </Li>
                  <Li><b>Email:</b> support@electro-world.com </Li>
                  <Li><b>Онлайн-чат:</b> {lang[languages].helpPage_ul2_li3} </Li>
                  <Li>{lang[languages].helpPage_ul2_li4} </Li>
                </Ul>
              </Div>
            </LiItem>
          </Ol>
          <H3>
            <b>{lang[languages].helpPage_h3_2}</b>
          </H3>
          <Ol>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol2_li1}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p6}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul3_li1}</Li>
                  <Li>{lang[languages].helpPage_ul3_li2}</Li>
                  <Li>{lang[languages].helpPage_ul3_li3}</Li>
                </Ul>
                <P>{lang[languages].helpPage_p7}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul4_li1}</Li>
                  <Li>{lang[languages].helpPage_ul4_li2}</Li>
                  <Li>{lang[languages].helpPage_ul4_li3}</Li>
                </Ul>
              </Div>
            </LiItem>
            <LiItem>
              <b><i>{lang[languages].helpPage_ol2_li2}</i></b>
              <Div>
                <P>{lang[languages].helpPage_p8}</P>
                <Ul>
                  <Li>{lang[languages].helpPage_ul5_li1}</Li>
                  <Li>{lang[languages].helpPage_ul5_li2}</Li>
                  <Li>{lang[languages].helpPage_ul5_li3}</Li>
                  <Li>{lang[languages].helpPage_ul5_li4}</Li>
                </Ul>
              </Div>
            </LiItem>
          </Ol>
          <H4>
            <b>{lang[languages].deliveryPage_h4}</b>
          </H4>
        </Section>
      </Container>
    </>
  );
};

export default HelpPage;
