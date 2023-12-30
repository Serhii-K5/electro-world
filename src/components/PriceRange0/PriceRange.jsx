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
  // const [isDragging1, setDragging1] = useState(false);
  // const [positionMin, setPositionMin] = useState({ x: 0, y: 0 });
  // const [positionMax, setPositionMax] = useState({ x: 0, y: 0 });
  // const [positionMin, setPositionMin] = useState([0, 0] );
  const [positionMin, setPositionMin] = useState(0);
  // const [positionMax, setPositionMax] = useState({ x: 0, y: 0 });
  // const [positionStart, setPositionStart] = useState([0, 0] );
  const [positionStart, setPositionStart] = useState(0);

  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  useEffect(() => {
    const handleMouseMove = e => {
      // if (isDragging1) {
      //   isDragging1 && setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
      //   setDragging1(false);
      // }
      // if (positionStart[0] === 0 && positionStart[1] === 0) {
      //   setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
      //   // setDragging1(false);
      // }

      
      if (isDragging) {
      //   if (positionStart[0] === 0 && positionStart[1] === 0) {
      //   setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
      //   // setDragging1(false);
      // }
        // if (positionStart[0] !== positionStart[1] !== 0) {
        //   setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
        //   // setDragging1(false);
        // }
        // if (isDragging1) {
        //   isDragging1 && setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
        // }
        
        // console.log(0, '=', e.pageX, '; ', e.screenX, '; ', e.clientX);
        const x = e.clientX;
        // const y = e.clientY;
        // if (e.target.id === 'min') {

          // setPositionMin( positionMin.splice(0, 2, x, y) );
          setPositionMin(x);
        // }
        // if (e.target.id === 'max') {
        //   // const x = e.clientX;
        //   // const y = e.clientY;

        //   setPositionMax({ x, y });
        // }
        // e.target.id === 'min' && setPositionMin(e.clientX);
        // e.target.id === 'max' && setPositionMax(e.clientX);

        // console.log(1, '=', e.pageX, '; ', e.screenX);
      }
      // setDragging1(false);
    };

    const handleMouseUp = (e) => {
      setDragging(false);
      // setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
    
      // setPositionStart(positionStart.splice(0, 2, 0, 0))
      // setPositionStart(0)
      handleMouseUp(e.clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    // setPositionStart(positionStart.splice(0, 2, 20, 200 ))
    // setPositionStart(positionStart.splice(0, 2, e.clientX, e.clientY));
    // handleMouseUp(e.clientX, e.clientY);    
    handleMouseUp(e.clientX);    
    setDragging(true);
    // setDragging1(true);
  };

  const handleMouseUp = (x) => {
      // setDragging(false);
    // setPositionStart(positionStart.splice(0, 2, 0, 0))
    // setPositionStart(positionStart.splice(0, 2, x, y));
    setPositionStart(x);
    
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
            // width: `${positionMax - positionMin}px`,
            // left: `${positionMin + SHIFT_RANGE}px`,
            width: '210px',
            left: '20px',
          }}
        >
          <RangeLineEdgesDiv
            id="min"
            // style={{ left: `${-SHIFT_RANGE}px` }}
            // style={{ left: `${positionMin - SHIFT_RANGE}px` }}
            style={{
              cursor: 'move',
              // left: `${positionMin.x - 25}px`,
              // top: `${positionMin.y - 9}px`,
              // left: `${positionMin[0] - positionStart[0] - 20}px`,
              left: `${positionMin - positionStart - 20}px`,
              // top: `${positionMin[1] - positionStart[1] - 9}px`,
            }}
            
            // onDrag={onDrag}
            // readOnly={false}
            onMouseDown={handleMouseDown}
          // />
          >
            <p>
              min: ({positionMin[0]}; {positionMin[1]})
            </p>
            <p>
              start={positionStart[0]}; {positionStart[1]}
            </p>
          </RangeLineEdgesDiv>
          
          <RangeLineEdgesDiv
            id="max"
            style={{ right: `${-SHIFT_RANGE}px` }}
            onMouseDown={handleMouseDown}
          />
        </RangeActiveDiv>
      </RangeContainer>
      {/* {isVisable && <div>{coordText}</div>} */}
      <div>
        {/* min={positionMin} '; max=' {positionMax} */}
        min={positionMin[0]} ; {positionMin[1]}
        <p></p>
        start={positionStart[0]} ; {positionStart[1]}
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
