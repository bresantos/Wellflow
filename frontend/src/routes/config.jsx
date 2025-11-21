import { Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import DashboardGestor from '../pages/Gestor/DashboardGestor';
import DashboardFuncionario from '../pages/Funcionario/DashboardFuncionario';
import FormularioSemanal from '../pages/Funcionario/FormularioSemanal';
import AmbienteTrabalho from '../pages/Public/AmbienteTrabalho';
import DicasBemEstar from '../pages/Funcionario/DicasBemEstar';
import GestorLayout from '../layouts/GestorLayout';
import FuncionarioLayout from '../layouts/FuncionarioLayout';
import Placeholder from '../components/Placeholder';

const routes = [
  { path: '/', element: <Navigate to="/login" replace />, private: false },
  { path: '/login', element: <Login />, private: false },
  {
    path: '/gestor/*',
    element: <GestorLayout />, 
    private: true,
    role: 'gestor',
    children: [
      { index: true, element: <DashboardGestor /> },
      { path: 'funcionarios', element: <DashboardGestor /> },
      {
        path: 'relatorios',
        element: (
          <Placeholder
            title="Relatórios"
            description="Painel em desenvolvimento para o time de gestão"
          />
        )
      },
      { path: 'ambiente', element: <AmbienteTrabalho /> },
      {
        path: 'configuracoes',
        element: (
          <Placeholder
            title="Configurações"
            description="Ajustes da sua conta e da operação em breve"
          />
        )
      }
    ]
  },
  {
    path: '/funcionario/*',
    element: <FuncionarioLayout />, 
    private: true,
    role: 'funcionario',
    children: [
      { index: true, element: <DashboardFuncionario /> },
      { path: 'formulario', element: <FormularioSemanal /> },
      { path: 'ambiente', element: <AmbienteTrabalho /> },
      { path: 'dicas', element: <DicasBemEstar /> },
      {
        path: 'historico',
        element: (
          <Placeholder
            title="Histórico de Formulários"
            description="Em breve mostramos as entradas enviadas aqui"
          />
        )
      }
    ]
  }
];

export default routes;
