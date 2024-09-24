
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './features/auth/Login'; 
import LanguageSwitcher from './components/LanguageSwitcher'; 
import LandingPage from './components/langingPage/LandingPage';

function App() {
  return (
    <div className="App">
    {/*   <LanguageSwitcher />
      <h1>Welcome to the Authentication Page</h1>
      <div className="authentication-section">
        
      </div> */}
      <Login /> 
           {/* <LandingPage/> */}
          
    </div>
  );
}

export default App;
