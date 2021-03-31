import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { StatusLoginContext } from '../../../contexts/StatusLoginContext';

Login.propTypes = {

};

const accounts = [
    {
        name: "tuan",
        password: "123"
    },
    {
        name: "abc",
        password: "123"
    },
    {
        name: "def",
        password: "123"
    },
]
function Login(props) {
    let history = useHistory();
    const { changeStatus } = useContext(StatusLoginContext);
    console.log(changeStatus);
    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        accounts.map(account => {
            if (account.name == values.username && account.password == values.password) {
                changeStatus();
                history.push("/pape");
            }
        })

    };

    return (
        <Row justify="center" align="middle" style={{ marginTop: 70 }}>
            <Col >
                <Card title="Login" orientation="center" bordered={false} style={{ width: 400 }}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >

                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Log in</Button>
                            <span align="center">Or <Link to="/register">register now!</Link></span>

                        </Form.Item>
                    </Form>

                </Card>
            </Col>
        </Row>

    );
}

export default Login;