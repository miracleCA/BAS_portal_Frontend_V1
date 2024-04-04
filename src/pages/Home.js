import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet';
import Logo from "../Images/Logo.png";
import a from "../Images/icon-first.png";
import b from "../Images/icon-second.png";
import c from "../Images/icon-third.png";
import '../Assets/Home.css';

function Home() {
    const d = new Date().getFullYear();

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        

    }

  return (
    <div className='Home'>
        <Helmet>
            <title>Home - Brilliant Avenir Schools</title>
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
            <div className='row' id='rowe'>
                <div className='col-1'></div>
                <div className='col-md-5'>
                    <span id='welco'>Welcome to</span><br/>
                    <span id='bold'>Brilliant Avenir <br/>School's <br/>PORTAL</span>
                    <span id='hdls' style={{display: 'flex'}}>
                        <a id='stf' href="/staff/login">
                            <i id='sa' class="fa-solid fa-right-to-bracket"></i>Staff Login
                        </a> 
                        <a id='std' href="/student/login">
                            <i id='std' class="fa-solid fa-right-to-bracket"></i>Student Login
                        </a>
                    </span>
                </div>
                <div className='col-5'></div>
                <div className='col-1'></div>
            </div>
        </div>
        <div className='body1'>
            <div id='bentxt'>Benefits of Our System</div>
            <div className='row'>
                <div className='col'>
                    <img alt='' src={a}/>
                    <div id='txthead'>Monitor Activities</div>
                    <div>You can now easily monitor your Child/Ward's<br/> Academic Reports quick and easy.</div>
                </div>
                <div className='col-auto'>
                    <img alt='' src={b}/>
                    <div id='txthead'>Getting Updates</div>
                    <div>Parents and students can now have access to<br/> new updates such as take home assignment,<br/> Quiz and many more.</div>
                </div>
                <div className='col'>
                    <img alt='' src={c}/>
                    <div id='txthead'>Effectiveness!</div>
                    <div>This system enables school staff to work<br/> effetively and more efficiently.</div>
                </div>
            </div>
        </div>
        <div className='body2'>
            <iframe 
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.2320576547872!2d7.065576568919282!3d5.532556321641243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzEnNTcuMiJOIDfCsDA0JzEyLjciRQ!5e0!3m2!1sen!2sng!4v1698082918832!5m2!1sen!2sng" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className='body3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div id='contus'>Contact Us</div>
                    <div>Address: No 42 senator onyenwuchi street, Nkwo Orji, Owerri.</div>
                    <br/>
                    <div>Email: Brilliantavenirsch@gmail.com</div>
                    <br/>
                    <div>Phone Number: +234 816 077 5399</div>
                </div>
                {/* <div className='col-12 col-md-8' id='formwrapper'>
                    <form id="form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div id="formtitle">Contact form</div>
                        <div className="input-container">
                            <div className='formi' id='formcol'>
                                <input 
                                    className="input-field" 
                                    id="name" 
                                    type="text" 
                                    placeholder="Name" 
                                    name="Name"
                                    {...register("name", { required: true, maxLength: 40 })}
                                    onChange={(e)=>setId(e.target.value)}
                                />
                                {errors.name && <p id="error">Please input a Name</p>}
                            </div>
                            <div id='formcol'>
                                <input 
                                    className="input-field" 
                                    id="email" 
                                    type="Email" 
                                    placeholder="Email" 
                                    name="Email"
                                    {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                {errors.email && <p id="error">Please input a valid Email address</p>}
                            </div>
                        </div>
                        <textarea 
                            rows="6" 
                            id="message" 
                            placeholder="Message" 
                            cols="50"
                            {...register("message", { required: true, maxLength: 1001 })}
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                        {errors.message && <p id="error">Please input a message</p>}
                        <br/>
                        <button type="submit" id="btn">Send a message</button>
                    </form>
                </div> */}
            </div>
        </div>
        <div className='row' id='lastfoot'>&#169; {d} Brilliant Avenir Academy, Developed by<a style={{color: "#32e8f5"}} href='https://www.linkedin.com/in/miracle-anyiam-879a2b177' target='blank'>&#160;Miracle</a></div>
    </div>
  );
}

export default Home;