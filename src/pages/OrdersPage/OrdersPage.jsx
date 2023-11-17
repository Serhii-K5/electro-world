import { useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
// import CardModal from "components/CardModal/CardModal";
import ProductCard from "components/ProductCard/ProductCard";


import {
  Div,
  H3,
  H4,
} from './OrdersPage.styled';

import {
  Ul
} from "pages/CatalogPage/CatalogPage.styled";

const OrdersPage = () => {
  const orderProducts = useSelector(selectOrders);
  
  return orderProducts.length > 0 ? (
    <Ul>
      {orderProducts.map((item) => (
        <li key={item.id}>
          <ProductCard card={item} />
        </li>
      ))}
    </Ul>
  ) : (
    <Div>
      <H3>No cars selected.</H3>
      <H4>Go to the "Catalog" page and make a selection.</H4>      
    </Div>  
  )  
};

export default OrdersPage;
