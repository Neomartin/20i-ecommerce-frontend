import { PageHeader } from 'antd';
import React from 'react';
import { useAuth } from '../../auth/useAuth';
import './Header.css'

export const Header = ({user}) => {
  const auth = useAuth()
  return (
    <PageHeader
        className="site-page-header"
        onBack={() => null}
        title={auth.user.name}
        subTitle={user.role === 'USER_ROLE' ? 'AdminMenu' : 'UserMenu'}
    />
    
  )
}
