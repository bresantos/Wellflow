import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

export default function Sidebar({ role = 'funcionario' }) {
  const { user, logout } = useAuth();

  const gestorLinks = [
    { to: '/gestor', label: 'Dashboard' },
    { to: '/gestor/relatorios', label: 'Relatórios' },
    { to: '/gestor/ambiente', label: 'Ambiente' },
    { to: '/gestor/configuracoes', label: 'Configurações' },
  ];

  const funcionarioLinks = [
    { to: '/funcionario', label: 'Início' },
    { to: '/funcionario/formulario', label: 'Formulário Semanal' },
    { to: '/funcionario/ambiente', label: 'Ambiente' },
    { to: '/funcionario/dicas', label: 'Dicas' },
    { to: '/funcionario/historico', label: 'Histórico' },
  ];

  const links = role === 'gestor' ? gestorLinks : funcionarioLinks;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-placeholder" aria-hidden>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="white" fillOpacity="0.2"/>
              <path d="M20 10L25 20H15L20 10Z" fill="white"/>
              <circle cx="20" cy="25" r="5" fill="white"/>
            </svg>
          </div>
        </div>
        <h2 className="sidebar-title">WellFlow</h2>
        <p className="sidebar-subtitle">{role === 'gestor' ? 'Gestão de Bem-estar' : 'Monitoramento de Bem-estar'}</p>
      </div>

      <nav>
        <ul className="sidebar-nav">
          {links.map((item) => (
            <li key={item.to} className="sidebar-nav-item">
              <Link to={item.to} className="sidebar-nav-link">
                <span className="sidebar-nav-icon" aria-hidden>▢</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <p className="user-label">Logado como</p>
          <p className="user-name">{user?.username || (role === 'gestor' ? 'Gestor' : 'Funcionário')}</p>
        </div>
        <button onClick={logout} className="btn-logout">Sair</button>
      </div>
    </aside>
  );
}
