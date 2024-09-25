import React from "react";

import Login from "./features/auth/Login";
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import StartQuesPage from "./features/startQuestionare/StartQuesPage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Assessment from "./features/assessment/Assessment";


function App() {
  return (
    <div className="App">
      <div className="authentication-section">
        {/* <Assessment/> */}
        
        
        <Login />
        {/* <InviteCreateUser/> */}
        {/* <StartQuesPage/> */}

      </div>
    </div>
  );
}

export default App;
