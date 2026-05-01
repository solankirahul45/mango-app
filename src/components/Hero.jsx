import MangoBanner from '../assets/mango-trees-banner-mini.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          className="hero-img" 
          src={MangoBanner}
          alt="Lush mango orchard"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="badge">From Farm to Family</span>
          <h1>Farm Fresh Kesar Mangoes,<br /> Delivered to Your Society</h1>
          <p style={{marginBottom: "0.5rem"}}>
            Naturally ripened Alphonso mangoes sourced directly from trusted farms. 
          </p>
          <p>
            No chemicals. No cold storage. Just pure sweetness and authentic taste.
          </p>

          <div className="btn-group">
            <button className="btn-primary">
              Order Your Box Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
