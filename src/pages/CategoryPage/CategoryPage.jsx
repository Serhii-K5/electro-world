// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
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

const CategoryPage = () => {
  // const dispatch = useDispatch();
  const categoryId = useSelector(selectCategories);

  // const handleClick = value => {
  //   dispatch(changeCategory(value));
  // };

  return (
    <>
      <NavBar />
      {/* <Container> */}
      {/* <h2>Категории</h2> */}
      {/* {categories.length > 0 && ( */}
      <Ul>
        {categories.map(
          item =>
            item.cat_parentId === categoryId && (
              <li key={item.cat_id}>
                <CategoryCart categoryName={item.cat_name} />
              </li>
            )
        )}
      </Ul>
      {/* {console.log(category)} */}
      {/* )} */}
      {/* </Container> */}
    </>
  );
};

export default CategoryPage;
