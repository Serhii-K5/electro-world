import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { selectLanguages, selectFilters } from 'redux/selectors';
import { Button, Input } from './SearchField.styled';
import lang from 'assets/json/language.json';

import { SlMagnifier } from 'react-icons/sl';
// import { addFilters, deleteFilters} from 'redux/slice/filtersSlice';
import { changeFilters, deleteFilters } from 'redux/slice/filtersSlice';

const SearchField = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const languages = useSelector(selectLanguages);
  
  const [inputValue, setInputValue] = useState('');
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const arr = filters.map(item => item.key);
    const index = arr.findIndex(el => el === 'name');
    
    setInputValue(index >= 0 ? filters[index].value : '');

  }, [filters]);

  const handleChange = e => {
    setIsChange(true);
    setInputValue(e.target.value);
    // e.target.value === "" && dispatch(deleteFilters({ key: 'name', value: '' }));
    e.target.value === '' && cleanedFilters();
  };

  const cleanedFilters = () => {
    dispatch(deleteFilters({ key: 'name', value: '' }));
  }
  
  const handleClick = () => {
    if (isChange) {
      cleanedFilters();
      // inputValue !== '' && dispatch(addFilters({ key: 'name', value: inputValue }));
      inputValue !== '' && dispatch(changeFilters({ key: 'name', value: inputValue }));
      setIsChange(false);
    }
  };

  const onKeyUp = e => {
    if (e.key === 'Enter' && isChange) {
      cleanedFilters();
      inputValue !== '' && dispatch(changeFilters({ key: 'name', value: e.target.value }));
      setIsChange(false);
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
          title={lang[languages].searchField_title}
        />
      </Link>
    </form>
  );
};

export default SearchField;
