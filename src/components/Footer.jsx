// import { Instagram, Mail, Twitter } from 'lucide-react';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';

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
        
        <div className="contact-us">
          <h4 className="footer-links-title">Contact Us</h4>
          
          <p>
            📍Narottam Park Society, Bilimora, Gujarat - 396321
          </p>

          <p>
            📧 <strong>Email:</strong> support@mangocrown.in
          </p>

          <p>
            💬 <strong>WhatsApp:</strong> +91 98765 43210
          </p>

          <p>
            🥭 <strong>FSSAI Lic. No:</strong> 11526999000123
          </p>
        </div>

        <div className="connect">
          <h4 className="footer-links-title">Connect</h4>
          <div className="footer-socials">
            <a className="social-icon" href="#">
              <img src={Instagram} width={'16px'} />
            </a>
            <a className="social-icon" href="#">
              <img src={Facebook} width={'16px'} />
            </a>
          </div>

          {/* <a href="#">Privacy Policy</a> */}

          <p style={{ color: '#78716c', fontSize: '1rem', marginTop: '20px'  }}>© 2026 Mango Basket. Harvested with Love.</p>
        </div>
      </div>
    </footer>
  );
}
