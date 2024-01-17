// import { useState } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { SiVodafone } from 'react-icons/si';
// import { FaViber } from 'react-icons/fa';

// import ks from 'assets/images/svg/kyivstar.svg';
// import { VodafoneBg, Span } from './FiltersBar.styled';


import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectSearchParams } from 'redux/selectors';

const FiltersBar = () => {
  // const dispatch = useDispatch();
  // const products = useSelector(selectProducts);
  // const searchParams = useSelector(selectSearchParams);

  // const [isFocus, setIsFocus] = useState(0);


  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);



  //поиск мин. цены
  // const minPrice = () => {

  //  }

  //поиск макс. цены


  


  return (
    <>
      <p>
        <sub>Selection by parameters</sub>
      </p>
      <div>
        <p>Цена</p>
        <input value="" />
        <input value="" />

        <input type="range" name="price" id="priceId" />

      </div>
    </>

    // <div>
    //   <div
    //     style={{ display: 'flex' }}
    //     onMouseMove={() => setIsFocus(1)}
    //     onMouseOut={() => setIsFocus(0)}
    //   >
    //     <a href="tel:+380689766880">
    //       <div style={{ display: 'flex' }}>
    //         <BsFillTelephoneFill
    //           style={{
    //             position: 'relative',
    //             top: '3px',
    //             right: '-17px',
    //             color: '#FFF',
    //           }}
    //         />
    //         <BsFillTelephoneFill style={{ position: 'relative', top: '3px' }} />
    //         <img src={ks} alt="kyivstar logo" />
    //         <Span className={isFocus === 1 && 'isScaleKs'}>
    //           {' '}
    //           +38(068)976-68-80{' '}
    //         </Span>
    //       </div>
    //     </a>
    //     <FaViber style={{ marginLeft: '3px', fill: 'blueviolet' }} />
    //   </div>
    //   <div
    //     style={{ display: 'flex' }}
    //     onMouseMove={() => setIsFocus(2)}
    //     onMouseOut={() => setIsFocus(0)}
    //   >
    //     <a href="tel:+380689766880" style={{ display: 'block' }}>
    //       <BsFillTelephoneFill
    //         style={{
    //           position: 'relative',
    //           top: '3px',
    //           right: '-18px',
    //           color: '#FFF',
    //         }}
    //       />
    //       <BsFillTelephoneFill style={{ position: 'relative', top: '3px' }} />
    //       <VodafoneBg>
    //         <SiVodafone style={{ fill: 'red' }} />
    //       </VodafoneBg>
    //       <Span className={isFocus === 2 && 'isScaleVd'}>
    //         {' '}
    //         +38(068)976-68-80{' '}
    //       </Span>
    //     </a>
    //   </div>
    // </div>
  );
};

export default FiltersBar;
