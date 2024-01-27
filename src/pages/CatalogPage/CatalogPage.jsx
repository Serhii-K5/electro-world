import { useEffect, useState } from "react";
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
// import { selectProducts, selectSearchParams } from "redux/selectors";
// import { selectProducts, selectFilteredProducts, selectFilters } from 'redux/selectors';
// import { changeFilteredProducts } from 'redux/slice/filteredProductsSlice';
import { selectFilters, selectLanguages } from 'redux/selectors';

// import { changeFilters } from "redux/slice/filtersSlice";
// import CreateFilteredDate from 'utilites/createFilteredDate';

import {
  Container,
  Ul,
  DivShift,
  DivPagination,
  DivPage,
  BtnDiv,
} from './CatalogPage.styled';

import NavBar from 'components/NavBar/NavBar';

// import PaginationBar from "components/PaginationBar/PaginationBar"

import FilterPanel from 'components/FilterPanel/FilterPanel';

import PriceRange from 'components/PriceRange/PriceRange';
import products1 from "../../assets/json/products.json";
import lang from 'assets/json/language.json';


const CatalogCarsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const languages = useSelector(selectLanguages);
  const dispatch = useDispatch();
  // const products = useSelector(selectProducts); // запрос на сервер
  const products = products1;
  // const filteredProducts = useSelector(selectFilteredProducts);
  const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);
  // const searchParams = useSelector(selectSearchParams);
  // const [filteredData, setFilteredData] = useState(
  //   filteredProducts.length > 0 ? filteredProducts : products.length > 0 ? products : products1
  // );

  // if (filteredProducts.length === 0) {
  //   dispatch(changefilteredProducts(filteredData));
  // }

  // const [isAdd, setIsAdd] = useState(false);

  const [activePage, setActivePage] = useState(1);
  // const [activeFilter, setActiveFilter] = useState(false);
  // const [activeFilter, setActiveFilter] = useState(0);
  
  const filters = useSelector(selectFilters);


  useEffect(() => {
    setFilteredData(filtration());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);  
  
  const checking = (filter, productVolue) => {
    let result = filter.value === '' || filter.value === 0 ? true : false;
    if (!result) {
      if (Number.isFinite(productVolue)) {    
        if (Array.isArray(filter.value)) {
          for (let index = 0; index < filter.value.length; index++) {
            if (Array.isArray(filter.value)) {
              if (filter.value[index][0] <= productVolue && filter.value[index][1] >= productVolue) {
                result = true;
              }
            } else {
              result = filter.value.findIndex(index => index === productVolue) >= 0;
            }
          
            if (result) break;
          }
        } else {
          result = filter.value === productVolue;
        }
      } else {
        result = true;
        filter.value.map(item => {
          result = result && productVolue.toUpperCase().includes(item.toUpperCase());
          return 0;
        });
      }
    }
    
    return result;
  };

  // Фильтрация товаров
  const filtration = () => {
    if (filters.length > 0) {
      return products.filter(product => {
        // const filteredProducts = products.filter(product => {
        const productKeys = [];
        for (const key in product) {
          productKeys.push(key);
        }

        // перебор фильтра
        let result = true;
        for (const filter of filters) {
          const index = productKeys.findIndex(
            el => el.toUpperCase() === filter.key.toUpperCase()
          );
          result =
            result && index >= 0 &&
            checking(filter, product[productKeys[index]]);

          if (!result) break;
        }

        return result;
      });
      
      // dispatch(changeFilteredProducts(filteredProducts));      
      // return filteredProducts;
    } else {
      // dispatch(changeFilteredProducts(products));
      return products
    }
  };

  
  useEffect(() => {
    setFilteredData(filtration());
  }, [filters]); 

  // useEffect(() => {
  //   // setActiveFilter(!activeFilter);
  //   setActiveFilter(activeFilter);
  //   // console.log(activeFilter);
  // }, [activeFilter]); 


  const handleFilter = filteredData => {
    setActivePage(0);
    setFilteredData(filteredData);
  };

  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };

  const handleClickBtn = () => {
    

    // dispatch(
    //   changeFilters({ key: 'price', value: [[inputValueMin, inputValueMax]] })
    // );

    // console.log("Button click");
    // alert("Button click");
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-second)' }}>
      {/* {productsFiltration()} */}
      <NavBar />
      <Container>
        <aside style={{ minWidth: '250px', backgroundColor: 'white' }}>
          <h4 style={{ padding: '16px 0', textAlign: 'center' }}>
            {lang[languages].catalogPage_asideTitel.toUpperCase()}
          </h4>
          <BtnDiv onClick={handleClickBtn}>
            <b>Сбросить фильтры</b>
          </BtnDiv>

          <div style={{ padding: '0 16px' }}>
            <PriceRange />
          </div>

          {/* <FilterPanel data={filteredData} onFilter={handleFilter} /> */}
          <FilterPanel data={filteredData} />
        </aside>
        <section>
          {/* {console.log('render1')} */}
          {/* <div onClick={handleClick} onMouseEnter={handleClick}> */}
          <div>Найдено: {filteredData.length} товаров</div>
          {/* {filteredData.length === 0 &&
            products.length > 0 &&
            setFilteredData(products)} */}
          {filteredData.length > 0 && (
            // <div style={{display: 'flex'}}>
            <Ul>
              {filteredData.map(
                (item, index) =>
                  index > (activePage - 1) * 8 - 1 &&
                  index < activePage * 8 && (
                    <li key={item.id}>
                      <ProductCard card={item} />
                    </li>
                  )
              )}
            </Ul>
            // </div>
          )}
          {filteredData.length > 0 && (
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
                <div style={{ width: '50px', textAlign: 'center' }}>
                  {'...'}
                </div>
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
                <div style={{ width: '50px', textAlign: 'center' }}>
                  {'...'}
                </div>
              )}
              {filteredData.length / 8 > activePage && (
                <DivShift onClick={onClickIncrease}>{'>>'}</DivShift>
              )}
            </DivPagination>
          )}
          {/* <PaginationBar data={filteredData} page={activePage} /> */}
        </section>
      </Container>
    </div>
  );
};

export default CatalogCarsPage;
