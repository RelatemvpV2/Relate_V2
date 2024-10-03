
import Login from "./features/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import StartQuesPage from "./features/startQuestionare/StartQuesPage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Assessment from "./features/assessment/Assessment";
import LandingPage from "./components/landingPage/LandingPage";


function App() {
  return (

    <Router>
      <Routes>
        {/* Define the route for the login page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />


        {/* Define the route for InviteCreateUser page */}
        <Route path="/userInvite/InviteCreateUser" element={<InviteCreateUser />} />
        <Route path="/startQuestionare/StartQuesPage" element={<StartQuesPage />} />
        <Route path="/assessment/Assessment" element={<Assessment />} />



      </Routes>
    </Router>
    
  );
}

export default App;
