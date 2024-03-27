import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { selectLanguages, selectFilters } from 'redux/selectors';
import { Button, Input } from './SearchField.styled';
import lang from 'assets/json/language.json';

import { SlMagnifier } from 'react-icons/sl';
import { addFilters, changeFilters, deleteFilters} from 'redux/slice/filtersSlice';

const SearchField = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const languages = useSelector(selectLanguages);
  
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const arr = filters.map(item => item.key);
    const index = arr.findIndex(el => el === 'name');
    
    setInputValue(index >= 0 ? filters[index].value : '');

  }, [filters]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(changeFilters({ key: 'name', value: e.target[1].value }));
  // };

  const handleChange = e => {
    setInputValue(e.target.value);
    // e.target.value === "" && dispatch(deleteFilters({ key: 'name', value: '' }));
    e.target.value === '' && cleanedFilters();
  };

  // const handleClick = e => {
  //   try {
  //     dispatch(changeFilters({ key: 'name', value: e.currentTarget[1].value }));
  //     setInputValue(e.currentTarget[1].value);
  //   } catch {
  //     dispatch(changeFilters({ key: 'name', value: '' }));
  //     setInputValue('');
  //   }
  // };
  const cleanedFilters = () => {
    dispatch(deleteFilters({ key: 'name', value: '' }));
  }
  
  const handleClick = () => {
    // dispatch(deleteFilters({ key: 'name', value: '' }));
    cleanedFilters();
    // inputValue !== "" && dispatch(changeFilters({ key: 'name', value: inputValue }));
    inputValue !== "" && dispatch(addFilters({ key: 'name', value: inputValue }));
  };

  const onKeyUp = e => {
    if (e.key === 'Enter') {
      // dispatch(deleteFilters({ key: 'name', value: '' }));
      cleanedFilters();
      // inputValue !== '' && dispatch(changeFilters({ key: 'name', value: e.target.value }));
      inputValue !== '' && dispatch(addFilters({ key: 'name', value: e.target.value }));
      // setInputValue(e.target.value);
    }
  };


  return (
    <form style={{ position: 'relative' }}>
      <Link to="/catalog">
        <Button type="submit" aria-label="search" onClick={handleClick}>
          <SlMagnifier style={{ width: '25px', height: '25px' }} />
        </Button>
        <Input
          type="text"
          placeholder={lang[languages].layout_find}
          onChange={handleChange}
          // onBlur={onBlurInp}
          value={inputValue}
          onKeyUp={onKeyUp}
        />
      </Link>
    </form>
  );
};

export default SearchField;
