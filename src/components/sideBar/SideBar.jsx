

import React,{ useState , useEffect } from 'react';
import '../sidegreybg/sidegreybg.css'; // Importing the CSS'
import Footer from '../footer/Footer';
import Text from '../text/Text';
import RelateLogo from '../relatelogo/Relatelogo';
import { getPartnerEmail } from '../../services/api/userAuthApi';
import { useNavigate } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';

const email = localStorage.getItem("email");


const SideGreyBg = () => {
  const [showRelations, setShowRelations] = useState(true);
  const [showSubMe, setShowSubMe] = useState(false);

  const [messages, setMessages] = useState([])

  const navigate = useNavigate();

  const toggleRelations = () => {
    console.log(messages);
    
    setShowRelations((prevShowRelations) => !prevShowRelations);
  };

  const toggleMe = () => {
    navigate("/dashboard/messages")
    setShowSubMe((prevShowMe) => !prevShowMe);
  }

  const redirectToInvitations = () => {
    navigate("/dashboard/messages");
  };

  const redirectToRelation = (relation) => {
    localStorage.setItem("active_relation", JSON.stringify(relation))
    sessionStorage.setItem('current_assesment_id', relation.assessment_id)
    navigate("/dashboard")
    // window.location.reload()
  }

  const redirectToInvite = () => {
    localStorage.removeItem("active_relation")
    navigate("/dashboard")
    // window.location.reload()
  }

  const checkPendingInvitations = messages && messages.filter((msg) => msg.invitation_status === 'pending')

  useEffect(() => {
        const fetchPartnerEmail = async () => {
          try {
            const response = await getPartnerEmail();       
            setMessages(response.data); 
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        };
        fetchPartnerEmail();
      }, []); 


  return (
   
      <aside className="sidebar">
        <RelateLogo className="relate-logo-small" />


        <nav className="sidebar-nav">
          <Text type="p" className={`Me-text ${showSubMe ? 'active' : ''}`}
            onClick={toggleMe}
          >
            -Me-
          </Text>
          {
            showSubMe && (<>
              <Text type='p' className='relation-item' onClick={redirectToInvitations}>Messages</Text>
              <Text type='p' className='relation-item'>Sub Menu</Text>
            </>

            )
          }
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
            <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5" />
          </svg>
          <Text
            type="p"
            className={`my-relations ${showRelations ? 'active' : ''}`}
            onClick={toggleRelations}
          >
            My relations
          </Text>
          {showRelations && (
            <div className="relations-dropdown">
              {messages && messages.length > 0 && messages
                .filter(compatObj => compatObj.invitation_status === "Accepted")
                .map((relations, i) => (
                  <Text key={i} type="p" className="relation-item"
                    onClick={() => redirectToRelation(relations)}>
                     {(email==relations.reciever_email)?relations.sender_name:relations.reciever_name}
                  </Text>
                ))}
              {/* {userRelations.invitationNotSent.length > 0 && ( */}
              {/* {(messages && messages.length > 0 && messages.filter(compatObj => compatObj.sender_email === email)) && (

                <div className="category">
                  <Text type="p" className="relation-item active">No new inviation sent</Text>
                </div>
              )} */}


              {/* {userRelations.waitingForResponse.length > 0 && ( */}
              {(messages && messages.length > 0 && checkPendingInvitations.length > 0) && (

                <div className="category">
                  <Text type="p" className="relation-item active">
                    Waiting for relation
                  </Text>
                </div>
              )}
             
              <Text type="p" className="newrelation-text" onClick={()=> redirectToInvite()}>
                + Add new relation

              </Text>
            </div>
          )}

          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
            <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5" />
          </svg>
          <Text type="p" className="therapist-text">
            Therapists

          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
            <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5" />
          </svg>
          <Text type="p" className="therapist-text">
            Settings

          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
            <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5" />
          </svg>
        </nav>
        <Footer />
      </aside>



  );
};


export default SideGreyBg;











