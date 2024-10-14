
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
import Login from "./features/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import StartQuesPage from "./features/startQuestionare/StartQuesPage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Assessment from "./features/assessment/Assessment";
import LandingPage from "./components/landingPage/LandingPage";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import ForgotPassword from "./components/forgotPassword/ForgotPassword"
import PopUpComponent from "./components/popUp/PopUpComponent";


function App() {
  return (

    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* Define the route for the login page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/popup" element={<PopUpComponent/>}/>

        <Route path="/dashboard" element={<Dashboard/>}/>


        {/* Define the route for InviteCreateUser page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/userInvite/InviteCreateUser" element={<InviteCreateUser />} />
        <Route path="/startQuestionare/StartQuesPage" element={<StartQuesPage />} />
        <Route path="/assessment/Assessment" element={<Assessment />} />
        

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
