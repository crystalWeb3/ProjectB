"use client";  
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";  

interface SpinnerState {
  isLoading: boolean;
}

interface SpinnerContextProps extends SpinnerState {
  toggleLoading: (isShow: boolean) => void;
}

const SpinnerContext = createContext<SpinnerContextProps | undefined>(undefined);

export const SpinnerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <SpinnerContext.Provider 
      value={{ 
        isLoading, toggleLoading: setIsLoading
      }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinner = (): SpinnerContextProps => {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error("useSpinner must be used within an SpinnerProvider");
  }
  return context;
};
