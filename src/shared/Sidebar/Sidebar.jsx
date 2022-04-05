import { ContainerOutlined, DesktopOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
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
        <Menu.Item key="0" icon={<LoginOutlined />}>
          <Link to="/login"> Login </Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/product"> Product </Link>
        </Menu.Item>
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
