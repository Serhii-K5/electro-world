// import { nanoid } from 'nanoid';
import category from 'assets/json/category.json';
import { useState } from 'react';

const CategorySelection = ({ parentId, handleMove }) => {
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




  return (
      <ul>
        {category.map(
          (el, index) =>
            el.cat_parentId === parentId && (
              // <li key={index} onMouseMove={() => categoryAdd(el.cat_id)}>
              <li key={index}>
                {el.cat_name} {' >'}
                {/* {el.cat_name} {el.cat_parentId > parentId && ' >'} */}
                {/* {el.cat_name} {el.cat_parentId > parentId && ' >'} */}
                {/* {el.cat_parentId === parentId && el.cat_name && ' >'} */}
                {/* {console.log(el.cat_parentId === parentId)} */}
              </li>
            )
        )}
      </ul>
      
  );
};

export default CategorySelection;
