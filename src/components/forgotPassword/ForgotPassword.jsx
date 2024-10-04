import React, { useState } from 'react';

import InputComponent from '../inputs/InputComponent';
import Text from '../text/Text';
import Button from '../button/Button';

import '../../features/auth/login.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")

    const handleResetPwd = (email) => {
        console.log("Reset token shared to your email", email)
        
    }

    return (
        <div className='logininputs-container'>
        <form onSubmit={handleResetPwd}>
           
            <InputComponent
                className="logininput-box"
                type="email"
                placeholder="Email"
                value={email} // Bind the value to the state
                onChange={(e) => setEmail(e.target.value)} // Update the state on change
                required
            />
            <Button
                className="loginpage-button"
                type="submit"
            >
                Reset Passward
            </Button>
        </form>
        </div>
    )
}




export default ForgotPassword