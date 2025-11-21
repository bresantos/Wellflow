import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function PrivateRoute({ role, children }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    // validação role
    if (role && user.role !== role) {
        return <Navigate to="/login" replace />;
    }

    return children;
}