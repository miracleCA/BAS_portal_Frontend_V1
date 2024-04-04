import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header2 from "../../components/Header2";
import Studbar from '../../components/Studbar';
import '../../Assets/Staffs.css';
import '../../Assets/Assignment.css';
import '../../Assets/Assignment2.css'

import {Buffer} from 'buffer';
Buffer.from('anything','base64');

function Result() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken')
  const student = localStorage.getItem('Student');

  const [data, setData] = useState([])

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
        
    const mngdat = async () => {
      try {
          const response = await fetch('https://api.brilliantavenirschools.com/results', {
            method: 'GET',
            headers: {
              'Authorization': studtoken
            }
          });
          if (!response.ok) {
            throw new Error('ERROR!!!');
          }
          const data = await response.json();   
              setData(data);
              console.log(data)
          }
      catch (error) {
          console.error('Error Fetching data:', error);
      }
  }

  mngdat()
  }, [navigate, studtoken])

  return (
    <div id='Result'>
      <Helmet>
        <title>Result - Student</title>
      </Helmet>
      <Header2/>
      <div id='main' style={{display: "flex"}}>
        <Studbar/>
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
              <div className='row' id='mr21'></div>
                <div className='row' id='mr21'>
                  <table>
                    {data.map((resu, i) => (
                      resu.pupil == student ?
                        <React.Fragment key={i}>
                          <tr>
                            <th>Download your result</th>
                            <th>
                              <span for="file">
                                <a style={{color: "blue"}} rel='noreferrer'  target="_blank" href={`data:${resu.file.contentType};base64, ${Buffer.from(resu.file.data.data).toString('base64')}`} download='filename'>Click to Download Result</a>
                              </span>
                            </th>
                          </tr>
                          </React.Fragment> : ""
                    ))}
                  </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;