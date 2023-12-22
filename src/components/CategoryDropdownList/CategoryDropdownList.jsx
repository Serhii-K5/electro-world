import categories from 'assets/json/categories.json';
import { useDispatch} from 'react-redux';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

import { Li } from "./CategoryDropdownList.styled";
// import CategoryPage from 'pages/CategoryPage/CategoryPage';
import { changeCategory } from 'redux/slice/categorySlice';

const CategoryDropdownList = ({ parentId, onCloseModal}) => {
  const dispatch = useDispatch();
  
  const categoryChange = value => {
    dispatch(changeDirectoryPath(value));
    dispatch(changeCategory(value.cat_id));
  };

  // const handleClick = event => {
  //   if (event.currentTarget === event.target) {
  //     onCloseModal();
  //   }
  // };

  
  return (
    <ul>
      {categories.map(
        (el, index) =>
          el.cat_parentId === parentId && (
            <Li
              key={index}
              className={parentId > 0 && 'parent'}
              onMouseEnter={() => categoryChange(el)}
              // onClick={handleClick}
            >
              <Link to="/categories">
                {el.cat_name} {' >'}
              </Link>
            </Li>
          )
      )}
    </ul>
  );
};

export default CategoryDropdownList;
