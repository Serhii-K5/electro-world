import { useEffect, useState } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';
import { changefilters } from "redux/slice/filtersSlice";

import {
  
} from './FilterPanel.styled';

// import K0 from "./K0/K0";

// import shevron from "assets/images/svg/shuffle-arrows.svg";

const FilterPanel = ({ data, onFilter }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters); //Выбранные фильтры

  const [memoFilters, setMemoFilters] = useState([]);
  const [isCheckBoxes, setIsCheckBoxes] = useState(true);

  // console.log(filters);

  // useEffect(() => {
  //   // handleFilter();
  //   // memoArray();
  //   // dispatch(changefilters({key: 'name', value: ''}));
  // }, []);

  useEffect(() => {
    // handleFilter();
    // memoArray();
    // dispatch(changefilters({key: 'name', value: ''}));

    setMemoFilters(filters);

  }, [filters]);

  const createMemoArr = memo => {
    return (memo + ';')
      .replace(';;', '')
      .split(';')
      .map(item => {
        const arr = item.split(':');
        return arr > 0 ? { key: arr[0].trim(), value: arr.length > 0 ? arr[1].trim() : '' } : "";
      });
  };

  // Проверка наличия элемента в value
  const availabilityCheck = (date, value) => {
    const index = date.findIndex(item => item === value.trim());
    return index < 0 && date.push(value.trim());
  };

  const filtersUpdate = (index, el) => {
    if (el.key !== '') {
      if (index === -1) {
        el.value !== '' &&
          // dispatch(changefilters(filters.push({
          //   key: el.key.trim(),
          //   value: [el.value.trim()],
          // })))
          dispatch(changefilters({
            key: el.key.trim(),
            value: [el.value.trim()],
          }))
          // && console.log('dispatch');
        // Number.isFinite(el.value)
      } else {
        dispatch(
          changefilters(availabilityCheck(filters[index].value, el.value))
        );
      }
    }
  };

  const memoArray = () => {
    data.map(item => {
      //перебор товара
      createMemoArr(item.memo).flatMap(memoEl => {
        //создаёт массив мемо и перебирает его по ключам
        if (memoEl !== "") {        
          const result =
            filters.length > 0
              ? filters.findIndex(
                (
                  filtersEl //проверка наличия ключа товара в общем фильтре
                ) => filtersEl.length > 0 ? filtersEl.key.toUpperCase() === memoEl.key.trim().toUpperCase() : -1
                )
              : -1;
          // const result = memoFilters.keys.findIndex(elem => elem === el.name); //проверка наличия ключа товара в общем фильтре
          memoEl !== 0 && filtersUpdate(result, memoEl); // обновляет значение ключа
        }; 
        return memoEl;
      });
      return item;
    });

    // console.log('filters =', filters);
  };

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

  const changeCheckbox = () => {
    console.log('changeCheckbox');
  };

  const createList = (el, index) => {
    return (
      // {/* {console.log(filters[index].value)} */}
      // filters[index].value.length > 0 &&
      //   Number.isFinite(filters[index].value[0])
      //     ? filters[index].value.sort((a, b) => a - b)
      //     : filters[index].value.sort()
      // &&
      // filters[index].value.length > 0 &&
      //   filters[index].value.map((item, keyId) => {
      //     return (
      // <li key={keyId}>
      <li key={0}>
        {el}
        {/* {item} */}
        {/* //   <span
        //     role="checkbox"
        //     id={'chkPref' + keyId}
        //     aria-checked={false}
        //     onClick={changeCheckbox}
        //     // onKeyPress="changeCheckbox()"
        //     // tabindex={keyId}
        //     aria-labelledby={'chk' + keyId + '-label'}
        //   />
        //  {/* <labe}l id={"chk"+ keyId + "-label"} onclick="changeCheckbox()" onKeyPress="changeCheckbox()" */}
        {/* <label
            id={'chk' + keyId + '-label'}
            onClick={changeCheckbox}
          >
            {item}
          </label> */}
      </li>
      //   );
      //   // ))
      // })
    );
    // console.log('createList');
  };

  // Преобразует поле Мемо в массив объектов
  memoArray();
  // console.log('memoArray');

  return (
    <>
      <ul>
        <li key={0}>1</li>
        <li key={1}>2</li>
        <li key={2}>3</li>
      </ul>
      {/* <K0 data={data}></K0> */}
      {/* {console.log(filters)} */}
      {/* {!(filters.length > 0) && memoArray()} */}
      {/* {console.log(filters)}
      {console.log(memoFilters)} */}
      <ul>
        {filters.length > 0 &&
          filters.map((el, index) => (
            <li
              key={index}
              // className={parentId > 0 && 'parent'}
              // onMouseEnter={() => categoryChange(el)}
              onClick={() => handleClick(el)}
            >
              {el.key}
              {/* {isCheckBoxes && (
                <ul>
                  <li>1</li>
                </ul>
              )} */}
            </li>
          ))}
      </ul>
    </>
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