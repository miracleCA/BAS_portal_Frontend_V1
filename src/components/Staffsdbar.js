import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Assets/sidebar.css';

function Staffsdbar() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('user');
    const [data, setData] = useState('');

    const onSubmit = async () => {
            localStorage.clear('token');
            localStorage.clear('user');
            navigate("/staff/login");         
    }

    useEffect(() => {
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
                    setData(data);
                }
            catch (error) {
                console.error('Error Fetching data:', error);
            }
        }
        mngdat()
    }, [token, userid]);

  return (
    <div id='sidebar'>
        <div id="links">
            <a href="/staff" style={{ backgroundColor: (window.location.pathname == "/staff" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-gauge"></i>
                </div>
                <span>Notice Board</span>
            </a>
            <a href="/staff/Mngstudents" style={{ backgroundColor: (window.location.pathname == "/staff/Mngstudents" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-user"></i>
                </div>
                <span>{data.role == "Admin" ? 'Manage people' : 'Manage Students'}</span>
            </a>
            <a href="/staff/assignment" style={{ backgroundColor: (window.location.pathname == "/staff/assignment" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-regular fa-newspaper"></i>
                </div>
                <span>Assignment</span>
            </a>
            <a href="/staff/holidayproject" style={{ backgroundColor: (window.location.pathname == "/staff/holidayproject" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-regular fa-file"></i>
                </div>
                <span>Holiday Project</span>
            </a>
            <a href="/staff/tutorials" style={{ backgroundColor: (window.location.pathname == "/staff/tutorials" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-book"></i>
                </div>
                <span>Tutorials / Resources</span>
            </a>
            <a href="/staff/liveclass" style={{ backgroundColor: (window.location.pathname == "/staff/liveclass" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-video"></i>
                </div>
                <span>Live class</span>
            </a>
            {/* <a href="/staff/intramail" style={{ backgroundColor: (window.location.pathname == "/staff/intramail" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <span>Intra Mail</span>
            </a> */}
            <a href="/staff/quiz" style={{ backgroundColor: (window.location.pathname == "/staff/quiz" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-laptop"></i>
                </div>
                <span>Quiz / E-Learning</span>
            </a>
            <a href="/staff/holiday" style={{ backgroundColor: (window.location.pathname == "/staff/holiday" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <span>Holiday</span>
            </a>
            <a href="/staff/leave" style={{ backgroundColor: (window.location.pathname == "/staff/leave" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <span>Leave Application</span>
            </a>
            <a href="/staff/user" style={{ backgroundColor: (window.location.pathname == "/staff/user" ? "#ced1d4" : "transparent") }}>
                <div id='col'>
                    <i className="fa-solid fa-user"></i>
                </div>
                <span>My Account</span>
            </a>
            <a href="/staff/login" style={{ backgroundColor: (window.location.pathname == "/staff/login" ? "#ced1d4" : "transparent") }} onClick={onSubmit}>
                <div id='col'>
                    <i className="fa-solid fa-power-off"></i>
                </div>
                <span>Logout</span>
            </a>
        </div>
    </div>
  )
}

export default Staffsdbar;