import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFilteredProducts, selectLanguages } from 'redux/selectors';
// import { selectLanguages } from 'redux/selectors';
import { selectLanguages, selectFilters } from 'redux/selectors';
import { searchMinMaxPrice } from 'utilites/searchMinMax';

import {
  Form,
  Input,
  BtnDiv,
  RangeContainer,
  RangeBgDiv,
  RangeActiveDiv,
  RangeLineEdgesDiv  
} from './PriceRange.styled';

// import { changeFilteredProducts } from 'redux/slice/filteredProductsSlice';
import { changeFilters, deleteFilters } from "redux/slice/filtersSlice";
import { SHIFT_RANGE } from 'constants/constants';
import lang from 'assets/json/language.json';

import products1 from '../../assets/json/products.json';

const PriceRange = ({ data }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const filteredProducts = data.length > 0 ? data : products1;
  const languages = useSelector(selectLanguages);

  const [rangeWidth, setRangeWidth] = useState(0);
  const [positionStart, setPositionStart] = useState(0);
  const [positionMin, setPositionMin] = useState(0);
  const [positionMax, setPositionMax] = useState(0);

  const [inputValueMin, setInputValueMin] = useState('');
  const [inputValueMax, setInputValueMax] = useState('');

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [isMouseDownMin, setIsMouseDownMin] = useState(false);
  const [isMouseDownMax, setIsMouseDownMax] = useState(false);

  
  const changeFilter = (min, max) => {
    dispatch(changeFilters({ key: 'price', value: [min, max] }));
  };

  const findMinMaxPrice = () => {
    const [min, max] = searchMinMaxPrice(filteredProducts);

    setInputValueMin(min);
    setInputValueMax(max);

    changeFilter(min, max);
    if (maxPrice !== max || minPrice !== min) {
      changeFilter(min, max);
      if (minPrice !== min) setMinPrice(min);
      if (maxPrice !== max) setMaxPrice(max);
    }
  };

  useEffect(() => {
    const rangePriceElement = document.getElementById('range-price');
    const rangeWidth = rangePriceElement.clientWidth;
    setPositionStart(rangePriceElement.offsetParent.offsetLeft);

    setRangeWidth(rangeWidth);
    setPositionMax(rangeWidth);

    findMinMaxPrice();
  }, []);

  // useEffect(() => {
  //   const [min, max] = searchMinMaxPrice(filteredProducts);
  //   setInputValueMin(min);
  //   setInputValueMax(max);
  // }, [filters]);

  useEffect(() => {
    const [min, max] = searchMinMaxPrice(data);
    setInputValueMin(min);
    setInputValueMax(max);
    
    setPositionMin(Math.round(inputValueMin * rangeWidth / (max - min)));
    setPositionMax(Math.round(inputValueMax * rangeWidth / (max - min)));

  }, [data]);
  
  
  const mouseDownMinFn = (offsetMin) => {
    if (offsetMin >= 0 && offsetMin <= positionMax) {
      setInputValueMin(
        Math.round((offsetMin * (maxPrice - minPrice)) / rangeWidth)
      );
      setPositionMin(Math.round(offsetMin));
    } else if (offsetMin > positionMax) {
      setInputValueMin(inputValueMax);
      // setPositionMax(positionMax);
      setPositionMin(positionMax);
    } else {
      setInputValueMin(minPrice);
      setPositionMin(0);
    }
  };
  
  const mouseDownMaxFn = (offsetMax) => {
    if (offsetMax >= positionMin && offsetMax <= rangeWidth) {
      setInputValueMax(
        Math.round((offsetMax * (maxPrice - minPrice)) / rangeWidth)
      );
      setPositionMax(Math.round(offsetMax));
    } else if (offsetMax < positionMin) {
      setInputValueMax(inputValueMin);
      setPositionMax(positionMin);
    } else {
      setInputValueMax(maxPrice);
      setPositionMax(rangeWidth);
    }
  };
  
  useEffect(() => {
    const handleMouseMove = e => {
      if (isMouseDownMin) {
        const offsetMin = e.clientX - positionStart - SHIFT_RANGE * 0.5;
        mouseDownMinFn(offsetMin);
        // if (offsetMin >= 0 && offsetMin <= positionMax) {
        //   setInputValueMin(Math.round((offsetMin * (maxPrice - minPrice)) / rangeWidth));
        //   setPositionMin(Math.round(offsetMin));
        // } else if (offsetMin > positionMax) {
        //   setInputValueMin(inputValueMax);
        //   // setPositionMax(positionMax);
        //   setPositionMin(positionMax);
        // } else {
        //   setInputValueMin(minPrice);
        //   setPositionMin(0);
        // }
      }
      
      if (isMouseDownMax) {
        const offsetMax = e.clientX - positionStart - SHIFT_RANGE * 1.5;
        mouseDownMaxFn(offsetMax);
        // if (offsetMax >= positionMin && offsetMax <= rangeWidth) {
        //   setInputValueMax(
        //     Math.round((offsetMax * (maxPrice - minPrice)) / rangeWidth)
        //   );
        //   setPositionMax(Math.round(offsetMax));
        // } else if (offsetMax < positionMin) {
        //   setInputValueMax(inputValueMin);
        //   setPositionMax(positionMin);
        // } else {
        //   setInputValueMax(maxPrice);
        //   setPositionMax(rangeWidth);
        // }
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

  const changePositionMin = value => {
    if (value > inputValueMax) {
      setPositionMin(positionMax);
    } else if (value < minPrice) {
      setPositionMin(0);
    } else {
      const result = Math.round(
        (rangeWidth * (value - minPrice)) / (maxPrice - minPrice)
      );
      setPositionMin(result);
    }
  };

  const handleChangeMin = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= minPrice && value <= inputValueMax) {
      setInputValueMin(value);
    } else if (value >= inputValueMax) {
      setInputValueMin(maxPrice);
    } else {
      setInputValueMin(minPrice);
    }
  };

  const changePositionMax = value => {
    if (value < inputValueMin) {
      setPositionMax(positionMin);
    } else if (value > maxPrice) {
      setPositionMax(rangeWidth);
    } else {
      const result = Math.round(
        (rangeWidth * (value - minPrice)) / (maxPrice - minPrice)
      );
      setPositionMax(result);
    }
  };

  const handleChangeMax = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= inputValueMin && value <= maxPrice) {
      setInputValueMax(value);
    } else if (value < inputValueMin) {
      setInputValueMax(inputValueMin);
    } else {
      setInputValueMax(maxPrice);
    }
  };

  const onChangeMin = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= 0) {
      setInputValueMin(value);
      changePositionMin(value);      
    } else {
      setInputValueMin(e.target.value);
    }
  };

  const onChangeMax = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= 0) {
      setInputValueMax(value);
      changePositionMax(value);
    } else {
      setInputValueMax(e.target.value);
    }
  };

  const handleMouseDownMin = () => {
    setIsMouseDownMin(true);
  };
  
  // const handleMouseUpMin = () => {
  //   setIsMouseDownMin(false);
  // };

  const handleMouseDownMax = () => {
    setIsMouseDownMax(true);
  };

  // const handleMouseUpMax = () => {
  //   setIsMouseDownMax(false);
  // };

  const handleClickBtn = () => {
    changeFilter(inputValueMin, inputValueMax);
  };

  return (
    <>
      <p>{lang[languages].priceRange_label}</p>
      <Form>
        <span>{lang[languages].priceRange_labelStart} </span>
        <Input
          id="inputMin"
          type="text"
          style={{ width: '50px' }}
          value={inputValueMin}
          onChange={onChangeMin}
          onBlur={handleChangeMin}
        />
        <span>{lang[languages].priceRange_labelEnd}</span>
        <Input
          id="inputMax"
          type="text"
          style={{ width: '70px' }}
          value={inputValueMax}
          onChange={onChangeMax}
          onBlur={handleChangeMax}
        />
        <span>{' грн'}</span>
      </Form>
      <p></p>
      <BtnDiv onClick={handleClickBtn}>
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
            // onMouseUp={handleMouseUpMin}
          />
          <RangeLineEdgesDiv
            id="max"
            style={{ right: `${-SHIFT_RANGE}px` }}
            onMouseDown={handleMouseDownMax}
            // onMouseUp={handleMouseUpMax}
          />
        </RangeActiveDiv>
      </RangeContainer>
    </>
  );
};

export default PriceRange;
