import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';
// import { addFilters, changeFilters, deleteFilters } from "redux/slice/filtersSlice";
import { addFilters, deleteFilters } from "redux/slice/filtersSlice";


import {
  LiBlock,
  Div,
  Strong,
  Ul,
  Li,
} from './FilterPanel.styled';

import shevron from "assets/images/svg/chevron-down.svg";

import CreateMemoArray from "utilites/createMemoArray";


// const FilterPanel = ({ data, onFilter }) => {
const FilterPanel = ({ data }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [expanded, setExpanded] = useState({});
  const [filtersArray, setFiltersArray] = useState([]);


  useEffect(() => {
    memoArray();
  }, []);

  // useEffect(() => {
  //   memoArray();
  // }, filtersArray);

  const memoArray = () => {
    // const arr = [];
    const arr = filtersArray;
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
        setFiltersArray(arr);
        return 0;
      });
      return 0;
    });
  };
  
  const changeCheckbox = (item, e) => {
    if (e.target.checked) {
      dispatch(addFilters({ key: "memo", value: item }));
    } else {
      dispatch(deleteFilters({ key:"memo", value: item }));
    }
  };

  const toggleDropdown = (key) => {
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleChecked = (item1) => {
    //Расстановка галочек
    return filters.map(nameFilter => nameFilter.value).toString().includes(item1);
  };


  return (
    <ul>
      {filtersArray.length > 0 &&
        filtersArray.map(({ key, value }) => (
        <LiBlock key={key}>
          <Div onClick={(e) => { toggleDropdown(key)}} >
            <img src={shevron} alt="shevron" style={expanded[key] ? { rotate: '180deg' } : { rotate: '0deg' }} />
            <Strong> {key} </Strong>
          </Div>
          {expanded[key] && (
            <Ul>
              {value.map((item, index) => (
                <Li key={index}>
                  <input type="checkbox" id={`${key}-${index}`} value={item} defaultChecked={toggleChecked(item)} onClick={(e) => changeCheckbox(item, e)}/>
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
