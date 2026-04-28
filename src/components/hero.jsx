export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          className="hero-img" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmhMWHcWkb4iwx4bioEXyfNhXx04RlGdcaNvA96rWipJHnOxlUWormGzAnxHjFYR1xhh3ruoblUNOpo8980852rgVd5-AcvH-61K_U4yI8_ANiUujO8HXdBnJJ_KFJLTyEYMzHPkPAGHMHoPpTKRpsyjbO551d4inLVqUHi1ifVvJ_bLflwsQN9ER0JkVnDPs-s3BHXIz0D-PT-RRsCWrkD2_E444AGZxLpG8dFM5aOiOw2BWruh6XBRflCiypns_ThJwBTPJWKUbc"
          alt="Lush mango orchard"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="badge">FRESH FROM THE TREE</span>
          <h1>Sun-Kissed Perfection, Delivered.</h1>
          <p>
            Experience the peak of harvest with our artisan-grown mangos. Hand-picked at dawn, shipped at the precise moment of ripeness.
          </p>
          <div className="btn-group">
            <button className="btn-primary">
              Shop Today's Harvest
            </button>
            <button className="btn-secondary">
              Our Varieties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
