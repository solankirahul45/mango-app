import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';

import "./App.scss";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;