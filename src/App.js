import React from "react";

import Login from "./features/auth/Login";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className="App">
      <div className="authentication-section">
        <Login />
      </div>
    </div>
  );
}

export default App;
