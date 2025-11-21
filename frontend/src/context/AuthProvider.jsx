import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { findUserByCredentials } from "../utils/auth";

const STORAGE_KEY = 'wf_user';
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            return null;
        }
    });

    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch (_error) {
            // ignore storage failures silently
        }
    }, [user]);

    const login = (email, senha) => {
        // login
        const foundUser = findUserByCredentials(email, senha);
        if (!foundUser) return null;
        const safeUser = {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role,
            displayName: foundUser.displayName
        };
        setUser(safeUser);
        return safeUser;
    };

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const getUser = () => user;
    const isAuthenticated = () => Boolean(user);

    return (
        <AuthContext.Provider value={{ user, login, logout, getUser, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
