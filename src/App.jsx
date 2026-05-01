import { Routes, Route } from "react-router-dom";

import Homepage from "./components/homepage";

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