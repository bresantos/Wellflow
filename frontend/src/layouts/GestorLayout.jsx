import { Outlet } from 'react-router-dom';
import HeaderGestor from '../components/Header/HeaderGestor';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/layout/Sidebar';

export default function GestorLayout() {
    return (
        <div className="app-layout">
            <Sidebar role="gestor" />

            {/* Main Content com Header e Footer */}
            <div className="layout-main">
                {/* Header */}
                <HeaderGestor />

                {/* Área principal da página */}
                <main className="main-content" >
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}