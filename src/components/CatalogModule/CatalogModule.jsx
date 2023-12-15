import { useEffect, useState } from "react";
import {
  Overlay,
  ModalSelect,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

import { useDispatch, useSelector } from "react-redux";
import { selectDirectoryPath } from "redux/selectors";
import cross from "assets/images/svg/cross.svg";
import category from 'assets/json/category.json';
import CategorySelection from 'components/CategorySelection/CategorySelection';
// import MessageModule from 'components/MessageModule/MessageModule';

const CatalogModule = ({ modal, onClose }) => {  
  const dispatch = useDispatch();
  const directoryPath = useSelector(selectDirectoryPath); 
  // const [isVisibleArrow, setIsVisibleArrow] = useState(false);
  const [visibleSelect, setVisibleSelect] = useState(modal);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const [isModalShown, setIsModalShown] = useState(false);
  const [pathArray, setPathArray] = useState([initial]);

  const handleMouseMove = () => {
    setIsModalShown(true);
  };

  const handleMouseOut = () => {
    setIsModalShown(false);
  };

  const handleMove = () => {
    setVisibleSelect(visibleSelect + 1);
  };

  const selectedAdd = () => {
    setVisibleSelect(visibleSelect + 1);

    setPathArray(...pathArray, {})
  };

  const handleClick = value => {
    dispatch(changeLanguage(value));
  };


  return (
    <>
      {directoryPath.length > 0 && (
        <ul style={{ display: 'flex' }}>
          {directoryPath.map(
            (el, index) =>
              el.cat_id === category.id && <li key={index}>{el.cat_name}</li>
          )}
        </ul>
      )}
      {category.length > 0 && (
        <ul style={{ display: 'flex' }}>
          {directoryPath.length > 0 ? (
            <ul style={{ display: 'flex' }}>
              {directoryPath.map((el, index) => (
                <li key={index}>
                  <CategorySelection
                    parentId={el.cat_parentId}
                    onMouseMove={() => handleMove(el)}
                    // onMouseOver={() => handleMove()}
                    onMouseLeave={() => handleMouseOut()}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <CategorySelection parentId={0} onMouseMove={() => handleMove()} />
          )}
        </ul>
      )}
    </>
  );
};

export default CatalogModule;
