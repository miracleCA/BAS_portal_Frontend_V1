import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useForm } from "react-hook-form";
import Header2 from "../../components/Header2";
import Studbar from '../../components/Studbar';

function Newsletter() {

    const navigate = useNavigate();
    const studtoken = localStorage.getItem('studtoken')

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken]);

  return (
    <div>
        <Helmet>
            <title>Newsletter - Student</title>
        </Helmet>
        <Header2/>
        <div id='main' style={{display: "flex"}}>
            <Studbar/>
            <div id='slide' style={{width: "-webkit-fill-available", marginTop: "1%"}}>
            <div className='col-8'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>Notice Board</div>
                    <span>
                        <i class="fa-solid fa-wrench"></i>
                    </span>
                    <span>
                        {/* <i class="fa-solid fa-angle-up"></i> */}
                        <i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='row' id='r2'>
                    <div className='row' id='roww'>
                        <span>
                            <i class="fa-solid fa-calendar-days"></i>
                        </span>
                        <span>TEACHERS DAY</span>
                    </div>
                    <div id='space1'></div>
                    <div className='row' id='roww'>
                        <span>
                            <i class="fa-solid fa-calendar-days"></i>
                        </span>
                        <span>MID-TERM BREAK</span>
                    </div>
                    <div id='imgrw'>
                        <img alt='' src={{}}/>
                    </div>
                    <div className='row' id='roww'>
                        <span>
                            <i class="fa-solid fa-calendar-days"></i>
                        </span>
                        <span>OPEN DAY</span>
                    </div>
                    <div id='imgrw'>
                        <img alt='' src={{}}/>
                    </div>
                    <div className='row' id='roww'>
                        <span>
                            <i class="fa-solid fa-calendar-days"></i>
                        </span>
                        <span>EXAMINATIONS</span>
                    </div>
                    <div id='imgrw'>
                        <img alt='' src={{}}/>
                    </div>
                    <div className='row' id='rowwb'>
                        <button><i class="fa-regular fa-eye"></i>view all</button>
                    </div>
                </div>
            </div>   
            <div className='col-4'>
                <div className='row' id='r12'>
                    <span id='sp1'>
                        <i class="fa-solid fa-envelope-open-text"></i>
                    </span>
                    <div className='col' id='sidecol'>Inbox</div>
                    <span>
                        {/* <i class="fa-solid fa-angle-up"></i> */}
                        <i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div> 
                <div className='row' id='r22'>
                    <div className='col'>
                        <span>You currently have no message</span>
                    </div>
                </div>
                <div className='row' id='r12'>
                    <span id='sp1'>
                        <i class="fa-regular fa-hand-point-up"></i>
                    </span>
                    <div className='col' id='sidecol'>Quick Links</div>
                    <span>
                        {/* <i class="fa-solid fa-angle-up"></i> */}
                        <i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='row' id='r22'>
                    <div className='col'>
                        <div>
                            <span>
                                <i class="fa-solid fa-chart-simple"></i>
                            </span>
                            <span>Term Planner</span>
                        </div>
                        <div>
                            <span>
                            <i class="fa-solid fa-volume-low"></i>
                            </span>
                            <span>News Letter(P)</span>
                        </div>
                        <br/>
                        <div>
                            <span>
                            <i class="fa-solid fa-volume-low"></i>
                            </span>
                            <span>News Letter(S)</span>
                                </div>
                            </div>
                        </div>
                        </div>   
            </div>
        </div>
    </div>
  )
}

export default Newsletter;