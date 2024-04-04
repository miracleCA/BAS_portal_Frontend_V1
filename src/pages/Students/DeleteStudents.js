import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header2 from "../../components/Header2";
import Staffsdbar from '../../components/Staffsdbar';

function DeleteStudents() {
    const navigate = useNavigate();
    const token = localStorage.getItem('studtoken')
    const update = localStorage.getItem('update');

    const { id } = useParams();

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
        if (!update) {
          navigate("/staff/login");
        }
    })

  return (
    <div>
        <Helmet>
            <title>Delete Student</title>
        </Helmet>
        <Header2/>
        <div id='main' style={{display: "flex"}}>
            <Staffsdbar/>
            <div id='rowcont' style={{margin: "1%", paddingLeft: "unset"}}>
                <div className='row' id='assrow'style={{display: "unset", margin: "inherit"}}>
                    <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-solid fa-calendar-days"></i>
                    </span>
                    <div className='col'>Results</div>
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
                    <div className='row' id='mr2' style={{width: "-webkit-fill-available"}}>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudents