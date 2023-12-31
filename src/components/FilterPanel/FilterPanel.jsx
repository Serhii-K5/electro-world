import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';

import {
  
} from './FilterPanel.styled';

import shevron from "assets/images/svg/shuffle-arrows.svg";

const FilterPanel = ({ data, onFilter }) => {
  const filters = useSelector(selectFilters); //Выбранные фильтры
  const [memoFilters, setMemoFilters] = useState([]);
  const [isCheckBoxes, setIsCheckBoxes] = useState(true);
  

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
      setMemoFilters(...memoFilters, { key: el.key, value: [el.value] });
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
    // const ar = (memo + ';').replace(';;', '')
    // const ar1 = ar.split(';')
    
    // const f = (val) => {
    //   const ar3 = val.map((param2, index) => {
    //       return { key: (index === 0 && param2.trim()), value: index === 1 && param2.trim() }
    //     })
    // }

    // const ar2 = ar1.map(param => param.split(':').f(param.split(':'))
    //   )
    // return ar;

    return (memo + ';').replace(';;', '')
      .split(';')
      .map(item => {
        const arr = item.split(':');
        return {key: arr[0], value: arr.length > 0 ? arr[1] : ''}
      })
      
    // return (memo + ';').replace(';;', '')
    //   .split(';')
    //   .map(param => param.split(':')
    //     .map((param2, index) => {
    //       return { key: (index === 0 && param2.trim()), value: index === 1 && param2.trim() }
    //     })
    //   )
  }
  
  const memoArray = () => {
    // const filteredData = data.filter(item => {  //перебор товара
    data.map(item => {  //перебор товара
      // const tempArr = createMemoArr(item.memo).flatMap(el => {  //создаёт массив мемо и перебирает его по ключам
      createMemoArr(item.memo).flatMap(el => {  //создаёт массив мемо и перебирает его по ключам
        const result = memoFilters.length > 0
          ? memoFilters.keys.findIndex(elem => elem === el.name) //проверка наличия ключа товара в общем фильтре
          : -1;
        // const result = memoFilters.keys.findIndex(elem => elem === el.name); //проверка наличия ключа товара в общем фильтре
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


  const handleClick = e => {
    // const index = categories.findIndex(category => category.cat_parentId === e.cat_id);
    
    // if (index === -1) {
      // dispatch(changefilters({ key: 'parentId', value: e.cat_id }));
      // // const filteredDate = products.filter(item => item.id === e.cat_id);
      // dispatch(changefilters({ key: 'parentId', value: e.cat_id }));
      // const result = filteredData.filter(item => item.id === e.cat_id)
      // setFilteredData(result);
      // dispatch(changefilteredProducts(result));
      setIsCheckBoxes(false);
    // }
  };


  return (
    <ul>
      {memoFilters.length > 0 && memoFilters.keys.map((el, index) =>
        <li
          key={index}
          // className={parentId > 0 && 'parent'}
          // onMouseEnter={() => categoryChange(el)}
          onClick={() => handleClick(el)}
        >
          {el}
          {isCheckBoxes && 
            <ul>
              {memoFilters[index].value.toUpperCase().sort().map((item, keyId) =>
                <li key={keyId}>
                  <span
                    role="checkbox"
                    id={"chkPref" + keyId}
                    aria-checked="false"
                    onclick="changeCheckbox()"
                    // onKeyPress="changeCheckbox()"
                    tabindex={keyId}
                    aria-labelledby={"chk" + keyId + "-label"}
                  />
                  {/* <label id={"chk"+ keyId + "-label"} onclick="changeCheckbox()" onKeyPress="changeCheckbox()" */}
                  <label id={"chk"+ keyId + "-label"} onclick="changeCheckbox()" >
                    {item}
                  </label>
                </li>
              )}
            </ul>
          }
        </li>
      )}
    </ul>
  );
};

export default FilterPanel;
