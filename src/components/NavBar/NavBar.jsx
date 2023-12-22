// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { selectDirectoryPath, selectCategories } from 'redux/selectors';
import { selectDirectoryPath } from 'redux/selectors';
import { Link } from 'react-router-dom';

import { Ul } from "./NavBar.styled";

const NavBar = () => {
  // const [isPathVisible, setPathVisible] = useState(false);
  const directoryPath = useSelector(selectDirectoryPath);  
  // const changeCategory = useSelector(selectCategories);
  
  // useEffect(() => {
  //   directoryPath > 0 ? setPathVisible(true) : setPathVisible(false);
  // }, [directoryPath]);

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
