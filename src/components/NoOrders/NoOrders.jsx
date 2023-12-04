import { useSelector } from "react-redux";
import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";
import { Link } from 'react-router-dom';

import {
  Div,
  H3,
  H4,
} from './NoOrders.styled';

const NoOrders = () => {
  const languages = useSelector(selectLanguages);
  
  return (
    <Div>
      <H3>{lang[languages].noOrders_textH3}.</H3>
      <H4>
        {lang[languages].noOrders_textH4_1}
        <Link to="/catalog">
          {lang[languages].layout_navLinkCatalog}
        </Link>
        {lang[languages].noOrders_textH4_2}.
      </H4>      
    </Div>  
  )  
};

export default NoOrders;