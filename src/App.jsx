import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './routes/Homepage';

import "./App.scss";
import Products from "./routes/Products";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;