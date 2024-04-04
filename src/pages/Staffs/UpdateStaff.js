import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";
import '../../Assets/Mngstudents.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function UpdateStaff() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('user');
    const update2 = localStorage.getItem('update2');

    const { id } = useParams();

    const [mdata, setMdata] = useState([]);
    const [staff, setStaff] = useState([]);

    const [selectedgender, setSelectedGender] = useState("");
    const [selectedreligion, setSelectedReligion] = useState("");
    const [selectedmarital_status, setSelectedmarital_status] = useState("");

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

        const staffs = async () => {
            try {
                const response = await fetch('https://api.brilliantavenirschools.com/staffs/' + id, {
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
        staffs()
    }, [id, token, userid]);

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
        if(!update2) {
            navigate("/staff/login")
        }
    }, [navigate, token, update2]);

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

          await axios.put(`https://api.brilliantavenirschools.com/staffs/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': token
            },
          })
          window.location.reload();
        } catch (error) {
          console.error('Error uploading image:', error);
        }
    };

  return (
    <div className=''>
        <Helmet>
            <title>Update Staff profile</title>
        </Helmet>
        <Header/>
        <div id='main' style={{display: 'flex'}}>
            <Staffsdbar/>
            <div className='row' id='mainrow' style={{width: '100%', margin: '2%'}}>
                <div className='row' id='r1' style={{width: '100%'}}>
                    <span id='sp1'>
                        <i className="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>My Staffs Update</div>
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
                        <form onSubmit={staffdata} encType='multipart/form-data'>
                            <div style={{display: 'flex', width: '100%', alignItems: 'center', border: '1px solid black'}}>
                                <span style={{width: 'max-content', borderRight: '1px solid black', height: '50px', padding: '12px', fontWeight: 'bold'}}>Update Staff</span>
                                <span style={{fontSize: '15px', color: 'red', fontWeight: 'bold', display: 'table-cell', height: '50px', padding: '12px'}}>Please make sure you fill up datas before clicking Enter or submit, otherwise you would submit empty datas.</span>
                            </div>
                                    <table id='tabl1'>   
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
                                                    <input placeholder={staff.firstname} onChange={(e)=>setFirstname(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.lastname} onChange={(e)=>setLastname(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.othername} onChange={(e)=>setOthername(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.username} onChange={(e)=>setUsername(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.email} onChange={(e)=>setEmail(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.phone} onChange={(e)=>setPhone(e.target.value)} type='number'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.address} onChange={(e)=>setAddress(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <select value={selectedgender} onChange={(e) => setSelectedGender(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.state} onChange={(e)=>setState(e.target.value)} type='text'/>
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
                                                    <input placeholder={staff.date_of_birth} onChange={(e)=>setDate_of_birth(e.target.value)} type='date'/>
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
                                                    <input placeholder={staff.blood_group} onChange={(e)=>setBlood_group(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <select value={selectedmarital_status} onChange={(e) => setSelectedmarital_status(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Single">Single</option>
                                                        <option value="Married">Married</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.ename} onChange={(e)=>setEname(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.eemail} onChange={(e)=>setEemail(e.target.value)} type='email'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.ephone} onChange={(e)=>setEphone(e.target.value)} type='number'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.eaddress} onChange={(e)=>setEaddress(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.erelationship} onChange={(e)=>setErelationship(e.target.value)} type='text'/>
                                                </td>
                                                <td>
                                                    <input placeholder={staff.image} onChange={e => setImage(e.target.files[0])} filename='image' type='file' name='image' accept="image/*"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type='submit' style={{float: "right", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none"}}/>
                                                </td>
                                            </tr>
                                    </table>
                                </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UpdateStaff