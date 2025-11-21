import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'sonner';
import './styles/global.css';

// Routes
import PrivateRoute from './routes/PrivateRoute';
import routes from './routes/config.jsx';

// Components
import Placeholder from './components/Placeholder';

function wrapRoute(route) {
  const element = route.private ? (
    <PrivateRoute role={route.role}>{route.element}</PrivateRoute>
  ) : (
    route.element
  );

  if (!route.children) {
    return <Route path={route.path} element={element} key={route.path} />;
  }

  return (
    <Route path={route.path} element={element} key={route.path}>
      {route.children.map((child) => (
        <Route
          key={`${route.path}-${child.path ?? 'index'}`}
          path={child.path}
          index={child.index}
          element={child.element}
        />
      ))}
    </Route>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        {routes.map((route) => wrapRoute(route))}
        <Route
          path="*"
          element={
            <div className="center-screen">
              <Placeholder
                title="404 — Página não encontrada"
                description="Siga para o login e tente novamente."
              />
              <Link to="/login" className="btn-link mt-lg">
                Voltar para Login
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}