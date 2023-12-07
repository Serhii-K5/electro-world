import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
import { deleteAllOrders } from "redux/slice/orderSlice";

// import CardModal from "components/CardModal/CardModal";
import OrdersCard from "components/OrdersCard/OrdersCard";

// import {
//   Ul
// } from "pages/CatalogPage/CatalogPage.styled";

import {
  Container,
  DivH2,
  DivBtn,
} from "./OrdersPage.styled";

import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";
import NoOrders from "components/NoOrders/NoOrders";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const orderProducts = useSelector(selectOrders);

  const deletedOrders = () => {
    dispatch(deleteAllOrders([]));
  }
  
  return orderProducts.length > 0 ? (
    <div>      
      <DivH2>
        <h2>{lang[languages].ordersPage_h2}</h2>
      </DivH2>
      <Container>
      <DivBtn onClick={deletedOrders}>
        {lang[languages].ordersPage_btn}
      </DivBtn>
      <p>{lang[languages].ordersPage_p}.</p>
      <ul>
        {orderProducts.map((item) => (
          <li key={item.id}>
            <OrdersCard card={item} />
          </li>
        ))}
      </ul>
    </Container>
    </div>
    
  ) : (
    <NoOrders />
  )  
};

export default OrdersPage;
