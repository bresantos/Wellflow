import { useAuth } from '../../context/AuthProvider';
import HeaderCommon from './HeaderCommon';
import { getDisplayName } from '../../utils/auth';
import { NAV_LINKS } from '../../routes/navigation';

export default function HeaderFuncionario() {
  const { user, logout } = useAuth();

  const dadosFuncionario = {
    nome: getDisplayName(user) || 'Ana Silva',
    cargo: 'Operadora de Caixa',
    avatar: 'https://i.pravatar.cc/150?img=1',
    estresseProfissional: 2.8,
    estressePessoal: 2.5
  };

  const notifications = [
    { id: 1, titulo: 'Formulário Semanal Disponível', descricao: 'Não se esqueça de preencher seu formulário até sexta-feira.', data: '2 horas atrás', read: false },
    { id: 2, titulo: 'Ambiente Atualizado', descricao: 'As condições do ambiente foram atualizadas.', data: '1 dia atrás', read: true },
    { id: 3, titulo: 'Nova Dica de Bem-estar', descricao: 'Confira nossas novas dicas para melhorar sua qualidade de vida.', data: '3 dias atrás', read: true }
  ];

  const metrics = (
    <div className="header-metrics-inner">
      <div className="header-metric">
        <span className="metric-label">Estresse Profissional</span>
        <span className="metric-value">{dadosFuncionario.estresseProfissional}</span>
      </div>
      <div className="header-metric">
        <span className="metric-label">Estresse Pessoal</span>
        <span className="metric-value">{dadosFuncionario.estressePessoal}</span>
      </div>
    </div>
  );

  return (
    <HeaderCommon
      nome={dadosFuncionario.nome}
      cargo={dadosFuncionario.cargo}
      avatar={dadosFuncionario.avatar}
      navLinks={NAV_LINKS.funcionario}
      metrics={metrics}
      notifications={notifications}
      onLogout={logout}
    />
  );
}