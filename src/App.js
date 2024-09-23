import React from "react";

import Login from "./features/auth/Login";
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import StartQuesPage from "./features/startQuestionare/StartQuesPage";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className="App">
      <div className="authentication-section">
        {/* <Login /> */}
        {/* <InviteCreateUser/> */}
        <StartQuesPage/>

      </div>
    </div>
  );
}

export default App;
