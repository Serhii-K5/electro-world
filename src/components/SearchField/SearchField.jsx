import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { selectLanguages, selectFilters } from 'redux/selectors';
import { Button, Input } from './SearchField.styled';
import lang from 'assets/json/language.json';

import { SlMagnifier } from 'react-icons/sl';
// import { changeFilters } from 'redux/slice/filtersSlice';
import { changeFilters, deleteFilters} from 'redux/slice/filtersSlice';

const SearchField = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const languages = useSelector(selectLanguages);
  
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   const arr = filters.map(item => item.key);
  //   const index = arr.findIndex(el => el === 'name');
  //   if (index >= 0) {
  //     setInputValue(filters[index].value !== "" ? filters[index].value.join(' ') : "")
  //   };
  // }, []);

  useEffect(() => {
    const arr = filters.map(item => item.key);
    const index = arr.findIndex(el => el === 'name');
    
    setInputValue(index >= 0 ? filters[index].value : '');

  }, [filters]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeFilters({ key: 'name', value: e.target[1].value }));
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    // console.log('sf(hch) name');
    // e.target.value === "" && dispatch(changeFilters({ key: 'name', value: '' }));
    e.target.value === "" && dispatch(deleteFilters({ key: 'name', value: '' }));

    // const arr = e.target.value.split(' ');
    // dispatch(changeFilters({ key: 'name', value: arr }));
  };

  // const onBlurInp = e => {
  //   const arr = e.target.value.split(' ');
  //   dispatch(changeFilters({ key: 'name', value: arr }));
  //   setInputValue(e.target.value);
  // };

  const handleClick = e => {
    // const arr = e.currentTarget[1].value.split(' ');
    // // console.log('sf(hcl) name');
    // dispatch(changeFilters({ key: 'name', value: arr }));
    dispatch(changeFilters({ key: 'name', value: e.currentTarget[1].value }));
    setInputValue(e.currentTarget[1].value);
  };

  const onKeyUp = e => {
    if(e.key === 'Enter'){
      // const arr = e.target.value.split(' ');
      // // console.log('sf(oku) name');
      // dispatch(changeFilters({ key: 'name', value: arr }));
      dispatch(changeFilters({ key: 'name', value: e.target.value }));
      setInputValue(e.target.value);
    }
  };


  return (
    <form onSubmit={handleSubmit} onClick={handleClick} style={{ position: 'relative' }}>
      <Link to="/catalog">
        <Button type="submit" >
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
