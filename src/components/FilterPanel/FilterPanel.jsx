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
      const memoArray = (item.memo + ';')
        .replace(';;', '')
        .split(';')
        .map(param => param.split(':').map(param2 => param2.trim()));

      filtersArray.map((elem, index) => {        
        if (elem === 'parentId') {
          result = result && item.elem === filters[index].value
        } else if (elem === 'name' && result && (filters[index].value !== "")) {
          if (Number.isFinite(filters[index].value)) {
            result = result && item.code.toString().indexOf(filters[index].value.toString() !== -1)
          } else {
            result = result && item.name.toString().indexOf(filters[index].value.toUpperCase() !== -1)
          }       
        } else {
          if (filters[index].value.isArray()) {
            result = result && item.elem 
          } else {
            result = result && item.elem === memoArray
          }
        }
        
        return (result)
      }
      )
      // const matchDropdown1 = filterByDropdown1 === '' || item.make === filterByDropdown1;
      // const matchDropdown2 = filterByDropdown2 === '' || String(item.rentalPrice.slice(1)) === String(filterByDropdown2)
      //   || (String(Number(item.rentalPrice.slice(1))) > String(Number(filterByDropdown2)) && String(Number(item.rentalPrice.slice(1))) < String(Number(filterByDropdown2) + 10));
      // const matchInput1 = filterByInput1 === '' || item.mileage === 0 + filterByInput1 || item.mileage > 0 + filterByInput1;
      // const matchInput2 = filterByInput2 === '' || item.mileage === 0 + filterByInput2 || item.mileage < 0 + filterByInput2;

      // return matchDropdown1 && matchDropdown2 && matchInput1 && matchInput2;
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
