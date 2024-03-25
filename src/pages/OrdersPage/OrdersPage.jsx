import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
import { deleteAllOrders } from "redux/slice/orderSlice";
import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';

import OrdersCard from "components/OrdersCard/OrdersCard";
import CheckoutModule from 'components/CheckoutModule/CheckoutModule';

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
  const [sum, setSum] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  useEffect(() => {
    setSum(orderProducts.reduce((acc, value) =>
        acc + Number(value.price) * Number(value.ordered)
      , 0))
    
  }, [orderProducts]);

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
          {orderProducts.map(item => (
            <li key={item.id}>
              <OrdersCard card={item} />
            </li>
          ))}
        </ul>
        <DivCheckout>
          <p>
            {lang[languages].ordersPage_sum} <b>{sum}</b> грн.
          </p>
          {/* <Link to="/checkout">
            <DivCheckoutBtn>{lang[languages].ordersPage_sumBtn}</DivCheckoutBtn>
          </Link> */}
          <DivCheckoutBtn onClick={onOpenModal}>
            {lang[languages].ordersPage_sumBtn}
          </DivCheckoutBtn>
          {isModalShown && (
            <CheckoutModule
              onClose={onCloseModal}
              // nameWindows={lang[languages].checkoutModule_h1}
              sum={sum}
              numbeOfPositions={orderProducts.length}
            />
          )}
        </DivCheckout>
      </Container>
    </div>
  ) : (
    <NoOrders />
  );  
};

export default OrdersPage;
