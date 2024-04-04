import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import Logo from '../Images/Logo.png';
import '../Assets/Home.css';
import '../Assets/Stafflogin.css'

function StaffLogin() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [click, setClick] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            navigate("/staff");
        }
    })

    const [autherr, setAutherr] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

        const onSubmit = async () => {
            window.Event = true;
            try {
                const response = await fetch('https://api.brilliantavenirschools.com/staffs/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ username, password }),
                });
                setClick(true);
          
                if (!response.ok) {
                  throw new Error('Login failed');
                }
                const data = await response.json();
                const user = data.userID;
                const token = data.token;  
                
                if (token.length == 0 || token == "undefined") {
                    localStorage.clear()
                    navigate("/staff/login")
                }
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', user);
                    navigate("/staff");
            }
            catch (error) {
                console.error('Error logging in:', error);
                if (error) {
                    setAutherr(true);
                }
            }
        }

  return (
    <div className='Home'>
        <Helmet>
            <title>Login - Brilliant Avenir Schools</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
        <div className='Header'>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img id='logo' alt='' src={Logo}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa-solid fa-bars" style={{fontSize: "30px", color: "white"}}></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="nav navbar-nav navbar-right ml-auto">
                            <a className="nav-link active" aria-current="page" id='web' href="/">School Website</a>
                            <a className="nav-link" id='stf' href="/staff/login">
                                <i className="fa-solid fa-right-to-bracket">Staff Login</i>
                            </a>
                            <a className="nav-link" id='std' href="/student/login">
                                <i id='std' className="fa-solid fa-right-to-bracket">Student Login</i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='row' id='rowe' style={{paddingBottom: "0px", marginBottom: "0px"}}>
                <div className='col-1'></div>
                <div className='col-md-5' id='formcoll'>
                    <div id='authform'>
                        <span style={{justifyContent: "center", textAlign: "center", marginBottom: "5%"}}>
                            <i style={{fontSize: "80px"}} className="fa-solid fa-user-tie"></i>
                        </span>
                        <form autoComplete='on' onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' className="input-field" id="username" placeholder="username" name='username'
                                {...register("username", { required: true, maxLength: 40 })}
                                onChange={(e)=>setUsername(e.target.value)} 
                            />
                            {errors.username && username.trim().length == 0 && <p id="error">Please input a Username</p>}

                            <input type='password' className="input-field" id="password" placeholder="password" name='password'
                                {...register("password", { required: true, maxLength: 40 })}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            {errors.password && password.trim().length == 0 && <p id="error">Please input a Password</p>}
                            <input name='submit' value={window.Event == true && autherr ? "Submit" : window.Event == true && !autherr ? 'Loading.... Please wait' : 'Submit'} type='submit' id='submit'/>
                            {autherr ? 
                                <span style={{color: 'red', fontSize: "17px", textTransform: 'none', justifyContent: "center", textAlign: "center"}}>Please Refresh and make sure the Staff details is correct</span> 
                                : 
                                ''
                            }   
                        </form>
                    </div>
                    {/* <span id='welco'>Welcome to</span><br/>
                    <span id='bold'>Brilliant Avenir <br/>Academy's <br/>PORTAL</span>
                    <span style={{display: 'flex'}}>
                        <a className="nav-link" id='stf' href="/staffs">
                            <i id='sa' className="fa-solid fa-right-to-bracket">Staff Login</i>
                        </a>
                        <a className="nav-link" id='std' href="/students">
                            <i id='std' className="fa-solid fa-right-to-bracket">Student Login</i>
                        </a>
                    </span> */}
                </div>
                <div className='col-5'></div>
                <div className='col-1'></div>
            </div>
        </div>
    </div>
  )
}

export default StaffLogin;