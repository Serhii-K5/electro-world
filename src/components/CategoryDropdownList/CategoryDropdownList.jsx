import { useState } from "react";
import { useDispatch } from 'react-redux';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

import { Li } from "./CategoryDropdownList.styled";
import { changeCategory } from 'redux/slice/categorySlice';
import { changeFilters } from "redux/slice/filtersSlice";

import categories from 'assets/json/categories.json';
// import products1 from "../../assets/json/products.json";


// const CategoryDropdownList = ({ parentId, onCloseModal}) => {
const CategoryDropdownList = ({ parentId}) => {
  const dispatch = useDispatch();
  // при реальном products.json исключить filteredData
  // const products = useSelector(selectProducts);
  // const filteredProduct = useSelector(selectFilteredProducts);
  // const [filteredData, setFilteredData] = useState(
  //   products.length > 0 ? products : products1
  // );
  const [isCategory, setIsCategory] = useState(true);

  const categoryChange = el => {
    dispatch(changeCategory(el.cat_id));
  };

  const handleClick = el => {
    const index = categories.findIndex(
      category => category.cat_parentId === el.cat_id
    );
    
    if (index === -1) {
      dispatch(changeFilters({ key: 'parentId', value: el.cat_id }));      
      setIsCategory(false);
      // window.location.reload();
    }
    dispatch(changeDirectoryPath(el));
    dispatch(changeCategory(el.cat_id));
  };

  return (
    <ul>
      {categories.map(
        (category, index) =>
          category.cat_parentId === parentId && (
            <Li
              key={index}
              className={parentId > 0 && 'parent'}
              onMouseEnter={() => categoryChange(category)}
              onClick={() => handleClick(category)}
            >
              <Link to={!isCategory ? '/categories' : '/catalog'}>
                {isCategory && category.cat_name + ' >'}
              </Link>
            </Li>
          )
      )}
    </ul>
  );
};

export default CategoryDropdownList;
