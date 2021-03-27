import React from 'react';
import AppHeader from './components/common/appHeader/AppHeader';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import './App.css'
import HomePape from './components/view/HomePape';
import AppFooter from './components/common/appFooter/AppFooter';
const { Header, Content, Footer } = Layout;

function App(props) {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <HomePape />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default App;