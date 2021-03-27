import React from 'react';
import AppAbout from '../common/appAbout/AppAbout';
import AppContact from '../common/appContact/AppContact';
import AppFAQ from '../common/appFAQ/AppFAQ';
import AppFeatures from '../common/appFeatures/AppFeatures';
import AppHome from '../common/appHome/AppHome';
import AppPricing from '../common/appPricing/AppPricing';
import AppWorks from '../common/appWorks/AppWorks';

function HomePape(props) {
    return (
        <div>
            <AppHome />
            <AppAbout />
            <AppFeatures />
            <AppWorks />
            <AppFAQ />
            <AppPricing />
            <AppContact />
        </div>
    );
}

export default HomePape;