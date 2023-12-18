// DropdownButton.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatalog } from './catalogSlice';
import { setSelectedElement, clearSelectedElement } from './selectedElementSlice';
import DropdownList from './DropdownList';
import category from 'assets/json/category.json';

const DropdownButton = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
  const selectedElement = useSelector((state) => state.selectedElement);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    // Загрузка начального каталога
    dispatch(setCatalog(category));
  }, [dispatch]);

  const handleMouseEnter = (element) => {
    dispatch(setSelectedElement(element));
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    dispatch(clearSelectedElement());
    setDropdownVisible(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <button onMouseEnter={() => handleMouseEnter({ id: 0 })}>
        Show Dropdown
      </button>
      {isDropdownVisible && selectedElement && (
        <DropdownList elements={() => {category.map(item => item.cat_parentId === 0 && item )}} onSelect={handleMouseEnter} />
      )}
    </div>
  );
};

export default DropdownButton;