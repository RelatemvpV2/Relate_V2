
import React, { useState } from 'react';
import './sidegreybg.css'; // Importing the CSS'
import Relatelogo from '../relatelogo/Relatelogo';

import Text from '../text/Text';
import Footer from '../footer/Footer';

const SideGreyBg = () => {
  const [showRelations, setShowRelations] = useState(false);

  const toggleRelations = () => {
    setShowRelations((prevShowRelations) => !prevShowRelations);
  };

  const userRelations = {

    invitationNotSent: ['Sample Person 1'],
    waitingForResponse: ['Sample Person 2'],
  };
  return (
    <div className="sidegrey-bg">
      <aside className="sidebar">
        <Relatelogo className="relate-logo-small" />


        <nav className="sidebar-nav">
        <Text type="p" className="therapist-text">
        Me

          </Text>
        <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
  <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
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
              <Text type="p" className="relation-item active">James Samuelson</Text>
              <Text type="p" className="relation-item">Second Relation</Text>
              <Text type="p" className="relation-item">Third Relation</Text>
            </div>
          )}
          {userRelations.invitationNotSent.length > 0 && (
            <div className="category">
              <Text type="p" className="relation-item active">No inviation sent</Text>
            </div>
          )}


          {userRelations.waitingForResponse.length > 0 && (
            <div className="category">
              <Text type="p" className="relation-item active">Waiting for relation

              </Text>
            </div>
          )}
          <Text type="p" className="myrelations-text">
            James S
          </Text>
          <Text type="p" className="newrelation-text">
            + Add new relation

          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
  <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
</svg>
          <Text type="p" className="therapist-text">
            Therapists

          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
  <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
</svg>
          <Text type="p" className="therapist-text">
            Settings

          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="2" viewBox="0 0 173 2" fill="none">
  <path d="M0 1H173" stroke="#F9EEE1" stroke-width="0.5"/>
</svg>
        </nav>
        <Footer />
      </aside>

    </div>
  );
};

export default SideGreyBg;
