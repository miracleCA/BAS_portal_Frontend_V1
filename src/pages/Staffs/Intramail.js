import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Intramail.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Intramail() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

  return (
    <div className='Intramail'>
        <Helmet>
            <title>Intramail - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='mainrow'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-solid fa-inbox"></i>
                    </span>
                    <div className='col'>Inbox()</div>
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
                        <div id='flatrel'>
                            <span id='flat'>
                                <button><i class="fa-solid fa-envelope"></i>Inbox</button>
                                <button><i class="fa-solid fa-envelope"></i>Outbox</button>
                                <button><i class="fa-solid fa-envelope"></i>Compose</button>
                            </span>
                            <span>
                                <button id='delbtn'><i class="fa-solid fa-trash-can"></i>Delete</button>
                            </span>
                        </div>
                        <div id='flatrel'>
                            <span id='flat'>
                                <div>
                                    <span>
                                        <select name="cwork" id="cwork" style={{width: "100%"}}>
                                            <option value="CRS">Staff 1</option>
                                            <option value="CRS">Staff 2</option>
                                            <option value="CRS">Staff 3</option>
                                            <option value="CRS">Staff 4</option>
                                        </select>
                                    </span>
                                    <span>records per page</span>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <span>Search:  </span>
                                    <input type="search" id="search" name="srcfile" style={{border: "2px solid #e9ebec"}}/>
                                </div>
                            </span>
                        </div>
                        <table>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intramail