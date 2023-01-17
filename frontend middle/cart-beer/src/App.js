import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartContextProvider from "./context/CartContext";
import "./App.css";
function App() {
  const BeerList = lazy(() => import("./components/BeerList"));
  const BeerDetail = lazy(() => import("./components/BeerDetail"));
  const Cart = lazy(() => import("./components/Cart"));

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="spin"></div>
        </div>
      }
    >
      <CartContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<BeerList page={3} perPage={25} />} />
            <Route path="/" element={<BeerDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </Suspense>
  );
}

export default App;
