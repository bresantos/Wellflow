import { useState } from 'react';
import { IconBell } from '@tabler/icons-react';
import NotificationDropdown from '../ui/NotificationDropdown';
import MobileMenu from '../MobileMenu';
import PropTypes from 'prop-types';

export default function HeaderCommon({ nome, cargo, avatar, metrics = null, notifications = [], navLinks = [], onLogout }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-user">
          <img src={avatar} alt={nome} className="header-avatar" />
          <div>
            <div className="header-name">{nome}</div>
            <div className="header-role">{cargo}</div>
          </div>
        </div>

        <div className="header-actions">
          <div className="header-metrics">{metrics}</div>

          <div className="notif-area">
            <button
              className="notif-button"
              onClick={() => setNotifOpen(!notifOpen)}
              aria-expanded={notifOpen}
              aria-label="Notificações"
            >
              <IconBell size={22} stroke={2} className="notif-icon" />
              {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
            </button>

            <NotificationDropdown open={notifOpen} notifications={notifications} onClose={() => setNotifOpen(false)} />
          </div>

          <button
            className="header-menu-button"
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>
      <MobileMenu open={isMenuOpen} links={navLinks} onClose={() => setIsMenuOpen(false)} onLogout={onLogout} displayName={nome} />
    </header>
  );
}

HeaderCommon.propTypes = {
  nome: PropTypes.string,
  cargo: PropTypes.string,
  avatar: PropTypes.string,
  metrics: PropTypes.node,
  notifications: PropTypes.array,
  navLinks: PropTypes.array,
  onLogout: PropTypes.func.isRequired
};
