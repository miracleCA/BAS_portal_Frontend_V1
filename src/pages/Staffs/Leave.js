import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Leave.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Leave() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

  return (
    <div className='Leave'>
        <Helmet>
            <title>Leave - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='mainrow'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>Apply for Leave</div>
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
                        <table>
                            <tr>
                                <th>Leave Type:</th>
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
                                <th>Subject:</th>
                                <td for="search">
                                    <input type="search" id="search" name="srcfile" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Leave From:</th>
                                <td for="date">
                                    <input type="date" id="search" name="date" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Leave Till</th>
                                <td for="date">
                                    <input type="date" id="search" name="date" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Reason For Leave</th>
                                <td for="search">
                                    <input type="search" id="search" name="srcfile" style={{width: "20%", border: "2px solid #e9ebec"}}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Application File</th>
                                <td for="file">
                                    <input type="file" id="file" name="srcfile" style={{width: "20%"}}/>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id='mr2' style={{padding: "1%"}}>
                        <button style={{padding: "5px 12px", border: "none", backgroundColor: "#36a9e1", color: "white", borderRadius: "2px"}}>Apply</button>
                    </div>
                </div>
                <div className='row' id='mr21'>
                    <div>My Leave History</div>
                    <table>
                        <tr>
                            <th style={{width: "fit-content"}}>S/N</th>
                            <th style={{width: "fit-content"}}>Leave Type</th>
                            <th style={{width: "fit-content"}}>File</th>
                            <th style={{width: "fit-content"}}>Subject</th>
                            <th style={{width: "fit-content"}}>Reason For Leave</th>
                            <th style={{width: "fit-content"}}>Leave From</th>
                            <th style={{width: "fit-content"}}>Leave Till</th>
                            <th style={{width: "fit-content"}}>Status</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Leave;