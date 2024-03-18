import { Span } from './AuthenticationType.styled';
import { useSelector } from 'react-redux';
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const TypeAuthentification = ({ handleSelect }) => {
  const languages = useSelector(selectLanguages);
  
  return (
    <>
      <Span
        id="new"
        onClick={() => handleSelect('new')}
        style={{ padding: '10px 10px' }}
      >
        <u>{lang[languages].authenticationType_newUser}</u>
      </Span>
      <Span
        id="regular"
        onClick={() => handleSelect('regular')}
        style={{ padding: '10px 10px' }}
      >
        <u>{lang[languages].authenticationType_regularUser}</u>
      </Span>
      <Span
        id="quickOrder"
        onClick={() => handleSelect('quickOrder')}
        style={{ padding: '10px 10px' }}
      >
        <u>{lang[languages].authenticationType_quickOrder}</u>
      </Span>
    </>
  );
};

export default TypeAuthentification;