import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import Item from 'antd/lib/list/Item';

Login.propTypes = {

};

function Login(props) {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row justify="space-around" align="middle" style={{ marginTop: 70 }}>
            <Col span={12} offset={6}>
                <Card title="HỆ THỐNG QUẢN TRỊ" orientation="center" bordered={false} style={{ width: 400 }}>
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
                            <span align="center">Or <a href="">register now!</a></span>

                        </Form.Item>
                    </Form>

                </Card>
            </Col>
        </Row>

    );
}

export default Login;