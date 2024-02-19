import { useEffect, useState } from "react";
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
import { selectProducts } from "redux/selectors";
import { selectFilters, selectLanguages } from 'redux/selectors';

// import { changeFilters } from "redux/slice/filtersSlice";
import { deleteFilters } from 'redux/slice/filtersSlice';
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

import CreateMemoArray from "utilites/createMemoArray";

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
    // setFilteredData(applyFilters(filteredData, filters));
    setFilteredData(applyFilters(products, filters));
    // console.log('filters');
  }, [filters]);
  

// const applyFilters = (products, CurentFilters) => {
const applyFilters = (CurentProducts, CurentFilters) => {
  // return products.filter(product => {
  // console.log(typeof CurentProducts);
  return CurentProducts.filter(product => {
    // Применяем каждый фильтр к продукту
    // console.log(typeof CurentFilters);
    return CurentFilters.every(filter => {
      // console.log(filter, ' - ', typeof filter);
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
          // return product[key] >= min && product[key] <= max;
          return (min === undefined || product[key] >= min) && (max === undefined || product[key] <= max);
      //     if (filter.key === 'price') {
      //   // Фильтр по цене
      //   const [min, max] = filter.value;
      //   const productPrice = product.price;
      //   return (min === undefined || productPrice >= min) && (max === undefined || productPrice <= max);
      // } else {
      //   // Фильтр по другим свойствам
      //   return product[filter.key] === filter.value;
      // }
        
        
        };
      } else if (typeof value === 'object' && value !== null) {
        // Если значение фильтра - объект, рекурсивно применяем фильтры к вложенному объекту
        // // return applyFilters([product[key]], value).length > 0;
        // console.log(typeof value)
        const tempArray = typeof product[key] === 'object' ? product[key] : CreateMemoArray(product[key]);
        // // const productBeingChecked = typeof product[key] === 'object' ? product[key] : { key: key, value: product[key] };
        // // return applyFilters(product[key], value).length > 0;
        // return applyFilters(tempArray, value).length > 0;        
        const ss = [value, value];
        return applyFilters(tempArray, ss).length > 0;
      } else if (value === "") {
        return true;
      } else {
        // Для остальных случаев просто сравниваем значения
        if (key === 'memo') {
          console.log(value.toUpperCase());
          const m = product.memo.toUpperCase();
          const inc = m.includes(value.toUpperCase());
          console.log(inc);
          return product.memo.toUpperCase().includes(value.toUpperCase())
        }else if (key === 'name') {
          return product.code.toUpperCase().includes(value.toUpperCase()) || product.name.toUpperCase().includes(value.toUpperCase())
        }
        
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
    dispatch(deleteFilters({ key: 'memo', value: [] }));
    dispatch(deleteFilters({ key: 'name', value: "" }));
    
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


// Для организации перестроения страницы при изменении одного из фильтров в массиве фильтров с использованием React и Redux, вы можете следовать примеру ниже.

// Создайте компонент ProductList, который будет отображать отфильтрованный массив товаров:
// jsx
// Copy code
// // ProductList.js

// import React from 'react';

// const ProductList = ({ filteredProducts }) => {
//   return (
//     <div>
//       <h2>Отфильтрованные товары:</h2>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.name}>
//             {product.name} - {product.price} - {product.category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
// Создайте компонент FilterForm, который будет предоставлять форму для изменения фильтров:
// jsx
// Copy code
// // FilterForm.js

// import React, { useState } from 'react';

// const FilterForm = ({ filters, onFilterChange }) => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const handleFilterChange = () => {
//     // Обновляем массив фильтров
//     const newFilters = [
//       ...filters,
//       { key: 'price', value: [minPrice === '' ? undefined : parseInt(minPrice), maxPrice === '' ? undefined : parseInt(maxPrice)] },
//     ];

//     // Вызываем функцию обратного вызова для обновления фильтров
//     onFilterChange(newFilters);
//   };

//   return (
//     <div>
//       <h2>Фильтры:</h2>
//       <div>
//         <label>Минимальная цена:</label>
//         <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
//       </div>
//       <div>
//         <label>Максимальная цена:</label>
//         <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
//       </div>
//       <button onClick={handleFilterChange}>Применить фильтр</button>
//     </div>
//   );
// };

// export default FilterForm;
// Создайте главный компонент App, который будет использовать ProductList и FilterForm:
// jsx
// Copy code
// // App.js

// import React, { useState } from 'react';
// import ProductList from './ProductList';
// import FilterForm from './FilterForm';

// const App = () => {
//   const [filters, setFilters] = useState([]);

//   const handleFilterChange = newFilters => {
//     // Обновляем состояние с новыми фильтрами
//     setFilters(newFilters);
//   };

//   return (
//     <div>
//       <FilterForm filters={filters} onFilterChange={handleFilterChange} />
//       <ProductList filteredProducts={filterProducts(products, filters)} />
//     </div>
//   );
// };

// export default App;
// Используйте Redux, чтобы хранить состояние фильтров и обновлять его в соответствии с изменениями.
// Обратите внимание, что в этом примере предполагается, что у вас уже есть настроенное окружение для React с использованием Create React App или аналогичного инструмента.Вы также должны добавить функцию filterProducts из предыдущего ответа в ваш файл.
