import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useForm } from "react-hook-form";
import Header2 from '../../components/Header2';
import Studbar from '../../components/Studbar';

import '../../Assets/Staffs.css';
import '../../Assets/Students.css';

function Students() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken')
  const userid = localStorage.getItem('Student')
  const [staffdata, setStaffData] = useState();

  useEffect(() => {
      const staffdat = async () => {
          try {
              const response = await fetch(`https://api.brilliantavenirschools.com/pupils/${userid}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': studtoken
              }
              });
              if (!response.ok) {
              throw new Error('ERROR!!!');
              }
              const data = await response.json();   
              setStaffData(data);   
              console.log(data);    
          }
          catch (error) {
              console.error('Error Fetching data:', error);
          }
      }

      staffdat()

  }, [studtoken, userid]);

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken]);

  return (
    <div id='Students'>
      <Helmet>
        <title>Dashboard - Student</title>
        <meta name="viewport" content="width=2500,initial-scale=1,shrink-to-fit=no"/>
      </Helmet>
      <Header2/>
      <div id='main'>
        <Studbar/>
        <div id='row1'>
          <div id='fris'>
            <i class="fa-solid fa-house"></i>Dashboard
          </div>
          {staffdata ? (
            <div id='coont'>
              <div id='cont1'>
                <span id='passp'>
                  <img alt='' src={{}}/>
                </span>
                <span>{staffdata.firstname + " " + staffdata.lastname}<br/>{staffdata.class}</span>
              </div>
              <div id='cont2'>
                <a href='/student/result'>
                  <span style={{backgroundColor: "#F0AD4E", marginBottom: "10px"}}>
                    <i class="fa-solid fa-chart-pie"></i>Check Results
                  </span>
                </a>
                <span style={{backgroundColor: "#D9534F", marginTop: "10px"}}>
                  <i class="fa-solid fa-newspaper"></i>Newsletter
                </span>
              </div>
              <div id='cont2'>
                <span style={{backgroundColor: "#62ACEC", marginBottom: "10px"}}>
                  <i class="fa-solid fa-eye"></i>View Profile
                </span>
                <a href='/student/assignment'>
                  <span style={{backgroundColor: "#62ACEC", marginTop: "10px"}}>
                    <i class="fa-solid fa-house-laptop"></i>Assignment
                  </span>
                </a>
              </div>
              <div id='cont2'>
                <span style={{backgroundColor: "#5CB85C", marginBottom: "10px"}}>
                  <i class="fa-solid fa-money-bill"></i>View Bills
                </span>
                <span style={{backgroundColor: "#5CB85C", marginTop: "10px"}}>
                  <i class="fa-solid fa-book"></i>E Library
                </span>
              </div>
              <div id='cont2'>
                <span style={{backgroundColor: "rgb(240, 173, 78)", marginBottom: "10px"}}>
                  <i class="fa-solid fa-money-bill"></i>Assessment
                </span>
                <span style={{backgroundColor: "transparent", color: "transparent", marginTop: "10px"}}>
                  <i class="fa-solid fa-book"></i>E Learning
                </span>
              </div>
            </div>
          ) : ""}
        </div>
      </div>
    </div>
  )
}

export default Students;