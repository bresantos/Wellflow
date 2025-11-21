import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { ROLE_ROUTE } from "../../utils/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        if (!email.trim() || !senha.trim()) {
            setError("Informe e-mail e senha.");
            return;
        }

        const user = login(email, senha);

        if (!user) {
            setError("Credenciais inválidas.");
            return;
        }

        const destination =
            location.state?.from?.pathname || ROLE_ROUTE[user.role] || "/login";
        // login
        navigate(destination, { replace: true });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="/logo-wellflow.svg" alt="WellFlow Logo" className="login-logo" />

                <form onSubmit={handleSubmit} className="login-form" aria-describedby={error ? "login-error" : undefined}>
                    <label htmlFor="login-email" className="visually-hidden">E-mail</label>
                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="login-senha" className="visually-hidden">Senha</label>
                    <input
                        id="login-senha"
                        name="senha"
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="login-input"
                        autoComplete="current-password"
                        required
                    />

                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>

                {error && (
                    <p id="login-error" className="login-error" role="alert" aria-live="assertive">
                        {error}
                    </p>
                )}

                <div className="login-test-users">
                    <strong>Usuários de teste:</strong><br />
                    <strong>Gestor:</strong> gestor@teste.com / 123<br />
                    <strong>Funcionário:</strong> func@teste.com / 123
                </div>
            </div>
        </div>
    );
}