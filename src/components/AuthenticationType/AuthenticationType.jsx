import { Ul, Li } from './AuthenticationType.styled';
import { useSelector } from 'react-redux';
import { selectLanguages, selectUserName } from 'redux/selectors';
import lang from 'assets/json/language.json';

const TypeAuthentification = ({ handleSelect }) => {
  const languages = useSelector(selectLanguages);
  const user = useSelector(selectUserName);
  
  return (
    <Ul>
      {user === '' && <Li
        id="new"
        onClick={() => handleSelect('new')}
      >
        <u>{lang[languages].authenticationType_newUser}</u>
      </Li>}
      <Li
        id="regular"
        onClick={() => handleSelect('regular')}
      >
        <u>{lang[languages].authenticationType_regularUser}</u>
      </Li>
      <Li
        id="quickOrder"
        onClick={() => handleSelect('quickOrder')}
      >
        <u>{lang[languages].authenticationType_quickOrder}</u>
      </Li>
    </Ul>
  );
};

export default TypeAuthentification;