import React from 'react';
import { useAuth } from './AuthContext';
import './logout.css'; 

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <button onClick={logout} className="logout-button">
            Log out
        </button>
    );
};

export default LogoutButton;
