import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from '../constants/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    // const [loginError, showLoginError] = useState(false)
    // const [errorMsg, setErrorMsg] = useState('')
    async function login(userLogin) {
        try {
            const login = await axios.post(`${URL}/login`, userLogin);
            localStorage.setItem('userToken', JSON.stringify(login.data.token));
            // localStorage.setItem('currentUser', JSON.stringify(login.data.user));
            setUser(login.data.user)
            navigate('/home');
        } catch (error) {
            // setErrorMsg(error.response.data.msg);
            // showLoginError(true)
            // setTimeout(()=> showLoginError(false), 2000)
        }
    }
    const logout = ()=> {
        console.log('logout')
        // localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
        setUser(null);
        navigate('/login')
    }

    useEffect(()=> {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
    }, [])

    useEffect(()=> {
        localStorage.setItem("currentUser", JSON.stringify(user))
    }, [user]);

    
    const auth = {
        user,
        login,
        logout,
    }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}