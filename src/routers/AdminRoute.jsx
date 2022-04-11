import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const AdminRoute = ({children})=> {
        const auth = useAuth();
        return auth.user.role === 'ADMIN_ROLE' ? children : <Navigate to="/home" replace />
}