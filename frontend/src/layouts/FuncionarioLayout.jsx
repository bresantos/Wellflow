import { Outlet } from 'react-router-dom';
import HeaderFuncionario from '../components/HeaderFuncionario';
import Footer from '../components/Footer';
import Sidebar from '../components/layout/Sidebar';

export default function FuncionarioLayout() {
    return (
        <div className="app-layout">
            <Sidebar role="funcionario" />

            {/* Main Content com Header e Footer */}
            <div className="layout-main">
                <HeaderFuncionario />

                <main className="main-content">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}