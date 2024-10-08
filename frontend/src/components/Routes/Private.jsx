import React, { useState, useEffect } from 'react'
import { useAuth } from "../../context/auth";
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { token } from 'morgan';

export default function PrivateRoute(){
    const [ok , setOk] = useState(false)
    const [auth , setAuth] = useAuth()

    useEffect(() => {
      const authCheck = async() =>{
        const res = axios.get('/api/v1/auth/user-auth',{
            headers:{
                "Authorization": auth?.token
            }  
        })
        if ((await res).data.ok) {
            setOk(ture)
        } else {
            setOk(false)
        }
      }
      if (auth?.token) authCheck()
    }, [auth?.token])
    
    return ok ?<Outlet/> : "spinner" 
}