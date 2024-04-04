import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Classwork.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';
 
import base64 from 'base-64';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');


function HolidayProject() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('user');

    const [data, setData] = useState([]);
    const [mdata, setMdata] = useState([]);

    const [query, setQuery] = useState('')
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [attach_file, setAttach_file] = useState()

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

    useEffect(() => {
        const hpro = async () => {
            try {
                const response = await fetch(`https://api.brilliantavenirschools.com/hproject`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                }
                });
                if (!response.ok) {
                throw new Error('ERROR!!!');
                }
                const data = await response.json(); 
                console.log(data) 
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

        mngdat()
        hpro()
    }, [userid, token])

    const hrpoj = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('class', selectedClass);
            formData.append('subject', selectedSubject);
            formData.append('title', title);
            formData.append('date', date);
            formData.append('time', time);
            formData.append('attach_file', attach_file);
            formData.append('teacher', userid)
    
          await axios.post('https://api.brilliantavenirschools.com/hproject', formData, {
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

  return (
    <div className='Classwork'>
        <Helmet>
            <title>Holiday project - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='rowcont'>
                <div id='classrow'>
                    <div className='row' id='r1'>
                        <span id='sp1'>
                            <i class="fa-regular fa-bell"></i>
                        </span>
                        <div className='col'>Add Holiday project</div>
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
                            <form onSubmit={hrpoj} style={{width: "100%"}}>
                                <table>
                                    <tr>
                                        <th>Choose Class</th>
                                        <th>Choose Subject</th>
                                        <th>Enter Holiday project Title:</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select id="cwork" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                                                <option value=""></option>
                                                { mdata.class1 ? <option value={mdata.class1}>{mdata.class1}</option> : undefined}
                                                { mdata.class2 ? <option value={mdata.class2}>{mdata.class2}</option> : undefined}
                                                { mdata.class3 ? <option value={mdata.class3}>{mdata.class3}</option> : undefined}
                                                { mdata.class4 ? <option value={mdata.class4}>{mdata.class4}</option> : undefined}
                                                { mdata.class5 ? <option value={mdata.class5}>{mdata.class5}</option> : undefined}
                                            </select>
                                        </td>
                                        <td>
                                            <select id="cwork" value={selectedSubject} onChange={(e) =>setSelectedSubject(e.target.value)}>
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
                                        <td for="src">
                                            <input type="search" id="search" style={{width: "30%", border: "2px solid black"}} onChange={e => setTitle(e.target.value)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>File</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type='date' onChange={e => setDate(e.target.value)}/>
                                        </td>
                                        <td>
                                            <input type='time' onChange={e => setTime(e.target.value)}/>
                                        </td>
                                        <td for="imgfile">
                                            <input type="file" id="myfile" onChange={e => setAttach_file(e.target.files[0])}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button type='submit' style={{color: "white", borderRadius: "2px"}}>Add Project</button>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row' id='assrow' style={{width: '100%', marginLeft: '1%', marginRight: '1%'}}>
                  <div className='row' id='r1'>
                    <span id='sp1'>
                      <i class="fa-solid fa-calendar-days"></i>
                    </span>
                    <div className='col'>Holiday Project</div>
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
                            <span style={{height: '40px', fontWeight: '600'}}>Select class to fetch Project</span>
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
                                    <option value=""></option>
                                    { mdata.class1 ? <option value={mdata.class1}>{mdata.class1}</option> : undefined}
                                    { mdata.class2 ? <option value={mdata.class2}>{mdata.class2}</option> : undefined}
                                    { mdata.class3 ? <option value={mdata.class3}>{mdata.class3}</option> : undefined}
                                    { mdata.class4 ? <option value={mdata.class4}>{mdata.class4}</option> : undefined}
                                    { mdata.class5 ? <option value={mdata.class5}>{mdata.class5}</option> : undefined}
                                  </select>
                                }
                          </div>
                      </div>
                      <div className='row' id='mr22' style={{width: '100%', margin: '1%'}}>
                          <table id='mett'>
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
                                      <a style={{textDecoration: 'none', border: '2px solid', padding: "5px "}} href={`data:${dat.attach_file.contentType};base64, ${Buffer.from(dat.attach_file.data.data).toString('base64')}`} download='filename'>
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

export default HolidayProject;