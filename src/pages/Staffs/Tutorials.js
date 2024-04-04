import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Tutorials.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Tutorials() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

  return (
    <div className='Tutorials'>
        <Helmet>
            <title>Tutorials - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='rowcont'>
                <div id='tutrow'>
                    <div className='row' id='r1'>
                        <span id='sp1'>
                            <i class="fa-regular fa-bell"></i>
                        </span>
                        <div className='col'>Add Resources</div>
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
                                    <th>Choose Subject</th>
                                    <th>Choose Class</th>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="quiz" id="quiz" style={{width: "30%"}}>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="quiz" id="quiz" style={{width: "30%"}}>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className='row' id='mr21'>
                            <table>
                                <tr>
                                    <th>Enter Tutorial / Resources Title:</th>
                                    <th for="stab">
                                        <input type="search" id="tab" name="stab" style={{border: "2px solid #e9ebec"}}/>
                                    </th>
                                </tr>
                                <tr>
                                    <td>Attach a file ( MS-Word, PDF or Picture )</td>
                                    <td for="filer">
                                        <input type="file" id="myfile" name="filer"/>
                                    </td>
                                </tr>
                                <tr>
                                    <button>Add Resources</button>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div id='tutrow'>
                    <div className='row' id='r1'>
                        <span id='sp1'>
                            <i class="fa-regular fa-bell"></i>
                        </span>
                        <div className='col'>My Resources</div>
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
                                    <th>S/N</th>
                                    <th>Subject</th>
                                    <th>Title</th>
                                    <th>Class</th>
                                    <th>File</th>
                                    <th id='nth'></th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
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
    </div>
  )
}

export default Tutorials