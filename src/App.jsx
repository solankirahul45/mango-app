import "./App.scss";
import Navbar from "./components/navbar";
import Hero from './components/Hero';
import Varieties from './components/Varieties';
import Story from './components/Story';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main style={{ paddingTop: '5rem' }}>
          <Hero />
          <Varieties />
          <Story />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;