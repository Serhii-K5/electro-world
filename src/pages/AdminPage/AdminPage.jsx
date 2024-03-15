
// import { useSelector } from 'react-redux';

import {
  Container,
  Section,
  H1,
  // P,
  // Span,
  // Ul,
  // Li,
  // H4,
} from 'pages/HomePage/HomePage.styled';

// import { selectLanguages } from 'redux/selectors';
// import lang from 'assets/json/language.json';

const AdminPage = () => {
  // const languages = useSelector(selectLanguages);

  return (
    <Container>
      <Section>
        <H1>Администрирование</H1>

        <h2 style={{ margin: '40px auto', textAlign: 'center' }}>
          <b>Page is under construction</b>
        </h2>

        {/* <H1>{lang[languages].aboutUsPage_h1}</H1>
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
        </ul> */}
      </Section>
    </Container>
  );
};

export default AdminPage;

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     const handleChange = (e) => {
//       setFile(e.target.files[0]);
//     };

//     document.getElementById("file-input").addEventListener("change", handleChange);

//     return () => {
//       document.getElementById("file-input").removeEventListener("change", handleChange);
//     };
//   }, []);

//   return (
//     <div>
//       <input type="file" id="file-input" />
//     </div>
//   );
// };

// export default App;