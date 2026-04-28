export default function Story() {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-grid">
          <div className="story-img-wrapper">
            <div className="story-img-card">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSjWa0Pv0FS4zxgzg_glLOB6GTfXS2FuoLsG20yN36YIe8E55bClYgpLRYDM4AIFa9Q5tYvPbixa6HSNK90XPMXGf2n28M2jT_bNJxdQHpinn7ci7JR0EbBaFI6X-aR0Z-IZzf2KLDamOivaQkNa3nDVKutzrmed0ckupHsHGVeEsEtRj7oLJGdEm7Z_bg_P5eLTVHNMTfCP5PMFpt3EF4Ceyqy1gdtJ-Oi-H2-CC9VM_Bg8Ztkz6RirTNHXp87VjIww7uOQF-MPRM" 
                alt="Farmer with mango"
              />
            </div>
            <div className="quote-card">
              <p style={{ fontStyle: 'italic', color: '#514532', marginBottom: '1rem' }}>
                "Our goal isn't just to sell fruit; it's to share the soul of the orchard."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#7c5800', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>M</div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>Malik Orchard</p>
                  <p style={{ fontSize: '0.75rem', color: '#514532', opacity: 0.6 }}>Founding Family</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span style={{ color: '#7c5800', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Our Legacy</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Rooted in Tradition, Grown with Love.</h2>
            <div style={{ color: '#514532', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>For three generations, our family has tended to these trees under the same warm sun. We believe that great flavor starts with respect for the earth.</p>
              <p>Unlike commercial growers, we wait for the mango to tell us when it's ready. By avoiding artificial ripening, we preserve the complex sugars and aromatic oils that make our mangos legendary.</p>
            </div>
            <div className="stats-grid">
              <div>
                <p className="stat-val">100%</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#514532' }}>Natural Ripening</p>
              </div>
              <div>
                <p className="stat-val">342</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#514532' }}>Acres of Heritage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
