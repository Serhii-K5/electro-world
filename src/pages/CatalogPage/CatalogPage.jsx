import { useEffect, useState, createContext } from "react";
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
import ProductCardLines from "components/ProductCardLines/ProductCardLines";
import { selectProducts, selectFilters, selectDirectoryPath, selectLanguages } from 'redux/selectors';

import { deleteFilters } from 'redux/slice/filtersSlice';
import { changeCategory } from 'redux/slice/categorySlice';

import {
  PageContainer,
  PathContainer,
  PathSpan,
  Container,
  Aside,
  H4,
  AsideDiv,
  Section,
  SectionBar,
  SortingDiv,
  BuildingDiv,
  Ul,
  BtnDiv,
} from './CatalogPage.styled';


import NavBar from 'components/NavBar/NavBar';
import FilterPanel from 'components/FilterPanel/FilterPanel';

import PriceRange from 'components/PriceRange/PriceRange';
import products1 from "../../assets/json/products.json";
// import categories from "../../assets/json/categories.json";
import lang from 'assets/json/language.json';
import Pagination from 'components/PaginationBar/PaginationBar';

import DropdownList from "components/DropdownList/DropdownList";
import sortingIcon from "assets/images/svg/sorting.svg";
import linesIcon from "assets/images/svg/lines.svg";
import tilesIcon from "assets/images/svg/tiles.svg";

export const ProductsContext = createContext();


const CatalogCarsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const filters = useSelector(selectFilters);
  const category = useSelector(selectDirectoryPath);
  // const category = useSelector(selectCategories);
  
  
  const temp = useSelector(selectProducts);
  const products = temp.length > 0 ? temp : products1; // запрос на сервер
  const [filteredData, setFilteredData] = useState(products);
  
  const [activePage, setActivePage] = useState(1);
  const [isLine, setIsLine] = useState(false);

  // const [sortedProducts, setSortedProducts] = useState(products);
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const applyFilters = (CurentProducts, CurentFilters) => {
      return CurentProducts.filter(product => {
        // Применяем каждый фильтр к продукту
        return CurentFilters.every(filter => {
          const { key, value } = filter;

          if (value === '') {
            return true;
          } else if (Number.isFinite(product[key])) {
            if (Number.isFinite(value[0])) {
              return value[0] === undefined || product[key] === value[0];
            } else if (Number.isFinite(value[0][0])) {
              const [min, max] = value[0];
              return (
                (min === undefined || product[key] >= min) &&
                (max === undefined || product[key] <= max)
              );
            } else if (typeof value[0][0] === 'object') {
              // Если значение фильтра - объект, рекурсивно применяем фильтры к вложенному объекту
              return applyFilters(product[key], value[0]).length > 0;
            } else {
              return false;
            }
          } else {
            if (typeof value[0] === 'object') {
              // return value.some((nameFilter) => {
              return value.every(nameFilter => {
                const isKey =
                  nameFilter.key !== '' &&
                  product[key]
                    .toUpperCase()
                    .includes(value[0].key.toUpperCase());
                const isValue =
                  value[0].value instanceof Array
                    // ? value[0].value.some(nameFilter => {
                    ? value[0].value.every(nameFilter => {
                        return (
                          nameFilter.value !== '' &&
                          product[key]
                            .toUpperCase()
                            .includes(nameFilter.value.toUpperCase())
                        );
                      })
                    : nameFilter.value !== '' &&
                      product[key]
                        .toUpperCase()
                        .includes(nameFilter.value.toUpperCase());

                return isKey && isValue;
              });
            } else {
              const result = () => {
                // return value.some(nameFilter => {
                return value.every(nameFilter => {
                  return (
                    nameFilter.value !== '' &&
                    product[key]
                      .toUpperCase()
                      .includes(nameFilter.toUpperCase())
                  );
                });
              };

              return product[key] !== '' ? result() : true;
            }
          }
        });
      });
    };

    setFilteredData(applyFilters(products, filters));
  }, [products, filters]);
  
  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };

  const handleClickBtn = () => {
    // dispatch(deleteFilters({ key: 'memo', value: [] }));
    dispatch(deleteFilters({ key: 'memo', value: "" }));
    dispatch(deleteFilters({ key: 'name', value: "" }));
    // dispatch(deleteFilters({ key: 'parentId', value: 0 }));
    dispatch(changeCategory(0));
  };

  const formTiles = () => {
    setIsLine(false);
  }

  const formLines = () => {
    setIsLine(true);
  }

  return (
    <PageContainer>
      <NavBar /> 
      <PathContainer>
        <PathSpan><b>{category && category.length > 0 && category[category.length - 1].cat_name}</b></PathSpan>
        <span> {lang[languages].catalogPage_finded} {filteredData.length}</span>
      </PathContainer>
      <Container>
        <Aside>
          <H4>
            {lang[languages].catalogPage_asideTitel.toUpperCase()}
          </H4>
          <BtnDiv onClick={handleClickBtn}>
            <b>{lang[languages].catalogPage_resetFilters.toUpperCase()}</b>
          </BtnDiv>

          <AsideDiv>
            {filteredData && <PriceRange data={filteredData} />}
          </AsideDiv>

          <FilterPanel data={filteredData} />
        </Aside>
        <Section>          
          <SectionBar>
            <SortingDiv>
              <img src={sortingIcon} alt="sorting icon" width={'32px'} height={'32px'}/> 
              {lang[languages].catalogPage_sorting}
              
              <ProductsContext.Provider value={{ filteredData, setFilteredData }}>
                <DropdownList/>
              </ProductsContext.Provider>
            </SortingDiv>
            {filteredData.length > 0 && (            
              <Pagination
                activePage={activePage}
                onClickDecrease={onClickDecrease}
                onClickIncrease={onClickIncrease}
                filteredData={filteredData}
              />
            )}
            <BuildingDiv>
              <div onClick={formTiles}>
                <img src={tilesIcon} alt="tiles icon" width={'32px'} height={'32px'}/>
              </div>
              <div onClick={formLines}>
                <img src={linesIcon} alt="lines icon" width={'32px'} height={'32px'}/>
              </div>
            </BuildingDiv>
          </SectionBar>          
          {filteredData.length > 0 && (
            <Ul>
              {filteredData.map(
                (item, index) =>
                  index > (activePage - 1) * 8 - 1 && index < activePage * 8 && (
                    // index > (page - 1) * 8 - 1 && index < page * 8 && (
                    isLine ? (<li key={item.id} style={{ minHeight: '170px', width: 'calc(100vw - 370px)' }}>
                        <ProductCardLines card={item} index={index} />
                      </li>)
                    : (<li key={item.id} >
                        <ProductCard card={item} />
                      </li>)
                  )
              )}
            </Ul>
          )}
          {filteredData.length > 0 && (            
            <Pagination
              activePage={activePage}
              onClickDecrease={onClickDecrease}
              onClickIncrease={onClickIncrease}
              filteredData={filteredData}
            />
          )}
        </Section>
      </Container>
    </PageContainer>
  );
};

export default CatalogCarsPage;
