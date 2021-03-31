import React, { useContext } from 'react';
import AppHeader from './components/common/appHeader/AppHeader';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import './App.css'
import AppFooter from './components/common/appFooter/AppFooter';
import CheckLogin from './components/checkLogin/CheckLogin';
import StatusLoginProvider from './contexts/StatusLoginContext';
const { Header, Content, Footer } = Layout;

function App(props) {


    return (
        <Layout className="mainLayout">
            <StatusLoginProvider>
                <Header>
                    <AppHeader />
                </Header>
                <Content>
                    <CheckLogin />
                </Content>
            </StatusLoginProvider>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default App;