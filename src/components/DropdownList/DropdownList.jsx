import { useState, useContext } from 'react';
import { useSelector } from "react-redux";
import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import { ProductsContext } from 'pages/CatalogPage/CatalogPage'; 
import { Container, DropdownDiv, Ul, Li, Div } from './DropdownList.styled';


const DropdownList = () => {  
  const languages = useSelector(selectLanguages);
  const [isOpen, setIsOpen] = useState(false);
  const { filteredData, setFilteredData } = useContext(ProductsContext);
  const [numberLine, setNumberLine] = useState(0);

  const list = [
    {
      id: 'notSorting',
      text: lang[languages].catalogPage_notSorting
    },
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
      case 'notSorting':
        setNumberLine(0);
        return filteredData;
      case 'priceLowToHigh':
        setNumberLine(1);
        return [...filteredData].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':        
        setNumberLine(2);
        return [...filteredData].sort((a, b) => b.price - a.price);
      case 'name':
        setNumberLine(3);
        return [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filteredData;
    }
  };


  return (
    <Container className="dropdown" >
      <DropdownDiv onClick={toggleDropdown}><u>{list[numberLine].text + " "}</u></DropdownDiv>
      {isOpen && (
        <Ul>
          {list && list.map((value, index) => (
            <Li key={index} >
              <Div onClick={() => handleSelect(value.id)} >
                <u>{list[index].text}</u>
              </Div>
            </Li>
          ))}
        </Ul>
      )}
    </Container>
  );
}

export default DropdownList;