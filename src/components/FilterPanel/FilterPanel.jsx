import { useEffect, useState } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFilters, selectFilteredProducts } from 'redux/selectors';
import { selectFilters } from 'redux/selectors';
import { changeFilters } from "redux/slice/filtersSlice";


import {
  
} from './FilterPanel.styled';

// import data from '../../assets/json/products.json';
// import K0 from "./K0/K0";

// import shevron from "assets/images/svg/shuffle-arrows.svg";

// const FilterPanel = ({ data, onFilter }) => {
const FilterPanel = ({ data }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters); //Выбранные фильтры
  // const filteredProducts = useSelector(selectFilteredProducts);

  const [memoFilters, setMemoFilters] = useState([]);
  const [isCheckBoxes, setIsCheckBoxes] = useState(true);

  // console.log(filters);

  useEffect(() => {
     memoArray();
    // dispatch(changeFilters({key: 'name', value: ''}));
  }, []);

  // useEffect(() => {
  //   // handleFilter();
  //   memoArray();
  //   // dispatch(changeFilters({key: 'name', value: ''}));

  //   // setMemoFilters(filters);

  // }, [filters]);

    // const createMemoArr = memo => {
    //   return (memo + ';')
    //     .replace(';;', '')
    //     .split(';')
    //     .map(item => {
    //       const arr = item.split(':');
    //       return arr > 0 ? { key: arr[0].trim(), value: arr.length > 0 ? arr[1].trim() : '' } : "";
    //     });
    // };    
  
  const createMemoArr = memo => {
      // setMemoFilters(
    const createArray = (memo + ';')
      .replace(';;', '')
      .split(';')
      .map(item => {
        const arr = item.split(':');
        return (
          arr.length > 0 &&
          arr[0] !== '' && {
            key: arr[0].trim(),
            value: arr.length > 0 ? arr[1].trim() : '',
          }
        );
      })
      .filter(el => el);    

    // setMemoFilters(createArray);
    return createArray;
  };

  // Проверка наличия элемента в value
  const availabilityCheck = (date, value) => {
    const index = date.findIndex(item => item === value.trim());
    return index < 0 && date.push(value.trim());
  };

  const filtersUpdate = (index, el) => {
    if (el.key && el.key !== '') {
      if (index === -1) {
        el.value !== '' &&
          dispatch(
            changeFilters({
              key: el.key.trim(),
              value: [el.value.trim()],
            })
          );
      } else {
        dispatch(
          changeFilters(availabilityCheck(filters[index].value, el.value))
        );
      }
    }
  };

  // const memoArray = () => {
  //   data.map(item => {
  //     //перебор товара
  //     const tempArray = createMemoArr(item.memo);
  //     // console.log(tempArray, memoFilters);
  //     tempArray.flatMap(memoEl => {
  //       // createMemoArr(item.memo).flatMap(memoEl => {
  //       //создаёт массив мемо и перебирает его по ключам
  //       if (memoEl !== '') {
  //         const result =
  //           filters.length > 0
  //             ? filters.findIndex(
  //                 (
  //                   filtersEl //проверка наличия ключа товара в общем фильтре
  //                 ) =>
  //                   filtersEl.length > 0
  //                     ? filtersEl.key.toUpperCase() ===
  //                       memoEl.key.trim().toUpperCase()
  //                     : -1
  //               )
  //             : -1;
  //         // memoEl !== 0 && filtersUpdate(result, memoEl); // обновляет значение ключа
  //         filtersUpdate(result, memoEl); // обновляет значение ключа
  //       }
  //       return memoEl;
  //     });
  //     return item;
  //   });

  //   // console.log('filters =', filters);
  // };
  
  const memoArray = () => {    
    data.map(item => {
    // filteredProducts.map(item => {
      //перебор товара
      const tempArray = createMemoArr(item.memo);
      // console.log(tempArray, memoFilters);
      tempArray.flatMap(memoEl => {
        // createMemoArr(item.memo).flatMap(memoEl => {
        //создаёт массив мемо и перебирает его по ключам
        if (memoEl && memoEl.key !== '') {
          // let i = 0;
          const keyArr = memoFilters.map(item => item.key);
          const index = keyArr.length > 0
            ? keyArr.findIndex(memoKey =>
              memoEl.key.trim().toUpperCase() === memoKey.trim().toUpperCase()
              // console.log(i++, ": ", memoEl.key.toUpperCase(), '===', memoKey.trim().toUpperCase(), memoEl.key.toUpperCase() === memoKey.trim().toUpperCase()) && memoEl.key.toUpperCase() === memoKey.trim().toUpperCase()
            )
            : -1;
          // let index;
          // if (keyArr.length > 0) {
          //   index = keyArr.findIndex(memoKey =>
          //     memoEl.key.trim().toUpperCase() === memoKey.trim().toUpperCase()
          //   )
          // } else
          //   index = -1;
          
          
          if (index < 0) {
            setMemoFilters(memoFilters.push({ key: memoEl.key.trim(), value: [memoEl.value.trim()] }));
          } else {
            if (Number.isFinite(memoEl.value)) {
              if (memoFilters[index].value[0] > memoEl.value) {
                setMemoFilters((memoFilters[index].value[0] = memoEl.value));
              } else if (memoFilters[index].value[1] < memoEl.value) {
                setMemoFilters((memoFilters[index].value[1] = memoEl.value));
              }
            } else {
              const pos = memoFilters[index].value.findIndex(el => el === memoEl.value);
              if (pos < 0) {
                setMemoFilters(memoFilters[index].value.push(memoEl.value));
                // setMemoFilters(memoFilters[index].value = memoEl.value);
              }
            }
          }
          // const result = filters.length > 0
          //   ? filters.findIndex(filtersEl => ss(filtersEl, memoEl)
          //     filtersEl.length > 0
          //     ? filtersEl.key.toUpperCase() === memoEl.key.trim().toUpperCase()
          //     : false)
          //   : -1;
          // memoEl !== 0 && filtersUpdate(result, memoEl); // обновляет значение ключа
          
          // filtersUpdate(result, memoEl); // обновляет значение ключа
        }
        return memoEl;
      });
      return item;
    });

    // console.log('filters =', filters);
  };

  
  const handleClick = e => {
    setIsCheckBoxes(false);
  };

  // const changeCheckbox = () => {
  //   console.log('changeCheckbox');
  // };

  // const createList = (el, index) => {
  //   return (      
  //     <li key={0}>
  //       {el}
        
  //     </li>
  //   );
  //   // console.log('createList');
  // };

  let i = 0;
  return (
    <ul>
      {/* {console.log(memoFilters)} */}
      {memoFilters.length > 0 &&
        memoFilters.map((el, index) => (
          <li
            key={index}
            // className={parentId > 0 && 'parent'}
            // onMouseEnter={() => categoryChange(el)}
            onClick={() => handleClick(el)}
          >
            {i++}            
            {el.key}
            {
              // isCheckBoxes && console.log(el)
              // <ul>
              //   {el.value.map((item, ind) => <li key={ind}>{item}</li>)}
              // </ul>
            }
          </li>
        ))}
    </ul>
  );
};

export default FilterPanel;

// {/* {console.log(filters[index].value)} */}
//                   {filters[index].value !== '' && createList(el, index)
//                     {/* // Number.isFinite(filters[index].value) ? filters[index].value
//                     //   // .toUpperCase()
//                     //   .sort()
//                     //   .map((item, keyId) => (
//                     //     <li key={keyId}>
//                     //       <span
//                     //         role="checkbox"
//                     //         id={'chkPref' + keyId}
//                     //         aria-checked={false}
//                     //         onClick={changeCheckbox}
//                     //         // onKeyPress="changeCheckbox()"
//                     //         // tabindex={keyId}
//                     //         aria-labelledby={'chk' + keyId + '-label'}
//                     //       />
//                     //       {/* <label id={"chk"+ keyId + "-label"} onclick="changeCheckbox()" onKeyPress="changeCheckbox()" */}
//                     //       <label
//                     //         id={'chk' + keyId + '-label'}
//                     //         onClick={changeCheckbox}
//                     //       >
//                     //         {item}
//                     //       </label>
//                     //     </li>
//                     //   ))
//                   }