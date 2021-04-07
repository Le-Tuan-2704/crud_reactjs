import React, { useContext, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { StatusLoginContext } from '../../../contexts/StatusLoginContext';
import axios from 'axios';

Login.propTypes = {

};


function Login(props) {

    const { changeStatus } = useContext(StatusLoginContext);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    let history = useHistory();


    useEffect(() => {
        async function connectApi() {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/login',
                data: data
            }).then(res => {
                if (res.data.code == 200) {
                    changeStatus();
                    history.push("/pape");
                } else {
                    console.log(res.data);
                }
            }).catch(err => {
                console.log(err);
            });
            // console.log(data);
        }
        connectApi();
    }, [data]);

    const onSubmit = (values) => {
        // console.log(values);
        setData({
            email: values.email,
            password: values.password
        });
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
                        onFinish={onSubmit}
                    >

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}

                        >
                            <Input
                                name="email"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                type="email"
                                // onChange={handleChange}
                                placeholder="email"
                            // value={data.email} 
                            />
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
                                // onChange={handleChange}
                                placeholder="Password"
                            // value={data.password}
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