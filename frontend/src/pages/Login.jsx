import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = login(username, password);

        if (!user) {
            alert("Usuário ou senha incorretos");
            return;
        }

        if (user.role === "gestor") navigate("/gestor");
        else navigate("/funcionario");
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="/logo-wellflow.svg" alt="WellFlow Logo" className="login-logo" />

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />

                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>

                <div className="login-test-users">
                    <strong>Usuários de teste:</strong><br />
                    <strong>Gestor:</strong> gestor / admin<br />
                    <strong>Funcionário:</strong> funcionario / admin
                </div>
            </div>
        </div>
    );
}