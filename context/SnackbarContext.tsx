'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import Snackbar from '../app/components/Snackbars/Snackbar';

interface SnackbarContextType {
  showSnackbar: (message: string, state: 'success' | 'error' | 'info' | 'warning') => void;
  clearSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<{ message: string; state: string; key: number } | null>(null);

  const showSnackbar = (message: string, state: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbar({ message, state, key: Date.now()});
  };
  const clearSnackbar = () => {
    setSnackbar(null);
  }
  return (
    <SnackbarContext.Provider value={{ showSnackbar, clearSnackbar }}>
      {snackbar && <Snackbar key={snackbar.key} message={snackbar.message} state={snackbar.state} type='colored' isProgress={true} />}
      {/* <Snackbar message={'snackbar.message'} state='error' type='colored' isProgress={true} /> */}
      {children}
    </SnackbarContext.Provider>
  );
};
