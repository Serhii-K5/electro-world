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

  const [rangePriceWidth, setRangeWidth] = useState(0);
  const [curentPositionLeftMin, setCurentPositionLeftMin] = useState(0);
  const [curentPositionLeftMax, setCurentPositionLeftMax] = useState(0);
  
  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);  
  
  const [isVisable, setIsVisable] = useState(false);  
  const [coordText, setCoordText] = useState('');
  // const [coordEnd, setCoordEnd] = useState(0);
  
  const [isMouseDownMin, setIsMouseDownMin] = useState(false);  
  const [isMouseDownMax, setIsMouseDownMax] = useState(false);  
  const [coordStart, setCoordStart] = useState(0);
  const [amendment, setAmendment] = useState(0);


  
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
  
  // const handleMoveMin = e => {
  //   // var x = e.curentTarget.clientX;
  //   // var y = e.clientY;
  //   // if (!(rangePricePosition < e.curentTarget.clientX)) {
  //   //   setCurentPosition1(Math.round((e.curentTarget.clientX - rangePricePosition) / rangePriceWidth * 100)-SHIFT_RANGE);
  //   // }
    
  //   // e.target.style.left = x - e.target.clientWidth / 2 + 'px';
  //   // movableElement.style.top = y - movableElement.clientHeight / 2 + 'px';
    
  //   // coordinatesDisplay.textContent = '(' + x + ', ' + y + ')';
  // };
  
  // const handleMoveMax = e => {
  //   // !(rangePricePosition + rangePriceWidth < e.curentTarget.clientX) && 
  //   //   setCurentPosition2(Math.round((1-(e.curentTarget.clientX - rangePricePosition) / rangePriceWidth) * 100)-SHIFT_RANGE);    
  // };
  
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
  
  const onChangeMin = e => {
    const val = Math.abs(Number(e.target.value));
    val > 0 && setInputValueMin(val);
  };
  
  const onChangeMax = e => {
    const val = Math.abs(Number(e.target.value));
    val > 0 && setInputValueMax(val);
  };
  
  // const onMouseLeave = e => {
  //   // setCoordText('x=' + window.pageXOffset + '; y=' + window.pageYOffset);
  //   // setCoordText('x=' + window.scrollX + '; y=' + window.scrollY);
  //   setCoordText('x=' + e.clientX + '; y=' + e.clientY);

  //   // setRangePosition(e.target.clientX);
  //   // setRangeWidth(e.target.style.width);
  // };  
  
  const onMouseMove = e => {
    setCoordText('x=' + e.clientX + '; y=' + e.clientY);
    isMouseDownMin && setCurentPositionLeftMin(curentPositionLeftMin + (e.clientX - coordStart));
    isMouseDownMax && setCurentPositionLeftMax(curentPositionLeftMax + (e.clientX - coordStart));
  };  

  // const onMouseMove = e => {
  //   if (isMouseDown) {
  //     // setCurentPositionLeftMin(curentPositionLeftMin + e.clientX - coordStart);
  //     setCurentPositionLeftMin(e.clientX);
  //     // setCurentPositionLeftMax(curentPositionLeftMax - (e.clientX - coordStart));
  //   }
  //   // (e.target.style.left += e.clientX - coordStart);
  //   console.log('MouseMove: ', curentPositionLeftMin, '; ', curentPositionLeftMax);
  // };  

  const handleMouseDownMin = e => {
    setIsMouseDownMin(true);
    // setAmendment=;
    setCoordStart(e.clientX);
    // console.log('MouseDownMin: ', coordStart, '; ', e.clientX);
  };  

  const handleMouseDownMax = e => {
    setIsMouseDownMax(true);
    setCoordStart(e.clientX);
    // console.log('MouseDownMax: ', coordStart, '; ', e.clientX);
  };  

  const handleMouseUp = () => {
    setIsMouseDownMin(false);
    setIsMouseDownMax(false);
    // console.log('MouseUp');
  };  

  const onDrag = (e) => {
    if (e.target.id === 'min') {
      // setCurentPositionLeftMin(curentPositionLeftMin + (e.clientX - coordStart));
      setCurentPositionLeftMin(e.clientX);
    } else if (e.target.id === 'min') {
      setCurentPositionLeftMax(curentPositionLeftMax + (e.clientX - coordStart))
    }

    console.log('onDrag');
  };  

  return (
    <>
      <p>{lang[languages].priceRange_label}</p>
      <Form>
        <span>{lang[languages].priceRange_labelStart} </span>
        <Input
          type="text"
          style={{ width: '50px' }}
          value={inputValueMin}
          onChange={onChangeMin}
          onBlur={handleChangeMin}
        />
        <span>{lang[languages].priceRange_labelEnd}</span>
        <Input
          type="text"
          style={{ width: '70px' }}
          value={inputValueMax}
          onChange={onChangeMax}
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
        <RangeBgDiv id="range-price" onMouseEnter={() => setIsVisable(true)} />
        <RangeActiveDiv
          style={{
            width: `${curentPositionLeftMax - curentPositionLeftMin}px`,
            left: `${curentPositionLeftMin + SHIFT_RANGE}px`,
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
            onDrag={onDrag}
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
