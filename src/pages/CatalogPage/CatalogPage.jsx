import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
import { selectProducts } from "redux/selectors";

import {
  Container,
  Ul,
  DivShift,
  DivPagination,
  DivPage,
} from './CatalogPage.styled';

import NavBar from 'components/NavBar/NavBar';

// import PaginationBar from "components/PaginationBar/PaginationBar"

// import FilterPanel from 'components/FilterPanel/FilterPanel';


import products1 from "../../assets/json/products.json";

const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);

  const [activePage, setActivePage] = useState(1);
  // const [activeFilter, setActiveFilter] = useState(false);

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const handleFilter = filteredData => {
  //   setActiveFilter(true);
  //   setActivePage(0);
  //   setFilteredData(filteredData);
  // };

  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };

  return (
    <div style={{backgroundColor: '#f6f8fd'}}>
      <NavBar />
      <Container>
        <aside>
          <p>Фильтры</p>
          <p>Панель фильтров</p>
        </aside>
        <section>
          {/* <FilterPanel data={products} onFilter={handleFilter} /> */}
          {filteredData.length === 0 &&
            products.length > 0 &&
            // !activeFilter &&
            setFilteredData(products)}
          {filteredData.length > 0 && (
            <Ul>
              {filteredData.map(
                (item, index) =>
                  // index > (activePage - 1) * 8 && index < activePage * 8 &&
                  index > (activePage - 1) * 8 - 1 &&
                  index < activePage * 8 && (
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
