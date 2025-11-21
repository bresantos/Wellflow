import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { getDisplayName } from '../../utils/auth';
import { NAV_LINKS } from '../../routes/navigation';
import PropTypes from 'prop-types';
import { IconHome, IconListCheck, IconWind, IconBulb, IconHistory, IconClipboardText, IconSettingsCheck } from '@tabler/icons-react';

export default function Sidebar({ role = 'funcionario' }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const getIcon = (to) => {
    if (to.includes('/funcionario')) {
      if (to.endsWith('/formulario')) return <IconListCheck stroke={2} />;
      if (to.endsWith('/ambiente')) return <IconWind stroke={2} />;
      if (to.endsWith('/dicas')) return <IconBulb stroke={2} />;
      if (to.endsWith('/historico')) return <IconHistory stroke={2} />;
      return <IconHome stroke={2} />; // Início
    }
    if (to.includes('/gestor')) {
      if (to.endsWith('/relatorios')) return <IconClipboardText stroke={2} />;
      if (to.endsWith('/ambiente')) return <IconWind stroke={2} />;
      if (to.endsWith('/configuracoes')) return <IconSettingsCheck stroke={2} />;
      return <IconHome stroke={2} />; // Dashboard
    }
    return <span aria-hidden>▢</span>;
  };

  const links = NAV_LINKS[role] ?? [];
  const fallbackName = role === 'gestor' ? 'Gestor' : 'Funcionário';
  const displayName = user ? getDisplayName(user) : fallbackName;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="/logo-wellflow-branco-transparente.png" alt="WellFlow Logo" className="sidebar-logo-img" />
        </div>
        <p className="sidebar-subtitle">{role === 'gestor' ? 'Gestão de Bem-estar' : 'Monitoramento de Bem-estar'}</p>
      </div>

      <nav aria-label="Menu principal">
        <ul className="sidebar-nav">
          {links.map((item) => (
            <li key={item.to} className="sidebar-nav-item">
              <Link to={item.to} className="sidebar-nav-link">
                <span className="sidebar-nav-icon" aria-hidden>
                  {getIcon(item.to)}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <p className="user-label">Logado como</p>
          <p className="user-name">{displayName}</p>
        </div>
        <button onClick={handleLogout} className="btn-logout">Sair</button>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  role: PropTypes.oneOf(['gestor', 'funcionario'])
};
