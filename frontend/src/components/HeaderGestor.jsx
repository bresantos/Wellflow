import { useAuth } from '../context/AuthProvider';
import HeaderCommon from './HeaderCommon';

export default function HeaderGestor() {
  const { user } = useAuth();

  const dadosGestor = {
    nome: user?.username || 'Marcos Silva',
    cargo: 'Gestor Operacional',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };

  const funcionarios = [
    { id: 1, nome: 'Ana Cal_1', estresseProfissional: 3, estressePessoal: 2 },
    { id: 2, nome: 'Beatriz Cal_2', estresseProfissional: 5, estressePessoal: 4 },
    { id: 3, nome: 'Carlos Cha_1', estresseProfissional: 5, estressePessoal: 5 },
    { id: 4, nome: 'Fernanda Cha_2', estresseProfissional: 2, estressePessoal: 3 },
    { id: 5, nome: 'Fernanda Cha_3', estresseProfissional: 3, estressePessoal: 3 },
    { id: 6, nome: 'Juliana Mon_1', estresseProfissional: 1, estressePessoal: 2 },
    { id: 7, nome: 'Ana Mon_2', estresseProfissional: 3, estressePessoal: 3 },
    { id: 8, nome: 'Lucas Sob_1', estresseProfissional: 1, estressePessoal: 1 }
  ];

  const calcularMedia = (tipo) => {
    const soma = funcionarios.reduce((acc, func) => acc + (tipo === 'profissional' ? func.estresseProfissional : func.estressePessoal), 0);
    return (soma / funcionarios.length).toFixed(1);
  };

  const mediaProfissional = calcularMedia('profissional');
  const mediaPessoal = calcularMedia('pessoal');

  const notifications = [
    { id: 1, titulo: '⚠️ Alerta de Estresse Alto', descricao: 'Carlos (Chapa) está com nível de estresse 5/5 há 2 semanas consecutivas.', data: '30 minutos atrás', read: false },
    { id: 2, titulo: '📋 Formulários Pendentes', descricao: '2 funcionários ainda não preencheram o formulário desta semana.', data: '2 horas atrás', read: false },
    { id: 3, titulo: '📊 Relatório Semanal Disponível', descricao: 'O relatório semanal da equipe já está disponível para consulta.', data: '1 dia atrás', read: true },
    { id: 4, titulo: '✅ Meta Alcançada', descricao: 'Ambiente de trabalho mantém padrões ideais por 30 dias.', data: '2 dias atrás', read: true }
  ];

  const metrics = (
    <div className="header-metrics-inner">
      <div className="header-metric">
        <span className="metric-label">Estresse Profissional (Média)</span>
        <span className="metric-value">{mediaProfissional}</span>
      </div>
      <div className="header-metric">
        <span className="metric-label">Estresse Pessoal (Média)</span>
        <span className="metric-value">{mediaPessoal}</span>
      </div>
    </div>
  );

  return (
    <HeaderCommon
      nome={dadosGestor.nome}
      cargo={dadosGestor.cargo}
      avatar={dadosGestor.avatar}
      metrics={metrics}
      notifications={notifications}
    />
  );
}