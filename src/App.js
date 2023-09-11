import React from 'react';
import { Home } from './pages/Home';
import Login from './features/auth/components/Login';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Checkout } from './pages/Checkout';
import { Celebrity } from './pages/Celebrity';
import { Test } from './features/product-list/test';
import ProductList from './features/product-list/ProductList';
import { ProductDetail } from './features/product-list/ProductDetail';
import { Protected } from './features/auth/components/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Celebrity></Celebrity>)
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: '/checkout',
    element: <Protected><Checkout></Checkout></Protected>
  },
  {
    path: '/productlist/:brandname',
    element: <ProductList />
  },
  {
    path: '/productdetail/:id/:indx',
    element: <ProductDetail />
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
