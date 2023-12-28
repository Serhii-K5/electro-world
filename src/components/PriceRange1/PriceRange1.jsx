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
  const SHIFT = 20;
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);

  const [rangePriceWidth, setRangeWidth] = useState(0);
  const [curentPositionLeftMin, setCurentPositionLeftMin] = useState(0);
  const [curentPositionLeftMax, setCurentPositionLeftMax] = useState(0);
  
  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);  
  
  const [isVisable, setIsVisable] = useState(false);  
  const [coordText, setCoordText] = useState('');  
  
  if (filteredProducts.length === 0) {
    dispatch(changefilteredProducts(products1));
  }
  
  
  useEffect(() => {
    const rangePriceElement = document.getElementById('range-price');
    const rangeWidth = rangePriceElement.clientWidth;
    
    setRangeWidth(rangeWidth);
    
    setCurentPositionLeftMin(0);
    setCurentPositionLeftMax(rangeWidth);

    const findMinMaxPrice = () => {
      const max = filteredProducts.reduce((accumulator, currentValue) => (
          accumulator = currentValue.price > accumulator ? currentValue.price : accumulator
        ), 0
      );
      
      const min = filteredProducts.reduce((accumulator, currentValue) => (
          accumulator = currentValue.price < accumulator ? currentValue.price : accumulator
        ), max
      );
      
      setInputValueMin(min);
      setInputValueMax(max);
      
      setMaxPrice(max);
      setMinPrice(min);
    };

    findMinMaxPrice();
    
  }, []);
  
  const handleMoveMin = e => {
    // var x = e.curentTarget.clientX;
    // var y = e.clientY;
    // if (!(rangePricePosition < e.curentTarget.clientX)) {
    //   setCurentPosition1(Math.round((e.curentTarget.clientX - rangePricePosition) / rangePriceWidth * 100)-SHIFT);
    // }
    
    // e.target.style.left = x - e.target.clientWidth / 2 + 'px';
    // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';
    
    // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  };
  
  const handleMoveMax = e => {
    // !(rangePricePosition + rangePriceWidth < e.curentTarget.clientX) && 
    //   setCurentPosition2(Math.round((1-(e.curentTarget.clientX - rangePricePosition) / rangePriceWidth) * 100)-SHIFT);    
  };
  
  const handleChangeMin = e => { 
    const value = Number(e.target.value);
    if (value < minPrice) {
      setCurentPositionLeftMin(0);
      setInputValueMin(minPrice);
    } else {
      const result = Math.round(rangePriceWidth * (value - minPrice) / maxPrice);
      
      if (result > curentPositionLeftMax) {
        setCurentPositionLeftMin(curentPositionLeftMax);
        setInputValueMin(inputValueMax);
      } else {
        setCurentPositionLeftMin(result);
        setInputValueMin(value);
      }
    }
  };

  const handleChangeMax = e => {
    const value = Number(e.target.value);
    if (value > maxPrice) {
      setCurentPositionLeftMax(maxPrice);
      setInputValueMax(maxPrice);
    } else {
      const result = Math.round((rangePriceWidth * value) / maxPrice);
      
      if (result < curentPositionLeftMin) {
        setCurentPositionLeftMax(curentPositionLeftMin);
        setInputValueMax(inputValueMin);
      } else {
        setCurentPositionLeftMax(result);
        setInputValueMax(value);
      }
    }
  };
  
  // const onFocus = () => {
    //   console.log('asrfh');
    // }
    
    const onChangeMin = e => {
      const val = Math.abs(Number(e.target.value));
      val > 0 && setInputValueMin(val);
    };
    
    const onChangeMax = e => {
      const val = Math.abs(Number(e.target.value));
      val > 0 && setInputValueMax(val);
    };
    
    const handleDrag = e => {
      // setRangePosition(e.target.clientX);
    setRangeWidth(e.target.style.width);
  };
  
  const handleMouseEnter = e => {
    // setRangePosition(e.target.clientX);
    setRangeWidth(e.target.style.width);
  };
  
  const onMouseLeave = e => {
    // setCoordText('x=' + window.pageXOffset + '; y=' + window.pageYOffset);
    // setCoordText('x=' + window.scrollX + '; y=' + window.scrollY);
    setCoordText('x=' + e.clientX + '; y=' + e.clientY);

    // setRangePosition(e.target.clientX);
    // setRangeWidth(e.target.style.width);
  };  

  return (
    <>
      <p>Цена</p>
      <div
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
          style={{
            width: '50px',
            padding: '7px',
            borderRadius: '5px',
            borderColor: 'var(--bg-color-grey)',
          }}
          value={inputValueMin}
          onChange={onChangeMin}
          onBlur={handleChangeMin}
        />
        <span>{' до '}</span>
        <input
          type="text"
          style={{
            width: '70px',
            padding: '7px',
            borderRadius: '5px',
            borderColor: 'var(--bg-color-grey)',
          }}
          value={inputValueMax}
          onChange={onChangeMax}
          onBlur={handleChangeMax}
        />
        <span>{' грн'}</span>
      </div>
      <p></p>
      {/* <button style={{ margin: '10px auto' }}>OK</button> */}
      <div
        style={{
          margin: '10px auto 0',
          backgroundColor: 'var(--bg-button-color)',
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
{/* ------------------------------------ */}
      <div
        style={{
          // display: 'flex',
          position: 'relative',
          // justifyContent: 'center',
          padding: '20px',
        }}
        onMouseEnter={() => setIsVisable(true)}
        onMouseOut={() => setIsVisable(false)}
        // onMouseLeave={onMouseLeave}
        onMouseMove={onMouseLeave}
      >
        <div
          id="range-price"
          style={{
            // width: `calc(100% - ${SHIFT * 2}px)`,
            // width: '100%',
            height: '4px',
            border: 'none',
            backgroundColor: 'var(--bg-color-grey)',
          }}
          // onMouseEnter={handleMouseEnter}
          // onDrag={handleMouseEnter}
        ></div>
        <div
          style={{
            width: `${curentPositionLeftMax - curentPositionLeftMin}px`,
            height: '4px',
            position: 'absolute',
            top: '20px',
            // left: '20px',
            left: `${curentPositionLeftMin + SHIFT}px`,
            border: 'none',
            backgroundColor: 'var(--bg-button-color)',
          }}
          onMouseEnter={() => setIsVisable(true)}
        >
          <div
            id="min-price"
            style={{
              width: '20px',
              height: '20px',
              position: 'absolute',
              // top: '-8px',
              // left: `-${SHIFT}px`,
              // position: 'relative',
              top: '-9px',
              left: '-20px',
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '2px solid var(--bg-button-color)',
              boxShadow: '0 0 5px var(--bg-button-color)',
            }}
            // onMouseDown={handleMoveMin}
            // onMouseEnter={handleMouseEnter}
            // onMouseEnter={setIsVisable(true)}
            // onMouseOut={setIsVisable(false)}
            // onDrag={handleDrag}
            // onDragStart={handleDrag}
            onMouseEnter={() => setIsVisable(true)}
          ></div>
          <div
            id="max-price"
            style={{
              width: '20px',
              height: '20px',
              position: 'absolute',
              top: '-9px',
              right: `-${SHIFT}px`,
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '50%',
              border: '2px solid var(--bg-button-color)',
              boxShadow: '0 0 5px var(--bg-button-color)',
            }}
            // onMouseDown={handleMoveMax}
          ></div>
        </div>
      </div>
      {isVisable && <div>{coordText}</div>}
    </>
  );
};

export default PriceRange1;
