import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

export default function DashboardFuncionario() {
    const { user } = useAuth();

    return (
        <div className="fade-in">
            <div className="page-header">
                <h1 className="page-title">Bem-vindo ao WellFlow</h1>
                <p className="page-subtitle">Seu espaço para monitoramento de bem-estar</p>
            </div>

            {/* Cards de Ação Principal */}
            <div className="grid grid-3 mb-xl">
                <Link to="/funcionario/formulario" className="link-no-underline">
                    <div className="card card-clickable">
                        <div className="metric-icon metric-icon--center">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="card-title text-center">Formulário Semanal</h3>
                        <p className="text-muted-center">
                            Preencha sua avaliação semanal de bem-estar
                        </p>
                    </div>
                </Link>

                <Link to="/funcionario/ambiente" className="link-no-underline">
                    <div className="card card-clickable">
                        <div className="metric-icon metric-icon--center metric-icon--info">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        <h3 className="card-title text-center">Ambiente</h3>
                        <p className="text-muted-center">
                            Veja as condições do ambiente de trabalho
                        </p>
                    </div>
                </Link>

                <Link to="/funcionario/dicas" className="link-no-underline">
                    <div className="card card-clickable">
                        <div className="metric-icon metric-icon--center metric-icon--warning">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="card-title text-center">Dicas</h3>
                        <p className="text-muted-center">
                            Dicas para melhorar seu bem-estar
                        </p>
                    </div>
                </Link>
            </div>

            {/* Seções Informativas */}
            <div className="grid grid-2 mb-xl">
                <div className="card">
                    <h3 className="card-title card-title--primary">
                        Por que preencher o formulário?
                    </h3>
                    <ul className="tip-list">
                        <li>Ajuda a identificar fontes de estresse</li>
                        <li>Permite que gestores melhorem o ambiente</li>
                        <li>Contribui para seu bem-estar</li>
                        <li>Dados confidenciais e seguros</li>
                    </ul>
                </div>

                <div className="card">
                    <h3 className="card-title card-title--primary">
                        Suas metas semanais
                    </h3>
                    <ul className="tip-list">
                        <li>Preencher formulário até sexta-feira</li>
                        <li>Verificar ambiente diariamente</li>
                        <li>Aplicar dicas de bem-estar</li>
                        <li>Comunicar preocupações ao gestor</li>
                    </ul>
                </div>
            </div>

            {/* Status Rápido */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Status do Ambiente Atual</h3>
                    </div>
                    <div className="grid grid-3">
                        <div className="center-block">
                            <div className="metric-icon metric-icon--small">🌡️</div>
                            <div className="metric-label">Temperatura</div>
                            <div className="metric-value metric-value--large">23.5°C</div>
                            <span className="metric-status ideal">Ideal</span>
                        </div>
                        <div className="center-block">
                            <div className="metric-icon metric-icon--small">💧</div>
                            <div className="metric-label">Umidade</div>
                            <div className="metric-value metric-value--large">65%</div>
                            <span className="metric-status good">Bom</span>
                        </div>
                        <div className="center-block">
                            <div className="metric-icon metric-icon--small">💨</div>
                            <div className="metric-label">Qualidade do Ar</div>
                            <div className="metric-value metric-value--large">85%</div>
                            <span className="metric-status excellent">Excelente</span>
                        </div>
                    </div>
                </div>

            {/* Equipe de Suporte (Mock) */}
            <div className="card mt-xl">
                <div className="card-header">
                    <h3 className="card-title">Equipe de Suporte</h3>
                    <p className="card-subtitle">Entre em contato se precisar de ajuda</p>
                </div>
                <div className="grid grid-3">
                    <div className="center-block">
                        <img src="https://i.pravatar.cc/150?img=68" alt="João Silva" className="employee-avatar employee-avatar--sm" />
                        <div className="employee-name employee-name--sm">João Silva</div>
                        <div className="employee-role employee-role--sm">RH</div>
                        <div className="muted-small notif-icons">🔔 🔔</div>
                    </div>
                    <div className="center-block">
                        <img src="https://i.pravatar.cc/150?img=20" alt="Maria Santos" className="employee-avatar employee-avatar--sm" />
                        <div className="employee-name employee-name--sm">Maria Santos</div>
                        <div className="employee-role employee-role--sm">Psicóloga</div>
                        <div className="muted-small notif-icons">🔔 🔔</div>
                    </div>
                    <div className="center-block">
                        <img src="https://i.pravatar.cc/150?img=15" alt="Pedro Costa" className="employee-avatar employee-avatar--sm" />
                        <div className="employee-name employee-name--sm">Pedro Costa</div>
                        <div className="employee-role employee-role--sm">Gestor</div>
                        <div className="muted-small notif-icons">🔔 🔔</div>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="footer-note">Desenvolvido por Equipe WellFlow 2025</div>
        </div>
    );
}