import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

function DropdownList({ products, onChange }) {  
  const languages = useSelector(selectLanguages);
  const [isOpen, setIsOpen] = useState(false);
  const [_selectedFilter, setSelectedFilter] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
    if (onChange) {
      onChange(filter);
    }
  };

  const sortProducts = (filter) => {
    if (!filter) return products;

    switch (filter) {
      case 'priceLowToHigh':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        Filter
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <div onClick={() => handleSelect('priceLowToHigh')}>
            {lang[languages].catalogPage_sortingAZ}
          </div>
          <div onClick={() => handleSelect('priceHighToLow')}>
            {lang[languages].catalogPage_sortingZA}
          </div>
          <div onClick={() => handleSelect('name')}>
            {lang[languages].catalogPage_sortingName}
          </div>
        </div>
        // <Ul style={{maxHeight: expanded[key] ? '100vh' : '0'}}>
        //         {expanded[key] && values.map(({ value, count }, index) => ( 
        //           // Отображаем количество элементов и их значения
        //           <Li key={index}>
        //             <input type="text" id={`${key}-${index}`} value={value} defaultChecked={toggleChecked(value)} onClick={(e) => changeCheckbox(value, e)}/>
        //             <label htmlFor={`${key}-${index}`}>{value} <Span>({count})</Span></label>
        //           </Li>
        //         ))}
        //       </Ul>
      )}
    </div>
  );
}

export default DropdownList;