import { useSelector } from 'react-redux';
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

const DeliveryPage = () => {
  const languages = useSelector(selectLanguages);

  return (
    <Container>
      <Section>
        <H1><sup>Доставка</sup></H1>
        {/* <h2
          style={{ margin: '50px auto', textAlign: 'center', fontSize: '50px' }}
        >
          Page under construction
        </h2> */}

        
      </Section>
    </Container>
  );
};

export default DeliveryPage;
