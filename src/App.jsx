import "./App.scss";

import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Varieties from './components/Varieties';
import Story from './components/story';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BrandFeel from "./BrandFeel";
import TrustUS from "./components/Trust";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main style={{marginTop: '68.8px'}}>
          <Hero />
          <BrandFeel />
          <TrustUS />
          {/* <Varieties />
          <Story />
          <Newsletter /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;