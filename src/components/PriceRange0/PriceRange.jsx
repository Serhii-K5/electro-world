import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts, selectLanguages } from 'redux/selectors';
import {
  Form,
  Input,
  BtnDiv,
  RangeContainer,
  RangeBgDiv,
  RangeActiveDiv,
  RangeLineEdgesDiv  
} from './PriceRange.styled';

import { changefilteredProducts } from 'redux/slice/filteredProductsSlice';
import { SHIFT_RANGE } from 'constants/constants';
import lang from 'assets/json/language.json';

import products1 from '../../assets/json/products.json';

const DraggableElement = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const languages = useSelector(selectLanguages);

  const [isDragging, setDragging] = useState(false);
  const [positionMin, setPositionMin] = useState(0);
  const [positionMax, setPositionMax] = useState(0);

  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  useEffect(() => {
    const handleMouseMove = e => {
      if (isDragging) {
        console.log(0, '=', e.pageX, '; ', e.screenX, '; ', e.clientX);
        e.target.id === 'min' &&
          setPositionMin(e.clientX);
        e.target.id === 'max' &&
          setPositionMax(e.clientX);

        console.log(1, '=', e.pageX, '; ', e.screenX);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setDragging(true);
  };

  if (filteredProducts.length === 0) {
    dispatch(changefilteredProducts(products1));
  }
  
  
  // useEffect(() => {
  //   const rangePriceElement = document.getElementById('range-price');
  //   const rangeWidth = rangePriceElement.clientWidth;
  //   const rangeX = rangePriceElement.clientX;
    
  //   console.log(rangeWidth, '; ', rangeX);
  //   // setRangeWidth(rangeWidth);
    
  //   // setCurentPositionLeftMin(0);
  //   // setCurentPositionLeftMax(rangeWidth);
  //   setPositionMax(rangeWidth);
    

  //   const findMinMaxPrice = () => {
  //     const max = filteredProducts.reduce((accumulator, currentValue) => (
  //         accumulator = currentValue.price > accumulator ? currentValue.price : accumulator
  //       ), 0
  //     );
      
  //     const min = filteredProducts.reduce((accumulator, currentValue) => (
  //         accumulator = currentValue.price < accumulator ? currentValue.price : accumulator
  //       ), max
  //     );
      
  //     setInputValueMin(min);
  //     setInputValueMax(max);
      
  //     setMaxPrice(max);
  //     setMinPrice(min);
  //   };

  //   findMinMaxPrice();
    
  // }, []);

  return (
    // <div
    //   style={{
    //     width: '50px',
    //     height: '50px',
    //     backgroundColor: '#3498db',
    //     position: 'absolute',
    //     cursor: 'move',
    //     left: `${position.x - 25}px`,
    //     top: `${position.y - 25}px`,
    //   }}
    //   onMouseDown={handleMouseDown}
    // >
    //   <p>
    //     Coordinates: ({position.x}, {position.y})
    //   </p>
    // </div>
    <>
      <p>{lang[languages].priceRange_label}</p>
      <Form>
        <span>{lang[languages].priceRange_labelStart} </span>
        <Input
          type="text"
          style={{ width: '50px' }}
          value={inputValueMin}
          // onChange={onChangeMin}
          // onBlur={handleChangeMin}
          readOnly
        />
        <span>{lang[languages].priceRange_labelEnd}</span>
        <Input
          type="text"
          style={{ width: '70px' }}
          value={inputValueMax}
          // onChange={onChangeMax}
          // onBlur={handleChangeMax}
          readOnly
        />
        <span>{' грн'}</span>
      </Form>
      <p></p>
      {/* <button style={{ margin: '10px auto' }}>OK</button> */}
      <BtnDiv>
        <b>OK</b>
      </BtnDiv>
      {/* ------------------------------------ */}
      <RangeContainer>
        {/* <RangeBgDiv id="range-price" onMouseEnter={() => setIsVisable(true)} /> */}
        <RangeBgDiv id="range-price" />
        <RangeActiveDiv
          style={{
            width: `${positionMax - positionMin}px`,
            left: `${positionMin + SHIFT_RANGE}px`,
          }}
        >
          <RangeLineEdgesDiv
            id="min"
            style={{ left: `${-SHIFT_RANGE}px` }}
            // onDrag={onDrag}
            // readOnly={false}
            onMouseDown={handleMouseDown}
          />
          <RangeLineEdgesDiv
            id="max"
            style={{ right: `${-SHIFT_RANGE}px` }}
            onMouseDown={handleMouseDown}
          />
        </RangeActiveDiv>
      </RangeContainer>
      {/* {isVisable && <div>{coordText}</div>} */}
      <div>
        min={positionMin} '; max=' {positionMax}
      </div>

      {/* <div>{coordText}</div>
      <div>
        {document.clientX} '; ' {document.clientY}
      </div>
      <div>
        {window.clientX} '; ' {window.clientY}
      </div>
      <div>
        {window.screenX} '; ' {window.screenY}
      </div>
      <div>
        {(window.screenLeft = window.screenX)} '; ' {window.pageYOffset}
      </div> */}
    </>
  );
};

export default DraggableElement;
