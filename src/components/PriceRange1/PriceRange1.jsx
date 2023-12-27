import { useState, useEffect } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { SiVodafone } from 'react-icons/si';
// import { FaViber } from 'react-icons/fa';

// import ks from 'assets/images/svg/kyivstar.svg';
// import { VodafoneBg, Span } from './PriceRange.styled';

import { useSelector } from 'react-redux';
import { selectFilteredProducts } from 'redux/selectors';


const PriceRange1 = () => {
  const shift = 20;
  // const { JSDOM } = require('jsdom');
  // const { window } = new JSDOM('');
  // const $ = require('jquery')(window);
  const filteredProducts = useSelector(selectFilteredProducts);

  const [rangePricePosition, setRangePosition] = useState(0);
  const [rangePriceWidth, setRangeWidth] = useState(0);
  const [CurentPosition1, setCurentPosition1] = useState(0);
  const [CurentPosition2, setCurentPosition2] = useState(100);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  // const minPriceElement = document.getElementById('min-price');
  // const maxPriceElement = document.getElementById('max-price');
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);  


  useEffect(() => {
    // var coordinatesDisplay = document.getElementById('coords');
    const rangePriceElement = document.getElementById('range-price');
    const minPriceElement = document.getElementById('min-price');
    const maxPriceElement = document.getElementById('max-price');
    
    const rangePositionX = rangePriceElement.clientX;
    setRangePosition(rangePositionX);
    const minPriceX = minPriceElement.clientX;
    const maxPriceX = maxPriceElement.clientX;

    setMaxPrice(findMaxPrice());
    setMinPrice(findMinPrice());

    const findMaxPrice = () => {
      const max = filteredProducts.reduce(
        (accumulator, currentValue) =>
          (accumulator =
            currentValue.price > accumulator
              ? currentValue.price
              : accumulator),
        0
      );
      
      // setInputValue2(max);

      setInputValue2(Math.round((1-(rangePositionX + rangePriceElement.style.width - maxPriceX) / rangePriceElement.style.width)*100 - shift));

      return max;
    };

    const findMinPrice = () => {
      const min = filteredProducts.reduce(
        (accumulator, currentValue) =>
          (accumulator =
            currentValue.price > accumulator
              ? currentValue.price
              : accumulator),
        maxPrice
      );
      
      // setInputValue1(min);

      return min;
    };




    setCurentPosition1(minPriceElement);
    setCurentPosition2();
  }, []);
  
  const handleMouseEnter = e => {
    setRangePosition(e.target.clientX);
    setRangeWidth(e.target.style.width);
  };  

  const handleMoveMin = e => {
    // var x = e.curentTarget.clientX;
    // var y = e.clientY;
    if (!(rangePricePosition < e.curentTarget.clientX)) {
      setCurentPosition1(Math.round((e.curentTarget.clientX - rangePricePosition) / rangePriceWidth * 100)-shift);
    }

    // e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';

    // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };

  const handleMoveMax = e => {
    !(rangePricePosition + rangePriceWidth < e.curentTarget.clientX) && 
      setCurentPosition2(Math.round((1-(e.curentTarget.clientX - rangePricePosition) / rangePriceWidth) * 100)-shift);    
  };

  const handleChange1 = e => {
    var x = e.clientX;
    // var y = e.clientY;

    e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';

    // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };

  const handleChange2 = e => {
    var x = e.clientX;
    // var y = e.clientY;

    e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';

    // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };




  return (
    <>
      <p>Цена</p>
      <div
        // id="price-range"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <span>{'От '} </span>
        <input
          type="text"
          // id="min-price"
          style={{
            width: '50px',
            padding: '7px',
            borderRadius: '5px',
            borderColor: 'grey',
          }}
          value={inputValue1}
          onChange={handleChange1}
        />
        <span>{' до '}</span>
        <input
          type="text"
          // id="max-price"
          style={{
            width: '70px',
            padding: '7px',
            borderRadius: '5px',
            borderColor: 'grey',
          }}
          value={inputValue2}
          onChange={handleChange2}
        />
        <span>{' грн'}</span>
      </div>
      <p></p>
      {/* <button style={{ margin: '10px auto' }}>OK</button> */}
      <div
        style={{
          margin: '10px auto 0',
          backgroundColor: 'blue',
          color: 'white',
          width: '80px',
          height: '40px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        OK
      </div>
      <div style={{ display: 'flex', position: 'relative' }}>
        <div
          id="range-price"
          style={{
            width: '100%',
            height: '5px',
            border: 'none',
            backgroundColor: 'lightgrey',
            marginTop: '20px',
          }}
          onMouseEnter={handleMouseEnter}
        ></div>
        <div
          style={{
            width: '50%',
            height: '5px',
            position: 'absolute',
            top: '20px',
            left: '10%',
            border: 'none',
            backgroundColor: 'blue',
          }}
        >
          <div
            id="min-price"
            style={{
              width: '21px',
              height: '21px',
              // width: {shift + 1}'px',
              // height: '21px',
              position: 'absolute',
              top: '-8px',
              // left: '-20px',
              left: { CurentPosition1 } + 'px',
              // border: 'none',
              // backgroundColor: 'blue',
              borderRadius: '50%',
              border: '2px solid blue',
              boxShadow: '0 0 5px blue',
            }}
            onMouseDown={handleMoveMin}
          ></div>
          <div
            id="max-price"
            style={{
              width: '21px',
              height: '21px',
              position: 'absolute',
              top: '-8px',
              // right: '-20px',
              right: { CurentPosition2 } + 'px',
              // border: 'none',
              // backgroundColor: 'blue',
              borderRadius: '50%',
              border: '2px solid blue',
              boxShadow: '0 0 5px blue',
            }}
            onMouseDown={handleMoveMax}
          ></div>
        </div>
      </div>
    </>
  );
};

export default PriceRange1;
