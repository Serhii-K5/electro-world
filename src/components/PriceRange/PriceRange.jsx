// import { useState } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { SiVodafone } from 'react-icons/si';
// import { FaViber } from 'react-icons/fa';

// import ks from 'assets/images/svg/kyivstar.svg';
// import { VodafoneBg, Span } from './PriceRange.styled';

const PriceRange = () => {
  // const [isFocus, setIsFocus] = useState(0);
  return (
    <>
      <div id="price-range">
        <label for="min-price">Мин. цена:</label>
        <input type="text" id="min-price" readonly></input>
        <label for="max-price">Макс. цена:</label>
        <input type="text" id="max-price" readonly></input>
      </div>
    </>
  );
};

export default PriceRange;
