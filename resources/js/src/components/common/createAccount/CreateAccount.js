import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateAccount(props) {
    const [newAccount, setNewAccount] = useState({
        name: "",
        email: "",
        password: ""
    })


    useEffect(() => {
        async function connectApiRegister() {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/register',
                data: newAccount
            }).then(res => {
                console.log(res.data);
                // if (res.data.code == 200) {
                //     console.log("register thanh cong");
                // } else {
                //     console.log("error register");
                // }
            }).catch(err => {
                console.log(err);
            });
        }
        connectApiRegister();
    }, [newAccount]);


    const onSubmit = (values) => {
        setNewAccount({
            name: values.name,
            email: values.email,
            password: values.password
        });
        // console.log(values);
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
                        onFinish={onSubmit}
                    >

                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                name="name"
                                type="text"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input
                                name="email"
                                type="email"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email" />
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
                                name="password"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                New Account</Button>
                            <span align="center">Or <Link to="/">Login</Link></span>

                        </Form.Item>
                    </Form>

                </Card>
            </Col>
        </Row>

    );
}

export default CreateAccount;