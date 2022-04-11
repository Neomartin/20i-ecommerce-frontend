import React from 'react'
import { Header } from '../../shared/Header/Header'
import { Sidebar } from '../../shared/Sidebar/Sidebar';
import { Products } from '../../pages/Products/Products';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import { AdminRoute } from '../../routers/AdminRoute';
export const Home = ({ usuario, other }) => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  return (
    <>
      <Layout>
        <Header user={user} age={user.age} role={user.role} adress={user.adress} city={user.city} />
        <Layout className="full-height">

          <Sider>
            <Sidebar user={user} />
          </Sider>

          <Content>
            
            <Routes>
              {/* <Route
                path="home"
                element={
                  <PrivateRoute >
                    <Home />
                  </PrivateRoute>
                }
              /> */}
              <Route
                path="product"
                element={
                  <AdminRoute>
                    <Products />
                  </AdminRoute>
                }
              />

              {/* <PrivateRoute path="product" element={<Products />} Component="Product" />
                                <PrivateRoute path="*"
                                    element={
                                        <main style={{ padding: "1rem" }}>
                                            <p>There's nothing here!</p>
                                        </main>
                                    }
                                /> */}

              {/* <Products /> */}
            </Routes>
          </Content>
        </Layout>
        <Footer>FOOTER</Footer>
      </Layout>
    </>
  )
}
