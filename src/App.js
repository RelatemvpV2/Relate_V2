import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { useTranslation } from 'react-i18next';

//Components
import Login from "./features/auth/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from './components/ForgotPassword/ResetPassword'
import Dashboard from "./components/dashboard/Dashboard";
import InviteCreateUser from "./features/userInvite/InviteCreateUser";
import StartQuesPage from "./features/startQuestionare/StartQuesPage";
import Assessment from "./features/assessment/Assessment";
import LandingPage from "./components/landingPage/LandingPage";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import PopUpComponent from "./components/popUp/PopUpComponent";
import Summary1stUser from "./components/summary/Summary1stUser";
import InvitePartner2 from "./features/userInvite/InvitePartner2";
import WaitingForPartnerResonse1 from "./components/waiting/WaitingForPartnerResponse1";
import ComparedAnswers from "./components/comparedAnswers/ComparedAnswers";
import SubscriptionsPage from "./components/subscription/SubscriptionsPage";

import { AuthProvider } from "./components/logout/AuthContext";
import ReceiveInvite from "./components/receiveInvitepage/ReceiveInvite";
import PrivateRoute from "./features/auth/PrivateRoute";
import Settings from "./components/settings/Settings";



function App() {

  const { t, i18n } = useTranslation();

  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<LandingPage />} />

          {/* Define the route for the login page */}
          <Route path="/Login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path={`/reset-password`} element={<ResetPassword />} />
          <Route path="/popup" element={<PopUpComponent />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/messages" element={<ReceiveInvite />} />


            {/* Define the route for InviteCreateUser page */}
            <Route path="/userInvite/InviteCreateUser" element={<InviteCreateUser />} />
            <Route path="/startQuestionare/StartQuesPage" element={<StartQuesPage />} />
            <Route path="/assessment/Assessment" element={<Assessment />} />
            <Route path="/level1/yourSummary" element={<Summary1stUser />} />
            <Route path="/level1/invitePartner2" element={<InvitePartner2 />} />
            <Route path="/level1/waitingParnerResponse" element={<WaitingForPartnerResonse1 />} />
            <Route path="/level1/comparedResults" element={<ComparedAnswers />} />
            <Route path="/level1/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/settings" element={<Settings />} />
          </Route>



          {/* Define the route for Page not found */}
          <Route
            path="*"
            element={<PageNotFound />}
          />


        </Routes>
      </AuthProvider>
    </Router>


  );
}

export default App;
