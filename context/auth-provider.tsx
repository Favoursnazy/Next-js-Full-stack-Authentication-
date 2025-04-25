"use client";
import useAuth from "@/hooks/use-auth";
import React, { useContext } from "react";

type UserType = {
  name: string;
  email: string;
  isemailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  userPreference: {
    enable2FA: boolean;
  };
};

type AuthContextType = {
  user?: UserType;
  error?: any;
  isLoading?: boolean;
  isFetching: boolean;
  refetch: () => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, isFetching, error, isLoading, refetch } = useAuth();

  const user = data?.data?.user;

  return (
    <AuthContext.Provider
      value={{ user, error, isLoading, isFetching, refetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
