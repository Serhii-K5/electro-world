import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
// import { selectProducts, selectSearchParams } from "redux/selectors";
import { selectProducts, selectFilteredProducts, selectFilters } from 'redux/selectors';
import { changeFilteredProducts } from 'redux/slice/filteredProductsSlice';

import { changeFilters } from "redux/slice/filtersSlice";
// import CreateFilteredDate from 'utilites/createFilteredDate';

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
  const [searchParams, setSearchParams] = useSearchParams();
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
  const [activeFilter, setActiveFilter] = useState(false);
  // const [activeFilter, setActiveFilter] = useState(0);
  
  const filters = useSelector(selectFilters);


  useEffect(() => {
    // productsFilling(); // удалить при реальном products.json
    // dispatch(changeFilteredProducts(filtration()));
    // productsFiltration();
    const fd = filtration();
    setFilteredData(fd);
    // setFilteredData(filtration());
    
    // console.log(filteredData);

    // dispatch(changefilters({ key: 'name', value: '' }));
    // if (filters.length > 0) CreateFilteredDate(isAdd);
    // if (filters.length > 0) setFilteredData(filtration());

    // if (filters.length > 0) {
    //   // const index = filters.keys().findIndex(elem => elem === 'id');
    //   const index = filters.findIndex(elem =>  elem.key === 'parentId');
    //   if (index !== - 1) {
    //     const result = filteredData.filter(item => item.parentId === filters[index].value)
    //     // dispatch(changefilteredProducts(result));
    //     setFilteredData(result);
    //   }
    // }
    // console.log(activeFilter);
  }, []);

  // const productsFilling = () => {    
  //   products.length === 0 && dispatch(changeFilteredProducts(products1));
  // }

  // const productsFiltration = () => {
  //   dispatch(changeFilteredProducts(filtration()));
  // };



  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(changeFilters(''));
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(changefilteredProducts(filteredData));
  //   // }, [dispatch, filteredData]);
  // // }, [dispatch, filteredData, filters, products]);
  // }, [dispatch, filteredData]);

  // const fn2 = (key, volue) => {
  //   const dynamicObject = {
  //     [key]: volue,
  //   };

  //   setSearchParams(dynamicObject);
  // }
  
  
  
  const checking = (filter, productVolue) => {
    // filtersEl = {key, value:[]}, productVolue = value

    // console.log(product.id, product.productKeys[index]);
    // console.log(product[productKeys[index]]);
    // console.log(product.id);
    // const pos = productKeys.findIndex(
    //   ind => ind.toUpperCase() === product.key.toUpperCase()
    // );
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
          result = result && productVolue.includes(item);
          return 0;
        });
        
        
        // const ss = filter.value.filter(el =>
        // result = filter.value.findIndex(index => index === productVolue) >= 0;
        // result = filter.value.filter(el => productVolue.find(index => index === el) >= 0) ;
        // result = filter.value.filter(el => fn(el) >= 0);

        
      }
    }
    
    return result;
  };

  // Фильтрация товаров
  const filtration = () => {
    if (filters.length > 0) {
      return products.filter(product => {
        // const productKeys = product.map(item => item.key);
        const productKeys = [];
        for (const key in product) {
          productKeys.push(key);
        }
        
        // перебор фильтра
        let result = true;
        for (const filter of filters) {
          const index = productKeys.findIndex(el => el.toUpperCase() === filter.key.toUpperCase())
          result = result && index >= 0 && checking(filter, product[productKeys[index]]);
          
          if(!result)  break;
        }
      
        // if (result) {
        //   result = true;
        // }
        return result;
      })
    } else {
      return products
    }

    // const data = products.filter(product => {
    // // return products.filter(product => {
    //   // let result = true;
    //   let result = false;
    //   if (filters.length > 0) {
    //     filters.map(item => {});
    //   } else

    //   // for (let index = 0; index < product.length; index++) {
      
    //   console.log(product.id, product.id);
    //   for (var key in product) {
    //     if (product[key] !== '') {

    //       // result = result && (() => checking(filters[index]), product[index]);
    //       result = result && (() => checking(filters[0]), product);
    //     }

    //     if (result === false) break;
    //   }
    //   return result;
    // });

    // return data;
    // setFilteredData(date);
  };

  
  // useEffect(() => {
  //   // setFilteredData(filtration());
    
  //   // // CreateFilteredDate(isAdd);

  //   // setIsAdd(false);
  //   // setActiveFilter(activeFilter + 1);
  //   // window.location.reload();

  //   // dispatch(changefilteredProducts(filteredProducts));

  // // }, [dispatch, filteredData]);
  // // }, [dispatch, filteredData, filters, products]);
  // }, [filters]);

  useEffect(() => {
    setFilteredData(filtration());

    // setActiveFilter(!activeFilter);
    // setActiveFilter(activeFilter + 1);
    // console.log('filters');
  }, [filters]); 

  // useEffect(() => {
  //   // setActiveFilter(!activeFilter);
  //   setActiveFilter(activeFilter);
  //   // console.log(activeFilter);
  // }, [activeFilter]); 


  const handleFilter = filteredData => {
    // setActiveFilter(true);
    // setActiveFilter(activeFilter + 1);
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

  const handleClick = () => {
    // dispatch(changeFilters(filters));
    // setActiveFilter(activeFilter+1);
    setActiveFilter(!activeFilter);
    // console.log(filters.length);
  };

  // productsFiltration();

  return (
    <div style={{ backgroundColor: 'var(--bg-second)' }}>
      {/* {productsFiltration()} */}
      <NavBar />
      <Container>
        <aside style={{ minWidth: '250px' }}>
          {/* <p>Панель фильтров</p> */}
          <PriceRange />
          <FilterPanel data={filteredData} onFilter={handleFilter} />
        </aside>
        <section key={+activeFilter}>
          {/* {console.log('render1')} */}
          {/* <div onClick={handleClick} onMouseEnter={handleClick}> */}
          <div>
            Найдено: {filteredData.length} товаров
          </div>
          {filteredData.length === 0 &&
            products.length > 0 &&
            setFilteredData(products)}
          {filteredData.length > 0 && (
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
