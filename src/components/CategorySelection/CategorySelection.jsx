// import { nanoid } from 'nanoid';
import category from 'assets/json/category.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDirectoryPath, deleteDirectoryPath } from 'redux/slice/directoryPathSlice';


const CategorySelection = ({ parentId, handleMove }) => {
  const dispatch = useDispatch();
  const [isModalShown, setIsModalShown] = useState(false);

  // const categoryAdd = id => {
  //   <CategorySelection parentId={id} />;
  // };

  const handleMouseMove = () => {
    setIsModalShown(true);
  };

  const handleMouseOut = () => {
    setIsModalShown(false);
  };

  const categoryAdd = value => {
    dispatch(addDirectoryPath(value));
  };


  return (
    <ul>
      {!isModalShown && (
        {},
        category.map(
          (el, index) =>
            el.cat_parentId === parentId && (
              <li key={index} onMouseEnter={() => categoryAdd(el)}>
                {/* <li key={index} > */}
                {el.cat_name} {' >'}
                {/* {el.cat_name} {el.cat_parentId > parentId && ' >'} */}
                {/* {el.cat_name} {el.cat_parentId > parentId && ' >'} */}
                {/* {el.cat_parentId === parentId && el.cat_name && ' >'} */}
                {/* {console.log(el.cat_parentId === parentId)} */}
              </li>
            )
        ))}
    </ul>
  );
};

export default CategorySelection;
