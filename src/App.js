
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
import Login from "./features/auth/Login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import Dashboard from "./components/dashboard/Dashboard";
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import StartQuesPage from "./features/startQuestionare/StartQuesPage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Assessment from "./features/assessment/Assessment"; 
import LandingPage from "./components/landingPage/LandingPage";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import PopUpComponent from "./components/popUp/PopUpComponent";
import Summary1stUser from "./components/summary/Summary1stUser";
import InvitePartner2 from "./features/userInvite/InvitePartner2";
import WaitingForPartnerResonse1 from "./components/waiting/WaitingForPartnerResponse1";
import ComparedAnswers from "./components/comparedAnswers/ComparedAnswers";
function App() {
  return (

    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        {/* Define the route for the login page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path={`/reset-password`} element={<ResetPassword/>}/>

        <Route path="/popup" element={<PopUpComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Define the route for InviteCreateUser page */}
        <Route path="/userInvite/InviteCreateUser" element={<InviteCreateUser />} />
        <Route path="/startQuestionare/StartQuesPage" element={<StartQuesPage />} />
        <Route path="/assessment/Assessment" element={<Assessment />} />
        <Route path="/level1/yourSummary" element={<Summary1stUser />} />
        <Route path="/level1/invitePartner2" element={<InvitePartner2 />} />
        <Route path="/level1/waitingParnerResponse" element={<WaitingForPartnerResonse1 />} />
        <Route path="/level1/comparedResults" element={<ComparedAnswers/>} /> 

        {/* Define the route for Page not found */}
        <Route
          path="*"
          element={<PageNotFound />}
        />


      </Routes>
    </Router>

  );
}

export default App;
