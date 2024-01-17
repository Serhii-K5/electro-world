import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectFilteredProducts, selectFilters } from 'redux/selectors';
import { changefilteredProducts } from 'redux/slice/filteredProductsSlice';

import products1 from 'assets/json/products.json';

const CreateFilteredDate = (isAdd) => {
  // const dispatch = useDispatch();
  
  const products = useSelector(selectProducts);
  const filters = useSelector(selectFilters);
  const filteredProducts = useSelector(selectFilteredProducts);  
  
  // Исправить подстановку продукции из файла
  const [filteredData, setFilteredData] = useState(
    filteredProducts.length > 0 ? filteredProducts : products.length > 0 ? products : products1
  );
  
  const checking = (filtersEl, product) => {
    // filtersEl = [{key, value:[]}, ...], product = {key, value}
    
    const keys = filtersEl.keys();
    const pos = keys.findIndex(ind => ind.toUpperCase() === product.key.toUpperCase())
    let result = pos < 0 || filtersEl.value === "" || filtersEl.value === 0 ? true : false;
    if (!result) {
      if (Number.isFinite(product[pos].value)) {
        for (let index = 0; index < filtersEl.value.length; index++) {
          if(filtersEl[pos].value[index][0] >= product.value
            && filtersEl[pos].value[index][1] <= product.value) {            
              result = true;
              break;
            };
        }
      } else if (!result) {
        result = (filtersEl[pos].value.findIndex(ind => ind === product.value) >= 0);
      };
    };
    
    return result
  }
  
  // Фильтрация товаров
  const filtration = (data) => {
    return data.filter(product => {
      let result = true;
      for (let index = 0; index < product.length; index++) {
        if (product[index].value !== '') {
          // ?
          result = result && (() => checking(filters[index]), product[index]);
        }

        if (!result) break;
      }
      return result;
    });
  };

  const onChange = (data) => {
    setFilteredData(filtration(data));
  };
  
  if (isAdd) {
    if (filters.length > 0) {      
      onChange(filteredData);
    }
  } else {
    if (filters.length > 0) {
      onChange(products);
    }
  }

  // dispatch(changefilteredProducts(filteredData));
};

export default CreateFilteredDate;
