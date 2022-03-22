import { PageHeader } from 'antd';
import React from 'react';
import './Header.css'

export const Header = ({user}) => {

  return (
    <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle={user.role === 'USER_ROLE' ? 'AdminMenu' : 'UserMenu'}
    />
  )
}
