import React from 'react'

import Text from '../text/Text'
import RelateLogo from '../relatelogo/Relatelogo'

const PageNotFound = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            flexDirection: "column",
            width: "40%",
            alignItems: "center",
            color: "#41414E",
            margin: "auto",
            padding: "100px"
        }}>
            <RelateLogo className="relate-logo-tiny" />
            {/*  <div className="links-textcontainer">
                Text component for the link */}
                {/*  <Text type="a" href="/rlte.io" className="links-text" style={{ fontSize: "20px" }}>
                            relate.io
                        </Text>
                    </div> */}
               
                <Text type="h4"> 404 Error </Text>
                <Text type="p">Uh oh. It looks like that page you were looking for isn't here.</Text>
                <span style={{fontSize:"30px"}}>&#128542;</span>

            </div>
            )
}

            export default PageNotFound;