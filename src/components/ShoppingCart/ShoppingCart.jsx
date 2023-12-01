// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addOrders, deleteOrders } from "redux/slice/orderSlice";
// import { selectOrders } from "redux/selectors";
// import {
//  NavLinkStyle,
// } from "../Layout/Layout.styled";

import {
  Div,
  Quantity,
} from "./ShoppingCart.styled";

import { GiShoppingCart } from "react-icons/gi";

const ShoppingCart = ({ quantity }) => {
  // const dispatch = useDispatch();
  // const orderProducts = useSelector(selectOrders);
  // const [isModalShown, setIsModalShown] = useState(false);
  // const [isOrder, setIsOrder] = useState(false);
  // const [NumberPurchases, setNumberPurchases] = useState(0);

  return (
    // <div style={{ position: 'relative' }}>
    // <div style={{ position: 'absolute', right: '0px', top: '0px'}}>
    // {/* <div style={{ position: 'absolute', left: (window.innerWidth - 16) +'px', bottom: '-38px'}}> */}
    // {/* <div style={{ position: 'absolute', left: (document.body.clientWidth - 16) +'px', bottom: '-38px'}}> */}
    // <div style={{ position: 'absolute', left: (window.screen.availWidth - 16) +'px', bottom: '-38px'}}>
    // <div style={{ position: 'absolute', left: '800px', bottom: '-38px'}}>
    <Div>
      <GiShoppingCart style={{width: '60px', height: '60px', fill: "var(--bg-active-button-color)" }} />
      <Quantity>{quantity}</Quantity>
    </Div>
  )
}

export default ShoppingCart;