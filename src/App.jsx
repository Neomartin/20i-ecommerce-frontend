import React from 'react';
import { Layout } from 'antd';
import { Header } from './shared/Header/Header'
import { Sidebar } from './shared/Sidebar/Sidebar';
import { Products } from './pages/Products/Products';
import { Login } from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';


const { Footer, Sider, Content } = Layout;


export const App = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};

    return (
        <>

            <Layout>
                <Header user={user} age={user.age} role={user.role} adress={user.adress} city={user.city} />
                {/* <Layout>
                    <Login />
                </Layout> */}
                <Layout className="full-height">

                    <Sider>
                        <Sidebar user={user} />
                    </Sider>

                    <Content>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="product" element={<Products />} />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                        <p>There's nothing here!</p>
                                    </main>
                                }
                            />
                        </Routes>
                        {/* <Products /> */}
                    </Content>
                </Layout>
                <Footer>FOOTER</Footer>
            </Layout>
        </>
    )
}
