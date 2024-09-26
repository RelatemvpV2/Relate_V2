import React from 'react';
import './footer.css'; // Make sure to create this CSS file for styling
import Text from '../text/Text';

const Footer = () => {
    return (
        <div className="footer">
            <Text 
                type="a" 
                className="logout-link" 
                href="#"
            >
                Log out
            </Text>
            <Text 
                type="p" 
                className="logged-in-text"
            >
                Logged in as <br /> Firstname Lastname
            </Text>
        </div>
    );
};

export default Footer;
