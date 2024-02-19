import { useEffect, useState } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectFilters, selectFilteredProducts } from 'redux/selectors';
import { selectFilters } from 'redux/selectors';
// import { selectMemoFilters } from 'redux/selectors';
// import { selectExpanded } from 'redux/selectors';
import { addFilters, changeFilters, deleteFilters } from "redux/slice/filtersSlice";
// import { changeExpanded } from "redux/slice/expandedSlice";
// import { changeMemoFilters } from "redux/slice/memofiltersSlice";


import {
  LiBlock,
  Div,
  Strong,
  Ul,
  Li,
} from './FilterPanel.styled';

import shevron from "assets/images/svg/chevron-down.svg";

import CreateMemoArray from "utilites/createMemoArray";

const arr = [];

// const FilterPanel = ({ data, onFilter }) => {
const FilterPanel = ({ data }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  // console.log(filters);

  useEffect(() => {
    memoArray();
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
  
  // const filtersUpdate = () => {
  //   memoFilters.map(item => 
  //     dispatch(
  //       changeMemoFilters({
  //         key: item.key.trim(),
  //         // value: [item.value.trim()],
  //         value: item.value,
  //       })
  //     )
  //   )
  // };

  // const filtersUpdate = () => {
  //   tempMemoFilters.map(item =>
  //     dispatch(
  //       changeMemoFilters({
  //         key: item.key.trim(),
  //         value: item.value,
  //       })
  //     )
  //   );
  // };

  const memoArray = () => {
    data.map(item => {
      // расшифровует мемо и создаёт массив
      const tempArray = CreateMemoArray(item.memo);

      tempArray.flatMap(memoEl => {
        // перебирает массив мемо по ключам
        if (memoEl && memoEl.key !== '') {
          const keyArr = arr.map(item => item.key);
          const index = keyArr.length > 0
            ? keyArr.findIndex(memoKey =>
              memoKey && memoEl.key.trim().toUpperCase() === memoKey.trim().toUpperCase()
            )
            : -1;
          
          if (index < 0) {
            arr.push({ key: memoEl.key.trim(), value: [memoEl.value.trim()] });
          } else {
            if (Number.isFinite(memoEl.value)) {
              if (arr[index].value[0] > memoEl.value) {
                arr[index].value[0] = memoEl.value;
              } else if (arr[index].value[1] < memoEl.value) {
                arr[index].value[1] = memoEl.value;
              }
            } else {
              const pos = arr[index].value.findIndex(el => el === memoEl.value);
              if (pos < 0) {
                arr[index].value.push(memoEl.value);
              }
            }
          }
        }
        return 0;
      });
      return 0;
    });
  };
  
  // const handleClick = () => {
  //   setIsCheckBoxes(!isCheckBoxes);
  // };

  // const changeCheckbox = (keyF, item, e) => {
  const changeCheckbox = (item, e) => {
    if (e.target.checked) {
      // dispatch(changeFilters({key: keyF, value: item}));
      // console.log('fp memo');
      // dispatch(changeFilters({key:"memo", value:{key: keyF, value: item}}));
      // dispatch(changeFilters({ key: "memo", value: item }));
      dispatch(addFilters({ key: "memo", value: item }));
    } else {
      // dispatch(deleteFilters({key: keyF, value: item}));
      // dispatch(deleteFilters({key:"memo", value:{key: keyF, value: item}}));
      dispatch(deleteFilters({ key:"memo", value: item }));
    }
  };

  
  // const [checkedItems, setCheckedItems] = useState({});

  // const handleCheckboxChange = (optionKey, item) => {
  //   setCheckedItems(prevCheckedItems => ({
  //     ...prevCheckedItems,
  //     [optionKey]: {
  //       ...(prevCheckedItems[optionKey] || {}),
  //       [item]: !prevCheckedItems[optionKey]?.[item],
  //     },
  //   }));    
  // };
  
  const [expanded, setExpanded] = useState({});

  const toggleDropdown = (key) => {
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleChecked = (key, item1) => {
    //Расстановка галочек
    const arr = filters.map(nameFilter => nameFilter.key);
    const index = arr.findIndex(item => item === key);
    
    const result = index < 0 ? false : filters[index].value.includes(item1);
    return result;

  };



  // const toggleDropdown = (key) => {
  //   // const ss = (prevState => ({
  //   //   ...prevState,
  //   //   [key]: !prevState[key],
  //   // }));
  //   // // dispatch(changeExpanded(ss));
  //   // dispatch(changeExpanded(key));
  //   // // dispatch(changeExpanded(prevState => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   })));
  // };

  
  return (
    <ul>
      {arr.length > 0 &&
        arr.map(({ key, value }) => (
        <LiBlock key={key}>
          <Div onClick={(e) => { toggleDropdown(key)}} >
            <img src={shevron} alt="shevron" style={expanded[key] ? { rotate: '180deg' } : { rotate: '0deg' }} />
            <Strong> {key} </Strong>
          </Div>
          {expanded[key] && (
            <Ul>
              {value.map((item, index) => (
                <Li key={index}>
                  {/* <input type="checkbox" id={`${key}-${index}`} value={item} defaultChecked={toggleChecked(key, item, index)} onClick={(e) => changeCheckbox(key, item, e)}/> */}
                  <input type="checkbox" id={`${key}-${index}`} value={item} defaultChecked={toggleChecked(key, item, index)} onClick={(e) => changeCheckbox(item, e)}/>
                  <label htmlFor={`${key}-${index}`}>{item}</label>
                </Li>
              ))}
            </Ul>
          )}
        </LiBlock>
      ))}
    </ul>
  );
};

export default FilterPanel;
