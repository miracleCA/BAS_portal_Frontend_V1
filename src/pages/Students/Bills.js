import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useForm } from "react-hook-form";
import Header2 from "../../components/Header2";
import Studbar from '../../components/Studbar';

import '../../Assets/Staffs.css';
import '../../Assets/Bills.css';

function Bills() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken')

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken])

  return (
    <div className='Bills'>
      <Helmet>
        <title>Bills - Student</title>
      </Helmet>
      <Header2/>
      <div id='main'>
        <Studbar/>
        <div id='tabcarr' style={{margin: "1%"}}>
          <table>
            <tr>
              <th>Title</th>
              <th>Class</th>
              <th>Year</th>
              <th>Term</th>
              <th>Amount</th>
              <th>Invoice</th>
            </tr>
            <tr>
              <th>
                {/* <input type="search" id="class" name="class" style={{border: "2px solid grey", margin: "0px 10px"}}/> */}
              </th>
              <th>
                {/* <select name="class" id="class" style={{width: "80%", margin: "0px 10px"}}>
                  <option value=""></option>
                  <option value="CRS"></option>
                  <option value="CRS"></option>
                  <option value="CRS"></option>
                </select> */}
              </th>
              <th>
                {/* <select name="year" id="year" style={{width: "80%", margin: "0px 10px"}}>
                  <option value=""></option>
                  <option value="CRS"></option>
                  <option value="CRS"></option>
                  <option value="CRS"></option>
                </select> */}
              </th>
              <th>
                {/* <select name="term" id="term" style={{width: "80%", margin: "0px 10px"}}>
                  <option value=""></option>
                  <option value="istterm">First term</option>
                  <option value="2ndterm">Second term</option>
                  <option value="3rdterm">Third term</option>
                </select> */}
              </th>
              <th>
                {/* <input type="search" id="amount" name="amount" style={{border: "2px solid grey", margin: "0px 10px"}}/> */}
              </th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Bills;