import { BackTop } from 'antd';
import React from 'react';

function AppFooter(props) {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-code"></i>
                    <a href="http://bibekshakya.com/demo/react/antdesign/tech/#hero"> Tech</a>
                </div>
                <div>
                    <ul className="socials">
                        <li><a href="#"></a><i className="fab fa-facebook-f"></i></li>
                        <li><a href="#"></a><i className="fab fa-twitter"></i></li>
                        <li><a href="#"></a><i className="fab fa-linkedin-in"></i></li>
                        <li><a href="#"></a><i className="fab fa-pinterest-p"></i></li>
                        <li><a href="#"></a><i className="fab fa-instagram"></i></li>
                    </ul>
                    <div className="copyright">Copyright &copy; 2021 Tech</div>
                    <BackTop>
                        <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                    </BackTop>
                </div>
            </div>

        </div>
    );
}

export default AppFooter;