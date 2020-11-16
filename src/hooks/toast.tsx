import React, { createContext, useContext, useCallback } from 'react';

import { ToastContainer } from '../components';

interface ToastContext {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContext>({} as ToastContext);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('add toast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('remove toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContext => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
};
