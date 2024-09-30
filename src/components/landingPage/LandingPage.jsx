import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';

//components
import MainContainer from '../maincontainer/Maincontainer';
import GreyBackground from '../greybackground/Greybackground';
import Navbar from '../Navbar';
import RelateLogo from '../relatelogo/Relatelogo';
import Text from '../text/Text';
import Button from '../button/Button';

import './landingpage.css'


const LandingPage = () => {
    return (
        <>
            <GreyBackground >
                <div className='Landing-Nav-container'>
                    <section className='nav-firstSection'>
                        <Navbar />
                    </section>
                    <section className='nav-login'>
                        <Nav>
                            <NavDropdown title="Login as" id="basic-nav-dropdown" style={{ color: "rgb(249, 238, 225)" }}>
                                <NavDropdown.Item href="#action/3.1" className='rounded-pill my-1' >User</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='rounded-pill my-1' >
                                    terapist
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </section>
                </div>

                <RelateLogo className="relate-logo-large"/>

                <div style={{ paddingBottom: "70px" }}>
                    <div className="heading-container">
                        {/*  Text component for the heading */}
                        <Text type="h2" className="heading-text">
                            Take care of your relations
                        </Text>

                    </div>
                    <div className="">
                        <Text type="p" className='heading-desc'>
                            We are here to help you improve yours.
                            We believe that by strengthen your relationship
                            you can improve the quality of your life.
                        </Text>
                    </div>
                </div>

            </GreyBackground>
            <MainContainer>

                <div style={{ paddingTop: "70px" }}>
                    <div className="containerheading">
                        {/*  Text component for the heading */}
                        <Text type="h2" className="sub-containerheadingtext">
                            Work with relate
                        </Text>

                    </div>
                    <div className="sub-container">
                        <Text type="p" className='heading-desc'>
                            You go to the gym to strengthen your body and you take your car to service. What do you do to strengthen your relationship? Sadly almost 50% of all marriages ends with break up. We aim to make a difference and lower the numbers, and we believe that improved communication will make a difference.
                        </Text>
                    </div>
                    <div className="links-textcontainer">
                        {/*  Text component for the link */}
                        <Text type="a" href="/freeQuestionair" className="links-text" style={{ fontSize: "20px" }}>
                            Try our free relation-questionnaire
                        </Text>
                    </div>
                </div>
                {/*  3 sections with divider */}
                <div className='sections-container'>
                    <section className='section-Landingpage'>
                        <h3 className='section-header'>Online questionnaire</h3>
                        <p className='P-overflow'>With our professional therapist
                            we have put together a line-up of questions for you and your partner to answer. Based on your results we offer to help you in different ways. lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button className='landingpage-button'>Learn more</Button>
                    </section>

                    {/* Divider */}
                    <div className="divider"></div>



                    <section className='section-Landingpage'>
                        <h3>Find your therapist</h3>
                        <p className='P-overflow'>With our database of therapists we lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna. Sed vitae quam massa. Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.</p>
                        <Button className='landingpage-button'>Therapists</Button>
                    </section>


                    {/* Divider */}
                    <div className="divider"></div>


                    <section className='section-Landingpage'>
                        <h3>Recurring check-in</h3>
                        <p className='P-overflow'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.  Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </p>
                        <Button className='landingpage-button'>How it works</Button>
                    </section>
                </div>


            </MainContainer>

            <GreyBackground>
                <section className='last-section-landingpage'>
                    {/* <image src='/' alt="Picture" width={'40'} height={'40'} /> */}
                    <div className='img-container'>
                        <image src='/' alt="Picture" width={'40'} height={'40'} />
                    </div>
                    <div className='text-container'>
                        <h3 className='meet-our-expert'>Meet our expert</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna.
                            <br />
                            <br />

                            We encourage you to have a check-in on your relationship every month.
                            <br />
                            <br />

                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna.
                            <br />
                            <br />

                            We encourage you to have a check-in on your relationship every month. </p>
                    </div>
                </section>

            </GreyBackground>
        </>
    )
}

export default LandingPage;