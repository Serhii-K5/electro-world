import { useSelector } from 'react-redux';
import { selectDirectoryPath } from 'redux/selectors';
import { Link } from 'react-router-dom';

import { Ul } from "./NavBar.styled";

const NavBar = () => {
  const directoryPath = useSelector(selectDirectoryPath); 

  return (
    <>
      <Ul>
        <li key={0}>
          <Link to="/">{'Iнтернет-магазин Electro world > '}</Link>
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
