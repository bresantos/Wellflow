import { useAuth } from '../context/AuthProvider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default function DashboardGestor() {
    const { user } = useAuth();

    // Dados mock dos funcionários
    const funcionarios = [
        {
            id: 1,
            nome: "Ana Cal_1",
            avatar: "https://i.pravatar.cc/150?img=1",
            cargo: "Caixa",
            estressePessoal: 2,
            estresseProfissional: 3
        },
        {
            id: 2,
            nome: "Beatriz Cal_2",
            avatar: "https://i.pravatar.cc/150?img=5",
            cargo: "Caixa",
            estressePessoal: 4,
            estresseProfissional: 5
        },
        {
            id: 3,
            nome: "Carlos Cha_1",
            avatar: "https://i.pravatar.cc/150?img=12",
            cargo: "Chapa",
            estressePessoal: 5,
            estresseProfissional: 5
        },
        {
            id: 4,
            nome: "Fernanda Cha_2",
            avatar: "https://i.pravatar.cc/150?img=9",
            cargo: "Chapa",
            estressePessoal: 3,
            estresseProfissional: 2
        },
        {
            id: 5,
            nome: "Fernanda Cha_3",
            avatar: "https://i.pravatar.cc/150?img=10",
            cargo: "Chapa",
            estressePessoal: 3,
            estresseProfissional: 3
        },
        {
            id: 6,
            nome: "Juliana Mon_1",
            avatar: "https://i.pravatar.cc/150?img=24",
            cargo: "Montagem de pedidos",
            estressePessoal: 2,
            estresseProfissional: 1
        },
        {
            id: 7,
            nome: "Ana Mon_2",
            avatar: "https://i.pravatar.cc/150?img=27",
            cargo: "Montagem de pedidos",
            estressePessoal: 3,
            estresseProfissional: 3
        },
        {
            id: 8,
            nome: "Lucas Sob_1",
            avatar: "https://i.pravatar.cc/150?img=33",
            cargo: "Sobremesa",
            estressePessoal: 1,
            estresseProfissional: 1
        }
    ];

    // Calcula a porcentagem de estresse (escala 1-5 para 0-100%)
    const calcularPorcentagem = (valor) => (valor / 5) * 100;

    return (
        <div className="fade-in">
            <div className="page-header">
                <h1 className="page-title">Dashboard Gestor</h1>
                <p className="page-subtitle">Visão geral da equipe e níveis de estresse</p>
            </div>

            {/* Cards de Resumo */}
            <div className="grid grid-3 mb-xl">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Funcionários</h3>
                            <p className="card-subtitle">Total ativo</p>
                        </div>
                        <div className="metric-icon metric-icon--center">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="metric-value">{funcionarios.length}</div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Alertas</h3>
                            <p className="card-subtitle">Requerem atenção</p>
                        </div>
                        <div className="metric-icon metric-icon--center metric-icon--danger">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                    <div className="metric-value">2</div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Estresse Médio</h3>
                            <p className="card-subtitle">Equipe geral</p>
                        </div>
                        <div className="metric-icon metric-icon--center metric-icon--warning">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="metric-value">2.9</div>
                </div>
            </div>

            {/* Lista de Funcionários */}
            <div className="card mb-xl">
                <div className="card-header">
                    <div>
                        <h2 className="card-title">Funcionários</h2>
                        <p className="card-subtitle">Níveis de estresse individual</p>
                    </div>
                </div>
                    <div className="grid grid-4">
                    {funcionarios.map((funcionario) => (
                        <div key={funcionario.id} className="employee-card center-block">
                            <img src={funcionario.avatar} alt={funcionario.nome} className="employee-avatar employee-avatar--sm" />
                            <h3 className="employee-name">{funcionario.nome}</h3>
                            <p className="employee-role">{funcionario.cargo}</p>
                            
                            <div className="stress-bars">
                                <div className="stress-bar">
                                    <span className="stress-bar-label">Estresse Pessoal</span>
                                    <div className="stress-bar-track">
                                        <div 
                                            className="stress-bar-fill" 
                                            style={{ width: `${calcularPorcentagem(funcionario.estressePessoal)}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="stress-bar">
                                    <span className="stress-bar-label">Estresse Profissional</span>
                                    <div className="stress-bar-track">
                                        <div 
                                            className="stress-bar-fill" 
                                            style={{ width: `${calcularPorcentagem(funcionario.estresseProfissional)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Informações Adicionais */}
            <div className="alert alert-info">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <strong>Dica:</strong> Funcionários com níveis de estresse acima de 4 requerem atenção especial. Considere conversar individualmente para identificar causas e possíveis soluções.
                </div>
            </div>
        </div>
    );

    

    
}