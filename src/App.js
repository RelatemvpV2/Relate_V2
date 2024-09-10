
import React from 'react';

import Login from './features/auth/Login'; 
import LanguageSwitcher from './components/LanguageSwitcher'; 

function App() {
   
  return (
    <div className="App">
      <LanguageSwitcher />
      

      <h1>Welcome to the Authentication Page</h1>
      <div className="authentication-section">
        <Login /> 

      </div>
    </div>
  );
}

export default App;
