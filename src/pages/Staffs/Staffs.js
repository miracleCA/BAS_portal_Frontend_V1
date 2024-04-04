import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import Staffsdbar from "../../components/Staffsdbar";

import '../../Assets/Staffs.css'

function Staffs() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [sdata, setSdata] = useState();

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token])

    useEffect(() => {
        const datas = async () => {
            try {
                const response = await fetch('https://api.brilliantavenirschools.com/staffs/${staffId}', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                });
        
                if (!response.ok) {
                throw new Error('ERROR!!!');
                }
                const data = await response.json();      
                setSdata(data);       
            }
            catch (error) {
                console.error('Error Fetching data:', error);
            }
        }
    }, [token])

  return (
    <div className='staffs'>
        <Helmet>
            <title>Dashboard - Staff</title>
            <meta name="viewport" content="width=2500,initial-scale=1,shrink-to-fit=no"/>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div id='row1'>
                <div id='row'>
                    <div className='col-3'>
                        <span>My Inbox</span>
                        <div className='row'>
                            <i className="fa-regular fa-message"></i>
                            <span id='fig'>0</span>
                        </div>
                    </div>
                    <div className='col-3'>
                        <span>Current Term</span>
                        <div className='row'>
                            <i className="fa-regular fa-message"></i>
                            <span id='fig'>First Term</span>
                        </div>
                    </div>
                </div>
                <div id='slide'>
                    <div className='col-8'>
                        <div className='row' id='r1'>
                            <span id='sp1'>
                                <i className="fa-regular fa-bell"></i>
                            </span>
                            <div className='col'>Notice Board</div>
                            <span>
                                <i className="fa-solid fa-wrench"></i>
                            </span>
                            <span>
                                {/* <i className="fa-solid fa-angle-up"></i> */}
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span id='splst'>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                        <div className='row' id='r2'>
                            <div className='row' id='roww'>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <span>TEACHERS DAY</span>
                            </div>
                            <div id='space1'></div>
                            <div className='row' id='roww'>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <span>MID-TERM BREAK</span>
                            </div>
                            <div id='imgrw'>
                                <img alt='' src={{}}/>
                            </div>
                            <div className='row' id='roww'>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <span>OPEN DAY</span>
                            </div>
                            <div id='imgrw'>
                                <img alt='' src={{}}/>
                            </div>
                            <div className='row' id='roww'>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <span>EXAMINATIONS</span>
                            </div>
                            <div id='imgrw'>
                                <img alt='' src={{}}/>
                            </div>
                            <div className='row' id='rowwb'>
                                <button><i className="fa-regular fa-eye"></i>view all</button>
                            </div>
                        </div>
                    </div>   
                    <div className='col-4'>
                        <div className='row' id='r12'>
                            <span id='sp1'>
                                <i className="fa-solid fa-envelope-open-text"></i>
                            </span>
                            <div className='col' id='sidecol'>Inbox</div>
                            <span>
                                {/* <i className="fa-solid fa-angle-up"></i> */}
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span id='splst'>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div> 
                        <div className='row' id='r22'>
                            <div className='col'>
                                <span>You currently have no message</span>
                            </div>
                        </div>
                        <div className='row' id='r12'>
                            <span id='sp1'>
                                <i className="fa-regular fa-hand-point-up"></i>
                            </span>
                            <div className='col' id='sidecol'>Quick Links</div>
                            <span>
                                {/* <i className="fa-solid fa-angle-up"></i> */}
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span id='splst'>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                        <div className='row' id='r22'>
                            <div className='col'>
                                <div>
                                    <span>
                                        <i className="fa-solid fa-chart-simple"></i>
                                    </span>
                                    <span>Term Planner</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa-solid fa-volume-low"></i>
                                    </span>
                                    <span>News Letter(P)</span>
                                </div>
                                <br/>
                                <div>
                                    <span>
                                        <i className="fa-solid fa-volume-low"></i>
                                    </span>
                                    <span>News Letter(S)</span>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Staffs;