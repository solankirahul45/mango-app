import { Search, ShoppingBasket, User } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <a className="nav-logo" href="/">
            Sun-Drenched Mangos
          </a>
          <div className="nav-links">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${link.active ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-actions">
          <button className="nav-icon-btn">
            <Search size={20} color="#57534e" />
          </button>
          <button className="nav-icon-btn">
            <ShoppingBasket size={20} color="#57534e" />
          </button>
          <button className="nav-icon-btn">
            <User size={20} color="#57534e" />
          </button>
        </div>
      </nav>
    </header>
  );
}
