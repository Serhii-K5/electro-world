import { useState, useEffect } from 'react';
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

const PriceRange = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const languages = useSelector(selectLanguages);

  const [rangeWidth, setRangeWidth] = useState(0);
  const [positionMin, setPositionMin] = useState(0);
  const [positionMax, setPositionMax] = useState(0);
  
  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);  
  
  // const [isVisable, setIsVisable] = useState(false);  
  const [coordText, setCoordText] = useState('');
  // // const [coordEnd, setCoordEnd] = useState(0);
  
  // const [isMouseDownMin, setIsMouseDownMin] = useState(false);  
  // const [isMouseDownMax, setIsMouseDownMax] = useState(false);  
  // const [coordStart, setCoordStart] = useState(0);
  // const [amendment, setAmendment] = useState(0);


  
  if (filteredProducts.length === 0) {
    dispatch(changefilteredProducts(products1));
  }
  
  
  useEffect(() => {
    const rangePriceElement = document.getElementById('range-price');
    const rangeWidth = rangePriceElement.clientWidth;
    
    setRangeWidth(rangeWidth);    
    // setPositionMin(0);
    setPositionMax(rangeWidth);

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
  
  const changePositionMin = (value) => {
    if (value > inputValueMax) {
      setPositionMin(positionMax);
    } else if (value < minPrice) {
      setPositionMin(0);
    } else {
      const result = Math.round(rangeWidth * (value - minPrice) / (maxPrice - minPrice));
      setPositionMin(result);
    }
  }
  
  const handleChangeMin = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= minPrice && value <= inputValueMax) {
      setInputValueMin(value);
    } else {
      setInputValueMin(minPrice);
    }
  }

  const changePositionMax = (value) => {
    if (value < inputValueMin) {
      setPositionMax(positionMin);
    } else if (value > maxPrice) {
      setPositionMax(rangeWidth);
    } else {
      const result = Math.round(rangeWidth * (value - minPrice) / (maxPrice - minPrice));
      setPositionMax(result);
    }    
  }

  const handleChangeMax = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= inputValueMin && value <= maxPrice){
      setInputValueMax(value);
    } else if (value < inputValueMin){
      setInputValueMax(inputValueMin);
    } else {
      setInputValueMax(maxPrice);
    } 
  };
  
  const onChangeMinMax = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= 0){
      if (e.target.id === 'inputMin') {
        setInputValueMin(value);        
        changePositionMin(value);
      }
      if (e.target.id === 'inputMax') {
        setInputValueMax(value);
        changePositionMax(value);
      }
    } else {
      e.target.id === 'inputMin' && setInputValueMin(e.target.value);
      e.target.id === 'inputMax' && setInputValueMax(e.target.value);
    } 
  };
  
  // // const onChangeMin = e => {
  // //   const val = Math.abs(Number(e.target.value));
  // //   val > 0 && setInputValueMin(val);
  // // };
  
  // // const onChangeMax = e => {
  // //   const val = Math.abs(Number(e.target.value));
  // //   val > 0 && setInputValueMax(val);
  // // };
  
  // // const onMouseLeave = e => {
  // //   // setCoordText('x=' + window.pageXOffset + '; y=' + window.pageYOffset);
  // //   // setCoordText('x=' + window.scrollX + '; y=' + window.scrollY);
  // //   setCoordText('x=' + e.clientX + '; y=' + e.clientY);

  // //   // setRangePosition(e.target.clientX);
  // //   // setRangeWidth(e.target.style.width);
  // // };  
  
  // const onMouseMove = e => {
  //   setCoordText('x=' + e.clientX + '; y=' + e.clientY);
  //   isMouseDownMin && setPositionMin(positionMin + (e.clientX - coordStart));
  //   isMouseDownMax && setPositionMax(positionMax + (e.clientX - coordStart));
  // };  

  // // const onMouseMove = e => {
  // //   if (isMouseDown) {
  // //     // setPositionMin(positionMin + e.clientX - coordStart);
  // //     setPositionMin(e.clientX);
  // //     // setPositionMax(positionMax - (e.clientX - coordStart));
  // //   }
  // //   // (e.target.style.left += e.clientX - coordStart);
  // //   console.log('MouseMove: ', positionMin, '; ', positionMax);
  // // };  

  // const handleMouseDownMin = e => {
  //   setIsMouseDownMin(true);
  //   // setAmendment=;
  //   setCoordStart(e.clientX);
  //   // console.log('MouseDownMin: ', coordStart, '; ', e.clientX);
  // };  

  // const handleMouseDownMax = e => {
  //   setIsMouseDownMax(true);
  //   setCoordStart(e.clientX);
  //   // console.log('MouseDownMax: ', coordStart, '; ', e.clientX);
  // };  

  // const handleMouseUp = () => {
  //   setIsMouseDownMin(false);
  //   setIsMouseDownMax(false);
  //   // console.log('MouseUp');
  // };  

  // const onDrag = (e) => {
  //   if (e.target.id === 'min') {
  //     // setPositionMin(positionMin + (e.clientX - coordStart));
  //     setPositionMin(e.clientX);
  //   } else if (e.target.id === 'min') {
  //     setPositionMax(positionMax + (e.clientX - coordStart))
  //   }

  //   console.log('onDrag');
  // };  

  return (
    <>
      <p>{lang[languages].priceRange_label}</p>
      <Form>
        <span>{lang[languages].priceRange_labelStart} </span>
        <Input
          id='inputMin'
          type="text"
          style={{ width: '50px' }}
          value={inputValueMin}
          // onChange={onChangeMin}
          onChange={onChangeMinMax}
          onBlur={handleChangeMin}
        />
        <span>{lang[languages].priceRange_labelEnd}</span>
        <Input
          id='inputMax'
          type="text"
          style={{ width: '70px' }}
          value={inputValueMax}
          // onChange={onChangeMax}
          onChange={onChangeMinMax}
          onBlur={handleChangeMax}
        />
        <span>{' грн'}</span>
      </Form>
      <p></p>
      {/* <button style={{ margin: '10px auto' }}>OK</button> */}
      <BtnDiv>
        <b>OK</b>
      </BtnDiv>
      {/* ------------------------------------ */}
      <RangeContainer
      // onMouseEnter={() => setIsVisable(true)}
      // onMouseOut={() => setIsVisable(false)}
      // onMouseLeave={onMouseLeave}
      // onMouseMove={onMouseMove}
      // onMouseUp={handleMouseUp}
      >
        {/* <RangeBgDiv id="range-price" onMouseEnter={() => setIsVisable(true)} /> */}
        <RangeBgDiv id="range-price" />
        <RangeActiveDiv
          style={{
            width: `${positionMax - positionMin}px`,
            left: `${positionMin + SHIFT_RANGE}px`,
          }}
          // onMouseEnter={() => setIsVisable(true)}
          // onMouseDown={handleMouseDown}
          // onMouseUp={handleMouseUp}
        >
          <RangeLineEdgesDiv
            id="min"
            style={{ left: `${-SHIFT_RANGE}px` }}
            // onMouseEnter={() => setIsVisable(true)}
            // onMouseDown={handleMouseDownMin}
            // onMouseDown={() => setIsMouseDownMin(true)}
            // onMouseUp={handleMouseUp}
            // onMouseOut={handleMouseUp}

            // onMouseUp={() => setIsMouseDownMin(true)}
            // onMouseEnter={handleMouseEnter}
            // onMouseEnter={setIsVisable(true)}
            // onMouseOut={setIsVisable(false)}
            // onMouseMove={onMouseMove}
            // onDrag={onDrag}
            readOnly={false}
          />
          <RangeLineEdgesDiv
            id="max"
            style={{ right: `${-SHIFT_RANGE}px` }}
            // onMouseEnter={() => setIsVisable(true)}
            // onMouseDown={handleMouseDownMax}
            // onMouseUp={handleMouseUp}

            // onMouseDown={() => setIsMouseDownMax(true)}
            // onMouseUp={() => setIsMouseDownMax(false)}
          />
        </RangeActiveDiv>
      </RangeContainer>
      {/* {isVisable && <div>{coordText}</div>} */}
      <div>{coordText}</div>
      {/* <div>
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

export default PriceRange;

// Эти стрелки добавляют сам бреузер, но их можно убрать обычными стилями css.

// Это для браузера Chrome:

// input[type="number"]::-webkit-outer-spin-button,
// input[type="number"]::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }
// Это для браузера Firefox:

// input[type="number"] {
//   -moz-appearance: textfield;
// }
// input[type="number"]:hover,
// input[type="number"]:focus {
//   -moz-appearance: number-input;
// }
// Для других

// input[type=number]::-webkit-inner-spin-button,
// input[type=number]::-webkit-outer-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }
// Поделиться
// Улучшить ответ
// Отслеживать