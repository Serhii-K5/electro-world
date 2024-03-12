import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import OrdersPage from 'pages/OrdersPage/OrdersPage';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import HelpPage from 'pages/HelpPage/HelpPage';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import DeliveryPage from 'pages/DeliveryPage/DeliveryPage';
import AdminPage from 'pages/AdminPage/AdminPage';
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage';

export default function App() {
  // Обработчик события beforeunload
  window.addEventListener('beforeunload', () => {
    // Очистка нужных ключей в localStorage
    localStorage.clear();
    // localStorage.removeItem('orders');
    // localStorage.removeItem('languages');
    // localStorage.removeItem('directoryPath');
    // localStorage.removeItem('categories');
    // localStorage.removeItem('filters');
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage data={[]} />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="about_us" element={<AboutUsPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
