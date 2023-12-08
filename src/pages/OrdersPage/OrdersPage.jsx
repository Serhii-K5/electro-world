import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
import { deleteAllOrders } from "redux/slice/orderSlice";
import { useState, useEffect } from "react";

// import CardModal from "components/CardModal/CardModal";
import OrdersCard from "components/OrdersCard/OrdersCard";
import CheckoutModal from "components/CheckoutModal/CheckoutModal";

// import {
//   Ul
// } from "pages/CatalogPage/CatalogPage.styled";

import {
  Container,
  DivH2,
  DivBtn,
  DivCheckout,
  DivCheckoutBtn,
} from "./OrdersPage.styled";

import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";
import NoOrders from "components/NoOrders/NoOrders";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const orderProducts = useSelector(selectOrders);
  const [isModalShown, setIsModalShown] = useState(false);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(orderProducts.reduce((acc, value) =>
        acc + Number(value.price) * Number(value.ordered)
      , 0))
    
  }, [orderProducts]);

  const deletedOrders = () => {
    dispatch(deleteAllOrders([]));
  }

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  
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
        <DivCheckout>
          <p>{lang[languages].ordersPage_sum} <b>{sum}</b> грн.</p>        
          <DivCheckoutBtn onClick={onOpenModal}>{lang[languages].ordersPage_sumBtn}</DivCheckoutBtn>
        </DivCheckout>
      </Container>
      {isModalShown && <CheckoutModal onClose={onCloseModal} />}
    </div>
    
  ) : (
    <NoOrders />
  )  
};

export default OrdersPage;
