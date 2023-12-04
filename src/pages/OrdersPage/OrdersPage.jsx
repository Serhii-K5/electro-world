import { useSelector } from "react-redux";
import { selectOrders } from "redux/selectors";
// import CardModal from "components/CardModal/CardModal";
import OrdersCard from "components/OrdersCard/OrdersCard";

// import {
//   Ul
// } from "pages/CatalogPage/CatalogPage.styled";

import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";
import NoOrders from "components/NoOrders/NoOrders";

const OrdersPage = () => {
  const languages = useSelector(selectLanguages);
  const orderProducts = useSelector(selectOrders);
  
  return orderProducts.length > 0 ? (
    <>
      <div>
        <h2>{lang[languages].ordersPage_h2}</h2>
      </div>
      <div>
        {lang[languages].ordersPage_btn}
      </div>
      <p>{lang[languages].ordersPage_p}.</p>
      <ul>
        {orderProducts.map((item) => (
          <li key={item.id}>
            <OrdersCard card={item} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <NoOrders />
  )  
};

export default OrdersPage;
