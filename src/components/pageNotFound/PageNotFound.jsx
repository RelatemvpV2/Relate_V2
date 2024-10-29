import React from 'react'

import Text from '../text/Text'
import RelateLogo from '../relatelogo/Relatelogo'
import MainContainer from '../maincontainer/Maincontainer'
import GreyBackground from '../greybackground/Greybackground'

const PageNotFound = () => {
    return <MainContainer style={{height:"100vh", position: "relative" }}>
        <GreyBackground  style={{ position: 'fixed', top: 0,padding:"100px 0 " }}>
        <RelateLogo className="relate-logo-large" />
        <div className="heading-container">
          <Text type="h3" className="heading-text">
          Sorry, this page isn’t available
          </Text>
        </div>

        <div className="description-container">
          <Text type="p" className="description-text">
          The link you followed may be broken, or the page may have been removed.
          <a href="https://master.d2o54gcqu88iq5.amplifyapp.com/"> Go to front page</a>
          </Text>
        </div>
        </GreyBackground>
    </MainContainer>
       
}

export default PageNotFound;