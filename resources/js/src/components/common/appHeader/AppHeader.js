
import React from 'react';
import { Menu } from 'antd';
function AppHeader(props) {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-code"></i>
                    <a href="http://bibekshakya.com/demo/react/antdesign/tech/#hero"> Tech</a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="features">Features</Menu.Item>
                    <Menu.Item key="howitworks">Howitworks</Menu.Item>
                    <Menu.Item key="faq">FAQ</Menu.Item>
                    <Menu.Item key="pricing">Pricing</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </div>

        </div>
    );
}

export default AppHeader;