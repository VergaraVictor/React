import { type PropsWithChildren, createContext, useState, } from "react";
import { users, type User } from "../data/user-mock.data";

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

        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('autenticated');
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);
    };

    return <UserContext value={{
        authStatus: AuthStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext >;
};

