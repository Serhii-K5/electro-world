import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import OrdersPage from "pages/OrdersPage/OrdersPage";
import Layout from "components/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage data={[]} />} />
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<HomePage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
