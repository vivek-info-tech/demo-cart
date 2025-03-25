import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate=useNavigate();
     
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    useEffect(()=>{
        const auth=localStorage.getItem('username');
        if(auth){
            navigate('/')
        }
    },[])

    const handleLogin= async () => {
         
        let result= await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username ,
                password
                 
            })
        });
        result= await result.json();
        // console.log(result)
        // console.log(result.accessToken)
        if(result.accessToken){
            localStorage.setItem('username',JSON.stringify(result.username));
            localStorage.setItem('token',JSON.stringify(result.token));
            navigate('/')

        }else{
            alert("user name invailid")
        }

 
    }
    return (
        <div className='container'>
            <div className='my-5 mx-5'>
                <h1 className='text-center'>Login</h1>
                <label  className="form-label">User Name</label>
                <input type="text" id="inputPassword4" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                <label  className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <button className='btn btn-primary text-center  float-right my-5' onClick={handleLogin}>Login</button>

                <div>
                <p className=' text-lg-center'>User Name & Password for login</p>
                <p className=' text-dark text-lg-center'>  User Name:  emilys <br / > Password: emilyspass</p>
         
            </div>
            </div>

            
        </div>
    )
}
