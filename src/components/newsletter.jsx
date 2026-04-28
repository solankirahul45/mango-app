export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div style={{ maxWidth: '40rem', position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Join the Harvest Club</h2>
            <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2.5rem' }}>
              Sign up for early access to the Alphonso season, exclusive recipes, and 10% off your first crate.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="newsletter-input"
                placeholder="Your email address" 
                type="email"
                required
              />
              <button 
                className="newsletter-btn"
                type="submit"
              >
                Subscribe Now
              </button>
            </form>
            <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', opacity: 0.7 }}>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
