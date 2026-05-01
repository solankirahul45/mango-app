import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';
import Homepage from "./components/homepage.jsx";

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