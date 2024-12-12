import React, { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import { useNavigate } from "react-router-dom";
import { forgotPassword } from '../../services/api/userAuthApi';

//js
import { forgotPasswordApiFunc } from "../../utils/userApi";
//components
import Navbar from '../Navbar/Navbar'
import Text from '../text/Text'
import GreyBackground from '../greybackground/Greybackground'
import MainContainer from '../maincontainer/Maincontainer'
import InputComponent from '../inputs/InputComponent'
import Button from '../button/Button'
import RelateLogo from '../relatelogo/Relatelogo'
import PopUpComponent from '../popUp/PopUpComponent';
import Loader from '../loader/Loader'



import './forgotPassword.css'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'



const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [isEmailSent, setIsEmailSent] = useState(false)
    const [msg, setMsg] = useState()

    const [isDialogOpen, setDialogOpen] = useState(false);
    const buttonRef = useRef(null);
    const dialogRef = useRef(null);


    const navigate = useNavigate();
    const [touched, setTouched] = useState(false);

    const toggleDialog = () => {
        setDialogOpen(!isDialogOpen);

        if (!isDialogOpen && buttonRef.current && dialogRef.current) {
            createPopper(buttonRef.current, dialogRef.current, {
                placement: 'bottom',
            });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") {
            setError("Please provide email ID");
            return
        }
        setLoading(true);
        try {
            const response = await forgotPassword({email}); // Call the API function
            setMsg(response.data.message); // Set success message
            setIsEmailSent(true)
            toggleDialog();
            navigate('/forgot-password');

        } catch (error) {
            setError("Failed to send email: " + error);
            setIsEmailSent(false)
            toggleDialog();
            navigate('/forgot-password');
            setError(error)
        } finally {
            setLoading(false); // Stop loader
            setTouched(true);
        }
    }
    const handleInputChange = (e) => {
        setEmail(e.target.value);
        setTouched(true); // Mark as touched when typing
    };


    return (
        <MainContainer style={{ height: "100vh", position: "relative" }}>
            <GreyBackground style={{ position: 'fixed', top: 0 }}>
                <Navbar />
                <RelateLogo className="relate-logo-large" />
                {/* Show Loader when loading is true */}
                {loading && <Loader />}

                {isDialogOpen && <PopUpComponent 
                buttonRef={buttonRef} 
                dialogRef={dialogRef} 
                text={msg} 
                error={error} 
                toggleDialog={toggleDialog} />}
                {
                    isEmailSent ?
                        (<div className='resetEmailSentMsg'>
                            <Text type='h2'>{msg}</Text>
                            <Text type='h3'><em>{email}</em></Text>

                            <div>
                                <span className='check-email'>
                                    Please check your inbox and/or spam filter
                                </span>
                            </div>


                        </div>)




                        /* on forgot password, requesting through email id */
                        : (
                            <div 
                            className={`login-container 
                            ${loading || isDialogOpen ? "blurred-content" : ""}`
                        } 
                            style={{ margin: "50px auto" }}>
                                <div className={loading ? "blurred-content" : ""}>

                                    <div className="heading-container">
                                        <Text type="h3" className="heading-text">
                                            I have an account
                                        </Text>
                                    </div>
                                </div>
                                <div className="logininputs-container">
                                    <form onSubmit={handleSubmit}>  {/* Changed from onClick to onSubmit */}
                                        <InputComponent
                                            className={`logininput-box ${touched && !email ? 'input-error' : ''}`}
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                        <p className='resetPwd-text'>We will send an email to help you reset your password</p>


                                        <div className="loginpage-buttoncontainer">
                                            <Button className="loginpage-button" type="submit">
                                                Send
                                            </Button>
                                        </div>
                                        {/* Display error message */}
                                        {/* {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>} */}
                                    </form>

                                </div>
                            </div>
                        )
                }


            </GreyBackground>
        </MainContainer>

    )
}



export default ForgotPassword;