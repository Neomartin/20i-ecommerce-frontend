import React from 'react';
import { Layout } from 'antd';
import { Header } from './shared/Header/Header'
import { Sidebar } from './shared/Sidebar/Sidebar';
import { Products } from './pages/Products/Products';


const { Footer, Sider, Content } = Layout;


export const App = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    
    return (
        <>
            <Layout>
               <Header user={user} age={user.age} role={user.role} adress={user.adress} city={user.city} />
               <Layout className="full-height">

                   <Sider>
                    <Sidebar  user={user} />
                   </Sider>

                    <Content>
                        {/* <Home usuario={user}></Home> */}
                        <Products/>
                    </Content>
               </Layout>
               <Footer>FOOTER</Footer> 
            </Layout>
        </>
    )
}
