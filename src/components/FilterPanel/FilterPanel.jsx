import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';
import { addFilters, deleteFilters } from "redux/slice/filtersSlice";


import {
  LiBlock,
  Div,
  Strong,
  Ul,
  Li,
  Span,
} from './FilterPanel.styled';

import shevron from "assets/images/svg/chevron-down.svg";
import CreateMemoArray from "utilites/createMemoArray";


const FilterPanel = ({ data }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [expanded, setExpanded] = useState({});
  const [filtersArray, setFiltersArray] = useState([]);

  
  const updateCheckboxes = () => {
    setFiltersArray((prevFiltersArray) =>
      prevFiltersArray.map((item) => ({
        ...item,
        values: item.values.map((value, index) => ({
          ...value,
          checked: toggleChecked(value.value),
        })),
      }))
    );
  };

  useEffect(() => {
    const memoArray = (arr) => {
      data.map(item => {
        const tempArray = CreateMemoArray(item.memo);
        tempArray.flatMap(memoEl => {
          if (memoEl && memoEl.key !== '') {
            const keyArr = arr.map(item => item.key);
            const index = keyArr.length > 0
              ? keyArr.findIndex(memoKey =>
                memoKey && memoEl.key.trim().toUpperCase() === memoKey.trim().toUpperCase()
              )
              : -1;
            
            if (index < 0) {
              arr.push({ key: memoEl.key.trim(), values: [{ value: memoEl.value.trim(), count: 1 }] });
            } else {
              const pos = arr[index].values.findIndex(el => el.value === memoEl.value);
              if (pos < 0) {
                arr[index].values.push({ value: memoEl.value, count: 1 });
              } else {
                arr[index].values[pos].count++;
              }
            }
          }
          setFiltersArray(arr);
          return 0;
        });
        return 0;
      });
    };

    memoArray([]);

    const updateCheckboxes = () => {
      setFiltersArray((prevFiltersArray) =>
        prevFiltersArray.map((item) => ({
          ...item,
          values: item.values.map((value, index) => ({
            ...value,
            checked: toggleChecked(value.value),
          })),
        }))
      );
    };

    updateCheckboxes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filters, expanded]);

  const changeCheckbox = (key, item, e) => {
    if (e.target.checked) {
      dispatch(addFilters({ key: "memo", value: item }));
    } else {
      dispatch(deleteFilters({ key:"memo", value: item }));
    }

    updateCheckboxes(); 
  };

  const toggleDropdown = (key) => {
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleChecked = (item1) => {
    return filters.map(nameFilter => nameFilter.value).toString().includes(item1);
  }

  return (
    <ul>
      {filtersArray.length > 0 &&
      filtersArray.map(({ key, values }) => (
        <LiBlock key={key}>
          <Div onClick={(e) => { toggleDropdown(key)}} >
            <img src={shevron} alt="shevron" style={expanded[key] ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
            <Strong> {key} </Strong>
            <Span>({values.length})</Span>
          </Div>
          <Ul style={{maxHeight: expanded[key] ? '100vh' : '0'}}>
            {expanded[key] && values.map(({ value, count, checked }, index) => (
              <Li key={`${key}-${index}`}> 
                <input
                  type="checkbox"
                  id={`${key}-${index}`}
                  value={value}
                  checked={checked}
                  onChange={(e) => changeCheckbox(key, value, e)}
                />
                <label htmlFor={`${key}-${index}`}>{value} <Span>({count})</Span></label>
              </Li>
            ))}
          </Ul>
        </LiBlock>
      ))}
    </ul>
  );
};

export default FilterPanel;