import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import SearchScreen from './screens/SearchScreen';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer position="bottom-center" limit={1} />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/orderhistory" element={<OrderHistoryScreen />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
