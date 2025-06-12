import React, { useState } from 'react';
import { MacbookPro } from './screens/MacbookPro';
import { Homepage } from './screens/Homepage';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'homepage'>('login');

  const handleLogin = () => {
    setCurrentPage('homepage');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  if (currentPage === 'login') {
    return <MacbookPro onLogin={handleLogin} />;
  }

  return <Homepage onLogout={handleLogout} />;
}

export default App;