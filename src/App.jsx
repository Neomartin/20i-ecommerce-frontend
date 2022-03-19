import React from 'react';
import { Layout } from 'antd';
import { Home } from './pages/Home/Home';
const { Header, Footer, Sider, Content } = Layout;

export const App = () => {
    // const user = {
    //     fullName: 'John Doe',
    //     role: 'ADMIN_ROLE'
    // }
    // localStorage.setItem('user', JSON.stringify(user))
    const user = JSON.parse(localStorage.getItem('user')) || { fullName: 'Unknown', role: 'GUEST_ROLE'};
    const anotherInfo = 'Cualquier otra cosa'
    return (
        <>
            <Layout>
               <Header>HEADER COMPONENT</Header>
               <Layout>
                    <Sider>SIDER</Sider>
                    <Content>
                        <Home 
                            usuario={user}></Home>
                    </Content>
               </Layout>
               <Footer>FOOTER</Footer> 
            </Layout>
        </>
    )
}
