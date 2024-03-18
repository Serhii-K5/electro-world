import { useSelector } from 'react-redux';
import { selectDirectoryPath, selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import { Link } from 'react-router-dom';

import { Ul } from "./NavBar.styled";

const NavBar = () => {
  const directoryPath = useSelector(selectDirectoryPath);
  const languages = useSelector(selectLanguages);

  return (
    <>
      <Ul>
        <li key={0}>
          {/* <Link to="/">{'Iнтернет-магазин Electro world > '}</Link> */}
          <Link to="/">{lang[languages].NavBar_link}</Link>
        </li>
        {directoryPath.map((item, index) => (
          <li key={index + 1}>
            <Link to="/catalog">
              {item.cat_name} {' >'}
            </Link>
          </li>
        ))}
      </Ul>
    </>
  );
};

export default NavBar;
