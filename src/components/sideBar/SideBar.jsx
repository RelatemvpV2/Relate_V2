
// import React,{ useState , useEffect } from 'react';
// import '../sidegreybg/sidegreybg.css'; // Importing the CSS'
// import Footer from '../footer/Footer';
// import Text from '../text/Text';
// import RelateLogo from '../relatelogo/Relatelogo';
// import { getPartnerEmail } from '../../services/api/userAuthApi';
// import { useNavigate } from 'react-router-dom';

// import Dashboard from '../dashboard/Dashboard';


// const email = window.localStorage.getItem("email");

// const SideBar = () => {
//   const [showRelations, setShowRelations] = useState(false);
//   const [messages, setMessages] = useState([])

//   const navigate = useNavigate();

//   const toggleRelations = () => {
//     setShowRelations((prevShowRelations) => !prevShowRelations);
//   };

//   const redirectToInvitations = () => {
//     navigate("/dashboard/messages");
//   };

//   const redirectToRelation = (relation) => {
//     navigate("/dashboard")    
//   }

//   const userRelations = {

//     invitationNotSent: ['Sample Person 1'],
//     waitingForResponse: ['Sample Person 2'],
//   };
//   useEffect(() => {
//     const fetchPartnerEmail = async () => {
//       try {
//         const response = await getPartnerEmail();       
//         const receiverNames = response.data
//           .filter((each) => each.reciever_email !== email);

//         setMessages(receiverNames); 
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };
//     fetchPartnerEmail();
//   }, []); 

//   return (
//     <div className="sidegrey-bg">
//       <aside className="sidebar">
//         <RelateLogo className="relate-logo-small" />


//         <nav className="sidebar-nav">
//         <Text type="p" className="therapist-text"
//         onClick={redirectToInvitations}>
//         Me

//           </Text>
//         <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
//   <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
// </svg>
//           <Text
//             type="p"
//             className={`my-relations ${showRelations ? 'active' : ''}`}
//             onClick={toggleRelations}
//           >
//             My relations
//           </Text>
//           {showRelations && (
//             <div className="relations-dropdown">
//               {messages.map((relations, i) => (
//                 <Text key={i} type="p" className="relation-item"
//                 onClick={() => redirectToRelation(relations)}>
//                   {relations.reciever_name}
//                 </Text>
//               ))}
//             </div>
//           )}
//           {userRelations.invitationNotSent.length > 0 && (
//             <div className="category">
//               <Text type="p" className="relation-item active">No inviation sent</Text>
//             </div>
//           )}


//           {userRelations.waitingForResponse.length > 0 && (
//             <div className="category">
//               <Text type="p" className="relation-item active">Waiting for relation

//               </Text>
//             </div>
//           )}
//           <Text type="p" className="myrelations-text">
//             James S
//           </Text>
//           <Text type="p" className="newrelation-text">
//             + Add new relation

//           </Text>
//           <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
//   <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
// </svg>
//           <Text type="p" className="therapist-text">
//             Therapists

//           </Text>
//           <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
//   <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
// </svg>
//           <Text type="p" className="therapist-text">
//             Settings

//           </Text>
//           <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
//   <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
// </svg>
//         </nav>
//         <Footer />
//       </aside>

//     </div>
 
//   );
// };

// export default SideBar;   




import React,{ useState , useEffect } from 'react';
import '../sidegreybg/sidegreybg.css'; // Importing the CSS'
import Footer from '../footer/Footer';
import Text from '../text/Text';
import RelateLogo from '../relatelogo/Relatelogo';
import { getPartnerEmail } from '../../services/api/userAuthApi';
import { useNavigate } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';

const email = window.localStorage.getItem("email");


const SideGreyBg = () => {
  const [showRelations, setShowRelations] = useState(false);
  const [showSubMe, setShowSubMe] = useState(false);



  const [messages, setMessages] = useState([])

  const navigate = useNavigate();

  const toggleRelations = () => {
    setShowRelations((prevShowRelations) => !prevShowRelations);
  };

  const toggleMe = () => {
    setShowSubMe((prevShowMe) => !prevShowMe);
  }

  const redirectToInvitations = () => {
    navigate("/dashboard/messages");
  };

  const redirectToRelation = (relation) => {
    navigate("/dashboard")
  }

  const checkPendingInvitations = messages && messages.filter((msg) => msg.invitation_status === 'pending')


  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);


  useEffect(() => {
        const fetchPartnerEmail = async () => {
          try {
            const response = await getPartnerEmail();       
            // const receiverNames = response.data
            //   .filter((each) => each.reciever_email !== email);
    
            setMessages(response.data); 
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        };
        fetchPartnerEmail();
      }, []); 


  return (
    <div className="sidegrey-bg">
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
                .filter(each => each.invitation_status === "Accepted")
                .map((relations, i) => (
                  <Text key={i} type="p" className="relation-item"
                    onClick={() => redirectToRelation(relations)}>
                    {relations.sender_name}
                  </Text>
                ))}
              {/* {userRelations.invitationNotSent.length > 0 && ( */}
              {(messages && messages.length > 0 && messages.filter(each => each.sender_email === email)) && (

                <div className="category">
                  <Text type="p" className="relation-item active">No new inviation sent</Text>
                </div>
              )}


              {/* {userRelations.waitingForResponse.length > 0 && ( */}
              {(messages && messages.length > 0 && checkPendingInvitations.length > 0) && (

                <div className="category">
                  <Text type="p" className="relation-item active">
                    Waiting for relation
                  </Text>
                </div>
              )}
             
              <Text type="p" className="newrelation-text">
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

    </div>

  );
};


export default SideGreyBg;











