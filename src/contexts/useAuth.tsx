import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import getCurrentUser from '../api/getCurrentUser';
import logoutApi from '../api/logout';

import IUser from '../types/user.type';

import { notifyPromise, updateNotify } from '../libs/notifications';
import Config from '../constants/config';

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
    const navigate = useNavigate();

    useEffect(() => {
        if (error) setError(undefined);
    }, [location.pathname]);

    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                setUser(user);
                setIsLogged(user.isLogged);

                console.log(user.isLogged);

                if (!user.isLogged) {
                    window.location.href = `${Config.MAIN_PAGE_URL}?error=not_logged`;
                    return;
                }

                if (!user.isAdmin && !user.isTeacher) {
                    window.location.href = `${Config.MAIN_PAGE_URL}?error=insufficient_permissions`;
                    return;
                }
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
                window.location.href = Config.MAIN_PAGE_URL;
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
