import { useState, useEffect } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { SiVodafone } from 'react-icons/si';
// import { FaViber } from 'react-icons/fa';

// import ks from 'assets/images/svg/kyivstar.svg';
// import { VodafoneBg, Span } from './PriceRange.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts } from 'redux/selectors';

import products1 from '../../assets/json/products.json';
import { changefilteredProducts } from 'redux/slice/filteredProductsSlice';


const PriceRange1 = () => {
  const shift = 20;
  // const { JSDOM } = require('jsdom');
  // const { window } = new JSDOM('');
  // const $ = require('jquery')(window);
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);

  // const [rangePricePosition, setRangePosition] = useState(0);
  const [rangePriceWidth, setRangeWidth] = useState(0);
  const [curentPosition1, setCurentPosition1] = useState(0);
  const [curentPosition2, setCurentPosition2] = useState(100);
  const [curentPositionLeft, setCurentPositionLeft] = useState(0);
  const [curentPositionWidth, setCurentPositionWidth] = useState(100);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  // const minPriceElement = document.getElementById('min-price');
  // const maxPriceElement = document.getElementById('max-price');
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);  

  if (filteredProducts.length === 0) {
    dispatch(changefilteredProducts(products1));
  }


  // useEffect(() => {
  //   // var coordinatesDisplay = document.getElementById('coords');
  //   const rangePriceElement = document.getElementById('range-price');
  //   const minPriceElement = document.getElementById('min-price');
  //   const maxPriceElement = document.getElementById('max-price');
    
  //   const rangePositionX = rangePriceElement.clientX;
  //   setRangePosition(rangePositionX);
  //   const minPriceX = minPriceElement.clientX;
  //   const maxPriceX = maxPriceElement.clientX;

  //   setMaxPrice(findMaxPrice());
  //   setMinPrice(findMinPrice());

  //   const findMaxPrice = () => {
  //     const max = filteredProducts.reduce(
  //       (accumulator, currentValue) =>
  //         (accumulator =
  //           currentValue.price > accumulator
  //             ? currentValue.price
  //             : accumulator),
  //       0
  //     );
      
  //     // setInputValue2(max);

  //     setInputValue2(Math.round((1-(rangePositionX + rangePriceElement.style.width - maxPriceX) / rangePriceElement.style.width)*100 - shift));

  //     return max;
  //   };

  
  useEffect(() => {
    const rangePriceElement = document.getElementById('range-price');
    const rangeWidth = rangePriceElement.clientWidth;
    
    setRangeWidth(rangeWidth);

    const findMinMaxPrice = () => {
      const max = filteredProducts.reduce((accumulator, currentValue) => (
          accumulator = currentValue.price > accumulator ? currentValue.price : accumulator
        ), 0
      );
      
      const min = filteredProducts.reduce((accumulator, currentValue) => (
          accumulator = currentValue.price < accumulator ? currentValue.price : accumulator
        ), max
      );
      
      setInputValue1(Math.round(min + (max - min) / 100 * curentPosition1));
      setInputValue2(Math.round(min + (max - min) / 100 * curentPosition2)); 
      setCurentPositionLeft(rangeWidth * curentPosition1 / 100);
      setCurentPositionWidth(rangeWidth * curentPosition2 / 100);
      setMaxPrice(max);
      setMinPrice(min);
    };

    findMinMaxPrice();
  }, []);
  
  const handleMouseEnter = e => {
    // setRangePosition(e.target.clientX);
    setRangeWidth(e.target.style.width);
  };  

  const handleMoveMin = e => {
    // var x = e.curentTarget.clientX;
    // var y = e.clientY;
    // if (!(rangePricePosition < e.curentTarget.clientX)) {
    //   setCurentPosition1(Math.round((e.curentTarget.clientX - rangePricePosition) / rangePriceWidth * 100)-shift);
    // }

    // e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';

    // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };

  const handleMoveMax = e => {
    // !(rangePricePosition + rangePriceWidth < e.curentTarget.clientX) && 
    //   setCurentPosition2(Math.round((1-(e.curentTarget.clientX - rangePricePosition) / rangePriceWidth) * 100)-shift);    
  };

  const handleChange1 = e => {
    const result = Math.round(rangePriceWidth * e.target.value / maxPrice);
    setCurentPositionLeft(result);
    setCurentPositionWidth((rangePriceWidth * (1-(result + curentPosition2 / 100))));
    
    
    // setInputValue1(Math.round(min + ((max - min) / 100) * curentPosition1));
    // setInputValue2(Math.round(min + ((max - min) / 100) * curentPosition2));

    // var x = e.clientX;
    // // var y = e.clientY;

    // e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';

    // // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };

  const handleChange2 = e => {
    var x = e.clientX;
    // var y = e.clientY;

    e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';

    // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };

  // const calcPosition1 = () => {
  //   return Math.round(rangePriceWidth * curentPosition1 / 100) + 'px';
  // };

  // const calcPosition2 = () => {
  //   return Math.round(rangePriceWidth * curentPosition2 / 100) + 'px';
  // };



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

      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <div
          id="range-price"
          style={{
            width: `calc(100% - ${shift * 2}px)`,
            height: '5px',
            border: 'none',
            backgroundColor: 'lightgrey',
            marginTop: '20px',
          }}
          onMouseEnter={handleMouseEnter}
        ></div>
        <div
          style={{
            // width: '50%',
            // width: { curentPositionWidth } + 'px',
            width: `${curentPositionWidth}px`,
            height: '5px',
            position: 'absolute',
            top: '20px',
            left: `${curentPositionLeft + shift}px`,
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
              left: `-${shift}px`,
              // backgroundColor: 'blue',
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '2px solid blue',
              boxShadow: '0 0 5px blue',
            }}
            // onMouseDown={handleMoveMin}
          ></div>
          <div
            id="max-price"
            style={{
              width: '21px',
              height: '21px',
              position: 'absolute',
              top: '-8px',
              right: `-${shift}px`,
              // border: 'none',
              // backgroundColor: 'blue',
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '2px solid blue',
              boxShadow: '0 0 5px blue',
            }}
            // onMouseDown={handleMoveMax}
          ></div>
        </div>
      </div>
    </>
  );
};

export default PriceRange1;
