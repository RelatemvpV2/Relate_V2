import React from "react";

import Login from "./features/auth/Login";
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className="App">
      <div className="authentication-section">
        <Login />
        <InviteCreateUser/>
      </div>
    </div>
  );
}

export default App;
