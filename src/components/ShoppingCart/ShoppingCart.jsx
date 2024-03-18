import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";

import {
  Div,
  Quantity,
} from "./ShoppingCart.styled";

import { GiShoppingCart } from "react-icons/gi";
import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";

const ShoppingCart = ({ quantity }) => {
  const orderProducts = useSelector(selectOrders);
  const languages = useSelector(selectLanguages);
  const [sum, setSum] = useState(0);

  
  useEffect(() => {
    setSum(orderProducts.reduce((acc, value) =>
        acc + Number(value.price) * Number(value.ordered)
      , 0))
    
  }, [orderProducts]);


  return (
    <Div>
      <GiShoppingCart style={{fontSize: '60px', fill: "var(--active-blue)" }} />
      <Quantity>{quantity}</Quantity>
      <div style={{paddingRight: '10px'}}>
        <p>{lang[languages].layout_sum}:</p>
        <p>{sum} грн.</p>
      </div>      
    </Div>
  )
}

export default ShoppingCart;