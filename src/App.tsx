import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import { ToastContainer } from './components';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
