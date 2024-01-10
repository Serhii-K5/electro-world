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
import { changefilters } from "redux/slice/filtersSlice";
import { SHIFT_RANGE } from 'constants/constants';
import lang from 'assets/json/language.json';

import products1 from '../../assets/json/products.json';

const PriceRange = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const languages = useSelector(selectLanguages);

  const [rangeWidth, setRangeWidth] = useState(0);
  const [positionStart, setPositionStart] = useState(0);
  const [positionMin, setPositionMin] = useState(0);
  const [positionMax, setPositionMax] = useState(0);
  
  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);  
  
  // const [isVisable, setIsVisable] = useState(false);  
  const [coordText, setCoordText] = useState('');
  // // const [coordEnd, setCoordEnd] = useState(0);
  
  const [isMouseDownMin, setIsMouseDownMin] = useState(false);  
  const [isMouseDownMax, setIsMouseDownMax] = useState(false);  
  // const [coordStart, setCoordStart] = useState(0);
  // const [amendment, setAmendment] = useState(0);



  
  if (filteredProducts.length === 0) {
    dispatch(changefilteredProducts(products1));
  }  
  
  useEffect(() => {
    const rangePriceElement = document.getElementById('range-price');
    const rangeWidth = rangePriceElement.clientWidth;
    setPositionStart(rangePriceElement.offsetParent.offsetLeft);
    
    setRangeWidth(rangeWidth);    
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
      dispatch(changefilters({key: 'price', value: [min, max]})); 
    };

    findMinMaxPrice();
    
  }, []);

  useEffect(() => {
    const handleMouseMove = e => {
      if (isMouseDownMin) {
        const offsetMin = e.clientX - positionStart - SHIFT_RANGE * 0.5;
        if (offsetMin + SHIFT_RANGE * 0.5 >= positionStart && offsetMin <= positionMax) {
          setInputValueMin(Math.round(offsetMin * (maxPrice - minPrice) / rangeWidth))
          setPositionMin(Math.round(offsetMin))
        } else if (offsetMin > positionMax ) {
          setInputValueMin(inputValueMax)
          setPositionMax(positionMax)
        } else {
          setInputValueMin(minPrice)
          setPositionMin(0)
        }
      }
      if (isMouseDownMax) {
        const offsetMax = e.clientX - positionStart - SHIFT_RANGE * 1.5;
        if (offsetMax >= positionMin && offsetMax <= rangeWidth) {
          setInputValueMax(Math.round(offsetMax * (maxPrice - minPrice) / rangeWidth))
          setPositionMax(Math.round(offsetMax))
        } else if (offsetMax < positionMin ) {
          setInputValueMax(inputValueMin)
          setPositionMax(positionMin)
        } else {
          setInputValueMax(maxPrice)
          setPositionMax(rangeWidth)
        }
      }
    };

    const handleMouseUp = () => {
      setIsMouseDownMin(false);
      setIsMouseDownMax(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDownMin, isMouseDownMax]);
  
  const changePositionMin = (value) => {
    if (value > inputValueMax) {
      setPositionMin(positionMax);
    } else if (value < minPrice) {
      setPositionMin(0);
    } else {
      const result = Math.round(rangeWidth * (value - minPrice) / (maxPrice - minPrice));
      setPositionMin(result);
    }
  };
  
  const handleChangeMin = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= minPrice && value <= inputValueMax) {
      setInputValueMin(value);
    } else {
      setInputValueMin(minPrice);
    }
  };

  const changePositionMax = (value) => {
    if (value < inputValueMin) {
      setPositionMax(positionMin);
    } else if (value > maxPrice) {
      setPositionMax(rangeWidth);
    } else {
      const result = Math.round(rangeWidth * (value - minPrice) / (maxPrice - minPrice));
      setPositionMax(result);
    }
  };

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
  
  const handleMouseDownMin = e => {
    setIsMouseDownMin(true);
  };  

  const handleMouseDownMax = e => {
    setIsMouseDownMax(true);
    console.log('dfg');
  };  

  const handleClickBtn = () => {    
    dispatch(changefilters({ key: 'price', value: [inputValueMin, inputValueMax] })); 
    
    console.log("Button click");
    alert("Button click");
  }
  
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
          onChange={onChangeMinMax}
          onBlur={handleChangeMin}
        />
        <span>{lang[languages].priceRange_labelEnd}</span>
        <Input
          id='inputMax'
          type="text"
          style={{ width: '70px' }}
          value={inputValueMax}
          onChange={onChangeMinMax}
          onBlur={handleChangeMax}
        />
        <span>{' грн'}</span>
      </Form>
      <p></p>
      {/* <button style={{ margin: '10px auto' }}>OK</button> */}
      <BtnDiv
      onClick={handleClickBtn}>
        <b>OK</b>
      </BtnDiv>
      {/* ------------------------------------ */}
      <RangeContainer>
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
            onMouseDown={handleMouseDownMin}
          />
          <RangeLineEdgesDiv
            id="max"
            style={{ right: `${-SHIFT_RANGE}px` }}
            onMouseDown={handleMouseDownMax}
          />
        </RangeActiveDiv>
      </RangeContainer>
    </>
  );
};

export default PriceRange;
