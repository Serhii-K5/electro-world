import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

import {
  Ul,
  A,
} from './AdressBar.styled';

const AdressBar = () => {
  return (
    <Ul>
      <li>
        <b><A href="tel:+380730000000"> <BsFillTelephoneFill style={{position: "relative", top: "4px", right: "-25px", color: "#FFF"}}/> <BsFillTelephoneFill style={{position: "relative", top: "3px"}}/> +380730000000</A></b>
      </li>
      <li>
        <b><span> <MdLocationPin style={{position: "relative", top: "4px", right: "-19px", color: "#FFF"}}/><MdLocationPin style={{position: "relative", top: "3px"}}/> c. ​​Beautiful, st. Uyutnaya 5, office 1 </span></b>
      </li>
      <li>
        <b><A href="mailto:kcn@gmail.com"> <AiOutlineMail style={{position: "relative", top: "4px", right: "-20px", color: "#FFF"}}/><AiOutlineMail style={{position: "relative", top: "3px"}}/> kcn@ggmail.com</A></b>
      </li>
    </Ul>
  )
}

export default AdressBar;