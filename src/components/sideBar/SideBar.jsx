import React from 'react'
import Relatelogo from '../relatelogo/Relatelogo';
import { slide as BurgerMenu } from 'react-burger-menu';


import Text from '../text/Text';
import Footer from '../footer/Footer';

const SideBar = () => {
    return (
        <div>

            <aside className="sidebar">
                <Relatelogo className="relate-logo-small" />
                <nav className="sidebar-nav">
                    <Text type="p" className="my-relations">
                        My relations
                    </Text>
                    <Text type="p" className="myrelations-text">
                        James S
                    </Text>
                    <Text type="p" className="newrelation-text">
                        + Add new relation

                    </Text>
                    <Text type="p" className="therapist-text">
                        Therapists

                    </Text>
                    <Text type="p" className="therapist-text">
                        Settings

                    </Text>
                </nav>
                <Footer />
            </aside>
            
        </div>
    )
}

export default SideBar