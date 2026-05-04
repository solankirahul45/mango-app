import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './routes/Homepage';
import Products from './routes/Products';

import "./App.scss";
import Checkout from "./routes/checkout";
import OrderConfirmation from "./routes/order-confirmation";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path='order-confirmation' element={<OrderConfirmation />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;