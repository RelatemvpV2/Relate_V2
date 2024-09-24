import React from 'react'

import Text from '../text/Text'
import Header from '../header-landingPage/Header'
import MainContainer from '../maincontainer/Maincontainer'
import Button from '../button/Button'

import './langingPage.css';
import Divider from '../dividerContainer/Divider';
import GreyBackground from '../greybackground/Greybackground'


const LandingPage = () => {
  return (

    <>
      <Header />

      <div className='lightBg-container-landingpage'>
        <div className="work-with-relate-text">
          <h2>
            Work with relate
          </h2>
        </div>

        <div className="work-with-relate-text-description">
          <p>
            You go to the gym to strengthen your body and you take your car to service. What do you do to strengthen your relationship? Sadly almost 50% of all marriages ends with break up. We aim to make a difference and lower the numbers, and we believe that improved communication will make a difference.
          </p>
        </div>

        <a href="#Tryquestionaire" className='try-Questionaire-link'>Try our free relation-questionnaire</a>

        <div className='sections-container'>
          <section className='section-Landingpage'>
            <h3 className='section-header'>Online questionnaire</h3>
            <p>With our professional therapist
              we have put together a line-up of questions for you and your partner to answer. Based on your results we offer to help you in different ways. lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className='landingpage-button'>Learn more</Button>
          </section>

          {/* Divider */}
          <div className="divider"></div>



          <section className='section-Landingpage'>
            <h3>Find your therapist</h3>
            <p>With our database of therapists we lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna. Sed vitae quam massa. Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.</p>
            <Button className='landingpage-button'>Therapists</Button>
          </section>


          {/* Divider */}
          <div className="divider"></div>


          <section className='section-Landingpage'>
            <h3>Recurring check-in</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien. Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.  Donec a laoreet urna.We encourage you to have a check-in on your relationship every month.
            </p>
            <Button className='landingpage-button'>How it works</Button>
          </section>
        </div>

      </div>

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

export default LandingPage