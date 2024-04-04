import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';
import '../../Assets/Assignment.css';

import base64 from 'base-64';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');

function Assignment() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('user');

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [mdata, setMdata] = useState([]);
    const [sdata, setSdata] = useState([]);

    const [query, setQuery] = useState('')
    const [query1, setQuery1] = useState('')
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [attach_file, setAttach_file] = useState()

   /*  function convert(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result)
        setAttach_file(reader.result)
      }
      reader.onerror = error => {
        console.log(error)
      }
    } */

    useEffect(() => {
      if (!token) {
          navigate("/staff/login");
      }
  }, [navigate, token]);

  useEffect(() => {
    const assignments = async () => {
      try {
          const response = await fetch(`https://api.brilliantavenirschools.com/assignment`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token
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

    const mngdat = async () => {
      try {
          const response = await fetch(`https://api.brilliantavenirschools.com/staffs/${userid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            }
          });
          if (!response.ok) {
            throw new Error('ERROR!!!');
          }
          const data = await response.json();   
              setMdata(data);
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
            'Authorization': token
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
  mngdat()
  }, [token, userid]);

  const assignment = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('class', selectedClass);
        formData.append('subject', selectedSubject);
        formData.append('title', title);
        formData.append('date', date);
        formData.append('time', time);
        formData.append('attach_file', attach_file)
        formData.append('teacher', userid)

      await axios.post('https://api.brilliantavenirschools.com/assignment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token
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
          <title>Assignment - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='rowcont'>
              <div className='row' id='assrow'>
                <div className='row' id='r1'>
                  <span id='sp1'>
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  <div className='col'>Add Assignment</div>
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
                  <form onSubmit={assignment} style={{width: "100%"}}>
                      <div className='row' id='mr21'>
                          <table>
                              <tr>
                                  <th>Choose Class</th>
                                  <th>Choose Subject</th>
                              </tr>
                              <tr>
                                  <td>
                                    <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} id="manage" style={{width: "40%"}}>
                                      <option value=""></option>
                                      { mdata.class1 ? <option value={mdata.class1}>{mdata.class1}</option> : undefined}
                                      { mdata.class2 ? <option value={mdata.class2}>{mdata.class2}</option> : undefined}
                                      { mdata.class3 ? <option value={mdata.class3}>{mdata.class3}</option> : undefined}
                                      { mdata.class4 ? <option value={mdata.class4}>{mdata.class4}</option> : undefined}
                                      { mdata.class5 ? <option value={mdata.class5}>{mdata.class5}</option> : undefined}
                                    </select>
                                  </td>
                                  <td>
                                    <select value={selectedSubject} onChange={(e) =>setSelectedSubject(e.target.value)} name="quiz" id="quiz" style={{width: "40%"}}>
                                      <option value=""></option>
                                      <option value="Mathematics">Mathematics</option>
                                      <option value="English Grammar">English Grammar</option>
                                      <option value="Verbal Reasoning">Verbal Reasoning</option>
                                      <option value="Science">Science</option>
                                      <option value="History">History</option>
                                      <option value="CRK">CRK</option>
                                      <option value="Creative and Cultural Art">Creative and Cultural Art</option>
                                      <option value="Social studies">Social studies</option>
                                      <option value="Physical and Health Education">Physical and Health Education</option>
                                      <option value="Diction">Diction</option>
                                      <option value="Home Economics">Home Economics</option>
                                      <option value="Agricultural science">Agricultural science</option>
                                      <option value="Basic Science and technology">Basic Science and technology</option>
                                      <option value="Quantitative Reasoning">Quantitative Reasoning</option>
                                      <option value="Computer-ICT">Computer-ICT</option>
                                      <option value="Civic Education">Civic Education</option>
                                      <option value="Literacy">Literacy</option>
                                      <option value="Numeracy">Numeracy</option>  
                                      <option value="Social habit">Social habit</option>
                                      <option value="Health habit">Health habit</option>
                                      <option value="Colouring">Colouring</option>
                                      <option value="Calligraphy">Calligraphy</option>
                                      <option value="science">science</option>  
                                      <option value="C.R.S">C.R.S</option>
                                      <option value="practical life">practical life</option>
                                      <option value="Verbal reasoning">Verbal reasoning</option>
                                      <option value="ICT">ICT</option>
                                      <option value="knowledge of the world">knowledge of the world</option>  
                                      <option value="C.r.k(oral)">C.r.k(oral)</option>
                                      <option value="Rhymes and songs(oral)">Rhymes and songs(oral)</option>
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
                              </tr>
                              <tr>
                                  <td>
                                    <input type="text" id="tab" style={{border: "1px solid black", justifyContent: "left"}} onChange={e => setTitle(e.target.value)}/>
                                  </td>
                                  <td>
                                    <input type='date' id="tab" style={{border: "1px solid black", justifyContent: "left"}} onChange={e => setDate(e.target.value)}/>
                                  </td>
                                  <td>
                                    <input type="time" id="tab" style={{border: "1px solid black", justifyContent: "left"}} onChange={e => setTime(e.target.value)}/>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <div className='row' id='mr21'>
                          <table>
                              <tr>
                                  <th>Attach a file ( MS-Word, PDF or Picture )</th>
                                  <th>
                                    <span for="file">
                                        <input type="file" id="myfile" name="file" onChange={e => setAttach_file(e.target.files[0])} />
                                    </span>
                                  </th>
                              </tr>
                              <tr>
                                  <td id='mm'>
                                    <button type='submit' style={{color: "white", borderRadius: "2px"}}>Add Assignment</button>
                                  </td>
                              </tr>
                          </table>
                      </div>
                  </form>
                </div>
              </div>
              <div className='row' id='assrow'>
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
                  <div className='row' id='mr2'>
                      <div className='row' id='mr21'>
                          <div id='split' style={{padding: "1%",}}>
                            <span style={{height: '40px', fontWeight: '600'}}>Select class to fetch given Assignments</span>
                              {mdata.role == 'Admin' ?
                                <select value={query} onChange={(e) => setQuery(e.target.value)} id="manage" style={{width: "20%", fontWeight: '600'}}>
                                      <option value=""></option>
                                      <option value="Creche Teletubbies">Creche Teletubbies</option>
                                      <option value="Pre-Nursery Teletubbies">Pre-Nursery Teletubbies</option>
                                      <option value="Nursery 1 Cherry">Nursery 1 Cherry</option>
                                      <option value="Nursery 2 Lavender">Nursery 2 Lavender</option>
                                      <option value="Nursery 3 Almonds">Nursery 3 Almonds</option>
                                      <option value="Grade 1 Unicorn">Grade 1 Unicorn</option>
                                      <option value="Grade 2 Tulip">Grade 2 Tulip</option>
                                      <option value="Grade 3 Explorer">Grade 3 Explorer</option>
                                      <option value="Grade 4 Comets">Grade 4 Comets</option>
                                      <option value="Grade 5">Grade 5</option>
                                  </select> :
                                  <select value={query} onChange={(e) => setQuery(e.target.value)} id="manage" style={{width: "20%", fontWeight: '600'}}>
                                    { mdata.class1 ? <option value={mdata.class1}>{mdata.class1}</option> : undefined}
                                    { mdata.class2 ? <option value={mdata.class2}>{mdata.class2}</option> : undefined}
                                    { mdata.class3 ? <option value={mdata.class3}>{mdata.class3}</option> : undefined}
                                    { mdata.class4 ? <option value={mdata.class4}>{mdata.class4}</option> : undefined}
                                    { mdata.class5 ? <option value={mdata.class5}>{mdata.class5}</option> : undefined}
                                  </select>
                                }
                          </div>
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
                              <React.Fragment>
                                {data.filter((dat, i) => {
                                  if (query == "") {
                                      return ""
                                  }
                                  else if ((dat.class).toLowerCase().includes(query.toLowerCase())) {
                                      return dat
                                  }
                                })
                                .slice(0, 10).map((dat, i) => (
                                  <tr key={i}>
                                    <td>{dat && data.length == 1 ? num : dat && data.length > 1 ? num++ : undefined}</td>
                                    <td>{dat.class}</td>
                                    <td>{dat.subject}</td>
                                    <td>{dat.title}</td>
                                    <td>{dat.date}</td>
                                    <td>{dat.time}</td>
                                    <td>
                                      <a style={{textDecoration: 'none', border: '2px solid', padding: "5px 10px"}} href={`data:${dat.attach_file.contentType};base64, ${Buffer.from(dat.attach_file.data.data).toString('base64')}`} download='filename'>
                                        <i class="fa-solid fa-download"></i>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </React.Fragment>
                          </table>
                      </div>
                </div>
              </div>
              <div className='row' id='assrow'>
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
                  <div className='row' id='mr2'>
                      <div className='row' id='mr21'>
                          <div id='split' style={{padding: "1%",}}>
                            <span style={{height: '40px', fontWeight: '600'}}>Select class to fetch Submissions</span>
                              {mdata.role == 'Admin' ?
                                <select value={query1} onChange={(e) => setQuery1(e.target.value)} id="manage" style={{width: "20%", fontWeight: '600'}}>
                                      <option value=""></option>
                                      <option value="Creche Teletubbies">Creche Teletubbies</option>
                                      <option value="Pre-Nursery Teletubbies">Pre-Nursery Teletubbies</option>
                                      <option value="Nursery 1 Cherry">Nursery 1 Cherry</option>
                                      <option value="Nursery 2 Lavender">Nursery 2 Lavender</option>
                                      <option value="Nursery 3 Almonds">Nursery 3 Almonds</option>
                                      <option value="Grade 1 Unicorn">Grade 1 Unicorn</option>
                                      <option value="Grade 2 Tulip">Grade 2 Tulip</option>
                                      <option value="Grade 3 Explorer">Grade 3 Explorer</option>
                                      <option value="Grade 4 Comets">Grade 4 Comets</option>
                                      <option value="Grade 5">Grade 5</option>
                                  </select> :
                                  <select value={query1} onChange={(e) => setQuery1(e.target.value)} id="manage" style={{width: "20%", fontWeight: '600'}}>
                                    { mdata.class1 ? <option value={mdata.class1}>{mdata.class1}</option> : undefined}
                                    { mdata.class2 ? <option value={mdata.class2}>{mdata.class2}</option> : undefined}
                                    { mdata.class3 ? <option value={mdata.class3}>{mdata.class3}</option> : undefined}
                                    { mdata.class4 ? <option value={mdata.class4}>{mdata.class4}</option> : undefined}
                                    { mdata.class5 ? <option value={mdata.class5}>{mdata.class5}</option> : undefined}
                                  </select>
                                }
                          </div>
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
                                {data2.filter((dat2, i) => {
                                  if (query1 == "") {
                                      return ""
                                  }
                                  else if ((dat2.class).toLowerCase().includes(query1.toLowerCase())) {
                                      return dat2
                                  }
                                })
                                .slice(0, 10).map((dat2, i) => (
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
                                  </tr>
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