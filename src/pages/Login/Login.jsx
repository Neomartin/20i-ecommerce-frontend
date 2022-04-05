import { Alert, Button, Checkbox, Col, Form, Input, Row } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { URL } from '../../constants/config';

export const Login = () => {
    const [loginError, showLoginError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const onLogin = async (loginData) => {
        try {
            console.log(loginData);
            const login = await axios.post(`${URL}/login`, loginData);
            localStorage.setItem('userToken', JSON.stringify(login.data.token));
            localStorage.setItem('currentUser', JSON.stringify(login.data.user));
        } catch (error) {
            setErrorMsg(error.response.data.msg);
            showLoginError(true)
            setTimeout(()=> showLoginError(false), 2000)
        }
    }

    function onFinishFailed() {

    }

    return (
        <>
            <Row className='p10'>
                <Col xs={24} lg={12} offset={6}>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onLogin}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            // type="email"
                            rules={[{ required: true, message: 'Coloque un email correcto', type: 'email' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Recordarme</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <Alert message={errorMsg} type="error" showIcon className={loginError ? 'show' : 'hidden'} />
                </Col>
            </Row>

        </>

    )
}
