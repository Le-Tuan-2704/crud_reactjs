import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function CreateAccount(props) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row justify="space-around" align="middle" style={{ marginTop: 70 }}>
            <Col span={12} offset={6}>
                <Card title="Create Account" orientation="center" bordered={false} style={{ width: 400 }}>
                    <Form
                        name="normal_register"
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
                            <Button type="primary" htmlType="submit" onClick="checkAccount" className="login-form-button" block>
                                Log in</Button>
                            <span align="center">Or <Link to="/">Login</Link></span>

                        </Form.Item>
                    </Form>

                </Card>
            </Col>
        </Row>

    );
}

export default CreateAccount;