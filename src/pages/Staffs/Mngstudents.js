import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";
import '../../Assets/Mngstudents.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function Mngstudents() {

/*  const [toggle, setToggle] = useState(false);
    const [bg, setBg] = useState(false); */

    const [query, setQuery] = useState("");

    const [selectedgender, setSelectedGender] = useState("");
    const [selectedreligion, setSelectedReligion] = useState("");
    const [selectedclass, setSelectedClass] = useState("");
    const [selectedmarital_status, setSelectedmarital_status] = useState("");

    const [selectedgender1, setSelectedGender1] = useState("");
    const [selectedreligion1, setSelectedReligion1] = useState("");

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [othername, setOthername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [ename, setEname] = useState("");
    const [eaddress, setEaddress] = useState("");    
    const [eemail, setEemail] = useState("");
    const [ephone, setEphone] = useState("");
    const [erelationship, setErelationship] = useState("");
    const [image, setImage] = useState();

    const [firstname1, setFirstname1] = useState("");
    const [lastname1, setLastname1] = useState("");
    const [username1, setUsername1] = useState("");
    const [othername1, setOthername1] = useState("");
    const [password1, setPassword1] = useState("");
    const [email1, setEmail1] = useState("");
    const [address1, setAddress1] = useState("");
    const [state1, setState1] = useState("");
    const [lga1, setLga1] = useState("");
    const [date_of_birth1, setDate_of_birth1] = useState("");
    const [blood_group1, setBlood_group1] = useState("");
    const [ename1, setEname1] = useState("");
    const [eaddress1, setEaddress1] = useState("");    
    const [eemail1, setEemail1] = useState("");
    const [ephone1, setEphone1] = useState("");
    const [erelationship1, setErelationship1] = useState("");
    const [profile_pic, setProfile_pic] = useState();

    const [mdata, setMdata] = useState([]);
    const [pdata, setPdata] = useState([]);
    const [staff, setStaff] = useState([]);
    const [selectedOption, setSelectedOption] = useState([]);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('user');

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
                    setMdata(data);
                }
            catch (error) {
                console.error('Error Fetching data:', error);
            }
        }

        const pupils = async () => {
            try {
                const response = await fetch(`https://api.brilliantavenirschools.com/pupils`, {
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
                    console.log(data); 
                    setPdata(data);
            }
            catch (error) {
                console.error('Error Fetching data:', error);
            }
        }

        const staffs = async () => {
            try {
                const response = await fetch(`https://api.brilliantavenirschools.com/staffs`, {
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
                setStaff(data);
            }
            catch (error) {
                console.error('Error Fetching data:', error);
            }
        }

        mngdat()
        pupils()
        staffs()
    }, [token, userid]);

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
    }, [navigate, token]);


    let countad = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Creche Teletubbies") countad ++;
    }

    let countada = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Pre-Nursery Teletubbies") countada ++;
    }

    let countadb = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Nursery 1 Cherry") countadb ++;
    }

    let countadc = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Nursery 2 Lavender") countadc ++;
    }

    let countadd = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Nursery 3 Almonds") countadd++;
    }
    
    let countade = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Grade 1 Unicorn") countade ++;
    }

    let countadf = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Grade 2 Tulip") countadf++;
    }

    let countadg = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Grade 3 Explorer") countadg ++;
    }

    let countadh = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == "Grade 4 Comets") countadh++;
    }


    let count = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == mdata.class1) count ++;
    }

    let counta = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == mdata.class2) counta ++;
    }

    let countb = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == mdata.class3) countb ++;
    }

    let countc = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == mdata.class4) countc ++;
    }

    let countd = 0;
    for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].class == mdata.class5) countd++;
    }   

        const pupdata = async (e) => {
            e.preventDefault();
            try {
                const formData = new FormData();
                formData.append('firstname', firstname1);
                formData.append('lastname', lastname1); 
                formData.append('othername', othername1); 
                formData.append('username', username1);
                formData.append('password', password1);
                formData.append('email', email1);
                formData.append('address', address1); 
                formData.append('state', state1);
                formData.append('lga', lga1);
                formData.append('gender', selectedgender1); 
                formData.append('date_of_birth', date_of_birth1);
                formData.append('religion', selectedreligion1);
                formData.append('blood_group', blood_group1);
                formData.append('profile_pic', profile_pic);
                formData.append('class', selectedclass);
                formData.append('emergency_contact_name', ename1); 
                formData.append('emergency_contact_address', eaddress1);
                formData.append('emergency_contact_email', eemail1);
                formData.append('emergency_contact_phone', ephone1);
                formData.append('emergency_contact_relationship', erelationship1);

              await axios.post('https://api.brilliantavenirschools.com/pupils', formData, {
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

        const staffdata = async (e) => {
            e.preventDefault();
            try {
                const formData = new FormData();
                formData.append('firstname', firstname);
                formData.append('lastname', lastname); 
                formData.append('othername', othername); 
                formData.append('username', username);
                formData.append('password', password);
                formData.append('phone', phone);
                formData.append('email', email);
                formData.append('role', 'Teacher'); 
                formData.append('address', address); 
                formData.append('state', state);
                formData.append('gender', selectedgender); 
                formData.append('date_of_birth', date_of_birth);
                formData.append('religion', selectedreligion);
                formData.append('blood_group', blood_group);
                formData.append('image', image);
                formData.append('marital_status', selectedmarital_status);
                formData.append('class1', ' ');
                formData.append('class2', ' ');
                formData.append('class3', ' ');
                formData.append('class4', ' ');
                formData.append('class5', ' ');
                formData.append('emergency_contact_person_name', ename); 
                formData.append('emergency_contact_address', eaddress);
                formData.append('emergency_contact_email', eemail);
                formData.append('emergency_contact_phone', ephone);
                formData.append('emergency_contact_relationship', erelationship);

              await axios.post('https://api.brilliantavenirschools.com/staffs', formData, {
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

  return (
    <div className='Mngstudents'>
        <Helmet>
            <title>Manager - Staff</title>
            <meta name="viewport" content="width=2500,initial-scale=1,shrink-to-fit=no"/>
        </Helmet>
        <Header/>
        <div id='main'>
            <Staffsdbar/>
            <div className='row' id='mainrow'>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i className="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>{mdata.role == "Admin" ? "Manager" : "My Students"}</div>
                    <span>
                        <i className="fa-solid fa-wrench"></i>
                    </span>
                    <span>
                        {/* <i className="fa-solid fa-angle-up"></i> */}
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='row' id='mr2'>
                    <div className='row' id='mr21'>
                        {mdata.role == 'Admin' ?
                            <React.Fragment>
                                <form onSubmit={staffdata} encType='multipart/form-data'>
                                    <table id='tabl1'>   
                                            <tr>
                                                <th style={{paddingRight: "10px", margin: "auto"}}>Add Teachers</th>
                                            </tr>
                                            <tr>
                                                <th style={{width: "minContent"}}>Firstname</th>
                                                <th style={{width: "minContent"}}>Lastname</th>
                                                <th style={{width: "minContent"}}>Othername</th>
                                                <th style={{width: "minContent"}}>Username</th>
                                                <th style={{width: "minContent"}}>Password</th>
                                                <th style={{width: "minContent"}}>Email</th>
                                                <th style={{width: "minContent"}}>phone</th>
                                                <th style={{width: "minContent"}}>Address</th>
                                                <th style={{width: "minContent"}}>Gender</th>
                                                <th style={{width: "minContent"}}>State</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input onChange={(e)=>setFirstname(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setLastname(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setOthername(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setUsername(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setPassword(e.target.value)} type='password'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEmail(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setPhone(e.target.value)} type='number'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setAddress(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <select value={selectedgender} onChange={(e) => setSelectedGender(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setState(e.target.value)} type='text'/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{width: "minContent"}}>D.O.B</th>
                                                <th style={{width: "minContent"}}>Religion</th>
                                                <th style={{width: "minContent"}}>Blood Group</th>
                                                <th style={{width: "minContent"}}>Marital Status</th>
                                                <th style={{width: "minContent"}}>E.Name</th>
                                                <th style={{width: "minContent"}}>E.Email</th>
                                                <th style={{width: "minContent"}}>E.Phone</th>
                                                <th style={{width: "minContent"}}>E.Address</th>
                                                <th style={{width: "minContent"}}>E.Relationship</th>
                                                <th style={{width: "minContent"}}>image</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input onChange={(e)=>setDate_of_birth(e.target.value)} type='date'/>
                                                </td>
                                                <td>
                                                    <select value={selectedreligion} onChange={(e) => setSelectedReligion(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Christian">Christian</option>
                                                        <option value="Islam">Islam</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setBlood_group(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <select value={selectedmarital_status} onChange={(e) => setSelectedmarital_status(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Single">Single</option>
                                                        <option value="Married">Married</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEname(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEemail(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEphone(e.target.value)} type='number'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEaddress(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setErelationship(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={e => setImage(e.target.files[0])} filename='image' type='file' name='image' accept="image/*"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type='submit' style={{float: "right", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none"}}/>
                                                </td>
                                            </tr>
                                    </table>
                                </form>
                                <form onSubmit={pupdata}>
                                    <table id='tabl1'>   
                                            <tr>
                                                <th>Add Pupil</th>
                                            </tr>
                                            <tr>
                                                <th style={{width: "minContent"}}>Firstname</th>
                                                <th style={{width: "minContent"}}>Lastname</th>
                                                <th style={{width: "minContent"}}>Othername</th>
                                                <th style={{width: "minContent"}}>Username</th>
                                                <th style={{width: "minContent"}}>Password</th>
                                                <th style={{width: "minContent"}}>Email</th>
                                                <th style={{width: "minContent"}}>Class</th>
                                                <th style={{width: "minContent"}}>Address</th>
                                                <th style={{width: "minContent"}}>State</th>
                                                <th style={{width: "minContent"}}>LGA</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input onChange={(e)=>setFirstname1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setLastname1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setOthername1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setUsername1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setPassword1(e.target.value)} type='password'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEmail1(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <select value={selectedclass} onChange={e => setSelectedClass(e.target.value)}>
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
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setAddress1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setState1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setLga1(e.target.value)} type='text'/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{width: "minContent"}}>Gender</th>
                                                <th style={{width: "minContent"}}>D.O.B</th>
                                                <th style={{width: "minContent"}}>Religion</th>
                                                <th style={{width: "minContent"}}>Blood Group</th>
                                                <th style={{width: "minContent"}}>G.Name</th>
                                                <th style={{width: "minContent"}}>G.Email</th>
                                                <th style={{width: "minContent"}}>G.Phone</th>
                                                <th style={{width: "minContent"}}>G.Address</th>
                                                <th style={{width: "minContent"}}>G.Relationship</th>
                                                <th style={{width: "minContent"}}>Picture</th>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <select value={selectedgender1} onChange={e => setSelectedGender1(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setDate_of_birth1(e.target.value)} type='date'/>
                                                </td>
                                                <td>
                                                    <select value={selectedreligion1} onChange={e => setSelectedReligion1(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Christian">Christian</option>
                                                        <option value="Islam">Islam</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setBlood_group1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEname1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEemail1(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEphone1(e.target.value)} type='number'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEaddress1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setErelationship1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setProfile_pic(e.target.files[0])} type='file' name='profile_pic' accept="image/*"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type='submit' style={{float: "right", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none"}}/>
                                                </td>
                                            </tr>
                                    </table>
                                </form>
                            </React.Fragment>
                            : 
                            <form onSubmit={pupdata}>
                                    <table id='tabl1'>   
                                            <tr>
                                                <th>Add Pupil</th>
                                            </tr>
                                            <tr>
                                                <th style={{width: "minContent"}}>Firstname</th>
                                                <th style={{width: "minContent"}}>Lastname</th>
                                                <th style={{width: "minContent"}}>Othername</th>
                                                <th style={{width: "minContent"}}>Username</th>
                                                <th style={{width: "minContent"}}>Password</th>
                                                <th style={{width: "minContent"}}>Email</th>
                                                <th style={{width: "minContent"}}>Class</th>
                                                <th style={{width: "minContent"}}>Address</th>
                                                <th style={{width: "minContent"}}>State</th>
                                                <th style={{width: "minContent"}}>LGA</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input onChange={(e)=>setFirstname1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setLastname1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setOthername1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setUsername1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setPassword1(e.target.value)} type='password'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEmail1(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <select value={selectedclass} onChange={e => setSelectedClass(e.target.value)}>
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
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setAddress1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setState1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setLga1(e.target.value)} type='text'/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{width: "minContent"}}>Gender</th>
                                                <th style={{width: "minContent"}}>D.O.B</th>
                                                <th style={{width: "minContent"}}>Religion</th>
                                                <th style={{width: "minContent"}}>Blood Group</th>
                                                <th style={{width: "minContent"}}>G.Name</th>
                                                <th style={{width: "minContent"}}>G.Email</th>
                                                <th style={{width: "minContent"}}>G.Phone</th>
                                                <th style={{width: "minContent"}}>G.Address</th>
                                                <th style={{width: "minContent"}}>G.Relationship</th>
                                                <th style={{width: "minContent"}}>Picture</th>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <select value={selectedgender1} onChange={e => setSelectedGender1(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setDate_of_birth1(e.target.value)} type='date'/>
                                                </td>
                                                <td>
                                                    <select value={selectedreligion1} onChange={e => setSelectedReligion1(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Christian">Christian</option>
                                                        <option value="Islam">Islam</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setBlood_group1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEname1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEemail1(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEphone1(e.target.value)} type='number'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setEaddress1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setErelationship1(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input onChange={(e)=>setProfile_pic(e.target.files[0])} type='file' name='profile_pic' accept="image/*"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type='submit' style={{float: "right", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none"}}/>
                                                </td>
                                            </tr>
                                    </table>
                            </form>
                        }
                            {mdata.role == 'Admin' ?
                                <table id='table'>
                                    <tr>
                                        <th>Teacher's/Student's data</th>
                                    </tr>
                                    <tr>
                                        <th>Type</th>
                                        {selectedOption == 'Students' ?
                                            <th>Class</th>
                                        : ""
                                        }
                                    </tr>
                                    <tr>
                                        <td>
                                            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} name="manage" id="manage" style={{width: "80%"}}>
                                                <option value="Teachers">Teachers</option>
                                                <option value="Students">Students</option>
                                            </select>
                                        </td>
                                        <td>
                                            {selectedOption == 'Students' ?
                                                <select value={query} onChange={(e) => setQuery(e.target.value)} name="classname" id="classname" style={{width: "-webkit-fill-available"}}>
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
                                                </select>
                                                : ""
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <th>{selectedOption == 'Teachers' ? "class" : "phone"}</th>
                                        <th>Address</th>
                                        <th>Options</th>
                                    </tr>
                                        {selectedOption == 'Students' ?
                                            <React.Fragment>
                                                    {pdata.filter((pdat, i) => {
                                                            if (query == "") {
                                                                return ""
                                                            }
                                                            else if ((pdat.class).toLowerCase().includes(query.toLowerCase())) {
                                                                return pdat
                                                            }
                                                        })
                                                        .slice(0, 20).map((pdat, i) => (
                                                            <>
                                                                {
                                                                    <tr key={i}>
                                                                        <td>{pdat.firstname + " " +  pdat.lastname}</td>
                                                                        <td>{pdat.emergency_contact_phone}</td>
                                                                        <td>{pdat.address}</td>
                                                                        <td>
                                                                            <select id="classname" /* value={query} */ style={{width: "-webkit-fill-available"}} onChange={(e) => {window.location.href = e.target.value; localStorage.setItem('update', pdat._id)}}>
                                                                                <option value="">Options</option>
                                                                                <option value={`/student/update/${pdat._id}`}>Update</option>
                                                                                <option value={`/student/delete/${pdat._id}`}>Delete</option>
                                                                                <option value={`/student/result/${pdat._id}`}>Add Result (PDF)</option>
                                                                            </select>    
                                                                        </td>
                                                                    </tr>
                                                                }
                                                            </>
                                                        ))}
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                {staff.map((stf) => (
                                                    <tr key={stf._id}>
                                                        <td>{stf.firstname + " " + stf.lastname}</td>
                                                        <td>{stf.class1 + (stf.class2 ? ", " + stf.class2 : "") + (stf.class3 ? ", " + stf.class3 : "") + (stf.class4 ? ", " + stf.class4 : "") + (stf.class5 ? ", " + stf.class5 : "") }</td>
                                                        <td>{stf.address}</td>
                                                        <td>
                                                            <select id="classname" /* value={query} */ style={{width: "-webkit-fill-available"}} onChange={(e) => {window.location.href = e.target.value; localStorage.setItem('update2', stf._id)}}>
                                                                <option value="">Options</option>
                                                                <option value={`/staff/update/${stf._id}`}>Update</option>
                                                                <option value={`/staff/delete/${stf._id}`}>Delete</option>
                                                            </select>   
                                                        </td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        }
                                </table>:
                                <table id='table'>
                                    <tr>
                                        <th>Class</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select value={query} onChange={(e) => setQuery(e.target.value)} name="classname" id="classname" style={{width: "-webkit-fill-available"}}>
                                                    <option value=""></option>
                                                    { mdata.class1 ? <option value={mdata.class1}>{mdata.class1}</option> : undefined}
                                                    { mdata.class2 ? <option value={mdata.class2}>{mdata.class2}</option> : undefined}
                                                    { mdata.class3 ? <option value={mdata.class3}>{mdata.class3}</option> : undefined}
                                                    { mdata.class4 ? <option value={mdata.class4}>{mdata.class4}</option> : undefined}
                                                    { mdata.class5 ? <option value={mdata.class5}>{mdata.class5}</option> : undefined}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Options</th>
                                    </tr>
                                    <React.Fragment>
                                                    {pdata.filter((pdat, i) => {
                                                            if (query == "") {
                                                                return ""
                                                            }
                                                            else if ((pdat.class).toLowerCase().includes(query.toLowerCase())) {
                                                                return pdat
                                                            }
                                                        })
                                                        .slice(0, 20).map((pdat, i) => (
                                                            <>
                                                                {
                                                                    <tr key={i}>
                                                                        <td>{pdat.firstname + " " +  pdat.lastname}</td>
                                                                        <td>{pdat.emergency_contact_phone}</td>
                                                                        <td>{pdat.address}</td>
                                                                        <td>
                                                                            <select id="classname" style={{width: "-webkit-fill-available"}} onChange={(e) => {window.location.href = e.target.value; localStorage.setItem('update', pdat._id)}}>
                                                                                <option value="">Options</option>
                                                                                <option value={`/student/update/${pdat._id}`}>Update</option>
                                                                                <option value={`/student/delete/${pdat._id}`}>Delete</option>
                                                                                <option value={`/student/result/${pdat._id}`}>Add Result (PDF)</option>
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                }
                                                            </>
                                                        ))}
                                    </React.Fragment>
                                </table>
                            }
                    </div>  
                </div>
                <div className='row' id='r1'>
                    <span id='sp1'>
                        <i className="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'><b>Classes</b></div>
                    <span>
                        <i className="fa-solid fa-wrench"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='row' id='mr2'>
                    <div className='row' id='mr21'>
                        <table>
                            <tr>
                                <th id='fth'></th>
                                <th>Class</th>
                                <th>No. of Students</th>
                                <th>Class Teacher</th>
                                <th id='fth'></th>
                            </tr>
                            {mdata.role == 'Admin' ?
                                <React.Fragment>
                                    <tr>
                                        <td></td>
                                        <td>Creche Teletubbies</td>
                                        <td>{countad}</td>
                                        <td>Esther Okezie</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Pre-Nursery Teletubbies</td>
                                        <td>{countada}</td>
                                        <td>Esther Okezie</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Nursery 1 Cherry</td>
                                        <td>{countadb}</td>
                                        <td>Esther Okezie</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Nursery 2 Lavender</td>
                                        <td>{countadc}</td>
                                        <td>Lucia Anyanwu</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Nursery 3 Almonds</td>
                                        <td>{countadd}</td>
                                        <td>Lucia Anyanwu</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Grade 1 Unicorn</td>
                                        <td>{countade}</td>
                                        <td>Chiamaka Anyiam</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Grade 2 Tulip</td>
                                        <td>{countadf}</td>
                                        <td>Chiamaka Anyiam</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Grade 3 Explorer</td>
                                        <td>{countadg}</td>
                                        <td>Chiamaka Anyiam</td>
                                    </tr> 
                                    <tr>
                                        <td></td>
                                        <td>Grade 4 Comets</td>
                                        <td>{countadh}</td>
                                        <td>Chiamaka Anyiam</td>
                                    </tr> 
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    { mdata.class1 ? 
                                        <tr>
                                            <td></td>
                                            <td>{mdata.class1}</td>
                                            <td>{count}</td>
                                            <td>{mdata.firstname + " " + mdata.lastname}</td>
                                        </tr> 
                                        : undefined
                                    }
                                    { mdata.class2 ? 
                                        <tr>
                                            <td></td>
                                            <td>{mdata.class2}</td>
                                            <td>{counta}</td>
                                            <td>{mdata.firstname + " " + mdata.lastname}</td>
                                        </tr> 
                                        : undefined
                                    }
                                    { mdata.class3 ? 
                                        <tr>
                                            <td></td>
                                            <td>{mdata.class3}</td>
                                            <td>{countb}</td>
                                            <td>{mdata.firstname + " " + mdata.lastname}</td>
                                        </tr> 
                                        : undefined
                                    }
                                    { mdata.class4 ? 
                                        <tr>
                                            <td></td>
                                            <td>{mdata.class4}</td>
                                            <td>{countc}</td>
                                            <td>{mdata.firstname + " " + mdata.lastname}</td>
                                        </tr> 
                                        : undefined
                                    }
                                    { mdata.class5 ? 
                                        <tr>
                                            <td></td>
                                            <td>{mdata.class5}</td>
                                            <td>{countd}</td>
                                            <td>{mdata.firstname + " " + mdata.lastname}</td>
                                        </tr> 
                                        : undefined
                                    }
                                </React.Fragment>
                            }
                        </table>
                    </div>
                </div>
                {/* <div className='row' id='r1'>
                    <span id='sp1'>
                        <i className="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>My Subjects</div>
                    <span>
                        <i className="fa-solid fa-wrench"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div> */}
               {/*  <div className='row' id='mr2'>
                    <div className='row' id='mr21'>
                        <table>
                            <tr>
                                <th>Subject Name</th>
                                <th>Class Name</th>
                                <th id='fth'></th>
                            </tr>
                            <tr>
                                <td>CHRISTIAN RELIGIOUS STUDIES</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Creative Art / Colouring</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>DICTION</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Health Habits (Oral)</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Knowledge of the World</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Numeracy</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Literacy</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Social Habits</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ryhmes & Songs</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Practical Life</td>
                                <td>NURSERY 1 Cherry</td>
                                <td id='nn'>
                                    <button id='butt'>1st Term</button><br/>
                                    <button id='butt'>Cummulative</button>
                                </td>
                            </tr>
                        </table>
                    </div>
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default Mngstudents;