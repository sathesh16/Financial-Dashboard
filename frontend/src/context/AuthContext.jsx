import { createContext, useEffect, useState, } from 'react'

import { getMe } from '../services/authService'

export const AuthContext = createContext()

export function AuthProvider({ children, }) {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    async function loadUser() {
        try {
            const data = await getMe();
            setUser(data.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUser()
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, loading, setUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}