// import { useEffect, useState } from "react";
import { useEffect } from "react";
// import {
//   Overlay,
//   ModalSelect,
//   CloseBtn,
// } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

import { useDispatch, useSelector } from "react-redux";
import { selectDirectoryPath } from "redux/selectors";
// import cross from "assets/images/svg/cross.svg";
import categories from 'assets/json/categories.json';
// import categoriesSelection from 'components/categoriesSelection/categoriesSelection';
import { addDirectoryPath, deleteDirectoryPath } from 'redux/slice/directoryPathSlice';
// import MessageModule from 'components/MessageModule/MessageModule';

// const CatalogModule = ({ modal, onClose }) => {  
const CatalogModule = ({ onClose }) => {
  const dispatch = useDispatch();
  const directoryPath = useSelector(selectDirectoryPath);
  // const [isVisibleArrow, setIsVisibleArrow] = useState(false);
  // const [visibleSelect, setVisibleSelect] = useState(modal);

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

  // const [isModalShown, setIsModalShown] = useState(false);
  // const [pathArray, setPathArray] = useState([initial]);

  // const handleMouseMove = () => {
  //   setIsModalShown(true);
  // };

  // const handleMouseOut = () => {
  //   setIsModalShown(false);
  // };

  // const handleMove = () => {
  //   setVisibleSelect(visibleSelect + 1);
  // };

  // const selectedAdd = () => {
  //   setVisibleSelect(visibleSelect + 1);

  //   setPathArray(...pathArray, {})
  // };

  const addDirectory = value => {
    dispatch(addDirectoryPath(value));
  };

  const deleteDirectory = value => {
    value.cat_id === directoryPath[directoryPath.length - 1].cat_id &&
      dispatch(deleteDirectoryPath(value));

    // console.log(directoryPath);
  };

  // return (
  //   <Ul>
  //     {lang.length > 0 &&
  //       lang.map((el, index) =>
  //         languages === el.lang_id ? (
  //           <Li
  //             key={index}
  //             onClick={() => handleClick(el.lang_id)}
  //             style={{ backgroundColor: 'var(--bg-second-green)' }}
  //           >
  //             {el.lang_name}
  //           </Li>
  //         ) : (
  //           <Li key={index} onClick={() => handleClick(el.lang_id)}>
  //             {el.lang_name}
  //           </Li>
  //         )
  //       )}
  //   </Ul>
  // );

  return (
    <>
      {/* {directoryPath.length > 0 && ( */}
      {directoryPath && (
        <ul style={{ display: 'flex' }}>
          {directoryPath.map(
            (el, index) =>
              el.cat_id === categories.id && <li key={index}>{el.cat_name}</li>
          )}
        </ul>
      )}
      {categories.length > 0 && (
        <ul style={{ display: 'flex' }}>
          {/* {directoryPath.length > 0 ? ( */}
          {/* {directoryPath ? ( */}
          {directoryPath && (
            <ul style={{ display: 'flex' }}>
              {directoryPath.map((el, index) => (
                <li key={index}>
                  <categoriesSelection
                    parentId={el.cat_parentId}
                    onMouseMove={() => addDirectory(el)}
                    // onMouseOver={() => handleMove()}
                    onMouseLeave={() => deleteDirectory(el)}
                  />
                </li>
              ))}
            </ul>
          )}
          {/* ) : (
            <categoriesSelection
              parentId={0}
              onMouseMove={() => addDirectory(el)}
              onMouseLeave={() => deleteDirectory(el)}
            />
          )} */}
        </ul>
      )}
    </>
  );
};

export default CatalogModule;
