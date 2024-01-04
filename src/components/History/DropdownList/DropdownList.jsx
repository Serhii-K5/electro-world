import React from 'react';

const DropdownList = ({ elements, onSelect }) => {
  return (
    <ul>
      {elements.map(element => (
        <li key={element.id} onMouseEnter={() => onSelect(element)}>
          {element.name}
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
