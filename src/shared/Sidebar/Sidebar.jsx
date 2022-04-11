import { ContainerOutlined, DesktopOutlined, HomeOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/useAuth'

export const Sidebar = () => {
  const auth = useAuth()
  return (
    <div>
      {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      //   inlineCollapsed={this.state.collapsed}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/home"> Home </Link>
        </Menu.Item>
        {
          auth.user ? 
          <Menu.Item key="0" icon={<LogoutOutlined />} onClick={auth.logout}>
            <Link to="/login"> Logout </Link>
          </Menu.Item> : null
        }
        
        {
          auth.user.role === 'ADMIN_ROLE' ?
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/product"> Product </Link>
            </Menu.Item> : null

        }
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          Orders List
        </Menu.Item>
        <Menu.Item key="4" icon={<ContainerOutlined />}>
          Admin Product
        </Menu.Item>
      </Menu>
    </div>
  )
}
