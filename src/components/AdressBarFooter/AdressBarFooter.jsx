import { useState } from 'react';
import { SiVodafone } from 'react-icons/si';
import { FaViber } from 'react-icons/fa';

import ks from 'assets/images/svg/kyivstar.svg';
import { VodafoneBg, Span } from './AdressBarFooter.styled';

const AdressBarFooter = ({color}) => {
  const [isFocus, setIsFocus] = useState(0);
  return (
    <div>
      <div
        style={{ display: 'flex'}}
        onMouseMove={() => setIsFocus(1)}
        onMouseOut={() => setIsFocus(0)}
      >
        <a href="tel:+380689766880">
          <div style={{ display: 'flex' }}>            
            <img src={ks} alt="kyivstar logo" style={{marginRight: '2px' }}/>
            <Span className={isFocus === 1 && 'isScaleKs'} > +38(068)976-68-80 </Span>
          </div>
        </a>
        <FaViber style={{ marginLeft: '3px', fill: 'blueviolet' }} />
      </div>
      <div
        style={{ display: 'flex' }}
        onMouseMove={() => setIsFocus(2)}
        onMouseOut={() => setIsFocus(0)}
      >
        <a href="tel:+380689766880" style={{ display: 'block'}}>
          <VodafoneBg style={{ position: 'relative', top: '3px'}}>
            <SiVodafone style={{ fill: 'red' }} />
          </VodafoneBg>
          <Span className={isFocus === 2 && 'isScaleVd'}> +38(068)976-68-80 </Span>
        </a>
      </div>
    </div>
  );
};

export default AdressBarFooter;
