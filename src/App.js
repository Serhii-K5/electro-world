import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import OrdersPage from "pages/OrdersPage/OrdersPage";
import HelpPage from 'pages/HelpPage/HelpPage';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import DeliveryPage from 'pages/DeliveryPage/DeliveryPage';
import MessagePage from 'components/MessageModule/MessageModule';

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<CatalogPage data={[]} />} />
//         <Route index element={<HomePage />} />
//         <Route path="home" element={<HomePage />} />
//         <Route path="orders" element={<OrdersPage />} />
//       </Route>
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage data={[]} />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="about_us" element={<AboutUsPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}