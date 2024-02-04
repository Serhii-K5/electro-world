// import categories from 'assets/json/categories.json';
import { useDispatch} from 'react-redux';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
// import { Link } from 'react-router-dom';

import { Li } from "./FiltersDropdownList.styled";
// import CategoryPage from 'pages/CategoryPage/CategoryPage';
import { changeCategory } from 'redux/slice/categorySlice';
// import { changefilters } from "redux/slice/filtersSlice";

const FiltersDropdownList = ({ parentId, onCloseModal}) => {
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
  
  // const handleClick = e => {
  //   dispatch(changefilters({ key: 'parentId', value: e.cat_id })); 
    

  // // Создать отбор по parentId
  // };

  
  return (
    <ul>
      {/* {categories.map(
        (el, index) =>
          el.cat_parentId === parentId && (
            <Li
              key={index}
              className={parentId > 0 && 'parent'}
              onMouseEnter={() => categoryChange(el)}
              onClick={() => handleClick(el)}
            >
              <Link to="/categories">
                {el.cat_name} {' >'}
              </Link>
            </Li>
          )
      )} */}
    </ul>
  );
};

export default FiltersDropdownList;
