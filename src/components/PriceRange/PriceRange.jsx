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

// const PriceRange = () => {
const PriceRange = ({ data }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  // const filteredProducts = useSelector(selectFilteredProducts);
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

  // if (filteredProducts.length === 0) {
  //   dispatch(changeFilteredProducts(products1));
  // }

  const changeFilter = (min, max) => {
    dispatch(changeFilters({ key: 'price', value: [min, max] }));
  };

  const findMinMaxPrice = () => {
    // const max = filteredProducts.reduce(
      //   (accumulator, currentValue) =>
      //     (accumulator =
      //       currentValue.price > accumulator ? currentValue.price : accumulator),
      //   0
      // );
      
      // const min = filteredProducts.reduce(
        //   (accumulator, currentValue) =>
        //     (accumulator =
        //       currentValue.price < accumulator ? currentValue.price : accumulator),
        //   max
        // );
        
    const [min, max] = searchMinMaxPrice(filteredProducts);

    setInputValueMin(min);
    setInputValueMax(max);

    // const changeFilter = (min, max) => {
    //   dispatch(changeFilters({ key: 'price', value: [min, max] }));
    // };

    changeFilter(min, max);
    if (maxPrice !== max || minPrice !== min) {
      // dispatch(changeFilters({ key: 'price', value: [min, max] }));
      // console.log('findMinMaxPrice');
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
  //   findMinMaxPrice();
  //   console.log('data.length');
  // // }, [data.length]);
  // }, [filteredProducts]);

  useEffect(() => {
    const [min, max] = searchMinMaxPrice(filteredProducts);
    setInputValueMin(min);
    setInputValueMax(max);

  }, [filters]);

  useEffect(() => {
    const handleMouseMove = e => {
      if (isMouseDownMin) {
        const offsetMin = e.clientX - positionStart - SHIFT_RANGE * 0.5;
        if (
          offsetMin + SHIFT_RANGE * 0.5 >= positionStart &&
          offsetMin <= positionMax
        ) {
          setInputValueMin(
            Math.round((offsetMin * (maxPrice - minPrice)) / rangeWidth)
          );
          // setInputValueMin(Math.round(offsetMin * (inputValueMax - inputValueMin) / rangeWidth))
          setPositionMin(Math.round(offsetMin));
        } else if (offsetMin > positionMax) {
          setInputValueMin(inputValueMax);
          setPositionMax(positionMax);
        } else {
          setInputValueMin(minPrice);
          setPositionMin(0);
        }
      }
      if (isMouseDownMax) {
        const offsetMax = e.clientX - positionStart - SHIFT_RANGE * 1.5;
        if (offsetMax >= positionMin && offsetMax <= rangeWidth) {
          setInputValueMax(
            Math.round((offsetMax * (maxPrice - minPrice)) / rangeWidth)
          );
          // setInputValueMax(Math.round(offsetMax * (inputValueMax - inputValueMin) / rangeWidth))
          setPositionMax(Math.round(offsetMax));
        } else if (offsetMax < positionMin) {
          setInputValueMax(inputValueMin);
          setPositionMax(positionMin);
        } else {
          setInputValueMax(maxPrice);
          setPositionMax(rangeWidth);
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

  const changePositionMin = value => {
    if (value > inputValueMax) {
      setPositionMin(positionMax);
    } else if (value < minPrice) {
      // } else if (value < inputValueMin) {
      setPositionMin(0);
    } else {
      const result = Math.round(
        (rangeWidth * (value - minPrice)) / (maxPrice - minPrice)
      );
      // const result = Math.round(rangeWidth * (value - inputValueMin) / (inputValueMax - inputValueMin));
      setPositionMin(result);
    }
  };

  const handleChangeMin = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= minPrice && value <= inputValueMax) {
      // if (value >= inputValueMin && value <= inputValueMax) {
      setInputValueMin(value);
    } else if (value >= inputValueMax) {
      setInputValueMin(maxPrice);
      // setInputValueMin(inputValueMax);
    } else {
      setInputValueMin(minPrice);
    }
  };

  const changePositionMax = value => {
    if (value < inputValueMin) {
      setPositionMax(positionMin);
    } else if (value > maxPrice) {
      // } else if (value > inputValueMax) {
      setPositionMax(rangeWidth);
    } else {
      const result = Math.round(
        (rangeWidth * (value - minPrice)) / (maxPrice - minPrice)
      );
      // const result = Math.round(rangeWidth * (value - inputValueMin) / (inputValueMax - inputValueMin));
      setPositionMax(result);
    }
  };

  const handleChangeMax = e => {
    const value = Math.abs(Number(e.target.value));
    if (value >= inputValueMin && value <= maxPrice) {
      // if (value >= inputValueMin && value <= inputValueMax){
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

  // const onChangeMinMax = e => {
  //   const value = Math.abs(Number(e.target.value));
  //   if (value >= 0) {
  //     if (e.target.id === 'inputMin') {
  //       setInputValueMin(value);
  //       changePositionMin(value);
  //     }
  //     if (e.target.id === 'inputMax') {
  //       setInputValueMax(value);
  //       changePositionMax(value);
  //     }
  //   } else {
  //     e.target.id === 'inputMin' && setInputValueMin(e.target.value);
  //     e.target.id === 'inputMax' && setInputValueMax(e.target.value);
  //   }
  // };

  const handleMouseDownMin = () => {
    setIsMouseDownMin(true);
  };

  // const handleMouseDownMax = e => {
  const handleMouseDownMax = () => {
    setIsMouseDownMax(true);
  };

  const handleClickBtn = () => {
    changeFilter(inputValueMin, inputValueMax);

    // // dispatch(deleteFilters({ key: 'price', value: [inputValueMin, inputValueMax] }));
    // dispatch(deleteFilters({ key: 'price', value: [] }));

    // // console.log("Button click");
    // // alert("Button click");
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
          // onChange={onChangeMinMax}
          onChange={onChangeMin}
          onBlur={handleChangeMin}
        />
        <span>{lang[languages].priceRange_labelEnd}</span>
        <Input
          id="inputMax"
          type="text"
          style={{ width: '70px' }}
          value={inputValueMax}
          // onChange={onChangeMinMax}
          onChange={onChangeMax}
          onBlur={handleChangeMax}
        />
        <span>{' грн'}</span>
      </Form>
      <p></p>
      {/* <button style={{ margin: '10px auto' }}>OK</button> */}
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
