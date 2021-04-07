
import React, { useContext } from 'react';
import { StatusLoginContext } from '../../../contexts/StatusLoginContext';
import NavBarHeader from './NavBarHeader';

function AppHeader(props) {
    const { status } = useContext(StatusLoginContext);

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-code"></i>
                    <a href="http://bibekshakya.com/demo/react/antdesign/tech/#hero"> Tech</a>
                </div>
                {
                    status ? <NavBarHeader /> : null
                }

            </div>

        </div>
    );
}

export default AppHeader;