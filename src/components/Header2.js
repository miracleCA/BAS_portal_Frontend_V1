import React from 'react';
import { useState, useEffect } from 'react';
import Logo from "../Images/Logo.png";
import Nav from "../Icons/Nav.png";
import Mail from "../Icons/Mail.png";
import User from "../Icons/User.png";
import '../Assets/Header.css';

function Header2() {

    const studtoken = localStorage.getItem('studtoken');
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

  return (
    <div className='header'>
        <div id='schooldata'>
            <img id='nav' alt='' src={Nav}/>
            <img alt='' src={Logo}/>
            <div id='name'>
                <h2>BRILLIANT AVENIR SCHOOLS</h2>
                <span>No 42 senator onyenwuchi street, Nkwo Orji, Owerri</span>
            </div>
        </div>
        {staffdata ? (
            <div id='staffdata'>
                <img alt='' src={Mail}/>
                <div id='authname'>
                    <div>welcome</div>
                    <div id='staffname'>{staffdata.firstname + " " + staffdata.lastname}</div>
                </div>
                <img alt='' src={User}/>
            </div>
        ) : ""}
    </div>
  )
}

export default Header2;