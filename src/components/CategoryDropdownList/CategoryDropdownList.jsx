import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

import { Li } from "./CategoryDropdownList.styled";
// import CategoryPage from 'pages/CategoryPage/CategoryPage';
import { changeCategory } from 'redux/slice/categorySlice';
import { changefilters } from "redux/slice/filtersSlice";

// import Product from 'components/ProductCard/ProductCard';
import { selectProducts, selectFilteredProducts } from 'redux/selectors';
import categories from 'assets/json/categories.json';
import products1 from "../../assets/json/products.json";
import { changefilteredProducts } from 'redux/slice/filteredProductsSlice';


const CategoryDropdownList = ({ parentId, onCloseModal}) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  // const filteredProduct = useSelector(selectFilteredProducts);
  const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);
  const [isCategory, setIsCategory] = useState(true);
  
  const categoryChange = value => {
    dispatch(changeDirectoryPath(value));
    dispatch(changeCategory(value.cat_id));
  };

  // const handleClick = event => {
  //   if (event.currentTarget === event.target) {
  //     onCloseModal();
  //   }
  // };
  
  const handleClick = e => {
    const index = categories.findIndex(category => category.cat_parentId === e.cat_id);
    
    if (index === -1) {
      dispatch(changefilters({ key: 'parentId', value: e.cat_id }));
      // const filteredDate = products.filter(item => item.id === e.cat_id);
      dispatch(changefilters({ key: 'parentId', value: e.cat_id }));
      const result = filteredData.filter(item => item.parentId === e.cat_id)
      setFilteredData(result);
      dispatch(changefilteredProducts(result));
      setIsCategory(false);
    }
  };

  
  return (
    <ul>
      {categories.map((el, index) =>
        el.cat_parentId === parentId && (
          <Li
            key={index}
            className={parentId > 0 && 'parent'}
            onMouseEnter={() => categoryChange(el)}
            onClick={() => handleClick(el)}
          >
            <Link to={!isCategory ? "/categories" : "/catalog"}>
              {isCategory && el.cat_name + ' >'}
              </Link>
            {/* {isCategory ? (<Link to="/categories">
                {el.cat_name} {' >'}
              </Link>)
              : <Link to="/catalog" />
            } */}
          </Li>
        )
      )}
    </ul>
  );
};

export default CategoryDropdownList;
