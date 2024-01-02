// DropdownButton.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatalog } from 'redux/slice/catalogSlice';
import { setSelectedElement, clearSelectedElement } from 'redux/slice//selectedElementSlice';
import DropdownList from '../DropdownList/DropdownList';

import categories from 'assets/json/categories.json';

const DropdownButton = () => {
  const dispatch = useDispatch();
  // const catalog = useSelector((state) => state.catalog);
  const selectedElement = useSelector((state) => state.selectedElement);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    // Загрузка начального каталога
    dispatch(setCatalog(categories));
  }, [dispatch]);

  const handleMouseEnter = (element) => {
    dispatch(setSelectedElement(element));
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    dispatch(clearSelectedElement());
    setDropdownVisible(false);
  };

  const setFilter = () => {
    const asedf = categories.map(item => item.cat_parentId === 0 && item);
    // return categories.map(item => item.cat_parentId === 0 && item);
    return asedf;
  }

  return (
    <div onMouseLeave={handleMouseLeave}>
      <button onMouseEnter={() => handleMouseEnter({ cat_parentId: 0 })}>
        Show Dropdown
      </button>
      {isDropdownVisible && selectedElement && (
        <DropdownList elements={() => setFilter} onSelect={handleMouseEnter} />
      )}
    </div>
  );
};

export default DropdownButton;