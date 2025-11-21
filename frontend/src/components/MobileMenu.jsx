import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MobileMenu({ open, links, onClose, onLogout, displayName }) {
  if (!open) return null;

  const handleLogout = () => {
    onClose();
    onLogout();
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-overlay" onClick={onClose} aria-hidden="true" />
      <nav className="mobile-menu-panel" aria-label="Menu móvel">
        <button type="button" className="mobile-menu-close" onClick={onClose} aria-label="Fechar menu">
          ✕
        </button>
        <ul style={{ flex: 1 }}>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-user">
          <p className="mobile-user-label">Logado como</p>
          <p className="mobile-user-name">{displayName}</p>
        </div>
        <button onClick={handleLogout} className="btn-logout">Sair</button>
      </nav>
    </div>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  displayName: PropTypes.string
};
