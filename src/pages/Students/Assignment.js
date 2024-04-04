import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header2 from "../../components/Header2";
import Studbar from '../../components/Studbar';
import '../../Assets/Staffs.css';
import '../../Assets/Assignment.css';
import '../../Assets/Assignment2.css';

import base64 from 'base-64';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');

function Assignment() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken');
  const student = localStorage.getItem('Student')

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [sdata, setSdata] = useState([]);
  const [cdata, setCdata] = useState([]);  

  const [selectedSubject, setSelectedSubject] = useState('')
  const [time, setTime] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [attach_file, setAttach_file] = useState()

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken])

    useEffect(() => {
      const assignments = async () => {
        try {
            const response = await fetch(`https://api.brilliantavenirschools.com/assignment`, {
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
            setData(data);
        }
        catch (error) {
            console.error('Error Fetching data:', error);
        }
      }

      const classes = async () => {
        try {
            const response = await fetch(`https://api.brilliantavenirschools.com/classes`, {
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
            setCdata(data);
        }
        catch (error) {
            console.error('Error Fetching data:', error);
        }
      }

      const studdata = async () => {
        try {
            const response = await fetch(`https://api.brilliantavenirschools.com/pupils/${student}`, {
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
                setSdata(data);
            }
          catch (error) {
            console.error('Error Fetching data:', error);
        }
      }

    const assignments2 = async () => {
      try {
          const response = await fetch(`https://api.brilliantavenirschools.com/assignment2`, {
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
          setData2(data);
      }
      catch (error) {
          console.error('Error Fetching data:', error);
      }
    }
  
      assignments()
      assignments2()
      studdata()
      classes()
    }, [student, studtoken])

    let index = '';
    for (let i = 0; i < cdata.length; i++) {
        if (cdata[i].classname == sdata.class) index = cdata[i]
    }

    const assignment = async (e) => {
      e.preventDefault();
      try {
          const formData = new FormData();   
          formData.append('class', sdata.class);
          formData.append('subject', selectedSubject);
          formData.append('title', title);
          formData.append('date', date);
          formData.append('time', time);
          formData.append('attach_file', attach_file)
          formData.append('student', sdata.firstname + " " + sdata.lastname)
  
        await axios.post('https://api.brilliantavenirschools.com/assignment2', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': studtoken
          },
        })
        window.location.reload();
        /* .then((response) => {
          console.log(response.data);
        }) */
      } catch (error) {
        console.error('Error uploading data:', error);
      }
    };
    
    let num = '1';
    let numm = '1';

    return (
    <div className='Assignment'>
      <Helmet>
        <title>Assignment - Student</title>
      </Helmet>
      <Header2/>
      <div id='main'>
        <Studbar/>
        <div id='rowcont' style={{paddingLeft: "0%"}}>
          <div className='row' id='assrow' style={{display: "unset"}}>
            <div className='row' id='r1'>
              <span id='sp1'>
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <div className='col'>Given Assignments</div>
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
            <div className='row' id='mr2' style={{marginBottom: "0px"}}>
              <div className='row' id='mr21'>
                {/* <div id='split'>
                  <span>Select subject to fetch assignment</span>
                    <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} name="quiz" id="quiz" style={{width: "18%"}}>
                      <option value=""></option>
                      {index.subjectName ?  <option value={index.subjectName}>{index.subjectName}</option> : undefined}
                      {index.subjectName1 ? <option value={index.subjectName1}>{index.subjectName1}</option> : undefined}
                      {index.subjectName2 ? <option value={index.subjectName2}>{index.subjectName2}</option> : undefined}
                      {index.subjectName3 ? <option value={index.subjectName3}>{index.subjectName3}</option> : undefined}
                      {index.subjectName4 ? <option value={index.subjectName4}>{index.subjectName4}</option> : undefined}
                      {index.subjectName5 ? <option value={index.subjectName5}>{index.subjectName5}</option> : undefined}
                      {index.subjectName6 ? <option value={index.subjectName6}>{index.subjectName6}</option> : undefined}
                      {index.subjectName7 ? <option value={index.subjectName7}>{index.subjectName7}</option> : undefined}
                      {index.subjectName8 ? <option value={index.subjectName8}>{index.subjectName8}</option> : undefined}
                      {index.subjectName9 ? <option value={index.subjectName9}>{index.subjectName9}</option> : undefined}
                      {index.subjectName10 ? <option value={index.subjectName10}>{index.subjectName10}</option> : undefined}
                      {index.subjectName11 ? <option value={index.subjectName11}>{index.subjectName11}</option> : undefined}
                      {index.subjectName12 ? <option value={index.subjectName12}>{index.subjectName12}</option> : undefined}
                      {index.subjectName13 ? <option value={index.subjectName13}>{index.subjectName13}</option> : undefined}
                      {index.subjectName14 ? <option value={index.subjectName14}>{index.subjectName14}</option> : undefined}
                      {index.subjectName15 ? <option value={index.subjectName15}>{index.subjectName15}</option> : undefined}
                      {index.subjectName16 ? <option value={index.subjectName16}>{index.subjectName16}</option> : undefined}
                      {index.subjectName17 ? <option value={index.subjectName17}>{index.subjectName17}</option> : undefined}
                      {index.subjectName18 ? <option value={index.subjectName18}>{index.subjectName18}</option> : undefined}
                      {index.subjectName19 ? <option value={index.subjectName19}>{index.subjectName19}</option> : undefined}
                      {index.subjectName20 ? <option value={index.subjectName20}>{index.subjectName20}</option> : undefined}
                    </select>
                </div> */}
              </div>
              <div className='row' id='mr22'>
                <table>
                  <tr>
                    <th>S/N</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>File</th>
                  </tr>
                  {data.map((dat, i) => (
                    <tr key={i}>
                      <td>{dat.class == sdata.class && data.length == 1 ? num : dat.class == sdata.class && data.length > 1 ? num++ : undefined}</td>
                      <td>{dat.class == sdata.class ? dat.class : ""}</td>
                      <td>{dat.class == sdata.class ? dat.subject : ""}</td>
                      <td>{dat.class == sdata.class ? dat.title : ""}</td>
                      <td>{dat.class == sdata.class ? dat.date : ""}</td>
                      <td>{dat.class == sdata.class ? dat.time : ""}</td>
                      <td>{dat.class == sdata.class ? 
                        <a style={{textDecoration: 'none', border: '2px solid', padding: "5px 10px"}} href={`data:${dat.attach_file.contentType};base64, ${Buffer.from(dat.attach_file.data.data).toString('base64')}`} download='filename'>
                          <i class="fa-solid fa-download"></i>
                        </a> 
                        : ""}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
          <div className='row' id='assrow'style={{display: "unset"}}>
                <div className='row' id='r1'>
                  <span id='sp1'>
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  <div className='col'>Submit Assignment</div>
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
                  <form onSubmit={assignment} style={{width: '100%'}}>
                      <div className='row' id='mr21'>
                          <table>
                              <tr>        
                                <th>Choose Class</th>
                                <th>Choose Subject</th>
                              </tr>
                              <tr>
                                  <td>{sdata.class}</td>
                                  <td>
                                    <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} name="quiz" id="quiz" style={{width: "30%"}}>
                                        <option value=""></option>
                                        {index.subjectName ?  <option value={index.subjectName}>{index.subjectName}</option> : undefined}
                                        {index.subjectName1 ? <option value={index.subjectName1}>{index.subjectName1}</option> : undefined}
                                        {index.subjectName2 ? <option value={index.subjectName2}>{index.subjectName2}</option> : undefined}
                                        {index.subjectName3 ? <option value={index.subjectName3}>{index.subjectName3}</option> : undefined}
                                        {index.subjectName4 ? <option value={index.subjectName4}>{index.subjectName4}</option> : undefined}
                                        {index.subjectName5 ? <option value={index.subjectName5}>{index.subjectName5}</option> : undefined}
                                        {index.subjectName6 ? <option value={index.subjectName6}>{index.subjectName6}</option> : undefined}
                                        {index.subjectName7 ? <option value={index.subjectName7}>{index.subjectName7}</option> : undefined}
                                        {index.subjectName8 ? <option value={index.subjectName8}>{index.subjectName8}</option> : undefined}
                                        {index.subjectName9 ? <option value={index.subjectName9}>{index.subjectName9}</option> : undefined}
                                        {index.subjectName10 ? <option value={index.subjectName10}>{index.subjectName10}</option> : undefined}
                                        {index.subjectName11 ? <option value={index.subjectName11}>{index.subjectName11}</option> : undefined}
                                        {index.subjectName12 ? <option value={index.subjectName12}>{index.subjectName12}</option> : undefined}
                                        {index.subjectName13 ? <option value={index.subjectName13}>{index.subjectName13}</option> : undefined}
                                        {index.subjectName14 ? <option value={index.subjectName14}>{index.subjectName14}</option> : undefined}
                                        {index.subjectName15 ? <option value={index.subjectName15}>{index.subjectName15}</option> : undefined}
                                        {index.subjectName16 ? <option value={index.subjectName16}>{index.subjectName16}</option> : undefined}
                                        {index.subjectName17 ? <option value={index.subjectName17}>{index.subjectName17}</option> : undefined}
                                        {index.subjectName18 ? <option value={index.subjectName18}>{index.subjectName18}</option> : undefined}
                                        {index.subjectName19 ? <option value={index.subjectName19}>{index.subjectName19}</option> : undefined}
                                        {index.subjectName20 ? <option value={index.subjectName20}>{index.subjectName20}</option> : undefined}
                                    </select>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <div className='row' id='mr22'>
                          <table>
                              <tr>
                                  <th>Title</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>File</th>
                              </tr>
                              <tr>
                                  <td for="tab">
                                    <input onChange={e => setTitle(e.target.value)} type="search" id="tab" style={{border: "2px solid black"}}/>
                                  </td>
                                  <td for="tab">
                                    <input onChange={e => setDate(e.target.value)} type="date" id="tab" style={{border: "2px solid black"}}/>
                                  </td>
                                  <td for="tab">
                                    <input onChange={e => setTime(e.target.value)} type="time" id="tab" style={{border: "2px solid black"}}/>
                                  </td>
                                  <td for="tab">
                                    <input onChange={e => setAttach_file(e.target.files[0])} type="file" id="tab"/>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <div className='row' id='mr21'>
                          <table>
                              <tr>
                                  <td id='mm'>
                                    <button type='submit' style={{color: "white", borderRadius: "2px"}}>Submit</button>
                                  </td>
                              </tr>
                          </table>
                      </div>
                  </form>
                </div>
              </div>
              <div className='row' id='assrow' style={{display: "unset"}}>
            <div className='row' id='r1'>
              <span id='sp1'>
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <div className='col'>Submitted Assignments</div>
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
            <div className='row' id='mr2' style={{marginBottom: "0px"}}>
              <div className='row' id='mr21'>
                {/* <div id='split'>
                  <span>Select subject to fetch assignment</span>
                    <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} name="quiz" id="quiz" style={{width: "18%"}}>
                      <option value=""></option>
                      {index.subjectName ?  <option value={index.subjectName}>{index.subjectName}</option> : undefined}
                      {index.subjectName1 ? <option value={index.subjectName1}>{index.subjectName1}</option> : undefined}
                      {index.subjectName2 ? <option value={index.subjectName2}>{index.subjectName2}</option> : undefined}
                      {index.subjectName3 ? <option value={index.subjectName3}>{index.subjectName3}</option> : undefined}
                      {index.subjectName4 ? <option value={index.subjectName4}>{index.subjectName4}</option> : undefined}
                      {index.subjectName5 ? <option value={index.subjectName5}>{index.subjectName5}</option> : undefined}
                      {index.subjectName6 ? <option value={index.subjectName6}>{index.subjectName6}</option> : undefined}
                      {index.subjectName7 ? <option value={index.subjectName7}>{index.subjectName7}</option> : undefined}
                      {index.subjectName8 ? <option value={index.subjectName8}>{index.subjectName8}</option> : undefined}
                      {index.subjectName9 ? <option value={index.subjectName9}>{index.subjectName9}</option> : undefined}
                      {index.subjectName10 ? <option value={index.subjectName10}>{index.subjectName10}</option> : undefined}
                      {index.subjectName11 ? <option value={index.subjectName11}>{index.subjectName11}</option> : undefined}
                      {index.subjectName12 ? <option value={index.subjectName12}>{index.subjectName12}</option> : undefined}
                      {index.subjectName13 ? <option value={index.subjectName13}>{index.subjectName13}</option> : undefined}
                      {index.subjectName14 ? <option value={index.subjectName14}>{index.subjectName14}</option> : undefined}
                      {index.subjectName15 ? <option value={index.subjectName15}>{index.subjectName15}</option> : undefined}
                      {index.subjectName16 ? <option value={index.subjectName16}>{index.subjectName16}</option> : undefined}
                      {index.subjectName17 ? <option value={index.subjectName17}>{index.subjectName17}</option> : undefined}
                      {index.subjectName18 ? <option value={index.subjectName18}>{index.subjectName18}</option> : undefined}
                      {index.subjectName19 ? <option value={index.subjectName19}>{index.subjectName19}</option> : undefined}
                      {index.subjectName20 ? <option value={index.subjectName20}>{index.subjectName20}</option> : undefined}
                    </select>
                </div> */}
              </div>
              <div className='row' id='mr22'>
                <table>
                  <tr>
                    <th>S/N</th>
                    <th>Student's Name</th>
                    <th>Subject</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>File</th>
                  </tr>
                  <React.Fragment>
                  {data2.slice(0, 10).map((dat2, i) => (
                    dat2.student == sdata.firstname + ' ' + sdata.lastname ?
                    <tr key={i}>
                      <td>{dat2 && data2.length == 1 ? numm : dat2 && data2.length > 1 ? numm++ : undefined}</td>
                      <td>{dat2.student}</td>
                      <td>{dat2.subject}</td>
                      <td>{dat2.title}</td>
                      <td>{dat2.date}</td>
                      <td>{dat2.time}</td>
                      <td>
                        <a style={{textDecoration: 'none', border: '2px solid', padding: "5px 10px"}} href={`data:${dat2.attach_file.contentType};base64, ${Buffer.from(dat2.attach_file.data.data).toString('base64')}`} download='filename'>
                          <i class="fa-solid fa-download"></i>
                        </a>
                      </td>
                    </tr> : ''
                  ))}
                  </React.Fragment>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignment;