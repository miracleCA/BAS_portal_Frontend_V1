import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Holiday.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Holiday() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

  return (
    <div className='Holiday'>
        <Helmet>
            <title>Holiday - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='mainrow'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>Holidays</div>
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
                                <th>Holiday Name</th>
                                <th>Duration</th>
                                <th>Date</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Holiday