import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getCurrentUser from '../api/getCurrentUser';
import logoutApi from '../api/logout';

import IUser from '../types/user.type';

import { notifyPromise, updateNotify } from '../libs/notifications';

interface AuthContextType {
    isLogged: boolean;
    loading: boolean;
    error?: any;
    user: IUser;
    logout: () => void;
    hasPermission: (permission: string | string[]) => boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: { isLogged: false },
    isLogged: false,
    loading: false,
    logout: () => {},
    hasPermission: () => false,
});

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
    const [user, setUser] = useState<IUser>({});
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(undefined);

    const location = useLocation();

    useEffect(() => {
        if (error) setError(undefined);
    }, [location.pathname]);

    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                setUser(user);
                setIsLogged(user.isLogged);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    function logout() {
        const toastId = notifyPromise('Wylogowywanie...');
        logoutApi()
            .then(() => {
                updateNotify(toastId, 'Wylogowano pomyślnie.', false, { type: 'success' });
                setUser({ isLogged: false });
                setIsLogged(false);
                return;
            })
            .catch((error) => {
                updateNotify(toastId, 'Błąd podczas wylogowywania.', false, { type: 'error' });
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function hasPermission(permission: string | string[]) {
        return true;
    }

    const memoedValue = useMemo(
        () => ({
            user,
            isLogged,
            hasPermission,
            loading,
            error,
            logout,
        }),
        [user, isLogged, loading, error]
    );

    return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
    return useContext(AuthContext);
}
