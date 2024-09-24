import React from 'react'
import NavBar from '../navigation_langingPage/NavBar';
import GreyBackground from '../greybackground/Greybackground';

import Text from '../text/Text';

import './header.css';
import RelateLogo from '../Relatelogo';

const Header = () => {
  return (
    <GreyBackground>
        <NavBar/>
        <RelateLogo/>
        <div className="heading-container">
          {/*  Text component for h1 */}
          <Text type="h1" className="heading-text">
          Take care of your relations.
          </Text>
        </div>

        <div className="description-container">
          {/*  Text component for p */}
          <Text type="p" className="description-text">
          We are here to help you improve yours. 
          <br/>
          We believe that by strengthen your relationship you can improve the quality of your life.
          </Text>
        </div>
    </GreyBackground>
  )
}

export default Header