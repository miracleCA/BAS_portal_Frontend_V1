import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import Logo from '../Images/Logo.png';
import '../Assets/Home.css';
import '../Assets/Stafflogin.css'

function StudentLogin() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [click, setClick] = useState(false);

    const navigate = useNavigate();
    const studtoken = localStorage.getItem('studtoken')

    useEffect(() => {
        if (studtoken) {
            navigate("/student");
        }
    })

    const [autherr, setAutherr] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        window.Event = true;
        try {
            const response = await fetch('https://api.brilliantavenirschools.com/students/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
      
            if (!response.ok) {
              throw new Error('Login failed');
            }
            const data = await response.json();
            const student = data.userID;
            const studtoken = data.token;

            if (studtoken.length == 0 || studtoken == "undefined") {
                localStorage.clear()
                navigate("/student/login") 
            }
                localStorage.setItem('studtoken', studtoken);
                localStorage.setItem('Student', student);
                navigate("/student");   
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
            <nav class="navbar navbar-expand-lg bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img id='logo' alt='' src={Logo}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <i class="fa-solid fa-bars" style={{fontSize: "30px", color: "white"}}></i>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="nav navbar-nav navbar-right ml-auto">
                            <a class="nav-link active" aria-current="page" id='web' href="/">School Website</a>
                            <a class="nav-link" id='stf' href="/staff/login">
                                <i class="fa-solid fa-right-to-bracket">Staff Login</i>
                            </a>
                            <a class="nav-link" id='std' href="/student/login">
                                <i id='std' class="fa-solid fa-right-to-bracket">Student Login</i>
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
                            <i style={{fontSize: "80px"}} class="fa-solid fa-user-tie"></i>
                        </span>
                        <form>
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
                            <input type='submit' id='submit' value={window.Event == true && autherr ? "Submit" : window.Event == true && !autherr ? 'Loading.... Please wait' : 'Submit'} onClick={handleSubmit(onSubmit)}/>
                            {autherr ? 
                                <span style={{color: 'red', fontSize: "17px", textTransform: 'none', justifyContent: "center", textAlign: "center"}}>Please Refresh and make sure the Student details is correct</span> 
                                : 
                                ''
                            }   
                            {/* <span style={{textTransform: "none"}}>
                                <a href='/' style={{color: "green"}} id="forg">Forgot Username/Password?</a>
                            </span> */}
                        </form>
                    </div>
{/*                     <span id='welco'>Welcome to</span><br/>
                    <span id='bold'>Brilliant Avenir <br/>Academy's <br/>PORTAL</span>
                    <span style={{display: 'flex'}}>
                        <a class="nav-link" id='stf' href="/staffs">
                            <i id='sa' class="fa-solid fa-right-to-bracket">Staff Login</i>
                        </a>
                        <a class="nav-link" id='std' href="/students">
                            <i id='std' class="fa-solid fa-right-to-bracket">Student Login</i>
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

export default StudentLogin;