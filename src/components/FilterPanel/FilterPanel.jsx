import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';

import {
  
} from './FilterPanel.styled';



const FilterPanel = ({ data, onFilter }) => {
  const filters = useSelector(selectFilters);

  const NaborFilters = () => {
    return filters.map(item => item.key)
  }
  
  const handleFilter = () => {
    const filtersArray = NaborFilters();
    let result = true;
    const filteredData = data.filter(item => {
      // const memoArray = (item.memo + ';').replace(/\s/g, '').replace(';;', '').split(';');
      const memoArray = [];
        
      filtersArray.map((elem, index) => {
        if (!result) {
          return result;
        }
        
        if (elem === 'parentId') {
          result = result && item.elem === filters[index].value;
          memoArray.push((item.memo + ';').replace(';;', '')
            .split(';')
            .map(param => param.split(':')
              .map((param2, index) => { return { key: (index === 0 && param2.trim()), value: index === 1 && param2.trim() } }))
          );
        } else if (elem === 'name' && result && (filters[index].value !== "")) {
          if (Number.isFinite(filters[index].value)) {
            result = result && item.code.toString().indexOf(filters[index].value.toString() !== -1)
          } else {
            result = result && item.name.toString().indexOf(filters[index].value.toUpperCase() !== -1)
          }
        } else {
          const KeysArray = memoArray.map(item => item.key);
          const pos = KeysArray.findIndex(el => el === elem);
          
          if (pos !== -1 && filters[index].value.isArray()) {
            result = result && memoArray[pos].value >= filters[index].value[0] && memoArray[pos].value <= filters[index].value[1]
          } else if (pos !== -1) {
            result = result && memoArray[pos].value === filters[index].value
          }
        }
        return result;
      });
      
      return result;
    });

    onFilter(filteredData);
  };

  return (
    <>
    </>
  );
};

export default FilterPanel;
