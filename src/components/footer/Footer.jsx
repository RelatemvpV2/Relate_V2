import React from 'react';
import './footer.css'; // Make sure to create this CSS file for styling
import Text from '../text/Text';

import { useAuth } from '../../components/logout/AuthContext';



const Footer = () => {

    const { logout } = useAuth();

    return (
        <div className="footer">
            <Text 
                type="a" 
                className="logout-link" 
                href="#"
                onClick={logout} 
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
