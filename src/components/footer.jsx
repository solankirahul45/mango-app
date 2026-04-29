// import { Instagram, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">Mango Basket</h3>
          <p style={{ color: '#78716c', fontSize: '1rem', lineHeight: 1.6 }}>
            Fresh from farms. Naturally ripened. Premium experience.
          </p>

          <div className="btn-group">
            <button className="btn-primary">
              Order Your Box Today
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="footer-links-title">Contact Us</h4>
          
          <p>
            
          </p>
        </div>

        <div>
          <h4 className="footer-links-title">Connect</h4>
          <div className="footer-socials">
            {/* <a className="social-icon" href="#">
              <Instagram size={20} color="#57534e" />
            </a>
            <a className="social-icon" href="#">
              <Twitter size={20} color="#57534e" />
            </a>
            <a className="social-icon" href="#">
              <Mail size={20} color="#57534e" />
            </a> */}
          </div>

          <a href="#">Privacy</a>

          <p style={{ color: '#a8a29e', fontSize: '0.75rem' }}>© 2024 Sun-Drenched Mangos. Harvested with Love.</p>
        </div>
      </div>
    </footer>
  );
}
