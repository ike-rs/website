import { createContext, useContext } from 'react';
import { User } from '../types';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

type AuthContextType = {
  loading: boolean;
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  loading: true,
  user: null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({
  children,
}: { children: React.ReactNode }) {
  const { data, error, isLoading } = useSWR('/users/me', fetcher);

  return (
    <AuthContext.Provider value={{ loading: isLoading, user: data }}>
      {children}
    </AuthContext.Provider>
  );
}
