import React, { useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//components
import MainContainer from '../maincontainer/Maincontainer';
import GreyBackground from '../greybackground/Greybackground';
import Navbar from '../Navbar/Navbar';
import RelateLogo from '../relatelogo/Relatelogo';
import Text from '../text/Text';
import Button from '../button/Button';

import { useTranslation } from 'react-i18next';

import './landingpage.css'


const LandingPage = () => {

    useEffect(() => {
        localStorage.clear();
      }, [])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Changes the language dynamically
      };

    const { t, i18n } = useTranslation();
    return (
        <>
       {/* Uncoment these buttons change the language */}

        {/* <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('da')}>Danish</button> */}

            <GreyBackground >
                <div className='Landing-Nav-container'>
                    <section className='nav-firstSection'>
                        <Navbar />
                        
                    </section>
                    </div>
                    <section className='nav-login'>
                        <Nav>
                        <NavDropdown title="Login as" id="basic-nav-dropdown" style={{ color: "rgb(249, 238, 225)" }}>
                                <NavDropdown.Item as={Link} to="/Login" className='rounded-pill my-1' >
                                    {t('USER')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/therapist-login" className='rounded-pill my-1' >
                                    {t('THERAPIST')}
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </section>
                    
                

                <RelateLogo className="relate-logo-large" />

                <div style={{ paddingBottom: "70px" }}>
                    <div className="heading-container h1">
                        {/*  Text component for the heading */}
                        <Text type="h1" className="heading-text">
                            {t('LANDING_PAGE_HEADLINE')}
                        </Text>

                    </div>
                    <div className="">
                        <Text type="p" className='heading-desc  p-text' style={{ color: "#f9eee1" }}>
                            {t('LANDINGPAGE_HEADLINE_DESC')}
                            {/* We are here to help you improve yours. We believe that by strengthen your relationship you can improve the quality of your life. */}
                        </Text>
                    </div>
                </div>

            </GreyBackground>
            <MainContainer>

                <div style={{ paddingTop: "70px" }}>
                    <div className="containerheading">
                        {/*  Text component for the heading */}
                        <Text type="h2" className="sub-containerheadingtext">
                            {/* Work with <em>relate</em> */}
                            {t("LANDING_WORK_WITH_RELATE")}
                        </Text>

                    </div>
                    <div className="sub-container">
                        <Text type="p" className='desc  p-text'>
                        {t('LANDING_WORK_WITH_RELATE_DESC')}
                           {/*  You go to the gym to strengthen your body and you take your car to service. What do you do to strengthen your relationship? Sadly almost 50% of all marriages ends with break up. We aim to make a difference and lower the numbers, and we believe that improved communication will make a difference. */}
                        </Text>
                    </div>
                    <div className="links-textcontainer">
                        {/*  Text component for the link */}
                        <Text type="a" href="/Login" className="links-text landingPage-link">
                            {t('LANDING_TRY_FREE_QUESTIONAIRE')}
                        </Text>
                    </div>
                </div>
                {/*  3 sections with divider */}
                <div className='sections-container'>
                    <section className='section-Landingpage'>
                        <Text type="h3" className='section-header'>{t('LANDING_ONLINE_QUESTIONAIRE')}</Text>
                        <Text className='P-overflow sections-text  p-text'>
                            {t('LANDING_ONLINE_QUESTIONAIRE_DESC')}
                            {/* With our professional therapist
                            we have put together a line-up of questions for you and your partner to answer. Based on your results we offer to help you in different ways. lorem ipsum dolor sit amet, consectetur adipiscing elit. */}</Text>
                        <Button className='landingpage-button'>{t('LANDING_LEARN_MORE')}</Button>
                    </section>

                    {/* Divider */}
                    <div className="divider"></div>

                    <section className='section-Landingpage'>
                        <Text type="h3" className='section-header'>{t('LANDING_FIND_YOUR_TERAPIST')}</Text>
                        <Text className='P-overflow sections-text  p-text'>
                            {t('LANDING_FIND_YOUR_TERAPIST_DESC')}
                            {/* With our database of therapists we lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna. Sed vitae quam massa. Donec a laoreet urna.We encourage you to have a check-in on your relationship every month. */}</Text>
                        <Button className='landingpage-button'>{t('TERAPISTS')}</Button>
                    </section>


                    {/* Divider */}
                    <div className="divider"></div>

                    <section className='section-Landingpage'>
                        <Text type="h3" className='section-header'>{t('lANDING_RECURRING_CHECK_IN')}</Text>
                        <Text className='P-overflow sections-text p-text'>
                            {t('LANDING_RECURRING_CHECK_IN_DESC')}
                            {/* Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.  Donec a laoreet urna.We encourage you to have a check-in on your relationship every month. */}
                        </Text>
                        <Button className='landingpage-button'>{t('HOW_IT_WORKS')}</Button>
                    </section>
                </div>


            </MainContainer>

            <GreyBackground>
                <section className='last-section-landingpage'>
                    {/* <image src='/' alt="Picture" width={'40'} height={'40'} /> */}
                    <div className='img-container'>
                        <img src='/' alt="Picture" width={'40'} height={'40'} />
                    </div>
                    <div className='text-container' style={{ color: "#f9eee1" }}>
                        <Text type="h2" className='meet-our-expert'>{t('MEET_OUR_EXPORT')}</Text>
                        <Text type="p" className='meet-our-expert-text p-text'>
                            {t('MEET_OUR_EXPORT_DESC')}
                            {/* Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna. 
                            <br />
                            <br />

                            We encourage you to have a check-in on your relationship every month.
                            <br />
                            <br />

                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna.
                            <br />
                            <br />

                            We encourage you to have a check-in on your relationship every month.*/}
                            
                             </Text>
                    </div>
                </section>

            </GreyBackground>
        </>
    )
}

export default LandingPage;