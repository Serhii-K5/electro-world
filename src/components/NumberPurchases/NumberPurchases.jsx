import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";

import {
  Quantity,
} from "./NumberPurchasesstyled";

import { GiShoppingCart } from "react-icons/gi";

const ShoppingCart = ({ quantity }) => {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  // const [isModalShown, setIsModalShown] = useState(false);
  // const [isOrder, setIsOrder] = useState(false);
  // const [NumberPurchases, setNumberPurchases] = useState(0);

  return (
    <div style={{ position: 'relative' }}>
      <GiShoppingCart style={{width: '60px', height: '60px', fill: "blue" }} />
      <Quantity>{quantity}</Quantity>
    </div>
  )
}

export default ShoppingCart;