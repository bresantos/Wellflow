import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import HeaderGestor from '../components/HeaderGestor';
import Footer from '../components/Footer';
import Sidebar from '../components/layout/Sidebar';

export default function GestorLayout() {
    const { user, logout } = useAuth();

    return (
        <div className="app-layout">
            <Sidebar role="gestor" />

            {/* Main Content com Header e Footer */}
            <div className="layout-main">
                <HeaderGestor />

                <main className="main-content" >
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}