// import { useState } from "react";
import { useSelector } from "react-redux";
import lang from "assets/json/language.json";
import { selectLanguages, selectFilters } from "redux/selectors";
import { Link } from 'react-router-dom';

import {
  Div,
  H3,
  H4,
} from './NoOrders.styled';

const NoOrders = () => {
  const languages = useSelector(selectLanguages);
  const filters = useSelector(selectFilters);
  // eslint-disable-next-line no-unused-vars
  // const [isCategory, setIsCategory] = useState(() => filters.findIndex(filter => filter.key === 'parentId') > -1);
  // const isCategory = (() => filters.findIndex(filter => filter.key === 'parentId') > -1);
  const isCategory = () => {
    return filters.findIndex(filter => filter.key === 'parentId') > -1;
  };

  return (
    <Div>
      <H3>{lang[languages].noOrders_textH3}.</H3>
      <H4>
        {lang[languages].noOrders_textH4_1}
        <Link to={isCategory() ? '/catalog' : '/categories'}>
          {lang[languages].NavLinkBar_catalog1}
          {console.log(isCategory())}
        </Link>
        {lang[languages].noOrders_textH4_2}.
      </H4>
    </Div>
  );
};

export default NoOrders;