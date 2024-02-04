import { useEffect, useState } from "react";
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
import { selectProducts } from "redux/selectors";
import { selectFilters, selectLanguages } from 'redux/selectors';

// import { changeFilters } from "redux/slice/filtersSlice";
// import CreateFilteredDate from 'utilites/createFilteredDate';
import {findMinMaxPrice} from 'utilites/searchMinMax';

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
// import categories from "../../assets/json/categories.json";
import lang from 'assets/json/language.json';


// создать предварительную фильтрацию по каталогу, а потом 
// фильтровать по остальным фильтрам


const CatalogCarsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const filters = useSelector(selectFilters);
  
  // const products = useSelector(selectProducts);
  // const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);
  
  const temp = useSelector(selectProducts);
  const products = temp.length > 0 ? temp : products1; // запрос на сервер
  const [filteredData, setFilteredData] = useState(products);
  
  const [activePage, setActivePage] = useState(1);

  // console.log('start');

  // useEffect(() => {
  //   setFilteredData(filtration());
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(applyFilters(filteredData, filters));
    // setFilteredData(applyFilters(products, filters));
    // console.log('filters');
  }, [filters]);  
  

// const applyFilters = (products, CurentFilters) => {
const applyFilters = (CurentProducts, CurentFilters) => {
  // return products.filter(product => {
  return CurentProducts.filter(product => {
    // Применяем каждый фильтр к продукту
    return CurentFilters.every(filter => {
      const { key, value } = filter;

      // Обрабатываем различные типы фильтров
      if (Array.isArray(value)) {
        // Если значение фильтра - массив, проверяем, находится ли элемент в диапазоне
        
        if (Array.isArray(value[0])) { 
          // Если числовых массивов несколько, то применить перебор
          let result = true;
          value.map(el => {
            const [min, max] = el;
            return result = result && product[key] >= min && product[key] <= max;
          });
          return result;
        } else {
          const [min, max] = value;
          return product[key] >= min && product[key] <= max;
        };
      } else if (typeof value === 'object' && value !== null) {
        // Если значение фильтра - объект, рекурсивно применяем фильтры к вложенному объекту
        return applyFilters([product[key]], value).length > 0;
      } else {
        // Для остальных случаев просто сравниваем значения
        return product[key] === value;
      }
    });
  });
};

  // useEffect(() => {
  //   // setActiveFilter(!activeFilter);
  //   setActiveFilter(activeFilter);
  //   // console.log(activeFilter);
  // }, [activeFilter]); 


  // const handleFilter = filteredData => {
  //   setActivePage(0);
  //   setFilteredData(filteredData);
  // };

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
            {/* <PriceRange /> */}
            {filteredData && <PriceRange data={filteredData} />}
            {/* {console.log('PriceRange')} */}
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
