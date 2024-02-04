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
import lang from 'assets/json/language.json';


// создать предварительную фильтрацию по каталогу, а потом 
// фильтровать по остальным фильтрам


const CatalogCarsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const filters = useSelector(selectFilters);

  const products = useSelector(selectProducts); // запрос на сервер
  // const products = products1;
  const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);
  
  const [activePage, setActivePage] = useState(1);

  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);

  // console.log('start');

  // useEffect(() => {
  //   setFilteredData(filtration());
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {    
    // setFilteredData(filtration());
    // setFilteredData(filtration);
    setFilteredData(applyFilters);
    // console.log('filters');
  }, [filters]);  
  
  // const costMaxMin = () => {
  //   const result = findMinMaxPrice(filteredData);
  //   setMinPrice(result[0]);
  //   setMaxPrice(result[1]);
  //   // dispatch(changeFilters({ key: 'price', value: [minPrice, maxPrice] }));
  // };
  
  
  // const checking = (filter, productValue) => {
  //   // let result = filter.value[0][0] === '' || filter.value === 0 ? true : false;
  //   let result = filter.value === '' || filter.value[0] === '' || filter.value[0][0] === '' ? true : false;
  //   if (!result) {
  //     if (Number.isFinite(productValue)) {    
  //       if (Array.isArray(filter.value)) {
  //         for (let index = 0; index < filter.value.length; index++) {
  //           if (Array.isArray(filter.value)) {
  //             if (filter.value[index][0] <= productValue && filter.value[index][1] >= productValue) {
  //               result = true;
  //             }
  //           } else {
  //             result = filter.value.findIndex(index => index === productValue) >= 0;
  //           }
          
  //           if (result) break;
  //         }
  //       } else {
  //         result = filter.value === productValue;
  //       }
  //     } else {
  //       result = true;
  //       filter.value[0] !== '' && filter.value[0][0] !== '' && filter.value.map(item => {
  //         result = result && productValue.toUpperCase().includes(item[0].toUpperCase());
  //         return 0;
  //       });
  //     }
  //   }    
  //   return result;
  // };

  // Фильтрация товаров
  // const filtration = () => {
  //   if (filters.length > 0) {
  //     return products.filter(product => {
  //       // // const filteredProducts = products.filter(product => {
  //       // const productKeys = [];
  //       // for (const key in product) {
  //       //   productKeys.push(key);
  //       // }

  //       // перебор фильтра
  //       let result = true;
  //       for (const filter of filters) {
  //         // const index = productKeys.findIndex(
  //         //   el => el.toUpperCase() === filter.key.toUpperCase()
  //         // );

  //         // if (filter.key === 'name') {
  //         //   result = result && 
  //         //     ( checking(filter, product.code) ||
  //         //       checking(filter, product.name));
  //         // } else if (filter.key === 'price' || filter.key === 'parentId') {
  //         //   const index = productKeys.findIndex(
  //         //     el => el.toUpperCase() === filter.key.toUpperCase()
  //         //   );
  //         //   result = result && index >= 0 &&
  //         //     checking(filter, product[productKeys[index]]);
  //         // } else {
  //         //   result = result && checking(filter, product.memo);
  //         // }

  //         if (filter.key === 'name') {
  //           result =
  //             (checking(filter, product.code) ||
  //               checking(filter, product.name));
  //         } else if (filter.key === 'memo') {
  //           result = checking(filter, product.memo);
  //         } else {
  //           const existingProductIndex = product.findIndex(item => item.key.toUpperCase() === filter.key.toUpperCase());
  //           // const index = productKeys.findIndex(
  //           //   el => el.toUpperCase() === filter.key.toUpperCase()
  //           // );
  //           result = existingProductIndex >= 0 &&
  //             checking(filter, product[filter.key]);
  //         }

  //         if (!result) break;
  //       }
        
  //       // console.log('filtration');

  //       return result;
  //     });
      
  //     // dispatch(changeFilteredProducts(filteredProducts));      
  //     // return filteredProducts;
  //   } else {
  //     // dispatch(changeFilteredProducts(products));
  //     return products
  //   }
  // };

// const applyFilters = (products, filters) => {
const applyFilters = () => {
  // return products.filter(product => {
  return filteredData.filter(product => {
    // Применяем каждый фильтр к продукту
    return filters.every(filter => {
      const { key, value } = filter;

      // Обрабатываем различные типы фильтров
      if (Array.isArray(value)) {
        // Если значение фильтра - массив, проверяем, находится ли элемент в диапазоне
        const [min, max] = value;
        // если числовых массивов несколько, то применить перебор
        return product[key] >= min && product[key] <= max;
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
            <PriceRange data={filteredData} />
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
