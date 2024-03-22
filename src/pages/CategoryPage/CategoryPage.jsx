import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

import { selectCategories } from 'redux/selectors';

import { Container, Ul } from './CategoryPage.styled';

import NavBar from 'components/DirectoryPath/DirectoryPath';
import CategoryCard from 'components/CategoryCard/CategoryCard';

import { changeCategory } from 'redux/slice/categorySlice';
import { changeFilters } from 'redux/slice/filtersSlice';

import categories from 'assets/json/categories.json';
import Pagination from 'components/PaginationBar/PaginationBar';

const itemsPerPage = 8;

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategories);
  const [activePage, setActivePage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState(() =>
    categories.filter(item => item.cat_parentId === categoryId)
  );
  const [isCategory, setIsCategory] = useState(true);

  useEffect(() => {
    setSelectedCategories(
      categories.filter(item => item.cat_parentId === categoryId)
    );
  }, [categoryId]);

  const onChangePage = page => {
    setActivePage(page);
  };

  const handleClick = el => {
    const index = categories.findIndex(
      category => category.cat_parentId === el.currentTarget.id
    );

    if (index === -1) {
      dispatch(changeFilters({ key: 'parentId', value: +el.currentTarget.id }));
      setIsCategory(false);
      // window.location.reload();
    } else {
      dispatch(changeDirectoryPath(categories[index].cat_name));
    }

    dispatch(changeCategory(el.currentTarget.id));
  };

  return (
    <>
      <NavBar />
      <Container>
        <Ul style={{ paddingBottom: '20px' }}>
          {selectedCategories.map((item, index) => (
            <Link to={isCategory ? '/catalog' : '/categories'}>
              {isCategory && (
                <li key={index} id={+item.cat_id} onClick={handleClick}>
                  <CategoryCard
                    photo={item.cat_photo}
                    categoryName={item.cat_name}
                  />
                </li>
              )}
            </Link>
          ))}
        </Ul>
        {selectedCategories.length > 0 && (
          <Pagination
            activePage={activePage}
            onChangePage={onChangePage}
            totalItems={selectedCategories.length}
            itemsPerPage={itemsPerPage}
          />
        )}
      </Container>
    </>
  );
};

export default CategoryPage;
