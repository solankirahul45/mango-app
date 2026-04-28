import { ArrowRight, ShoppingCart } from 'lucide-react';
import { VARIETIES } from '../constants';

export default function Varieties() {
  return (
    <section className="varieties-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Curated Varieties</h2>
            <p>
              Each mango variety in our collection represents a unique flavor profile, from buttery sweet to citrus-bright.
            </p>
          </div>
          <a className="view-all" href="#">
            View All Varieties <ArrowRight size={16} />
          </a>
        </div>

        <div className="bento-grid">
          {/* Alphonso */}
          <div className="bento-card bento-large">
            <img src={VARIETIES[0].image} alt={VARIETIES[0].name} />
            <div className="bento-overlay"></div>
            <div className="bento-content-abs">
              <span className="bento-tag">{VARIETIES[0].tag}</span>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{VARIETIES[0].name}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1.5rem', maxWidth: '30rem' }}>{VARIETIES[0].description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="bento-price">{VARIETIES[0].price}</span>
                <button className="buy-btn-round">
                  <ShoppingCart size={24} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* Kesar */}
          <div className="bento-card bento-small">
            <img src={VARIETIES[1].image} alt={VARIETIES[1].name} />
            <div className="bento-body">
              <div className="bento-body-header">
                <div>
                  <h3 style={{ fontSize: '1.5rem' }}>{VARIETIES[1].name}</h3>
                  <p style={{ color: '#3b6934', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{VARIETIES[1].caption}</p>
                </div>
                <span style={{ color: '#7c5800', fontWeight: 700, fontSize: '1.5rem' }}>{VARIETIES[1].price}</span>
              </div>
              <p style={{ color: '#514532' }}>{VARIETIES[1].description}</p>
              <button className="add-btn-outline">Add to Cart</button>
            </div>
          </div>

          {/* Langra */}
          <div className="bento-card bento-small">
            <img src={VARIETIES[2].image} alt={VARIETIES[2].name} />
            <div className="bento-body">
              <div className="bento-body-header">
                <div>
                  <h3 style={{ fontSize: '1.5rem' }}>{VARIETIES[2].name}</h3>
                  <p style={{ color: '#3b6934', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{VARIETIES[2].caption}</p>
                </div>
                <span style={{ color: '#7c5800', fontWeight: 700, fontSize: '1.5rem' }}>{VARIETIES[2].price}</span>
              </div>
              <p style={{ color: '#514532' }}>{VARIETIES[2].description}</p>
              <button className="add-btn-outline">Add to Cart</button>
            </div>
          </div>

          {/* Subscription */}
          <div className="subscription-card">
            <span className="sub-tag">THE HARVEST PASS</span>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Seasonal Subscription</h3>
            <p style={{ opacity: 0.8, maxWidth: '28rem', fontSize: '1.125rem' }}>
              Never miss a peak harvest. Get a curated crate of the best seasonal varieties delivered every two weeks throughout the summer.
            </p>
            <button className="white-btn">Learn About Subscriptions</button>
          </div>
        </div>
      </div>
    </section>
  );
}
