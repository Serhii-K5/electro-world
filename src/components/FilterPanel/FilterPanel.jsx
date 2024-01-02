import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';

import {
  
} from './FilterPanel.styled';



const FilterPanel = ({ data, onFilter }) => {
  const filters = useSelector(selectFilters);

  const NaborFilters = () => {
    const arr = filters.map(item => {
      const code = item
    })
    return arr;
  }
  
  const handleFilter = () => {
    // NaborFilters(filters);
    const filteredData = data.filter(item => {
      const code = filters
      const matchDropdown1 = filterByDropdown1 === '' || item.make === filterByDropdown1;
      const matchDropdown2 = filterByDropdown2 === '' || String(item.rentalPrice.slice(1)) === String(filterByDropdown2)
        || (String(Number(item.rentalPrice.slice(1))) > String(Number(filterByDropdown2)) && String(Number(item.rentalPrice.slice(1))) < String(Number(filterByDropdown2) + 10));
      const matchInput1 = filterByInput1 === '' || item.mileage === 0 + filterByInput1 || item.mileage > 0 + filterByInput1;
      const matchInput2 = filterByInput2 === '' || item.mileage === 0 + filterByInput2 || item.mileage < 0 + filterByInput2;

      return matchDropdown1 && matchDropdown2 && matchInput1 && matchInput2;
    });

    onFilter(filteredData);
  };

  return (
    <>
    </>
  );
};

export default FilterPanel;
