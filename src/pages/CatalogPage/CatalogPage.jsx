import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
// import { selectProducts, selectSearchParams } from "redux/selectors";
import { selectProducts, selectFilteredProducts, selectFilters } from 'redux/selectors';
import { changefilteredProducts } from 'redux/slice/filteredProductsSlice';

import { changefilters } from "redux/slice/filtersSlice";

import {
  Container,
  Ul,
  DivShift,
  DivPagination,
  DivPage,
} from './CatalogPage.styled';

import NavBar from 'components/NavBar/NavBar';

// import PaginationBar from "components/PaginationBar/PaginationBar"

import FilterPanel from 'components/FilterPanel/FilterPanel';

import PriceRange from 'components/PriceRange/PriceRange';
import products1 from "../../assets/json/products.json";


const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  // const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);
  // const searchParams = useSelector(selectSearchParams);
  const [filteredData, setFilteredData] = useState(
    filteredProducts.length > 0 ? filteredProducts : products.length > 0 ? products : products1
  );

  // if (filteredProducts.length === 0) {
  //   dispatch(changefilteredProducts(filteredData));
  // }

  const [activePage, setActivePage] = useState(1);
  const [activeFilter, setActiveFilter] = useState(false);
  
  const filters = useSelector(selectFilters);


  useEffect(() => {
    dispatch(changefilters({ key: 'name', value: '' }));
    if (filters.length > 0) {
      // const index = filters.keys().findIndex(elem => elem === 'id');
      const index = filters.findIndex(elem =>  elem.key === 'parentId');
      if (index !== - 1) {
        const result = filteredData.filter(item => item.parentId === filters[index].value)
        // dispatch(changefilteredProducts(result));
        setFilteredData(result);
      }
    }
    // console.log(activeFilter);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(changefilteredProducts(filteredData));
  // }, [dispatch, filteredData]);
  }, [filteredData, filters]);
  

  const handleFilter = filteredData => {
    setActiveFilter(true);
    setActivePage(0);
    setFilteredData(filteredData);
  };

  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };

  // const onFilter = () => {
  //   const rez = 0

  //   return rez
  // }
  
  // const handleFilter = filteredData => {
  //   setFilteredData(filteredData);
  // };


  return (
    <div style={{ backgroundColor: 'var(--bg-second)' }}>
      <NavBar />
      <Container>
        <aside style={{minWidth: '250px'}}>
          {/* <p>Панель фильтров</p> */}
          <PriceRange />
          <FilterPanel data={filteredData} onFilter={handleFilter} />
        </aside>
        <section>
          {filteredData.length === 0 && products.length > 0 && setFilteredData(products)}
          {filteredData.length > 0 && (
            <Ul>
              {filteredData.map((item, index) =>
                index > (activePage - 1) * 8 - 1 && index < activePage * 8 && (
                  <li key={item.id}>
                    <ProductCard card={item} />
                  </li>
                )
              )}
            </Ul>
          )}
          <DivPagination>
            {activePage > 1 && (
              <DivShift onClick={onClickDecrease}>{'<<'}</DivShift>
            )}
            {activePage === 1 && (
              <DivPage style={{ backgroundColor: 'var(--bg-second-green)' }}>
                {activePage}
              </DivPage>
            )}
            {activePage > 2 && (
              <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
            )}
            {activePage > 1 && (
              <DivPage onClick={onClickDecrease}>{activePage - 1}</DivPage>
            )}
            {activePage > 1 && (
              <DivPage style={{ backgroundColor: 'green' }}>
                {activePage}
              </DivPage>
            )}
            {filteredData.length / 8 > activePage && (
              <DivPage onClick={onClickIncrease}>{activePage + 1}</DivPage>
            )}
            {filteredData.length / 8 > activePage + 1 && (
              <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
            )}
            {filteredData.length / 8 > activePage && (
              <DivShift onClick={onClickIncrease}>{'>>'}</DivShift>
            )}
          </DivPagination>
          {/* <PaginationBar data={filteredData} page={activePage} /> */}
        </section>
      </Container>
    </div>
  );
};

export default CatalogCarsPage;
