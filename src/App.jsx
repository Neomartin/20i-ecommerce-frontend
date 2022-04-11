import React from 'react';


import { Login } from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { AuthProvider } from './auth/AuthProvider';
import { PrivateRoute } from './routers/PrivateRoute';






export const App = () => {
   
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<PrivateRoute >< Home /></PrivateRoute>}/>
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </>
    )
}
