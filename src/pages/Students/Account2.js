import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header2 from "../../components/Header2";
import Studbar from '../../components/Studbar';

import '../../Assets/Staffs.css';
import '../../Assets/Account2.css';

function Account() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken')

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken])

  return (
    <div className='Account' id='Account'>
      <Helmet>
        <title>Account - Student</title>
      </Helmet>
        <Header2/>
        <div id='main'>
            <Studbar/>
            <div id='row1'>
                <div className='col-8'>
                  <div style={{backgroundColor: "blue", padding: "10px 5px", border: "2px solid white", height: "50px", color: "white", fontWeight: "bold"}}>Personal Details</div>
                  <table>
                    <tr>
                      <th>SURNAME</th>
                      <th>DATE OF BIRTH</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>FIRSTNAME</th>
                      <th>LGA</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>OTHERNAMES</th>
                      <th>CLASS</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>GENDER</th>
                      <th>SUB CLASS</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                  </table>
                </div>
                <div className='col-4'>
                  <div style={{backgroundColor: "blue", padding: "10px 5px", border: "2px solid white", height: "50px", color: "white", fontWeight: "bold"}}>Guardian Details</div>
                  <table>
                    <tr>
                      <th>SURNAME</th>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>FIRSTNAME</th>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>PHONE NUMBER</th>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>RELATIONSHIP</th>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                  </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account;