// import { useState } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { SiVodafone } from 'react-icons/si';
// import { FaViber } from 'react-icons/fa';

// import ks from 'assets/images/svg/kyivstar.svg';
// import { VodafoneBg, Span } from './PriceRange.styled';

const PriceRange1 = () => {
  // const { JSDOM } = require('jsdom');
  // const { window } = new JSDOM('');
  // const $ = require('jquery')(window);

  return (
    <>
      <p>
        <sup>Цена</sup>
      </p>
      <div id="price-range">
        <label>
          Мин. цена:
          <input type="text" id="min-price"></input>
        </label>
        <label>
          Макс. цена:
          <input type="text" id="max-price"></input>
        </label>
      </div>

      <div style={{ display: 'flex', position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '5px',
            border: 'none',
            backgroundColor: 'lightgrey',
            marginTop: '20px',
          }}
        ></div>
        <div
          style={{
            width: '50%',
            height: '5px',
            position: 'absolute',
            top: '20px',
            left: '10%',
            border: 'none',
            backgroundColor: 'blue',
          }}
        >
          <div
            style={{
              width: '15px',
              height: '15px',
              position: 'absolute',
              top: '-5px',
              left: 0,
              border: 'none',
              backgroundColor: 'blue',
              borderRadius: '50%',
            }}
          ></div>
          <div
            style={{
              width: '15px',
              height: '15px',
              position: 'absolute',
              top: '-5px',
              right: 0,
              border: 'none',
              backgroundColor: 'blue',
              borderRadius: '50%',
            }}
          ></div>
        </div>
      </div>

      <div>
        {/* <input
          type="range"
          // name="minPrice"
          // id="minPrice"
          range="true"
          min={0}
          max={100}
          defaultValue={0}
          // value={0}
          // values={[0, 100]}
          // color={'-internal-light-dark(blue, rgb(255, 255, 255))'}
          // readOnly="false"
        /> */}
        {/* <input
          type="range"
          // name="maxPrice"
          // id="maxPrice"
          min={0}
          max={100}
          defaultValue={100}
          // value={100}
          // values={[0, 100]}
          // readOnly="false"
        /> */}
        {/* <div id="priceRangeBg"></div>
        <div id="pricePrice"></div>        
        <div id="minPrice"></div>
        <div id="maxPrice"></div> */}
      </div>
    </>
  );
};

export default PriceRange1;
