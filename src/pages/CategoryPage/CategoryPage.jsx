// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchProducts } from "redux/operations";


import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/selectors';
// import { changeCategory } from 'redux/slice/categorySlice';

import {
  // Container,
  Ul,
  // Li,
  // DivShift,
  // DivPagination,
  // DivPage,
} from './CategoryPage.styled';

import NavBar from 'components/NavBar/NavBar';
import CategoryCart from 'components/CategoryCart/CategoryCart';

import categories from 'assets/json/categories.json';
import Pagination from 'components/PaginationBar/PaginationBar';

const CategoryPage = () => {
  // const dispatch = useDispatch();
  const categoryId = useSelector(selectCategories);
  const [activePage, setActivePage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);  
  
  useEffect(() => {
    setSelectedCategories(categories.filter(item =>
        item.cat_parentId === categoryId
      )
    )
  }, [categoryId]);
  
  const onClickIncrease  = () => {
    activePage < selectedCategories.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };


  return (
    <>
      <NavBar />
      {/* <Ul style={{paddingBottom: "20px"}}>
        {categories.map(
          item =>
            item.cat_parentId === categoryId && (
              <li key={item.cat_id}>
                <CategoryCart categoryName={item.cat_name} />
              </li>
            )
        )}
      </Ul> */}
      <Ul style={{paddingBottom: "20px"}}>
        {selectedCategories.map(
          item => (
            <li key={item.cat_id}>
              <CategoryCart categoryName={item.cat_name} />
            </li>
          )
        )}
      </Ul>
      {selectedCategories.length > 0 && (            
        <Pagination
          activePage={activePage}
          onClickDecrease={onClickDecrease}
          onClickIncrease={onClickIncrease}
          filteredData={selectedCategories}
        />
      )}
    </>
  );
};

export default CategoryPage;
