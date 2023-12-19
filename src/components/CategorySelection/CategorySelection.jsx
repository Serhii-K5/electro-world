// import { nanoid } from 'nanoid';
import category from 'assets/json/category.json';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDirectoryPath, changeDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } from 'redux/slice/directoryPathSlice';
import { selectDirectoryPath} from 'redux/selectors';

import { Li } from "./CategorySelection.styled";

const CategorySelection = ({ parentId, handleMove }) => {
  const dispatch = useDispatch();
  const [isModalShown, setIsModalShown] = useState(false);
  const directoryPath = useSelector(selectDirectoryPath);

   // const categoryAdd = id => {
  //   <CategorySelection parentId={id} />;
  // };

  // const handleMouseMove = () => {
  //   setIsModalShown(true);
  // };

  // const handleMouseOut = () => {
  //   setIsModalShown(false);
  // };

  // const categoryAdd = value => {
  //   dispatch(addDirectoryPath(value));
  // };
  
  const categoryChange = value => {
    dispatch(changeDirectoryPath(value));
  };
  


  return (
    <ul>
      {/* {!isModalShown &&
        category.map(
          // (el, index) =>
          el =>
            el.cat_parentId === parentId && (
              <Li key={el.cat_id} onMouseEnter={() => categoryChange(el)}> */}
      {/* <li key={index} > */}
      {/* {el.cat_name} {' >'} */}
      {/* {el.cat_name} {el.cat_parentId > parentId && ' >'} */}
      {/* {el.cat_name} {el.cat_parentId > parentId && ' >'} */}
      {/* {el.cat_parentId === parentId && el.cat_name && ' >'} */}
      {/* {console.log(el.cat_parentId === parentId)} */}
      {/* </Li>
            )
        )} */}
      {category.map(
        (el, index) =>
          el.cat_parentId === parentId && (
            <Li
              // key={el.cat_id ? el.cat_id : index}
              // key={nanoid()}
              key={index}
              className={parentId > 0 && 'parent'}
              onMouseEnter={() => categoryChange(el)}
            >
              {el.cat_name} {' >'}
            </Li>
          )
      )}
    </ul>
  );
};

export default CategorySelection;
