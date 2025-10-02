import { useState, useEffect, createContext, useContext, ReactNode } from "react";

type UserRole = "farmer" | "msme" | "buyer" | "logistics";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: UserRole) => void;
  signup: (name: string, email: string, phone: string, password: string, role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem("agrichain_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string, role?: UserRole) => {
    // Simulate login - in production this would call an API
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split("@")[0],
      email,
      role: role || "farmer",
    };
    localStorage.setItem("agrichain_user", JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (name: string, email: string, phone: string, password: string, role: UserRole) => {
    // Simulate signup
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
    };
    localStorage.setItem("agrichain_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("agrichain_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
