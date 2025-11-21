import { Outlet } from 'react-router-dom';
import HeaderFuncionario from '../components/Header/HeaderFuncionario';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/layout/Sidebar';

export default function FuncionarioLayout() {
    return (
        <div className="app-layout">
            <Sidebar role="funcionario" />

            {/* Main Content com Header e Footer */}
            <div className="layout-main">
                {/* Header */}
                <HeaderFuncionario />

                {/* Área principal da página */}
                <main className="main-content">
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}