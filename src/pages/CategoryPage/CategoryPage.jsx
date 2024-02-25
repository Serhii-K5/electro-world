import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

// import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/selectors';
// import { changeCategory } from 'redux/slice/categorySlice';

import {
  Container,
  Ul,
  // Li,
  // DivShift,
  // DivPagination,
  // DivPage,
} from './CategoryPage.styled';

import NavBar from 'components/NavBar/NavBar';
import CategoryCart from 'components/CategoryCart/CategoryCart';

import { changeCategory } from 'redux/slice/categorySlice';
import { changeFilters } from "redux/slice/filtersSlice";

import categories from 'assets/json/categories.json';
import Pagination from 'components/PaginationBar/PaginationBar';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategories);
  const [activePage, setActivePage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [isCategory, setIsCategory] = useState(true);
  
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


// ------------

  // const categoryChange = el => {
  //   dispatch(changeCategory(el.cat_id));
  // };

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
      <Container>        
        <Ul style={{paddingBottom: "20px"}}>
          {selectedCategories.map(
            (item, index) => (
              // <li key={item.cat_id} onClick={handleClick}>
              //   <CategoryCart categoryName={item.cat_name} />
                
              //   <Link to={!isCategory ? '/categories' : '/catalog'}>
              //     {isCategory && item.cat_name + ' >'}
              //   </Link>
              // </li>
              <Link to={!isCategory ? '/categories' : '/catalog'}>
                {index > -1 ? 
                  <li key={index}>
                    <CategoryCart categoryName={item.cat_name} />
                    {/* {isCategory && item.cat_name + ' >'} */}
                  </li>
                  : <li key={'cat1' + index} onClick={handleClick}>
                    {isCategory && item.cat_name + ' >'}
                  </li>
                }
              </Link>
            )
          )}
        </Ul>
        {/* <ul>
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
        </ul> */}
        
        
        
        
        
        
        {selectedCategories.length > 0 && (            
          <Pagination
            activePage={activePage}
            onClickDecrease={onClickDecrease}
            onClickIncrease={onClickIncrease}
            filteredData={selectedCategories}
          />
        )}
      </Container>
    </>
  );
};

export default CategoryPage;
