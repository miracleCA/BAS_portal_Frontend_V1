import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Assets/sidebar.css';

function Studbar() {

    const navigate = useNavigate();

    const onSubmit = async () => {
            localStorage.clear('studtoken');
            localStorage.clear('Student');
            navigate("/student/login");         
    }

  return (
    <div id='sidebar'>
        <div id="links">
            <a href="/student" style={{ backgroundColor: (window.location.pathname == "/student/student" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-gauge"></i>
                </div>
                <span>Dashboard</span>
            </a>
            <a href="/student/assignment" style={{ backgroundColor: (window.location.pathname == "/student/assignment" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-book"></i>
                </div>
                <span>Asssignment</span>
            </a>
            <a href="/student/result" style={{ backgroundColor: (window.location.pathname == "/student/result" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-video"></i>
                </div>
                <span>Result Checking</span>
            </a>
            <a href="/student/bills" style={{ backgroundColor: (window.location.pathname == "/student/bills" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <span>Bills</span>
            </a>
            <a href="/student/assessment" style={{ backgroundColor: (window.location.pathname == "/student/assessment" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-user"></i>
                </div>
                <span>Assessment</span>
            </a>
            <a href="/student/newsletter" style={{ backgroundColor: (window.location.pathname == "/student/newsletter" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-regular fa-newspaper"></i>
                </div>
                <span>Newsletter</span>
            </a>
            <a href="/student/elearning" style={{ backgroundColor: (window.location.pathname == "/student/elearning" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-regular fa-file"></i>
                </div>
                <span>E-learning</span>
            </a>
            {/* <a href="/elearning" style={{ backgroundColor: (window.location.pathname == "/elearning" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-briefcase"></i>
                </div>
                <span>E-learning</span>
            </a> */}
            {/* <a href="/cbt" style={{ backgroundColor: (window.location.pathname == "/cbt" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-envelope-open-text"></i>
                </div>
                <span>CBT</span>
            </a> */}
            {/* <a href="/communication" style={{ backgroundColor: (window.location.pathname == "/communication" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-envelope-open-text"></i>
                </div>
                <span>Communication</span>
            </a> */}
            <a href="/student/account" style={{ backgroundColor: (window.location.pathname == "/student/account" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i class="fa-solid fa-user"></i>
                </div>
                <span>My Account</span>
            </a>
            <a href="/student/login" style={{ backgroundColor: (window.location.pathname == "/student/login" ? "#ced1d4" : "transparent") }} onClick={onSubmit}>
                <div id='col'>
                    <i class="fa-solid fa-power-off"></i>
                </div>
                <span>Logout</span>
            </a>
        </div>
    </div>
  )
}

export default Studbar;