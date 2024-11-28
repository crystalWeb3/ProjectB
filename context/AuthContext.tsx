"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "./SnackbarContext";
import { useSpinner } from "./SpinnerContext";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  user: { [key: string]: any } | null;
  token: string | null;
}

interface AuthContextProps extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({ user: null, token: null });
  const { showSnackbar } = useSnackbar();
  const { toggleLoading } = useSpinner();

  const isTokenExpired = (token: string) => {
    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      return Date.now() >= exp * 1000;
    } catch (e) {
      return true;
    }
  };
  

  useEffect(() => {
    const initializeAuth = async () => {
      toggleLoading(true)
      try {
        const token = localStorage.getItem("authToken");
        const user = localStorage.getItem("authUser");
        if (token && !isTokenExpired(token)) {
          setAuthState({ user: JSON.parse(user || "{}"), token });
        } else {
          localStorage.clear();
          setAuthState({ user: null, token: null });
        }
      } catch(err) {
        console.error("Failed to initialize auth:", err);
        localStorage.clear();
        setAuthState({ user: null, token: null });
      } finally {
        toggleLoading(false)
      }
    }
    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    toggleLoading(true)
    try {
      const data = await api("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("authUser", JSON.stringify(data.user));

      setAuthState({ user: data.user, token: data.token });
      showSnackbar("Login successful!", "success");
      router.push("/dashboard/order");
    } catch (error : any) {
      showSnackbar(error.message || "Login Failed", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    toggleLoading(true)
    try {
      await api("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      showSnackbar("Registration successful!", "success");
      router.push("/auth/login");
    } catch (error:any) {
      showSnackbar(error.message || "Registration failed", "error");
    } finally {
      toggleLoading(false)
    }
  };

  const logout = () => {
    localStorage.clear();
    setAuthState({ user: null, token: null });
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const api = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Unexpected API error");
  }
  return response.json();
};
