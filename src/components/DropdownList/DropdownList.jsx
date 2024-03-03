import { useState, useContext } from 'react';
import { useSelector } from "react-redux";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import { ProductsContext } from 'pages/CatalogPage/CatalogPage'; 


function DropdownList() {  
  const languages = useSelector(selectLanguages);
  const [isOpen, setIsOpen] = useState(false);
  const { filteredData, setFilteredData } = useContext(ProductsContext);
  const [numberLine, setNumberLine] = useState(0);

  const list = [
    {
      id: 'priceLowToHigh',
      text: lang[languages].catalogPage_sortingAZ
    },
    {
      id: 'priceHighToLow',
      text: lang[languages].catalogPage_sortingZA
    },
    {
      id: 'name',
      text: lang[languages].catalogPage_sortingName
    },
    ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (filter) => {
    setIsOpen(false);
    setFilteredData(sortProducts(filter));
  };

  const sortProducts = (filter) => {
    if (!filter) return filteredData;

    switch (filter) {
      case 'priceLowToHigh':
        setNumberLine(0);
        return [...filteredData].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':        
        setNumberLine(1);
        return [...filteredData].sort((a, b) => b.price - a.price);
      case 'name':
        setNumberLine(2);
        return [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filteredData;
    }
  };


  return (
    <div className="dropdown" style={{position: 'relative', padding: '0px 10px'}}>
      <div onClick={toggleDropdown} style={{width: '180px'}}><u>{list[numberLine].text + " "}</u></div>
      {isOpen && (
        <ul style={{ position: 'absolute', top:'30px', left: '-115px', zIndex: 5, backgroundColor: "#FFF", width: '150%', boxShadow: '0 0 5px 5px gray'}}>
          {list && list.map((value, index) => (
            <li key={index} style={{borderBottom: 'solid 1px grey'}}>
              <div onClick={() => handleSelect(value.id)} style={{padding: '10px 10px'}}>
                <u>{list[index].text}</u>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownList;