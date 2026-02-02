import { type PropsWithChildren, createContext, useState, } from "react";
import type { User } from "../data/user-mock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'autenticated' | 'not-authenticated';

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null

    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps)


// HOC higher-order component 
export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [AuthStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)

    const handleLogin = (userId: number) => {
        console.log({ userId });
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
    }

    return <UserContext value={{
        authStatus: AuthStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext >;
};

