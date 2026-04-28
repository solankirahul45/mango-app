import { Instagram, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">Sun-Drenched Mangos</h3>
          <p style={{ color: '#78716c', fontSize: '1rem', lineHeight: 1.6 }}>
            Cultivating the finest tropical delicacies for the discerning palate. From our family orchard to your table.
          </p>
        </div>
        
        <div>
          <h4 className="footer-links-title">Experience</h4>
          <ul className="footer-link-list">
            <li className="footer-link-item"><a href="#">Varieties</a></li>
            <li className="footer-link-item"><a href="#">Recipes</a></li>
            <li className="footer-link-item"><a href="#">Bulk Orders</a></li>
            <li className="footer-link-item"><a href="#">Gifts</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-links-title">Policies</h4>
          <ul className="footer-link-list">
            <li className="footer-link-item"><a href="#">Sustainability</a></li>
            <li className="footer-link-item"><a href="#">Shipping Policy</a></li>
            <li className="footer-link-item"><a href="#">Privacy</a></li>
            <li className="footer-link-item"><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-links-title">Connect</h4>
          <div className="footer-socials">
            <a className="social-icon" href="#">
              <Instagram size={20} color="#57534e" />
            </a>
            <a className="social-icon" href="#">
              <Twitter size={20} color="#57534e" />
            </a>
            <a className="social-icon" href="#">
              <Mail size={20} color="#57534e" />
            </a>
          </div>
          <p style={{ color: '#a8a29e', fontSize: '0.75rem' }}>© 2024 Sun-Drenched Mangos. Harvested with Love.</p>
        </div>
      </div>
    </footer>
  );
}
