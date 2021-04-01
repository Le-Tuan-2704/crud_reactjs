import React, { useContext } from 'react';
import { StatusLoginContext } from '../../contexts/StatusLoginContext';
import AppAbout from '../common/appAbout/AppAbout';
import AppContact from '../common/appContact/AppContact';
import AppFAQ from '../common/appFAQ/AppFAQ';
import AppFeatures from '../common/appFeatures/AppFeatures';
import AppHome from '../common/appHome/AppHome';
import AppPricing from '../common/appPricing/AppPricing';
import AppWorks from '../common/appWorks/AppWorks';

function HomePape(props) {
    const { status } = useContext(StatusLoginContext);
    return (
        <>
            {
                status ? (
                    <div>
                        <AppHome />
                        <AppAbout />
                        <AppFeatures />
                        <AppWorks />
                        <AppFAQ />
                        <AppPricing />
                        <AppContact />
                    </div >
                ) : null
            }
        </>
    );
}

export default HomePape;