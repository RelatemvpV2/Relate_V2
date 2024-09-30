import React from 'react';
import './sidegreybg.css'; // Importing the CSS'
import Relatelogo from '../relatelogo/Relatelogo';
import Text from '../text/Text';
import Footer from '../footer/Footer';

const SideGreyBg = () => {
  return (
    <div className="sidegrey-bg">
      <aside className="sidebar">
      <Relatelogo className="relate-logo-small"/>
        
        <nav className="sidebar-nav">
        <Text type="p" className="my-relations">
        My relations
      </Text>
      <Text type="p" className="myrelations-text">
      James S
      </Text>
      <Text type="p" className="newrelation-text">
      + Add new relation
      
      </Text>
      <Text type="p" className="therapist-text">
      Therapists
      
      </Text>
      <Text type="p" className="therapist-text">
      Settings
      
      </Text>
        </nav>
        <Footer/>
      </aside>
      
    </div>
  );
};

export default SideGreyBg;
