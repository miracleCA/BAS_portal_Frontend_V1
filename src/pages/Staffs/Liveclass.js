import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Liveclass.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Liveclass() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);
    
  return (
    <div className='Liveclass'>
        <Helmet>
            <title>Liveclass - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='Liverow'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>Manage Live-Class</div>
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
                <div className='row' id='mr2'>
                    <div className='row' id='mr21'>
                        <img alt=''/>
                        <div>Add a new live-class</div>
                        <table>
                            <tr>
                                <th>Classroom Title:</th>
                                <td for="srcfile">
                                    <input type="search" id="search" name="srcfile" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>This Class Holds Every</th>
                                <td>
                                    <select name="cwork" id="cwork" style={{width: "20%"}}>
                                        <option value="CRS">Monday</option>
                                        <option value="CRS">Tuesday</option>
                                        <option value="CRS">Wednesday</option>
                                        <option value="CRS">Thursday</option>
                                        <option value="CRS">Friday</option>
                                        <option value="CRS">Saturday</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Start Time</th>
                                <td for="time">
                                    <input type="time" id="search" name="time" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Agenda:</th>
                                <td for="search">
                                    <input type="search" id="search" name="srcfile" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Keep attendee in waiting room:</th>
                                <td>
                                    <select name="cwork" id="cwork" style={{width: "20%"}}>
                                        <option value="CRS">Monday</option>
                                        <option value="CRS">Tuesday</option>
                                        <option value="CRS">Wednesday</option>
                                        <option value="CRS">Thursday</option>
                                        <option value="CRS">Friday</option>
                                        <option value="CRS">Saturday</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Instructor Name:</th>
                                <td for="search">
                                    <input type="search" id="search" name="srcfile" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Classroom Name</th>
                                <th>Password</th>
                                <th>Holds On</th>
                                <th>Time</th>
                                <th>Attendees</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Liveclass;