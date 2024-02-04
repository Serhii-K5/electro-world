import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

import { Li } from "./CategoryDropdownList.styled";
// import CategoryPage from 'pages/CategoryPage/CategoryPage';
import { changeCategory } from 'redux/slice/categorySlice';
import { changeFilters } from "redux/slice/filtersSlice";

// import Product from 'components/ProductCard/ProductCard';
// import { selectProducts, selectFilteredProducts } from 'redux/selectors';
import categories from 'assets/json/categories.json';
// import products1 from "../../assets/json/products.json";
// import { changeFilteredProducts } from 'redux/slice/filteredProductsSlice';


const CategoryDropdownList = ({ parentId, onCloseModal}) => {
  const dispatch = useDispatch();
  // при реальном products.json исключить filteredData
  // const products = useSelector(selectProducts);
  // const filteredProduct = useSelector(selectFilteredProducts);
  // const [filteredData, setFilteredData] = useState(
  //   products.length > 0 ? products : products1
  // );
  const [isCategory, setIsCategory] = useState(true);

  const categoryChange = el => {
    // dispatch(changeDirectoryPath(el));
    dispatch(changeCategory(el.cat_id));
  };

  // const handleClick = event => {
  //   if (event.currentTarget === event.target) {
  //     onCloseModal();
  //   }
  // };

  const handleClick = el => {
    const index = categories.findIndex(
      category => category.cat_parentId === el.cat_id
    );
    
    if (index === -1) {
      // dispatch(changefilters({ key: 'parentId', value: e.cat_id }));
      // const filteredDate = products.filter(item => item.id === e.cat_id);
      console.log('cdl parentId');
      dispatch(changeFilters({ key: 'parentId', value: el.cat_id }));
      // const result = filteredData.filter(item => item.parentId === e.cat_id);

      // console.log(result);

      // setFilteredData(result);
      // dispatch(changeFilteredProducts(result));

      setIsCategory(false);
      // window.location.reload();
    }
    // } else {
    //   dispatch(changeDirectoryPath(el));
    //   dispatch(changeCategory(el.cat_id));
    // }

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
