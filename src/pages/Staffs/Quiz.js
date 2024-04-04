import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../../Assets/Quiz.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Quiz() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

  return (
    <div className='Quiz'>
        <Helmet>
            <title>Quiz - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='quizrow'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>Add Quiz</div>
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
                        </div>
                        <form>
                            <div className='row' id='quiz3'>
                                <span>Choose Class</span>
                                <select name="quiz" id="quiz" style={{width: "18%"}}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='row' id='quiz3' style={{backgroundColor: "#e9ebec"}}>
                                <span>Choose Subject</span>
                                <select name="quiz" id="quiz" style={{width: "18%"}}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='row' id='quiz3'>
                                <span>Quiz Type</span>
                                <select name="quiz" id="quiz" style={{width: "18%"}}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='row' id='quiz3' style={{backgroundColor: "#e9ebec"}}>
                                <span for="date">Start Date:</span>
                                <input type="date" id="date" name="date" style={{width: "18%"}}/>
                            </div>
                            <div className='row' id='quiz3'>
                                <span for="date2">End Date:</span>
                                <input type="date" id="date" name="date2" style={{width: "18%"}}/>
                            </div>
                            <div className='row' id='quiz3' style={{backgroundColor: "#e9ebec"}}>
                                <span for="time">Start Time:</span>
                                <input type="time" id="time" name="time" style={{width: "18%"}}/>
                            </div>
                            <div className='row' id='quiz3'>
                                <span for="time2">End Time:</span>
                                <input type="time" id="time" name="time2" style={{width: "18%"}}/>
                            </div>
                            <div className='row' id='lss' style={{backgroundColor: "#e9ebec"}}>
                                <table>
                                    <tr>
                                        <th>Enter Quiz / Practice Test Title:</th>
                                        <td for="quizt">
                                            <input type="search" id="quizt" name="quizt" style={{border: "none"}}/>
                                        </td>
                                        <th>Duration (Duration should be in Minutes e.g 30)</th>
                                        <td for="duration">
                                            <input type="search" id="duration" name="duration" style={{border: "none"}}/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className='row'>
                                <div id='quiz3' style={{backgroundColor: "transparent"}}>
                                        <td>
                                            <button style={{backgroundColor: "#36a9e1", color: "white", border: "none", padding: "5px 10px", borderRadius: "2px"}}>Add Quiz</button>
                                        </td>
                                </div>
                            </div>
                        </form>
                </div>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>My Quiz</div>
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
                    <div style={{margin: 0}}>
                        <div className='row' id='quiz3' style={{margin: 0, border: "1px solid #ced1d4"}}>
                            <span>Select subject to fetch quiz</span>
                            <select name="quiz" id="quiz" style={{width: "18%"}}>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className='row' id='quiz3' style={{margin: 0, border: "1px solid #ced1d4", padding: "0px"}}>
                            <table style={{padding: "1%"}}>
                                <tr>
                                    <th style={{borderRight: "1px solid"}}>S/N</th>
                                    <th style={{borderRight: "1px solid"}}>Subject</th>
                                    <th style={{borderRight: "1px solid"}}>Title</th>
                                    <th style={{borderRight: "1px solid"}}>Add Class</th>
                                    <th>Duration/Type</th>
                                </tr>
                                <tr>
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

export default Quiz;