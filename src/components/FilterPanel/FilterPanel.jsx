import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';

import {
  
} from './FilterPanel.styled';


const FilterPanel = ({ data, onFilter }) => {
  const filters = useSelector(selectFilters); //Выбранные фильтры
  const [memoFilters, setMemoFilters] = useState([]);

  useEffect(() => {
    // handleFilter();
    memoArray()
    // dispatch(changefilters({key: 'name', value: ''})); 
  }, []);
  
  // const filtersSet = () => {
  //   // return filters.map(item => item.key)
  //   return filters.keys
  // }
  
  const filtersUpdate = (result, el) => {
    if (result === -1) {
      setMemoFilters(...memoFilters, { key: el.name, value: [el.value] });
      // Number.isFinite(el.value)
      //   ? setMemoFilters(...memoFilters, { key: el.name, value: [el.value, el.value] })
      //   : setMemoFilters(...memoFilters, { key: el.name, value: el.value });
    } else {
      setMemoFilters(memoFilters[result].value.push(el.value));
      // Number.isFinite(el.value)
      //   ? (el.value < memoFilters[result].value[0] &&
      //       setMemoFilters(memoFilters[result].value[0] = Number(el.value)))
      //   : (el.value > memoFilters[result].value[1] &&
      //       setMemoFilters(memoFilters[result].value[1] = Number(el.value)));
    }
  }
  
  const createMemoArr = (memo) => {
    return (memo + ';').replace(';;', '')
      .split(';')
      .map(param => param.split(':')
        .map((param2, index) => {
          return { key: (index === 0 && param2.trim()), value: index === 1 && param2.trim() }
        })
      )
  }
  
  const memoArray = () => {
    // const filteredData = data.filter(item => {  //перебор товара
    data.map(item => {  //перебор товара
      // const tempArr = createMemoArr(item.memo).flatMap(el => {  //создаёт массив мемо и перебирает его по ключам
      createMemoArr(item.memo).flatMap(el => {  //создаёт массив мемо и перебирает его по ключам
        const result = memoFilters.keys.findIndex(elem => elem === el.name); //проверка наличия ключа товара в общем фильтре
        filtersUpdate(result, el) // обновляет значение ключа
        return el
      })
    return item
    })
  }


  
  // const handleFilter = () => {
  //   const filtersNameArray = filtersSet();
  //   let result = true;
  //   const filteredData = data.filter(item => {
  //     // const memoArray = (item.memo + ';').replace(/\s/g, '').replace(';;', '').split(';');
  //     const memoArray = [];
        
  //     filtersArray.map((elem, index) => {
  //       if (!result) {
  //         return result;
  //       }
        
  //       if (elem === 'parentId') {
  //         result = result && item.elem === filters[index].value;
  //         memoArray.push((item.memo + ';').replace(';;', '')
  //           .split(';')
  //           .map(param => param.split(':')
  //             .map((param2, index) => { return { key: (index === 0 && param2.trim()), value: index === 1 && param2.trim() } }))
  //         );
  //       } else if (elem === 'name' && result && (filters[index].value !== "")) {
  //         if (Number.isFinite(filters[index].value)) {
  //           result = result && item.code.toString().indexOf(filters[index].value.toString() !== -1)
  //         } else {
  //           result = result && item.name.toString().indexOf(filters[index].value.toUpperCase() !== -1)
  //         }
  //       } else {
  //         const KeysArray = memoArray.map(item => item.key);
  //         const pos = KeysArray.findIndex(el => el === elem);
          
  //         if (pos !== -1 && filters[index].value.isArray()) {
  //           result = result && memoArray[pos].value >= filters[index].value[0] && memoArray[pos].value <= filters[index].value[1]
  //         } else if (pos !== -1) {
  //           result = result && memoArray[pos].value === filters[index].value
  //         }
  //       }
  //       return result;
  //     });
      
  //     return result;
  //   });

  //   onFilter(filteredData);

  //   return
  // };

  return (
    <>
    </>
  );
};

export default FilterPanel;
