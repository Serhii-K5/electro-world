import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDirectoryPath } from 'redux/selectors';

import { VodafoneBg, Span } from './NavBar.styled';
import { useEffect } from 'react';

const NavBar = () => {
  const [isPathVisible, setPathVisible] = useState(false);
  const directoryPath = useSelector(selectDirectoryPath);  
  useEffect(() => {
    directoryPath > 0 ? setPathVisible(true) : setPathVisible(false);
  }, [directoryPath]);

  return (
    <ul style={{ display: 'flex' }}>
      <li>Iнтернет-магазин Electro world</li>
      {isPathVisible &&
        directoryPath.map(item => (
          <li>
            {item.cat_name} {' >'}{' '}
          </li>
        ))}
    </ul>
  );
};

export default NavBar;
