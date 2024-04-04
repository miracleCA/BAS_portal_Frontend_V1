import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';
import '../../Assets/Account.css';

function Account() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const userid = localStorage.getItem('user');

    const [data, setData] = useState('');

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
    }, [token, userid])

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);

    const [firstElement, firstElementShow] = useState(true);
    const [secondElement, secondElementShow] = useState(false);
    const [thirdElement, thirdElementShow] = useState(false);
    const [fourthElement, fourthElementShow] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);

  return (
    <div className='Account'>
        <Helmet>
            <title>Account - Staff</title>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='container'>
                <div className='col-4'>
                    <img alt=''/>
                    <h3 id='idd'>General Information</h3>
                    <div id='ond'>
                        <span id='hdtxt'><i class="fa-solid fa-briefcase"></i>Position</span>
                        <span id='txtcon'>{data.role}</span>
                    </div>
                    <div id='ond'>
                        <span id='hdtxt'><i class="fa-solid fa-building"></i>Organization</span>
                        <span id='txtcon'>BRILLIANT AVENIR SCHOOLS</span>
                    </div>
                    <h3 id='idd'>Contact Information</h3>
                    <div id='ond'>
                        <span id='hdtxt'><i class="fa-solid fa-phone"></i>Phone</span>
                        <span id='txtcon'>{data.phone}</span>
                    </div>
                    <div id='ond'>
                        <span id='hdtxt'><i class="fa-solid fa-mobile"></i>Mobile</span>
                        <span id='txtcon'>{data.phone}</span>
                    </div>
                    <div id='ond'>
                        <span id='hdtxt'><i class="fa-solid fa-envelope"></i>E Mail</span>
                        <span id='txtcon'>{data.email}</span>
                    </div>
                    <div id='ond'>
                        <span id='hdtxt'><i class="fa-solid fa-location-dot"></i>Address</span>
                        <span id='txtcon'>{data.address}</span>
                    </div>
                </div>
                {/* <div className='col-8'>
                    <div className='row' id='carrier'>
                        <div className='row' id='straight'>
                            <button id='ind' style={{ color: (buttonActive !== "B" && buttonActive !== "C" ? "#285e8e" : "black"), border: (buttonActive !== "B" && buttonActive !== "C" ? "2px solid #285e8e" : "1px solid #ced1d4") }} onClick={() => {setButtonActive("A"); secondElementShow(false);thirdElementShow(false);fourthElementShow(false);firstElementShow(true)}}><i class="fa-solid fa-user"></i>Profile</button>
                            <button id='ind' style={{ color: (buttonActive == "B" ? "#285e8e" : "black"), border: (buttonActive == "B" ? "2px solid #285e8e" : "1px solid #ced1d4") }} onClick={() => {setButtonActive("B"); secondElementShow(true);thirdElementShow(false);fourthElementShow(false);firstElementShow(false)}}><i class="fa-solid fa-image"></i>Profile Pic</button>
                            <button id='ind' style={{ color: (buttonActive == "C" ? "#285e8e" : "black"), border: (buttonActive == "C" ? "2px solid #285e8e" : "1px solid #ced1d4") }} onClick={() => {setButtonActive("C"); secondElementShow(false);thirdElementShow(true);fourthElementShow(false);firstElementShow(false)}}><i class="fa-solid fa-user"></i>Edit Account</button>
                            <button id='ind' style={{ color: (buttonActive == "D" ? "#285e8e" : "black"), border: (buttonActive == "D" ? "2px solid #285e8e" : "1px solid #ced1d4") }} onClick={() => {setButtonActive("D"); secondElementShow(false);thirdElementShow(true);fourthElementShow(true);firstElementShow(false)}}><i class="fa-solid fa-lock"></i>Change Password</button>
                        </div>
                        { firstElement? 
                            <div className='row' id='conte1'>
                                <div id='ond'>
                                    <span id='id'>First Name</span>
                                    <span>Samuel</span>
                                </div>
                                <div id='ond'>
                                    <span id='id'>Last Name</span>
                                    <span>Nnecha</span>
                                </div>
                                <div id='ond'>
                                    <span id='id'>Gender</span>
                                    <span></span>
                                </div>
                            </div>
                        : null}
                        { secondElement? 
                            <div className='row' id='conte2'>
                                <div id='ond'>
                                    <span>Change your profile picture.</span>
                                    <span for="file">
                                        <input type="file" id="file" name="file"/>
                                    </span>
                                </div>
                            </div>
                        : null}
                        { thirdElement? 
                            <div className='row' id='conte3'>
                                <div>
                                    
                                </div>
                            </div>
                        : null}
                        { fourthElement? 
                            <div className='row' id='conte4'>
                                <table>
                                    <tr>
                                        <th>Old Password:</th>
                                        <td>
                                            <input type="search" id="search" name="srcfile" style={{border: "2px solid #e9ebec"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>New Password:</th>
                                        <td>
                                            <input type="search" id="search" name="srcfile" style={{border: "2px solid #e9ebec"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Re-type New Password:</th>
                                        <td>
                                            <input type="search" id="search" name="srcfile" style={{border: "2px solid #e9ebec"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <button>Save</button>
                                    </tr>
                                </table>
                            </div>
                        : null}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Account;