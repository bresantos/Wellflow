import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const raw = localStorage.getItem('wf_user');
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    });

    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem('wf_user', JSON.stringify(user));
            } else {
                localStorage.removeItem('wf_user');
            }
        } catch (e) {
            // ignore storage errors
        }
    }, [user]);

    const login = (username, password) => {
        // Base de usuários de teste
        const users = [
            {
                username: "gestor",
                password: "admin",
                role: "gestor"
            },
            {
                username: "funcionario",
                password: "admin",
                role: "funcionario"
            }
        ];

        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            // avoid storing password in localStorage
            const safeUser = { username: foundUser.username, role: foundUser.role };
            setUser(safeUser);
            return safeUser;
        }

        return null;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
