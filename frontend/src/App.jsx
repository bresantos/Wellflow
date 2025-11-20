import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Context
import { AuthProvider } from './context/AuthProvider';

// Components

// Pages
import Login from './pages/Login';
import DashboardGestor from './pages/DashboardGestor';
import DashboardFuncionario from './pages/DashboardFuncionario';
import FormularioSemanal from './pages/FormularioSemanal';
import AmbienteTrabalho from './pages/AmbienteTrabalho';
import DicasBemEstar from './pages/DicasBemEstar';

// Layouts
import GestorLayout from './layouts/GestorLayout';
import FuncionarioLayout from './layouts/FuncionarioLayout';

// Routes
import ProtectedRoute from './routes/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rota Pública - Login */}
          <Route path="/" element={<Login />} />

          {/* Rotas do Gestor */}
          <Route
            path="/gestor"
            element={
              <ProtectedRoute role="gestor">
                <GestorLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardGestor />} />
            <Route path="funcionarios" element={<DashboardGestor />} />
            <Route path="relatorios" element={
              <div className="panel-center-small">
                <h2>Relatórios</h2>
                <p className="muted-small mt-md">
                  Página em desenvolvimento...
                </p>
              </div>
            } />
            <Route path="ambiente" element={<AmbienteTrabalho />} />
            <Route path="configuracoes" element={
              <div className="panel-center-small">
                <h2>Configurações</h2>
                <p className="muted-small mt-md">
                  Página em desenvolvimento...
                </p>
              </div>
            } />
          </Route>

          {/* Rotas do Funcionário */}
          <Route
            path="/funcionario"
            element={
              <ProtectedRoute role="funcionario">
                <FuncionarioLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardFuncionario />} />
            <Route path="formulario" element={<FormularioSemanal />} />
            <Route path="ambiente" element={<AmbienteTrabalho />} />
            <Route path="dicas" element={<DicasBemEstar />} />
            <Route path="historico" element={
              <div className="panel-center-small">
                <h2>Histórico de Formulários</h2>
                <p className="muted-small mt-md">
                  Página em desenvolvimento...
                </p>
              </div>
            } />
          </Route>

          {/* Rota 404 - Não Encontrado */}
          <Route path="*" element={
            <div className="center-screen">
              <h1 className="error-code">404</h1>
              <h2 className="error-subtitle">Página não encontrada</h2>
              <p className="muted-small mb-xl">A página que você está procurando não existe.</p>
              <Link to="/" className="btn-link">Voltar para Login</Link>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}